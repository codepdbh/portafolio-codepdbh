import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import type { Category } from './data/projects';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-midnight bg-grid-pattern relative">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <ProjectGrid
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
