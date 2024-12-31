import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const { t } = useTranslation();
  const email = "bugragedikli024@gmail.com"; // Kendi email adresinizi buraya yazın

  const handleEmailClick = () => {
    // Gmail compose sayfasına yönlendir
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(t('contact.emailSubject'))}`;
    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-4" id="contact">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center text-text"
      >
        {t('sections.contact')}
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-xl p-8"
        >
          <div className="text-center space-y-6">
            <h3 className="text-xl font-semibold text-accent mb-4">
              {t('contact.getInTouch')}
            </h3>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <FaEnvelope className="text-accent text-xl" />
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {email}
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <FaMapMarkerAlt className="text-accent text-xl" />
              <span>Ankara, Türkiye</span>
            </div>
            <motion.button
              onClick={handleEmailClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 px-8 py-3 bg-accent text-primary font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              {t('contact.sendEmail')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact; 