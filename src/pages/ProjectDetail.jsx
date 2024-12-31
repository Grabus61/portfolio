import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../components/Projects';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaGithub, FaGooglePlay, FaApple, FaSteam } from 'react-icons/fa';
import { SiItchdotio } from 'react-icons/si';

function ProjectDetail() {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  const handleBack = () => {
    navigate('/', { replace: true, state: { scrollToProjects: true } });
  };

  if (!project) {
    return <div className="text-center py-20">Proje bulunamadı</div>;
  }

  const hasLinks = Object.values(project.links).some(link => link !== null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.button
          onClick={handleBack}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 mb-6 text-gray-400 hover:text-accent transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>{t('navigation.backToProjects')}</span>
        </motion.button>

        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />
        
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        
        <p className="text-gray-300 mb-12 text-lg leading-relaxed">
          {project.description[i18n.language] || project.description.en}
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('project.technologies')}</h2>
          <div className="flex gap-2 flex-wrap">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="bg-secondary px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('project.features')}</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.features[i18n.language].map((feature, index) => (
              <li key={index} className="text-gray-300">{feature}</li>
            ))}
          </ul>
        </div>

        {hasLinks && (
          <div className="flex flex-wrap gap-4">
            {project.links.playStore && (
              <a 
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#00875f] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <FaGooglePlay />
                <span>Google Play</span>
              </a>
            )}
            {project.links.appStore && (
              <a 
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0066CC] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <FaApple />
                <span>App Store</span>
              </a>
            )}
            {project.links.steam && (
              <a 
                href={project.links.steam}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#171a21] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <FaSteam />
                <span>Steam</span>
              </a>
            )}
            {project.links.itch && (
              <a 
                href={project.links.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#fa5c5c] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <SiItchdotio />
                <span>Itch.io</span>
              </a>
            )}
            {project.links.demo && (
              <a 
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-accent text-primary px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Demo
              </a>
            )}
            {project.links.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-secondary px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectDetail; 