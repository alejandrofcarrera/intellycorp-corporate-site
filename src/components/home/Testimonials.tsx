import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "By combining the benefits of LangSmith and standing on the shoulders of a gigantic open-source community, we're able to identify the right approaches of using LLMs in an enterprise-setting faster.",
    author: "Yusuke Kaji",
    position: "General Manager of AI",
    company: "Rakuten",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    id: 2,
    text: "Working with LangChain and LangSmith on the Elastic AI Assistant had a significant positive impact on the overall pace and quality of the development and shipping experience. We couldn't have achieved the product experience delivered to our customers without LangChain, and we couldn't have done it at the same pace without LangSmith.",
    author: "James Spiteri",
    position: "Director of Security Products",
    company: "Elastic",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    id: 3,
    text: "As soon as we heard about LangSmith, we moved our entire development stack onto it. We could have built evaluation, testing and monitoring tools in house, but with LangSmith it took us 10x less time to get a 1000x better tool.",
    author: "Jose Peña",
    position: "Senior Manager",
    company: "Fintual",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120"
  }
];

export default function Testimonials() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#1A1A1A] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Decorative Lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-[500px] max-w-4xl">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                <path
                  d="M0,250 C250,100 750,400 1000,250"
                  className="stroke-blue-500/20"
                  fill="none"
                  strokeWidth="1"
                />
                <path
                  d="M0,250 C250,400 750,100 1000,250"
                  className="stroke-purple-500/20"
                  fill="none"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>

          {/* Testimonials Slider */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-semibold">{testimonial.author}</h3>
                          <p className="text-gray-400">{testimonial.position}</p>
                          <p className="text-blue-400">{testimonial.company}</p>
                        </div>
                      </div>
                      <blockquote className="text-xl text-gray-300 leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}