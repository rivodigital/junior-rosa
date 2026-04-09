"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col gap-5 relative">
      <div className="w-full aspect-[16/10] bg-brand-gray rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-brand-gray" />
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
          variants={{
            hover: { scale: 1.06 },
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Result badge */}
        {project.result && (
          <div className="absolute top-4 left-4 bg-brand-black/60 backdrop-blur-xl border border-white/[0.08] px-4 py-2 rounded-full">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-white">
              {project.result}
            </span>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-bold text-brand-white">
          {project.name}
        </h3>
        <p className="text-sm font-medium text-brand-muted uppercase tracking-wider mt-1">
          {project.tags.join(" / ")}
        </p>
      </div>
    </div>
  );
}
