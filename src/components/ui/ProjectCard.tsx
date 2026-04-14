"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import Image from "next/image";
import { ProjectGallery } from "./ProjectGallery";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col gap-5 relative">
      {project.gallery ? (
        <ProjectGallery images={project.gallery}/>
      ) : (
        <div className="w-full aspect-[16/10] bg-brand-gray rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-brand-gray" />
          <motion.div
            className="absolute inset-0 w-full h-full"
            variants={{
              hover: { scale: 1.06 },
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      )}

      {/* Result badge - outside the image */}
      {project.result && (
        <div className="inline-flex self-start bg-brand-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-white">
            {project.result}
          </span>
        </div>
      )}

      <div>
        {project.category && (
          <p className="text-[11px] sm:text-xs text-brand-muted uppercase tracking-wider mb-1">
            {project.category}
          </p>
        )}
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
