import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import type { Category } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';

interface ProjectGridProps {
  activeCategory: Category;
  setActiveCategory: (cat: Category) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export default function ProjectGrid({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
}: ProjectGridProps) {
  const featuredProjects = useMemo(
    () => projects.filter((p) => p.featured),
    []
  );

  const filteredProjects = useMemo(() => {
    let result = projects;

    if (activeCategory !== 'Todos') {
      result = result.filter((p) => p.category.includes(activeCategory));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q)) ||
          p.category.some((c) => c.toLowerCase().includes(q)) ||
          (p.language && p.language.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  return (
    <section id="proyectos" className="relative py-24 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Proyectos <span className="text-cyan-glow">destacados</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-glow to-blue-accent rounded-full mx-auto mb-6" />
          <p className="text-text-secondary max-w-xl mx-auto">
            Una selección de los proyectos más representativos de mi trabajo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-24">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>

        {/* All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Todos los <span className="text-cyan-glow">proyectos</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-glow to-blue-accent rounded-full mx-auto mb-6" />
        </motion.div>

        <ProjectFilters
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          projectCount={filteredProjects.length}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-text-muted text-lg">
              No se encontraron proyectos con esos criterios.
            </p>
            <button
              onClick={() => {
                setActiveCategory('Todos');
                setSearchQuery('');
              }}
              className="mt-4 text-cyan-glow hover:underline text-sm"
            >
              Limpiar filtros
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
