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
      tr: "Unity ile geliştirilen 2D puzzle oyununda, oyuncular ikiz karakterleri kontrol ederek zorlu bulmacaları çözüyor. Oyunun geliştirme sürecine sonradan dahil oldum, projenin güncellenmesinde çalıştım. Seviye tasarımını ve zorluk dengesini optimize ederek oyuncular için akıcı bir deneyim oluşturdum. Güncellemenin mobil ve PC platformlarında yayınlanması için gerekli iyileştirmeleri ve gereklilikleri geliştirdim.",
      en: "In a 2D puzzle game developed with Unity, players control twin characters to solve challenging puzzles. I joined the development process later and worked on updating the project. I optimized level design and difficulty balancing to create a smooth and engaging experience for players. I also implemented the necessary improvements and requirements to successfully publish the update on both mobile and PC platforms."
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
      playStore: "https://play.google.com/store/apps/details?id=com.moralabs.twins&hl=tr",
      appStore: "https://apps.apple.com/tr/app/twins-dreams/id1664344671",
      steam: "https://store.steampowered.com/app/3403150/Twins__Dreams/",
      itch: null,
      demo: null,
      github: null
    }
  },
  {
    id: 2,
    title: "Miss Katy: Royal Detective",
    image: "/portfolio/images/projects/katy-image.png",
    description: {
      tr: "Miss Katy: Royal Detective, gizli obje bulma temalı bir bulmaca oyunu. Oyunun pazarlanması için bir oynanabilir reklam geliştirdim. Oyunun içinde olmayan ama oyunu yansıtan bir kesiti sıfırdan Cococ Creator kullanarak oyunlaştırarak facebook ads ile yayınlanmaya uygun bir oynanabilir reklam oluşturdum.",
      en: "Miss Katy: Royal Detective is a hidden object puzzle game. I developed a playable ad for marketing purposes. Using Cococ Creator, I designed and gamified a short interactive experience from scratch that reflects the core theme of the game, even though it doesn't exist within the actual gameplay. The ad was tailored to meet the requirements for Facebook Ads and was fully optimized for publishing."
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
      playStore: "https://play.google.com/store/apps/details?id=com.moralabs.katy&hl=tr",
      appStore: "https://apps.apple.com/tr/app/detective-katy-hidden-objects/id1645253707",
      steam: null,
      itch: null,
      demo: null,
      github: null
    }
  },
  {
    id: 3,
    title: "Grid 3",
    image: "/portfolio/images/projects/grid3-image.png",
    description: {
      tr: "Grid 3, Grid 16 oyunun basit bir kopyasıdır. Bu oyunda, oyuncu birçok oyun arasında hızlıca geçiş yaparak maksimum puan elde etmeye çalışır. Oyunu, merak ettiğim için Unity ile birkaç günde geliştirdim. Oyunun temel mekaniğini öğrenmek adına güzel bir proje olduğunu düşünüyorum.",
      en: "Grid 3 is a simple clone of the game Grid 16. In this game, the player rapidly switches between multiple mini-games, trying to achieve the highest possible score. I developed it in a few days using Unity, mainly out of curiosity. I consider it a great project for understanding and learning the core mechanics behind the original game."
    },
    technologies: ["Unity", "C#", "PC"],
    features: {
      tr: [
        "Hızlı oyun geçişleri",
        "Çeşitli mini oyunlar",
        "Sürekli hızlanan oyun",
        "Oyun geçişlerinde zorluk artışı"
      ],
      en: [
        "Fast-paced game switching",
        "Variety of mini-games",
        "Continuously increasing speed",
        "Rising difficulty with each game switch"
      ]
    },
    links: {
      playStore: null,
      appStore: null,
      steam: null,
      itch: "https://grabus.itch.io/grid3",
      demo: null,
      github: "https://github.com/Grabus61/grid-game"
    }
  },
  {
    id: 4,
    title: "Amorf Evolution",
    image: "/portfolio/images/projects/amorf-image.png",
    description: {
      tr: "Amorf Evolution, üniversite oyun geliştirme topluluğunun düzenlediği 48 saatlik game jam etkinliğinde geliştirdiğimiz bir oyundur. Proje ile game jamde 2. olduk. Önemli bir deneyim ve hızlı oyun geliştirme becerilerimi geliştirmeme yardımcı oldu. Karakterimiz insanlık tarafından, evrimleşen su yaratıklarının olduğu bir gezegene evrimi durdurmak için gönderilmiş bir savaş robotu. Karşısına çıkan ve çok da akıllı olmayan su canlılarıyla savaşıp, en sonunda kendi istediğini mi yoksa insanlığın ondan talep ettiklerini mi gerçekleştirecek?",
      en: "Amorf Evolution is a game we developed during a 48-hour game jam organized by our university's game development community. The project earned us 2nd place in the jam. It was a valuable experience that helped me improve my rapid game development skills. In the game, the player controls a combat robot sent by humanity to a planet inhabited by evolving aquatic creatures. The robot's mission is to stop the course of evolution. As it battles the not-so-intelligent water beings standing in its way, it faces a critical choice: will it fulfill its own will, or carry out the orders given by humanity?"
    },
    technologies: ["Unity", "C#", "PC", "Mixamo Animations", "3D", "FPS"],
    features: {
      tr: [
        "FPS kontrolleri",
        "Ufak hikaye anlatımı",
        "Ateş etme mekaniği",
        "Finalde seçime bağlı son"
      ],
      en: [
        "FPS controls",
        "Brief storytelling",
        "Shooting mechanic",
        "Choice-based ending"
      ]
    },
    links: {
      playStore: null,
      appStore: null,
      steam: null,
      itch: "https://grabus.itch.io/amorf-evolution",
      demo: null,
      github: null
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