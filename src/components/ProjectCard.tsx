import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from './icons';
import type { Project } from '../types/project';

const categoryClassMap: Record<string, string> = {
  IA: 'cat-ia',
  Web: 'cat-web',
  Flutter: 'cat-flutter',
  Juegos: 'cat-juegos',
  Herramientas: 'cat-herramientas',
  Seguridad: 'cat-seguridad',
  Educación: 'cat-educacion',
  Backend: 'cat-backend',
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  // Build the image path for Vite — uses import.meta.glob-style approach
  // Images should be placed in src/assets/projects/ as .png files
  const imageModules = import.meta.glob<{ default: string }>(
    '../assets/projects/*.png',
    { eager: true }
  );

  const imageKey = `../assets/projects/${project.image}.png`;
  const resolvedImage = imageModules[imageKey]?.default;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: Math.min(index * 0.06, 0.4), duration: 0.5 }}
      className="glass-card glow-cyan-hover group flex flex-col overflow-hidden transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-44 sm:h-48 overflow-hidden">
        {resolvedImage && !imgError ? (
          <img
            src={resolvedImage}
            alt={project.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="project-placeholder">
            <Code2 className="project-placeholder-icon w-12 h-12" />
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

        {/* Category badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {project.category.map((cat) => (
            <span
              key={cat}
              className={`category-badge ${categoryClassMap[cat] || 'cat-web'}`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-cyan-glow/15 border border-cyan-glow/25 text-cyan-glow text-[0.65rem] font-semibold uppercase tracking-wider">
            Destacado
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-cyan-glow transition-colors leading-snug">
          {project.name}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-surface text-[0.7rem] text-text-secondary font-medium border border-border"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-1 rounded-md bg-surface text-[0.7rem] text-text-muted font-medium border border-border">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Language badge */}
        {project.language && (
          <div className="flex items-center gap-1.5 mb-4 text-xs text-text-muted">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-glow/50" />
            {project.language}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-2 mt-auto">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-text-primary bg-surface border border-border rounded-xl hover:border-cyan-glow/30 hover:bg-cyan-glow/5 transition-all duration-200"
          >
            <GithubIcon className="w-4 h-4" />
            Repositorio
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-midnight bg-gradient-to-r from-cyan-glow to-blue-accent rounded-xl hover:shadow-lg hover:shadow-cyan-glow/15 transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
