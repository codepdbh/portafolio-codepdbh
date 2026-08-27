import { motion } from 'framer-motion';
import { ArrowDown, Braces, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { projects } from '../data/projects';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-soft/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-glow/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-glow/8 border border-cyan-glow/15 text-cyan-glow text-xs font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse" />
              Disponible para proyectos
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
              <span className="text-text-primary">Paulo Daniel</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-glow via-blue-accent to-violet-soft bg-clip-text text-transparent">
                Batuani Hurtado
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary font-medium mb-3 font-mono">
              Ingeniero de Sistemas{' '}
              <span className="text-cyan-glow/60">|</span>{' '}
              Full Stack Developer{' '}
              <span className="text-cyan-glow/60">|</span>{' '}
              AI Enthusiast
            </p>

            <p className="text-base text-text-muted leading-relaxed mb-8 max-w-lg">
              Desarrollo soluciones digitales robustas que generan impacto: plataformas web y móviles,
              inteligencia artificial aplicada y sistemas GIS para organizaciones y personas.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-glow to-blue-accent text-midnight font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-cyan-glow/20 transition-all duration-300 hover:scale-[1.02]"
              >
                Ver proyectos
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/codepdbh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-primary font-medium text-sm rounded-xl hover:border-cyan-glow/30 hover:bg-cyan-glow/5 transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/codepdbh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-primary font-medium text-sm rounded-xl hover:border-blue-accent/30 hover:bg-blue-accent/5 transition-all duration-300"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
              <a href={`${import.meta.env.BASE_URL}CV_Paulo_Daniel_Batuani_Hurtado_2026.pdf`} download className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-glow/30 text-cyan-glow font-medium text-sm rounded-xl hover:bg-cyan-glow/10 transition-all duration-300">Descargar CV</a>
            </div>
          </motion.div>

          {/* Right: Code Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <div className="glass-card p-6 glow-cyan relative">
              {/* Window controls */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-text-muted font-mono">portfolio.ts</span>
              </div>

              {/* Code block */}
              <pre className="text-sm font-mono leading-relaxed overflow-hidden">
                <code>
                  <Line num={1}>
                    <Kw>const</Kw> <Var>developer</Var> <Op>=</Op> {'{'}
                  </Line>
                  <Line num={2}>
                    {'  '}<Prop>name</Prop>: <Str>"Paulo D. Batuani Hurtado"</Str>,
                  </Line>
                  <Line num={3}>
                    {'  '}<Prop>role</Prop>: <Str>"Systems Engineer"</Str>,
                  </Line>
                  <Line num={4}>
                    {'  '}<Prop>focus</Prop>: [
                  </Line>
                  <Line num={5}>
                    {'    '}<Str>"Full Stack"</Str>, <Str>"AI"</Str>, <Str>"Mobile"</Str>
                  </Line>
                  <Line num={6}>
                    {'  '}],
                  </Line>
                  <Line num={7}>
                    {'  '}<Prop>stack</Prop>: [
                  </Line>
                  <Line num={8}>
                    {'    '}<Str>"React"</Str>, <Str>"Flutter"</Str>,
                  </Line>
                  <Line num={9}>
                    {'    '}<Str>"Python"</Str>, <Str>"TypeScript"</Str>
                  </Line>
                  <Line num={10}>
                    {'  '}],
                  </Line>
                  <Line num={11}>
                    {'  '}<Prop>projects</Prop>: <Num>{projects.length}</Num>,
                  </Line>
                  <Line num={12}>
                    {'  '}<Prop>passion</Prop>: <Str>"Building things"</Str>
                  </Line>
                  <Line num={13}>
                    {'}'};
                  </Line>
                </code>
              </pre>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-cyan-glow/15 to-blue-accent/15 border border-cyan-glow/25 rounded-full text-cyan-glow text-xs font-medium"
              >
                <Braces className="w-3 h-3" />
                {projects.length} repos
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#sobre-mi"
            className="flex flex-col items-center gap-2 text-text-muted hover:text-cyan-glow transition-colors"
          >
            <span className="text-xs">Explorar</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* Syntax highlighting helper components */
function Line({ num, children }: { num: number; children: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="w-8 text-right mr-4 text-text-muted/40 select-none text-xs leading-6">
        {num}
      </span>
      <span className="leading-6">{children}</span>
    </div>
  );
}

function Kw({ children }: { children: React.ReactNode }) {
  return <span className="text-violet-soft">{children}</span>;
}

function Var({ children }: { children: React.ReactNode }) {
  return <span className="text-cyan-glow">{children}</span>;
}

function Prop({ children }: { children: React.ReactNode }) {
  return <span className="text-blue-accent">{children}</span>;
}

function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-emerald-400">{children}</span>;
}

function Num({ children }: { children: React.ReactNode }) {
  return <span className="text-amber-400">{children}</span>;
}

function Op({ children }: { children: React.ReactNode }) {
  return <span className="text-text-muted">{children}</span>;
}
