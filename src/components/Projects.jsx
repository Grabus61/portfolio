import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: "Twins And Dreams",
    image: "/portfolio/images/projects/twins-image.jpg",
    description: {
      tr: "Unity ile geliştirdiğim 2D puzzle-platform oyununda, oyuncular ikiz karakterleri kontrol ederek zorlu bulmacaları çözüyor. Oyun mekaniğini ve karakter kontrollerini sıfırdan geliştirdim, düşman AI sistemini tasarladım ve kodladım. Seviye tasarımını ve zorluk dengesini optimize ederek oyuncular için akıcı bir deneyim oluşturdum. Performans optimizasyonları yaparak mobil cihazlarda sorunsuz çalışmasını sağladım.",
      en: "In this 2D puzzle-platform game developed with Unity, players control twin characters to solve challenging puzzles. I developed the game mechanics and character controls from scratch, designed and coded the enemy AI system. I optimized the level design and difficulty balance to create a smooth experience for players. I also made performance optimizations to ensure smooth operation on mobile devices."
    },
    technologies: ["Unity", "C#", "Mobile"],
    features: {
      tr: [
        "Akıcı karakter kontrolü",
        "Çeşitli düşmanlar",
        "Seviye sistemi",
        "Puan sistemi"
      ],
      en: [
        "Smooth character controls",
        "Various enemies",
        "Level system",
        "Score system"
      ]
    },
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.example",
      appStore: "https://apps.apple.com/app/id123456789",
      steam: null,
      itch: "https://example.itch.io/game",
      demo: null,
      github: null
    }
  },
  {
    id: 2,
    title: "Miss Katy: Royal Detective",
    image: "/portfolio/images/projects/katy-image.png",
    description: {
      tr: "Miss Katy: Royal Detective, gizli obje bulma temalı bir bulmaca oyunu. Oyunun temel mekaniklerini geliştirdim ve obje tanıma sistemini tasarladım. UI/UX tasarımını ve implementasyonunu yaparak kullanıcı dostu bir arayüz oluşturdum. Başarı ve görev sistemlerini kodlayarak oyuncuların motivasyonunu artıracak özellikler ekledim. Oyunun optimizasyonunu yaparak geniş bir cihaz yelpazesinde çalışmasını sağladım.",
      en: "Miss Katy: Royal Detective is a hidden object puzzle game. I developed the core game mechanics and designed the object recognition system. I created a user-friendly interface by designing and implementing the UI/UX. I added features to increase player motivation by coding achievement and quest systems. I optimized the game to work on a wide range of devices."
    },
    technologies: ["Cocos Creator", "Playable Ads", "Typescript", "Mobile"],
    features: {
      tr: [
        "Kolay öğrenme",
        "Zorlu bulmacalar",
        "Başarı sistemi",
        "Günlük görevler"
      ],
      en: [
        "Easy to learn",
        "Challenging puzzles",
        "Achievement system",
        "Daily missions"
      ]
    },
    links: {
      playStore: null,
      appStore: null,
      steam: null,
      itch: null,
      demo: "https://demo.com",
      github: "https://github.com"
    }
  }
];

export { projects };

function Projects() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToProjects && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'instant' });
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleProjectClick = (projectId) => {
    window.scrollTo(0, 0);
    navigate(`/project/${projectId}`);
  };

  return (
    <section ref={sectionRef} className="py-20 px-4" id="projects">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center text-text"
      >
        {t('sections.projects')}
      </motion.h2>
      <div className="max-w-4xl mx-auto grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-secondary rounded-xl overflow-hidden shadow-xl cursor-pointer"
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-text">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">
                {project.description[i18n.language] || project.description.en}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="text-xs px-3 py-1 bg-primary rounded-full text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 