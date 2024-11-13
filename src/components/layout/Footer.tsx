import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Video, Globe2 } from 'lucide-react';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-bold mb-2">
              {t('footer.about.title')} <span className="text-blue-500">Intellycorp</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl">
              {t('footer.about.description')}
            </p>
            <p className="text-gray-400 mb-4">
              {t('footer.about.subDescription')}
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Language Selector */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Language</h3>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition"
              >
                <Globe2 size={20} />
                <span>{i18n.language === 'en' ? 'English' : 'Español'}</span>
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.rrss')}</h3>
              <div className="flex space-x-4">
                {[
                  { Icon: Video, href: '#' },
                  { Icon: Instagram, href: '#' },
                  { Icon: Twitter, href: '#' },
                  { Icon: Facebook, href: '#' },
                  { Icon: Youtube, href: '#' },
                  { Icon: Linkedin, href: '#' },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">{t('footer.location.title')}</h3>
              <p className="text-gray-400">
                {t('footer.location.address')}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">{t('footer.contact.phone')}</h3>
              <a href="tel:+34915930330" className="text-gray-400 hover:text-white transition">
                +34 915 930 330
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p>© {currentYear} Intellycorp - {t('footer.rights')}</p>
            <div className="flex flex-wrap gap-6">
              {['legal', 'privacy', 'cookies', 'environmental'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="hover:text-white transition"
                >
                  {t(`footer.links.${item}`)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}