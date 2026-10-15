import Image from 'next/image';
import { Briefcase, Award, Zap, Code2, Users, HeartHandshake } from 'lucide-react';
import CareersPortal from '@/components/CareersPortal';

export const metadata = {
  title: 'Careers | Engineering Opportunities at Kpro',
  description:
    'Explore engineering opportunities at Kpro Solutions in Bengaluru. Join our GenAI, Cloud, and Data systems practices.',
};

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Careers at Kpro
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
              Build Systems That Matter
            </h1>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              We recruit software engineers and architects building mission-critical platforms with production accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Workplace Culture Overview */}
      <section className="py-20 border-b border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                Engineering Culture
              </span>
              <h2 className="text-3xl font-bold text-slate-900">
                Production-First Principles, Zero Bureaucracy
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Engineers collaborate directly with lead architects and enterprise clients under strict code review and testing mandates.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Code2 className="w-4 h-4 text-brand-blue" />
                    <span>Direct Architecture Impact</span>
                  </div>
                  <p className="text-xs text-slate-500">Full ownership over module design and production deployments.</p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Award className="w-4 h-4 text-brand-blue" />
                    <span>Continuous Upskilling</span>
                  </div>
                  <p className="text-xs text-slate-500">Sponsored certifications and access to internal Kpro Academy programs.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/11] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Engineering team collaborating around development displays in technology center"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white" id="openings">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Current Openings
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">
              Active Engineering Positions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Browse open technical roles across our practices based at our Bengaluru engineering center.
            </p>
          </div>

          <CareersPortal />
        </div>
      </section>
    </div>
  );
}
