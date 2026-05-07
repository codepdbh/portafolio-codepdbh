import { Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './icons';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/codepdbh',
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/codepdbh',
    icon: LinkedinIcon,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@codepdbh',
    icon: YoutubeIcon,
  },
];

export default function Footer() {
  return (
    <footer id="contacto" className="relative border-t border-border bg-deep/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center">
          {/* Name */}
          <h3 className="text-xl font-bold text-text-primary mb-2">
            Paulo Daniel <span className="text-cyan-glow">Batuani Hurtado</span>
          </h3>
          <p className="text-sm text-text-muted font-mono mb-6">
            Systems Engineer · Full Stack Developer · AI Enthusiast
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-cyan-glow hover:border-cyan-glow/30 hover:bg-cyan-glow/5 transition-all duration-200"
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-border mb-6" />

          {/* Credits */}
          <p className="text-xs text-text-muted flex items-center gap-1.5">
            Diseñado y desarrollado con{' '}
            <Heart className="w-3 h-3 text-red-400/70 fill-red-400/70" /> por
            Paulo Daniel Batuani Hurtado
          </p>
          <p className="text-xs text-text-muted/50 mt-2">
            © {new Date().getFullYear()} — Todos los derechos reservados
          </p>
        </div>
      </div>

      {/* Back to top */}
      <a
        href="#inicio"
        aria-label="Volver arriba"
        className="fixed bottom-6 right-6 w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-cyan-glow hover:border-cyan-glow/30 transition-all duration-200 shadow-lg shadow-black/30 z-40"
      >
        <ArrowUp className="w-4 h-4" />
      </a>
    </footer>
  );
}
