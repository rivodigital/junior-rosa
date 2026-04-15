import { Resend } from "resend";

export const runtime = "nodejs";

const DEADLINE_LABELS: Record<string, string> = {
  urgente: "O quanto antes (até 1 mês)",
  normal: "Em até 2 meses",
  flexivel: "Flexível (3+ meses)",
};

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    return Response.json(
      { error: "Servidor não configurado." },
      { status: 500 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Payload inválido." }, { status: 400 });
  }

  const type = (body.type || "").trim();
  const objective = (body.objective || "").trim();
  const deadline = (body.deadline || "").trim();
  const details = (body.details || "").trim();
  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const whatsapp = (body.whatsapp || "").trim();

  if (!type || !objective || !deadline || !name || !email || !whatsapp) {
    return Response.json(
      { error: "Campos obrigatórios ausentes." },
      { status: 400 }
    );
  }

  const deadlineLabel = DEADLINE_LABELS[deadline] || deadline;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
      <h2 style="margin: 0 0 16px; font-size: 20px;">Nova solicitação do site</h2>
      <p style="margin: 0 0 24px; color: #555; font-size: 14px;">Formulário de contato — junior-rosa</p>

      <h3 style="margin: 0 0 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; color: #888;">Contato</h3>
      <p style="margin: 0 0 4px;"><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 0 0 4px;"><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p style="margin: 0 0 20px;"><strong>WhatsApp:</strong> ${escapeHtml(whatsapp)}</p>

      <h3 style="margin: 0 0 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; color: #888;">Projeto</h3>
      <p style="margin: 0 0 4px;"><strong>Tipo:</strong> ${escapeHtml(type)}</p>
      <p style="margin: 0 0 4px;"><strong>Prazo:</strong> ${escapeHtml(deadlineLabel)}</p>
      <p style="margin: 0 0 4px;"><strong>Objetivo:</strong></p>
      <p style="margin: 0 0 16px; white-space: pre-wrap;">${escapeHtml(objective)}</p>
      ${
        details
          ? `<p style="margin: 0 0 4px;"><strong>Detalhes extras:</strong></p>
             <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(details)}</p>`
          : ""
      }
    </div>
  `;

  const text = `Nova solicitação do site

Nome: ${name}
E-mail: ${email}
WhatsApp: ${whatsapp}

Tipo: ${type}
Prazo: ${deadlineLabel}
Objetivo: ${objective}
${details ? `Detalhes: ${details}` : ""}`;

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Junior Rosa <contato@rivos.me>",
      to: [to],
      replyTo: email,
      subject: `Nova solicitação — ${name} (${type})`,
      html,
      text,
    });

    if (error) {
      return Response.json(
        { error: "Falha ao enviar o e-mail." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Falha ao enviar o e-mail." },
      { status: 502 }
    );
  }
}
