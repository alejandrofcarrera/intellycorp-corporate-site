import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 'phygital',
    image: 'https://images.unsplash.com/photo-1535406208535-1429839cfd13?auto=format&fit=crop&q=80',
    titleKey: 'carousel.phygital.title',
    subtitleKey: 'carousel.phygital.subtitle',
    descriptionKey: 'carousel.phygital.description',
  },
  {
    id: 'virtual',
    image: 'https://images.unsplash.com/photo-1614812513172-567d2fe96a75?auto=format&fit=crop&q=80',
    titleKey: 'carousel.virtual.title',
    subtitleKey: 'carousel.virtual.subtitle',
    descriptionKey: 'carousel.virtual.description',
  },
  {
    id: 'realtime',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80',
    titleKey: 'carousel.realtime.title',
    subtitleKey: 'carousel.realtime.subtitle',
    descriptionKey: 'carousel.realtime.description',
  },
];

export default function Carousel() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/50" />
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Fixed Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-lg mb-2 text-blue-400 font-medium">
              {t(slides[currentSlide].subtitleKey)}
            </p>
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              {t(slides[currentSlide].titleKey)}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t(slides[currentSlide].descriptionKey)}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}