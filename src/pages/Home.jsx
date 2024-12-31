import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}

export default Home; 