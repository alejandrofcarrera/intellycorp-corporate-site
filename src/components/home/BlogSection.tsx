import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 'virtualProduction',
    image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80',
    slug: 'virtual-production-future'
  },
  {
    id: 'aiInnovation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    slug: 'ai-innovation-creative-industries'
  },
  {
    id: 'sustainableProduction',
    image: 'https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?auto=format&fit=crop&q=80',
    slug: 'sustainable-production-methods'
  }
];

export default function BlogSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-blue-400">
                    {t(`blog.posts.${post.id}.category`)}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-400">
                    <Clock size={14} />
                    {t(`blog.posts.${post.id}.readTime`)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {t(`blog.posts.${post.id}.title`)}
                </h3>
                <p className="text-gray-400 mb-6">
                  {t(`blog.posts.${post.id}.description`)}
                </p>
                <div className="flex items-center text-blue-400 font-medium">
                  {t('blog.readMore')}
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}