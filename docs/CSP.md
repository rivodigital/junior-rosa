# Content-Security-Policy — Plano de implementação

Este documento registra o plano para adicionar uma política CSP (Content-Security-Policy) robusta ao site. A implementação foi propositalmente adiada porque o site usa scripts JSON-LD inline (`dangerouslySetInnerHTML` no `layout.tsx` e no `blog/[slug]/page.tsx`) e estilos inline injetados pelo Framer Motion — ambos exigem nonce/hash para funcionar sob CSP estrito.

---

## 1. Objetivo

- Mitigar XSS, clickjacking e exfiltração de dados.
- Alcançar nota máxima em headers de segurança (securityheaders.com A+, Mozilla Observatory A+).
- Manter compatibilidade com:
  - Scripts JSON-LD inline (SEO)
  - Estilos inline gerados pelo Framer Motion
  - Next.js Image Optimization
  - Resend API (chamada server-side, não precisa CSP)

---

## 2. Diretivas propostas

```
default-src 'self';
script-src 'self' 'nonce-{NONCE}' 'strict-dynamic';
style-src 'self' 'nonce-{NONCE}' 'unsafe-hashes';
img-src 'self' data: blob: https:;
font-src 'self' data:;
connect-src 'self';
frame-ancestors 'none';
form-action 'self';
base-uri 'self';
object-src 'none';
upgrade-insecure-requests;
```

**Notas por diretiva:**

- `script-src`: `'strict-dynamic'` permite que scripts com nonce carreguem outros scripts sem precisar listar cada origem. Necessário para Next.js que injeta chunks dinamicamente.
- `style-src`: `'nonce-{NONCE}'` cobre `<style>` inline do Next.js; `'unsafe-hashes'` (ou `'unsafe-inline'` como fallback) pode ser necessário para estilos inline do Framer Motion — avaliar na fase Report-Only.
- `img-src https:`: precisa ser permissivo porque OG images externas e placeholders blur usam `data:`.
- `connect-src`: apenas mesma origem — formulário de contato é submetido para `/api/contact` (server-side), sem necessidade de listar Resend.
- `frame-ancestors 'none'`: equivalente ao header `X-Frame-Options: DENY` atual; pode substituí-lo.
- `upgrade-insecure-requests`: força HTTP → HTTPS automaticamente (safety net).

---

## 3. Arquitetura — nonce por request

CSP com nonce exige que cada response tenha um valor único. Em Next.js 16, isso se faz via **middleware**:

### 3.1 Criar `src/middleware.ts`

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}' 'unsafe-hashes';
    img-src 'self' data: blob: https:;
    font-src 'self' data:;
    connect-src 'self';
    frame-ancestors 'none';
    form-action 'self';
    base-uri 'self';
    object-src 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", cspHeader);
  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
```

### 3.2 Ler o nonce nos Server Components

No `layout.tsx` e em `blog/[slug]/page.tsx`, os `<script type="application/ld+json">` precisam receber o nonce:

```ts
import { headers } from "next/headers";

export default async function RootLayout({ children }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  return (
    <html lang="pt-BR" ...>
      <head>
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        ...
      </head>
      ...
    </html>
  );
}
```

Next.js detecta automaticamente o nonce em respostas estáticas e aplica aos chunks que ele mesmo injeta; o que precisamos garantir é só nos inline tags que nós escrevemos.

### 3.3 Remover o header redundante no `next.config.ts`

Com CSP no middleware, o `headers()` do `next.config.ts` não deve mais setar CSP (o middleware vence). Manter HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy ali. Remover `X-Frame-Options` (substituído por `frame-ancestors`).

---

## 4. Rollout em duas fases

**Fase 1 — Report-Only (1–2 semanas)**

Trocar `Content-Security-Policy` por `Content-Security-Policy-Report-Only`. Violações aparecem no console do DevTools e podem ser reportadas para um endpoint. Objetivo: descobrir todos os inlines do Framer Motion, scripts de terceiros esquecidos, etc., sem quebrar o site.

Opcionalmente, configurar `report-to` ou `report-uri` apontando para um endpoint interno (ex: `/api/csp-report`) que loga as violações.

**Fase 2 — Enforce**

Depois de zero violações por ~1 semana, remover o `-Report-Only` e ativar o CSP real.

---

## 5. Pontos de atenção conhecidos

| Risco | Mitigação |
|-------|-----------|
| Framer Motion injeta `style` inline em componentes com `motion.*` | `'unsafe-hashes'` em `style-src`, ou migrar animações críticas para CSS puro |
| JSON-LD schemas no `layout.tsx` e `blog/[slug]/page.tsx` | Passar `nonce` nos `<script>` |
| Next.js Turbopack dev mode usa inline scripts sem nonce | CSP só é aplicado em produção — em dev, middleware pode ser bypassado ou afrouxado |
| `data:` em `img-src` é necessário para blur placeholders | Já previsto na policy |
| Terceiros futuros (Google Analytics, Hotjar, etc.) | Adicionar origens específicas em `script-src` / `connect-src` quando forem integrados |

---

## 6. Checklist de execução

- [ ] Criar `src/middleware.ts` com CSP em Report-Only
- [ ] Ajustar `layout.tsx` para propagar `nonce` nos scripts JSON-LD
- [ ] Ajustar `src/app/blog/[slug]/page.tsx` idem
- [ ] Remover `X-Frame-Options` do `next.config.ts` (substituído por `frame-ancestors`)
- [ ] Deploy em produção, monitorar violações por 1 semana
- [ ] Corrigir violações residuais (provavelmente Framer Motion)
- [ ] Trocar para enforce (`Content-Security-Policy` sem `-Report-Only`)
- [ ] Verificar securityheaders.com → esperar A+
- [ ] Verificar Mozilla Observatory → esperar A+

---

## 7. Referências

- Next.js CSP docs: `node_modules/next/dist/docs/` (buscar por "csp" e "middleware")
- OWASP CSP cheat sheet: https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html
- CSP Evaluator: https://csp-evaluator.withgoogle.com/
