import Image from 'next/image';
import { Award, BookOpen, CheckCircle2, Cpu, Cloud, Database, GraduationCap } from 'lucide-react';
import TrainingScopingForm from '@/components/TrainingScopingForm';

export const metadata = {
  title: 'Technical Training & Upskilling Academy | Kpro Solutions',
  description:
    'Enterprise technical bootcamps and academic engineering programs in GenAI, Cloud, Kubernetes, and Big Data delivered by Kpro practitioners.',
};

export default function TrainingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Kpro Academy
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
              Enterprise Technical Upskilling
            </h1>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Practitioner-led training bootcamps elevating engineering teams across GenAI, Cloud DevSecOps, and Big Data.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Credentials */}
      <section className="py-20 border-b border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                Practitioner-Driven Pedagogy
              </span>
              <h2 className="text-3xl font-bold text-slate-900">
                Taught by Production Architects, Not Slide Lecturers
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Curricula are instructed by active engineering leads using real repository labs, live debugging, and architecture reviews.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-100">
                <div>
                  <div className="text-3xl font-bold text-slate-900">500+</div>
                  <div className="text-xs text-slate-500 mt-1">Engineers Upskilled</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-blue">80%</div>
                  <div className="text-xs text-slate-500 mt-1">Hands-on Lab Focus</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 mt-1">Production-Aligned</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/11] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                alt="Technology training seminar room with engineers participating in software architecture lab"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Tracks */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Specialized Tracks
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
              Featured Academy Programs
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Curricula tailored to your enterprise tech stack, team seniority, and delivery timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Track 1 */}
            <div className="bg-white rounded-lg border border-slate-200 p-8">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue mb-5">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Enterprise GenAI Engineering
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Mastering vector embeddings, semantic search, local fine-tuning, and multi-agent coordination with LangChain and LlamaIndex.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Production RAG Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Guardrails &amp; Evaluation Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>vLLM &amp; Private Model Hosting</span>
                </li>
              </ul>
            </div>

            {/* Track 2 */}
            <div className="bg-white rounded-lg border border-slate-200 p-8">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue mb-5">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Cloud-Native &amp; Kubernetes
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Hands-on containerization, multi-cluster management, GitOps with ArgoCD, and infrastructure automation using Terraform.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Kubernetes Production Operations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>CI/CD DevSecOps Pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Prometheus &amp; Grafana Observability</span>
                </li>
              </ul>
            </div>

            {/* Track 3 */}
            <div className="bg-white rounded-lg border border-slate-200 p-8">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue mb-5">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Big Data &amp; Modern Lakehouses
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Streaming pipeline design with Kafka and PySpark, building scalable medallion architectures on Databricks and Snowflake.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Low-Latency Kafka Streaming</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Delta Lake &amp; Iceberg Formats</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Data Quality Automation &amp; Governance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Specialized Skill Tracks from PDF Deck Page 8 */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Specialized Skill Tracks</h3>
            <p className="text-xs text-slate-600 mb-6">
              Modular curriculum paths focused on immediate production readiness:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { track: 'PySpark & Lakehouses', desc: 'Distributed data batch & streaming' },
                { track: 'LangChain & RAG', desc: 'Autonomous agent architectures' },
                { track: 'Kubernetes & GitOps', desc: 'Cloud infrastructure orchestration' },
                { track: 'Full Stack TypeScript', desc: 'Next.js & Node.js microservices' },
                { track: 'Cyber Threat Intelligence', desc: 'UEBA & zero-trust perimeter defense' },
              ].map((item) => (
                <div key={item.track} className="p-4 bg-white rounded-lg border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm">{item.track}</div>
                  <div className="text-[11px] text-slate-500 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 bg-white" id="scoping">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                Tailored Engagement
              </span>
              <h2 className="text-3xl font-bold text-slate-900">
                Scope an Academy Bootcamp
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Configure a customized syllabus matched to your engineering goals and tech stack.
              </p>

              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-600">
                <div className="font-semibold text-slate-900">What happens next:</div>
                <div>1. Technical scoping consultation with an academy director.</div>
                <div>2. Customized syllabus review aligned with your team&apos;s stack.</div>
                <div>3. Scheduling dates, hands-on cloud lab provisioning, and kickoff.</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <TrainingScopingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
