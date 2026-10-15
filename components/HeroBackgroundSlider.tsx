'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface HeroImageOption {
  id: number;
  name: string;
  url: string;
  alt: string;
}

export const HERO_IMAGES: HeroImageOption[] = [
  {
    id: 1,
    name: 'Tech Team Collaboration',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=85',
    alt: 'Kpro Solutions engineering team collaborating with laptops in modern office',
  },
  {
    id: 2,
    name: 'Enterprise Tech Workspace',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2400&q=85',
    alt: 'Software development team collaborating in an enterprise tech workspace',
  },
  {
    id: 3,
    name: 'Cloud Data Center & Racks',
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=85',
    alt: 'High-density cloud server racks glowing blue in enterprise data center',
  },
  {
    id: 4,
    name: 'Data Analytics & Performance Metrics',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=85',
    alt: 'Financial analytics, time-series metrics, and business intelligence on computer screen',
  },
  {
    id: 5,
    name: 'Multi-Monitor Engineering Lab',
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2400&q=85',
    alt: 'Software engineer workstation with multiple monitors and code displays',
  },
  {
    id: 6,
    name: 'Architectural Corporate High-Rise',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85',
    alt: 'Modern architectural glass skyscraper perspective under sky',
  },
  {
    id: 7,
    name: 'Technical Workshop & Strategy',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2400&q=85',
    alt: 'Engineering leadership and technology architects in strategic planning meeting',
  },
  {
    id: 8,
    name: 'Security & Telemetry Operations',
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2400&q=85',
    alt: 'Security operations and telemetry monitoring center',
  },
  {
    id: 9,
    name: 'Modern Executive Workspace',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85',
    alt: 'Modern minimalist corporate glass architecture with ambient lighting',
  },
  {
    id: 10,
    name: 'Global Data & Network Connectivity',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=85',
    alt: 'High-tech digital network streams and global data topology',
  },
];

interface HeroBackgroundSliderProps {
  children: React.ReactNode;
}

export default function HeroBackgroundSlider({ children }: HeroBackgroundSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
  }, []);

  // Auto-advance slides with smooth crossfade
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // Support left and right arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section className="relative min-h-[560px] sm:min-h-[620px] flex items-center overflow-hidden bg-slate-950">
      {/* Background Image Layers with Smooth Crossfade */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        {HERO_IMAGES.map((img, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={img.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                priority={idx === 0 || idx === 1}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          );
        })}
        {/* Subtle directional gradient on top of all image layers */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/20 pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      {children}

      {/* Two Small Arrow Buttons: Left and Right */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-950/95 text-white/80 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all shadow-lg active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-950/95 text-white/80 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all shadow-lg active:scale-95"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
