import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function TextShowcase() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 'slide1',
      image: 'https://images.unsplash.com/photo-1633355444132-695d5876cd00?auto=format&fit=crop&q=80',
    },
    {
      id: 'slide2',
      image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80',
    },
    {
      id: 'slide3',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/60" />
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl space-y-6">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-1000 ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8 absolute'
                }`}
              >
                <div className="bg-black/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl">
                  <p className="text-xl md:text-2xl font-light mb-4">
                    {t(`showcase.${slide.id}.topText`)}
                  </p>
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
                    {t(`showcase.${slide.id}.middleText`)}
                  </h2>
                  <p className="text-xl md:text-2xl font-light">
                    {t(`showcase.${slide.id}.bottomText`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}