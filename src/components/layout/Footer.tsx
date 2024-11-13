import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <footer className="bg-main text-pearl py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Column */}
          <div>
            <h2 className="text-2xl text-highlight font-bold mb-2">
              {t('footer.about.title')} Intellycorp
            </h2>
            <p className="text-pearl mb-8 max-w-xl">
              {t('footer.about.description')}
            </p>
            <p className="text-pearl mb-4">
              {t('footer.about.subDescription')}
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-8">

            {/* Language Selector */}
            <div>
              <h3 className="text-lg text-highlight font-semibold mb-4">{t('footer.language')}</h3>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-pearl hover:text-hover transition"
              >
                <img src="/icons/language.svg" alt={t('footer.language')} width={20} height={20} />
                <span>{i18n.language === 'en' ? 'English' : 'Español'}</span>
              </button>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg text-highlight font-semibold mb-4">{t('footer.rrss')}</h3>
              <div className="flex space-x-4">
                <a
                  href={'#'}
                  className="w-10 h-10 rounded-full bg-pearl flex items-center justify-center hover:bg-hover transition"
                >
                  <img src="/icons/x.svg" alt="X" width={16} height={16} />
                </a>
                <a
                  href={'#'}
                  className="w-10 h-10 rounded-full bg-pearl flex items-center justify-center hover:bg-hover transition"
                >
                  <img src="/icons/instagram.svg" alt="Instagram" width={16} height={16} />
                </a>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-lg text-highlight font-semibold mb-4">{t('footer.location.title')}</h3>
              <p className="text-pearl">C/ SENECA 80. 28341 VALDEMORO (MADRID)</p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-lg text-highlight font-semibold mb-4">{t('footer.contact.phone')}</h3>
              <a href="tel:+34915930330" className="text-pearl hover:text-hover transition">+34 691 747 075</a>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-16 pt-8 border-t border-pearl.dark text-sm text-pearl">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p>© {currentYear} Intellycorp - {t('footer.rights')}</p>
            <div className="flex flex-wrap gap-6">
              {['legal', 'privacy', 'cookies', 'environmental'].map((item) => (
                <a
                  key={item}
                  href={`/${item}`}
                  className="text-pearl hover:text-hover transition"
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