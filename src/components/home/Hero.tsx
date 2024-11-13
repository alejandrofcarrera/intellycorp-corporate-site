import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[90%] lg:max-w-7xl mx-auto px-4">
        <div className="bg-black/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            {t('hero.title')}
            <span className="block text-blue-500 mt-4">{t('hero.subtitle')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition text-lg font-medium">
              <Play size={24} />
              {t('hero.cta.showreel')}
            </button>
            <button className="flex items-center gap-3 bg-blue-600 px-8 py-4 rounded-full hover:bg-blue-700 transition text-lg font-medium">
              {t('hero.cta.startProject')}
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}