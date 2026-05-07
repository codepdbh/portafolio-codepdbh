import { motion } from 'framer-motion';
import { Code2, Brain, Smartphone, Globe } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack',
    description: 'Aplicaciones web completas con React, Node.js, PHP y bases de datos.',
  },
  {
    icon: Brain,
    title: 'Inteligencia Artificial',
    description: 'Procesamiento de lenguaje, audio y modelos para soluciones inteligentes.',
  },
  {
    icon: Smartphone,
    title: 'Desarrollo Móvil',
    description: 'Apps multiplataforma con Flutter y Dart, desde concepto hasta producción.',
  },
  {
    icon: Globe,
    title: 'Sistemas Web',
    description: 'Interfaces modernas, APIs, integración de servicios y despliegue.',
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Sobre <span className="text-cyan-glow">mí</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-glow to-blue-accent rounded-full mx-auto mb-6" />
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
            Soy Ingeniero de Sistemas con experiencia en desarrollo full stack,
            inteligencia artificial y aplicaciones móviles. Me apasiona crear herramientas
            que resuelvan problemas reales, combinando código limpio con diseño funcional.
            Trabajo con <span className="text-text-primary font-medium">Python, JavaScript, TypeScript, Flutter, PHP</span> y
            tecnologías de IA, siempre buscando aprender y construir algo mejor.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-6 glow-cyan-hover transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-glow/10 border border-cyan-glow/20 flex items-center justify-center mb-4 group-hover:border-cyan-glow/35 transition-colors">
                <item.icon className="w-5 h-5 text-cyan-glow" />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
