import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, CheckCircle2, Award, BookOpen, Code2 } from 'lucide-react';

export const metadata = {
  title: 'College & University Tech Training Programs | Kpro Academy',
  description:
    'Bridging academia and enterprise software engineering. Industry-aligned training programs and placement acceleration for university students.',
};

export default function CollegeTrainingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Academic Partnerships
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
              University Engineering Programs
            </h1>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Bridging academic computer science with production standards to equip graduates with deployment skills.
            </p>
          </div>
        </div>
      </section>

      {/* Program Pillars */}
      <section className="py-20 border-b border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                Industry Readiness
              </span>
              <h2 className="text-3xl font-bold text-slate-900">
                Transforming Students into Production-Ready Engineers
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                We partner with universities to embed version control hygiene, CI/CD, containerization, and clean architecture.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Capstone projects built on modern production frameworks (Next.js, FastAPI, Docker)</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mentorship and weekly code reviews from senior enterprise architects</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified portfolio links and direct placement assistance with partner tech firms</span>
                </div>
              </div>

              <div>
                <Link href="/training#scoping" className="btn-primary text-xs">
                  Inquire for Academic Partnership
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/11] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                alt="University engineering students collaborating on programming lab assignment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
