import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { categories } from '../data/projects';
import type { Category } from '../data/projects';

interface ProjectFiltersProps {
  activeCategory: Category;
  setActiveCategory: (cat: Category) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  projectCount: number;
}

export default function ProjectFilters({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  projectCount,
}: ProjectFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        <input
          id="project-search"
          type="text"
          placeholder="Buscar proyecto o tecnología..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-surface border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan-glow/40 focus:ring-1 focus:ring-cyan-glow/20 transition-all"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm rounded-xl font-medium transition-all duration-200 border ${
              activeCategory === cat
                ? 'bg-cyan-glow/15 border-cyan-glow/30 text-cyan-glow shadow-sm shadow-cyan-glow/10'
                : 'bg-surface/50 border-border text-text-secondary hover:border-border-hover hover:text-text-primary'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Count */}
      <p className="text-center text-sm text-text-muted">
        {projectCount} proyecto{projectCount !== 1 ? 's' : ''} encontrado{projectCount !== 1 ? 's' : ''}
      </p>
    </div>
  );
}
