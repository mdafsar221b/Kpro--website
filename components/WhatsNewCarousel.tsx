'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

interface NewsItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  badge?: string;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'swargaseema',
    category: 'Client Success Spotlight',
    title: 'Swargaseema scales plotted real estate sales with Kpro AI Telephony CRM',
    description:
      'WebRTC cloud telephony, chauffeur dispatch, and plot booking for Hyderabad premier real estate developer.',
    image: '/img/swargaseema-team.jpg',
    imageAlt: 'Swargaseema Infra Developers executive sales and operations floor in Hyderabad',
    href: '/case-studies/swargaseema',
    badge: 'Enterprise CRM',
  },
  {
    id: '1',
    category: 'Corporate Milestone',
    title: 'Kpro expands enterprise GenAI delivery practice in Bengaluru',
    description:
      'Dedicated engineering pods for production RAG and multi-agent cognitive workflow systems.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Kpro Solutions headquarters',
    href: '/capabilities#genai',
    badge: 'Announcement',
  },
  {
    id: '2',
    category: 'Industry Recognition',
    title: 'True Fixed Cost Model achieves 100% on-budget project deliveries',
    description:
      'Milestone-governed engineering deliverables with guaranteed pricing and zero budget variance.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Executive technology consultants discussing enterprise strategy',
    href: '/about#fixed-cost',
    badge: 'Case Study',
  },
  {
    id: '3',
    category: 'Platform Launch',
    title: 'ThirdEye AI computer vision scales automated defect detection',
    description:
      'Edge neural inference reduces assembly line manufacturing defect escapes across industrial plants.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Industrial robotics and computer vision monitoring system',
    href: '/solutions#thirdeye',
    badge: 'Product',
  },
  {
    id: '4',
    category: 'Talent Acceleration',
    title: 'Kpro Academy graduates 500+ engineers in modern cloud and AI',
    description:
      'Enterprise upskilling curriculums transitioning legacy engineers to cloud-native practitioners.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Engineering team collaborating in modern technology center',
    href: '/training',
    badge: 'Academy',
  },
];

export default function WhatsNewCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 360;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="section-container">
        {/* Header with Title and Nav Arrows */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Latest Updates &amp; Insights
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1 tracking-tight">
              What&apos;s new
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-md border border-slate-300 flex items-center justify-center text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-colors focus:outline-none"
              aria-label="Previous updates"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-md border border-slate-300 flex items-center justify-center text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-colors focus:outline-none"
              aria-label="Next updates"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-2 scroll-smooth no-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {NEWS_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] flex flex-col bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-brand-teal transition-colors duration-150"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-200"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-semibold text-slate-800 rounded border border-slate-200/80">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Text content */}
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-semibold text-brand-blue mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-blue group-hover:text-brand-blue-dark">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
