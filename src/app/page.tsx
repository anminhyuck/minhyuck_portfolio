'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Awards from '@/components/Awards';
import Activities from '@/components/Activities';
import Vision from '@/components/Vision';
import ImageGallery from '@/components/ImageGallery';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Awards />
      <Activities />
      <ImageGallery />
      <Vision />
      <Contact />
    </main>
  );
}
