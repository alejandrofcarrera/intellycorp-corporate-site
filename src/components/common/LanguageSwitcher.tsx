import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    // Add more languages here if needed
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-4 py-1 rounded-full ${
            i18n.language === lang.code
              ? 'bg-secondary.dark text-accent-white'
              : 'bg-white/10 text-white hover:bg-white/20'
          } backdrop-blur-sm text-sm transition`}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}