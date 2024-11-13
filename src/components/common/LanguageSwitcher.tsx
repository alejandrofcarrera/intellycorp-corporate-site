import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-24 z-50 px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm transition"
    >
      {i18n.language.toUpperCase()}
    </button>
  );
}