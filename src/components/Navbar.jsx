import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Dil değişikliklerini takip et
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng); // Dil tercihini kaydet
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-2xl font-bold text-text hover:text-accent transition-colors tracking-wider"
          >
            BG
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => changeLanguage('tr')}
              className={`px-2 py-1 rounded transition-colors duration-300 ${
                currentLang.startsWith('tr')
                  ? 'bg-accent text-primary font-medium'
                  : 'text-gray-400 hover:text-accent'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-2 py-1 rounded transition-colors duration-300 ${
                currentLang.startsWith('en')
                  ? 'bg-accent text-primary font-medium'
                  : 'text-gray-400 hover:text-accent'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 