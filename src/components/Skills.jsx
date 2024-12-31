import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const skills = [
  {
    category: {
      tr: "Programlama Dilleri",
      en: "Languages"
    },
    items: ["C#", "Java", "JavaScript", "HTML", "CSS"]
  },
  {
    category: {
      tr: "Platformlar ve Frameworkler",
      en: "Platforms & Frameworks"
    },
    items: ["Unity", "Cocos Creator", "React"]
  },
  {
    category: {
      tr: "Araçlar",
      en: "Tools"
    },
    items: ["Git & GitHub", "Trello", "Photoshop", "Premiere Pro", "Aseprite"]
  },
  {
    category: {
      tr: "Alanlar",
      en: "Fields"
    },
    items: ["Game Development", "Scripting", "Gameplay Mechanics", "Playable Ads", "Testing"]
  }
];

function Skills() {
  const { t, i18n } = useTranslation();

  return (
    <section className="py-20 px-4" id="skills">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-16 text-center text-text"
      >
        {t('sections.skills')}
      </motion.h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category[i18n.language]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-accent text-center">
                {skillGroup.category[i18n.language]}
              </h3>
              <div className="flex flex-col gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="text-center"
                  >
                    <span className="text-gray-300 hover:text-accent transition-colors duration-200">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills; 