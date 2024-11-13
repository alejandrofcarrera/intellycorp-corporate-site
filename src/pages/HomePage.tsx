import React from 'react';
import Hero from '../components/home/Hero';
import Clients from '../components/home/Clients';
import Carousel from '../components/home/Carousel';
import Testimonials from '../components/home/Testimonials';
import TextShowcase from '../components/home/TextShowcase';
import BlogSection from '../components/home/BlogSection';
import ContactForm from '../components/home/ContactForm';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Clients />
      <Carousel />
      <Testimonials />
      <TextShowcase />
      <BlogSection />
      <ContactForm />
    </main>
  );
}