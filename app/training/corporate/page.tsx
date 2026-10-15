import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Award, Users, Cloud, Cpu, Database } from 'lucide-react';

export const metadata = {
  title: 'Corporate Upskilling Bootcamps | Kpro Academy',
  description:
    'Customizable enterprise engineering bootcamps designed to transition development teams into modern GenAI, Cloud, and Big Data practitioners.',
};

export default function CorporateTrainingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Corporate Tech Upskilling
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
              Enterprise Engineering Bootcamps
            </h1>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Curricula elevating internal developers into GenAI, Cloud DevSecOps, and Big Data practitioners.
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
                Tailored To Your Stack
              </span>
              <h2 className="text-3xl font-bold text-slate-900">
                Accelerate Team Transition from Legacy to Cloud-Native
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Customized 4 to 8-week bootcamps structured around your architecture, codebase conventions, and pipelines.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Curriculums mapped to your corporate cloud provider (AWS, Azure, GCP)</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated sandbox cloud lab environments provisioned for each engineer</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Capstone projects addressing real internal backlog tickets</span>
                </div>
              </div>

              <div>
                <Link href="/training#scoping" className="btn-primary text-xs">
                  Scope Corporate Cohort
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/11] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80"
                alt="Corporate engineering team in collaborative tech training session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Tracks Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Available Cohort Focus Areas</h2>
            <p className="text-sm text-slate-600 mt-2">
              Select an established curriculum track or combine modules into a bespoke roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-slate-200 p-8">
              <Cpu className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Production GenAI Systems</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Vector databases, enterprise RAG, agent tool calling, evaluation benchmarks, and fine-tuning.
              </p>
              <div className="text-xs font-semibold text-brand-blue">Duration: 4-6 Weeks</div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-8">
              <Cloud className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Kubernetes &amp; DevSecOps</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Container security, GitOps pipelines, Helm package management, and zero-trust mesh networking.
              </p>
              <div className="text-xs font-semibold text-brand-blue">Duration: 6-8 Weeks</div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-8">
              <Database className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Modern Lakehouse Engineering</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Apache Kafka event streams, Delta Lake medallion architectures, and dbt transformation workflows.
              </p>
              <div className="text-xs font-semibold text-brand-blue">Duration: 4-8 Weeks</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
