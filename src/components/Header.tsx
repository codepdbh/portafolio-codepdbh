import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { GithubIcon } from './icons';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-midnight/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-glow/20 to-blue-accent/20 border border-cyan-glow/30 flex items-center justify-center group-hover:border-cyan-glow/50 transition-colors">
              <Terminal className="w-4 h-4 text-cyan-glow" />
            </div>
            <span className="font-semibold text-text-primary tracking-tight hidden sm:block">
              <span className="text-cyan-glow">code</span>pdbh
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-text-secondary hover:text-cyan-glow transition-colors rounded-lg hover:bg-cyan-glow/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/codepdbh"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 text-sm text-text-primary bg-cyan-glow/10 border border-cyan-glow/20 rounded-lg hover:bg-cyan-glow/15 hover:border-cyan-glow/30 transition-all flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-cyan-glow transition-colors"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-deep/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-text-secondary hover:text-cyan-glow hover:bg-cyan-glow/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/codepdbh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm text-cyan-glow"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
