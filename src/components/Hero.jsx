import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-bold mb-4 text-text"
        >
          Buğra Gedikli
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-accent mb-6"
        >
          {t('hero.title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-lg mx-auto mb-8 text-gray-400"
        >
          {t('hero.description')}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          <a 
            href="https://github.com/Grabus61" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/bugragedikli/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://x.com/bugragedikli_" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <FaXTwitter />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero; 