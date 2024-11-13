import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const blogData = {
  'virtual-production-future': {
    category: 'Technology',
    readTime: '5 min read',
    title: 'The Future of Virtual Production',
    description: 'Explore how real-time rendering is revolutionizing film and television production',
    image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80',
    content: {
      intro: "Virtual production is revolutionizing the way we create content. By combining real-time 3D rendering with traditional filming techniques, we're able to create immersive worlds that were previously impossible or prohibitively expensive to achieve.",
      sections: [
        {
          title: 'The Power of Real-Time Rendering',
          content: 'One of the most significant advantages of virtual production is the ability to see final or near-final quality imagery in real-time on set. This allows directors, cinematographers, and actors to make creative decisions with immediate feedback.'
        },
        {
          title: 'Key Benefits',
          list: [
            'Reduced post-production time and costs',
            'Immediate creative feedback',
            'Enhanced creative freedom',
            'Improved actor performance with visual context',
            'More sustainable production methods'
          ]
        },
        {
          title: 'Looking Ahead',
          content: 'As technology continues to evolve, we can expect to see even more innovative applications of virtual production. From independent films to major blockbusters, these tools are becoming increasingly accessible and sophisticated.'
        },
        {
          title: 'The Future is Now',
          content: "Virtual production is not just a trend; it's a fundamental shift in how we approach content creation. As these tools become more accessible and powerful, we'll continue to see new and innovative ways to tell stories and create engaging content."
        }
      ],
      images: {
        secondary: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80'
      }
    }
  }
};

export default function BlogPage() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const post = blogData[slug as keyof typeof blogData];

  if (!post) {
    return (
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-blue-400">{post.category}</span>
            <span className="flex items-center gap-1 text-gray-400">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-gray-400">
            {post.description}
          </p>
        </header>

        {/* Featured Image */}
        <div className="aspect-video rounded-2xl overflow-hidden mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p>{post.content.intro}</p>

          {post.content.sections.map((section, index) => (
            <React.Fragment key={index}>
              <h2>{section.title}</h2>
              {section.content && <p>{section.content}</p>}
              {section.list && (
                <ul>
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {index === 2 && (
                <div className="aspect-video rounded-2xl overflow-hidden my-8">
                  <img
                    src={post.content.images.secondary}
                    alt="Virtual Production Setup"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </article>
  );
}