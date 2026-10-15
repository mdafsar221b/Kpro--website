import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Cloud,
  Database,
  Radio,
  CheckCircle2,
  Layers,
  Code2,
  ArrowUpRight,
  Quote,
} from 'lucide-react';
import WhatsNewCarousel from '@/components/WhatsNewCarousel';
import ClientsSection from '@/components/ClientsSection';
import HeroBackgroundSlider from '@/components/HeroBackgroundSlider';

export const metadata = {
  title: 'Kpro Solutions | Applied Mathematics & Enterprise Analytics Since 2014',
  description:
    'We engineer the mathematical algorithms, streaming lakehouses, and AI architectures that turn raw enterprise data into decisive business advantage under a True Fixed Cost Model.',
};

const TECH_STACK = [
  { name: 'Python / PyTorch', category: 'AI & ML', logo: '/img/tech/python.svg' },
  { name: 'AWS Cloud', category: 'Infrastructure', logo: '/img/tech/aws.svg' },
  { name: 'Microsoft Azure', category: 'Multi-Cloud', logo: '/img/tech/azure.svg' },
  { name: 'Docker & K8s', category: 'Orchestration', logo: '/img/tech/docker.svg' },
  { name: 'Apache Spark & Kafka', category: 'Streaming Data', logo: '/img/tech/spark.svg' },
  { name: 'React & Next.js', category: 'Web Systems', logo: '/img/tech/react.svg' },
  { name: 'Node.js & TypeScript', category: 'Backends', logo: '/img/tech/nodejs.svg' },
  { name: 'PostgreSQL & Vector DBs', category: 'Data & RAG', logo: '/img/tech/postgresql.svg' },
  { name: 'LangChain & LlamaIndex', category: 'Agent Networks', logo: '/img/tech/langchain.svg' },
  { name: 'Hostinger', category: 'Cloud & Web Hosting', logo: '/img/tech/hostinger.svg' },
];

export default function HomePage() {
  return (
    <div>
      {/* Full-Cover Hero Section with Background Slider */}
      <HeroBackgroundSlider>
        {/* Content overlaid on top of full photo */}
        <div className="relative z-10 section-container py-24 sm:py-32 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold tracking-wide border border-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
              <span>Applied Mathematics &amp; Enterprise Analytics Since 2014</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight">
              Turning Complex Raw Data into Decisive Business Advantage
            </h1>

            <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-xl font-normal">
              We engineer the mathematical models, streaming data lakehouses, and AI architectures that transform noisy enterprise data into automated insight—under our True Fixed Cost Model.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary text-sm px-7 py-3.5 inline-flex items-center gap-2"
              >
                <span>Schedule Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </HeroBackgroundSlider>

      {/* Verified Metrics Ribbon: High-Contrast Clean Strip */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="border-l-2 border-brand-teal pl-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">10+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Years of Analytics Depth</div>
            </div>
            <div className="border-l-2 border-brand-orange pl-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-orange tracking-tight">50+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Data &amp; AI Engagements</div>
            </div>
            <div className="border-l-2 border-brand-jade pl-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">100M+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Daily Events Processed</div>
            </div>
            <div className="border-l-2 border-brand-teal pl-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-teal tracking-tight">100%</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Fixed Cost Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's New Carousel */}
      <WhatsNewCarousel />

      {/* Technologies We Master */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="section-tag">Technology Stack</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 tracking-tight">
              Technologies We Master
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Production-proven open source frameworks and enterprise cloud platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col items-center text-center hover:border-slate-300 hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 mb-2.5 flex items-center justify-center">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="font-bold text-slate-900 text-xs">{tech.name}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Engineering Services */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <span className="section-tag">What We Do</span>
            <h2 className="section-heading">Enterprise Engineering Services</h2>
            <p className="section-subtext">
              Full lifecycle digital engineering tailored to mission-critical corporate standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. GenAI */}
            <div className="card-flat p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-md bg-brand-blue-light flex items-center justify-center text-brand-blue mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                  Generative AI &amp; LLM Systems
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Production RAG pipelines, multi-agent cognitive networks, enterprise vector index architectures, and domain-specific fine-tuning.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['RAG Pipelines', 'LangChain', 'Vector DBs', 'Multi-Agent AI'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/capabilities#genai"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-blue-dark pt-3 border-t border-slate-100"
              >
                <span>Explore GenAI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 2. Cloud & DevOps */}
            <div className="card-flat p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-md bg-brand-blue-light flex items-center justify-center text-brand-blue mb-4">
                  <Cloud className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                  Cloud &amp; DevOps Engineering
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Multi-cloud infrastructure design, Terraform IaC, Kubernetes orchestration, and automated zero-downtime CI/CD security pipelines.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['AWS & Azure', 'Kubernetes', 'Terraform', 'CI/CD Pipelines'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/capabilities#cloud"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-blue-dark pt-3 border-t border-slate-100"
              >
                <span>Explore Cloud</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 3. Analytics & Big Data */}
            <div className="card-flat p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-md bg-brand-blue-light flex items-center justify-center text-brand-blue mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                  Analytics &amp; Big Data Lakehouses
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  High-throughput event streaming, distributed data lakehouses, real-time analytics dashboards, and Apache Spark/Kafka pipelines.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['Apache Spark', 'Kafka', 'Snowflake', 'Delta Lake'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/capabilities#analytics"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-blue-dark pt-3 border-t border-slate-100"
              >
                <span>Explore Analytics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4. IoT & Edge */}
            <div className="card-flat p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-md bg-brand-blue-light flex items-center justify-center text-brand-blue mb-4">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                  IoT &amp; Edge Telemetry
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Industrial sensory data ingestion, edge AI inferencing, MQTT/OPC-UA device protocols, and remote fleet health monitoring.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['Edge AI', 'MQTT Protocols', 'Sensory Streams', 'Industrial IoT'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/capabilities#iot"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-blue-dark pt-3 border-t border-slate-100"
              >
                <span>Explore IoT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 5. Blockchain */}
            <div className="card-flat p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-md bg-brand-blue-light flex items-center justify-center text-brand-blue mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                  Blockchain &amp; Distributed Ledgers
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Enterprise decentralized architectures, tamper-evident supply chain tracking, smart contract audits, and verifiable ledger networks.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['Hyperledger', 'Smart Contracts', 'Provenance', 'Web3 Trust'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/capabilities#blockchain"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-blue-dark pt-3 border-t border-slate-100"
              >
                <span>Explore Blockchain</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 6. Web & Portals */}
            <div className="card-flat p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-md bg-brand-blue-light flex items-center justify-center text-brand-blue mb-4">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                  Enterprise Web &amp; Portal Systems
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  High-concurrency web applications, micro-frontend architectures, secure REST/GraphQL API backends, and responsive design systems.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['React / Next.js', 'Node.js', 'Microfrontends', 'GraphQL & REST'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/capabilities"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-blue-dark pt-3 border-t border-slate-100"
              >
                <span>Explore Web Systems</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Data-to-Insight Architecture */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <span className="section-tag">Our Mathematical Foundation</span>
            <h2 className="section-heading">The Data-to-Insight Engine</h2>
            <p className="section-subtext">
              Transforming fragmented raw data into mathematical certainty and automated enterprise decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stage 1 */}
            <div className="card-flat p-6 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold text-brand-blue uppercase tracking-wider mb-2">Stage 01</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Distributed Ingestion &amp; Lakehouses
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Consolidating IoT sensor telemetry, voice audio streams, database logs, and unstructured documents into low-latency lakehouses.
                </p>
              </div>
              <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100">
                {['Apache Spark', 'Kafka Streams', 'Snowflake', 'Delta Lake'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stage 2 */}
            <div className="card-flat p-6 flex flex-col justify-between border-brand-orange/40 bg-gradient-to-b from-orange-50/20 to-transparent">
              <div>
                <div className="text-[11px] font-bold text-brand-orange uppercase tracking-wider mb-2">Stage 02</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Applied Mathematics &amp; Solvers
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Linear programming, operations research, computer vision neural nets, and time-series forecasting extracting mathematical signal from noise.
                </p>
              </div>
              <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100">
                {['Linear Programming', 'Time-Series ML', 'Edge Vision 60FPS', 'Bayesian UEBA'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-medium bg-brand-orange-light text-brand-orange-dark">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stage 3 */}
            <div className="card-flat p-6 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold text-brand-jade uppercase tracking-wider mb-2">Stage 03</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Autonomous Insights &amp; Action
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Enterprise GenAI RAG pipelines, autonomous agent networks, and executive decision portals automating business outcomes.
                </p>
              </div>
              <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100">
                {['Enterprise RAG', 'Multi-Agent AI', 'Decision Portals', 'Fixed Cost ROI'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Clients & Deliverables Showcase */}
      <ClientsSection />

      {/* The True Fixed Cost Model */}
      <section className="py-20 bg-white border-b border-slate-200" id="fixed-cost">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="section-tag">Engagement Model</span>
              <h2 className="section-heading">The True Fixed Cost Model</h2>
              <p className="section-subtext">
                Eliminating hourly billing ambiguity with guaranteed budgets and timeline accountability.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Risk Absorption</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Kpro absorbs unexpected engineering sprint challenges, not the client.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Strict Delivery Commitments</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Scopes are tethered to chronological calendar milestone reviews.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Measurable Value</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Functional specifications defined upfront to ensure predictable ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Matrix Card */}
            <div className="lg:col-span-6">
              <div className="card-flat p-6">
                <h3 className="text-base font-bold text-slate-900 mb-4">
                  Traditional Consulting vs. Kpro Fixed Cost
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-200">
                    <div className="font-semibold text-slate-500 uppercase tracking-wider text-[11px]">Conventional T&amp;M</div>
                    <div className="font-semibold text-brand-blue uppercase tracking-wider text-[11px]">Kpro Fixed Cost Guarantee</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-200">
                    <div className="text-slate-600">Uncapped billing hours &amp; budget creep</div>
                    <div className="font-semibold text-slate-900">100% Guaranteed fixed quote</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-200">
                    <div className="text-slate-600">Client absorbs delayed milestone costs</div>
                    <div className="font-semibold text-slate-900">Kpro assumes timeline accountability</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-200">
                    <div className="text-slate-600">Vague deliverables subject to renegotiation</div>
                    <div className="font-semibold text-slate-900">Rigorous functional specifications</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-0.5">
                    <div className="text-slate-600">Incentive to prolong project lifecycle</div>
                    <div className="font-semibold text-emerald-700">Incentive to deliver optimal code on time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Founder Spotlight */}
      <section className="py-20 bg-white border-b border-slate-200" id="founder">
        <div className="section-container">
          <div className="rounded-2xl bg-gradient-to-br from-brand-navy via-[#022838] to-brand-navy text-white p-8 sm:p-12 lg:p-14 border border-[#043c52] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Leader portrait and metadata */}
              <div className="lg:col-span-4 flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-800 shrink-0">
                  <Image
                    src="/img/alok-ranjan.png"
                    alt="Alok Ranjan Ojha - Founder & Director, Kpro Solutions"
                    fill
                    sizes="(max-width: 640px) 176px, 208px"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wider">
                    Founder
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">Alok Ranjan Ojha</h3>
                  <p className="text-xs font-semibold text-brand-orange uppercase tracking-wider mt-1">
                    Founder &amp; Director
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Chief Enterprise AI Architect | ISB Alum
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 mt-4">
                  <a
                    href="https://www.linkedin.com/in/alok-ranjan-ojha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors py-1.5 px-3 rounded-md bg-white/10 hover:bg-white/15 border border-white/10"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.64 1.64 0 0 0-1.66 1.64 1.65 1.65 0 0 0 1.66 1.65 1.65 1.65 0 0 0 1.65-1.65c0-.91-.74-1.64-1.65-1.64Z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <Link
                    href="/about#leadership"
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-white transition-colors py-1.5 px-3 rounded-md bg-white/10 hover:bg-white/15 border border-white/10"
                  >
                    <span>Board &amp; Team</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Leadership vision and credentials */}
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-300 text-xs font-semibold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-brand-orange" />
                  <span>Leadership Vision</span>
                </div>

                <div className="relative">
                  <Quote className="w-10 h-10 text-white/10 absolute -top-4 -left-2 pointer-events-none" />
                  <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal relative z-10 pl-6 border-l-2 border-brand-orange">
                    &ldquo;Every enterprise is sitting on mountains of raw operational data. Our mission since 2014 has been to apply rigorous mathematical modeling, real-time streaming lakehouses, and production AI to translate that raw data into decisive competitive advantage—backed by a strict True Fixed Cost delivery guarantee.&rdquo;
                  </blockquote>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 border-t border-slate-800">
                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-base sm:text-lg font-bold text-white">22+ Years</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Enterprise Data Architecture</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-base sm:text-lg font-bold text-white">Applied Math</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Solvers, Vision &amp; GenAI</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-base sm:text-lg font-bold text-emerald-400">100% Outcome</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">True Fixed Cost Model</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary SaaS Products */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <span className="section-tag">Our Software Suite</span>
            <h2 className="section-heading">Proprietary SaaS Products</h2>
            <p className="section-subtext">
              Purpose-built software platforms engineered and operated by Kpro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mentora */}
            <div className="card-flat overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-44 bg-slate-100 border-b border-slate-200">
                  <Image
                    src="/img/mentora.png"
                    alt="Mentora Student Hub"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <div className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-cyan-100 text-cyan-800 mb-2">
                    EdTech Hub
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Mentora: Next-Gen Student Hub
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Bridging education and industry with student growth tracking, parent visibility, and automated recruiter matching.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-2 flex flex-wrap items-center gap-2 border-t border-slate-100 mt-auto">
                <a
                  href="https://mentora.mediniaihub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-1.5 px-3 inline-flex items-center gap-1"
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link href="/products#mentora" className="btn-outline text-xs py-1.5 px-3">
                  Details
                </Link>
              </div>
            </div>

            {/* NyotaInvite */}
            <div className="card-flat overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-44 bg-slate-100 border-b border-slate-200">
                  <Image
                    src="/img/nyotainvite.png"
                    alt="NyotaInvite RSVP Portal"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <div className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 mb-2">
                    Event Tech
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    NyotaInvite: Smart Event &amp; RSVP
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Digital invitation and RSVP management with customized guest landing pages, QR check-ins, and automated reminders.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-2 flex flex-wrap items-center gap-2 border-t border-slate-100 mt-auto">
                <a
                  href="https://nyotainvite.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-1.5 px-3 inline-flex items-center gap-1"
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link href="/products#nyotainvite" className="btn-outline text-xs py-1.5 px-3">
                  Details
                </Link>
              </div>
            </div>

            {/* Resumea */}
            <div className="card-flat overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-44 bg-slate-100 border-b border-slate-200">
                  <Image
                    src="/img/resumea.png"
                    alt="Resumea ATS Resume Engine"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <div className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-blue-100 text-brand-blue mb-2">
                    AI Talent
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Resumea: AI ATS Resume Engine
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Intelligent ATS resume optimization benchmarking CV formats against corporate applicant tracking systems.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-2 flex flex-wrap items-center gap-2 border-t border-slate-100 mt-auto">
                <a
                  href="https://resumea.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-1.5 px-3 inline-flex items-center gap-1"
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link href="/products#resumea" className="btn-outline text-xs py-1.5 px-3">
                  Details
                </Link>
              </div>
            </div>

            {/* HRHaaT */}
            <div className="card-flat overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-44 bg-slate-100 border-b border-slate-200">
                  <Image
                    src="/img/hrhaat.png"
                    alt="HRHaaT Enterprise HRIMS"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <div className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-2">
                    HR Tech
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    HRHaaT: Enterprise HRIMS
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    All-in-one Human Resource system unifying payroll calculations, compliance filings, and employee onboarding.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-2 flex flex-wrap items-center gap-2 border-t border-slate-100 mt-auto">
                <a
                  href="https://www.hrhaat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-1.5 px-3 inline-flex items-center gap-1"
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link href="/products#hrhaat" className="btn-outline text-xs py-1.5 px-3">
                  Details
                </Link>
              </div>
            </div>

            {/* BuildMyCV */}
            <div className="card-flat overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-44 bg-slate-100 border-b border-slate-200">
                  <Image
                    src="/img/buildmycv.png"
                    alt="BuildMyCV Portfolio Builder"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <div className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 mb-2">
                    Career SaaS
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    BuildMyCV: Portfolio &amp; CV Builder
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Personal branding platform for professionals to launch live digital portfolios, hosted CV websites, and downloadable PDFs.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-2 flex flex-wrap items-center gap-2 border-t border-slate-100 mt-auto">
                <a
                  href="https://www.buildmycv.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-1.5 px-3 inline-flex items-center gap-1"
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link href="/products#buildmycv" className="btn-outline text-xs py-1.5 px-3">
                  Details
                </Link>
              </div>
            </div>

            {/* Corely CRM */}
            <div className="card-flat overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-44 bg-slate-100 border-b border-slate-200">
                  <Image
                    src="/img/swargaseema-crm-landing.png"
                    alt="Corely Enterprise Real Estate CRM Platform"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <div className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800 mb-2">
                    PropTech CRM
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Corely: Real Estate CRM
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Enterprise sales platform integrating WebRTC cloud telephony, Gemini AI speech analytics, chauffeur dispatch, and 2D plot booking.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-2 flex flex-wrap items-center gap-2 border-t border-slate-100 mt-auto">
                <Link
                  href="/case-studies/swargaseema"
                  className="btn-primary text-xs py-1.5 px-3 inline-flex items-center gap-1"
                >
                  <span>Explore Corely</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/products#corely" className="btn-outline text-xs py-1.5 px-3">
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Call To Action */}
      <section className="py-20 bg-brand-navy text-white border-t border-[#043345]">
        <div className="section-container text-center max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
            Transform With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1.5 mb-3">
            Ready to Build with Kpro?
          </h2>
          <p className="text-sm text-slate-300 mb-8 leading-relaxed">
            Schedule an architectural discovery session for your upcoming initiative under our True Fixed Cost Model.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-accent text-sm px-7 py-3">
              Schedule Consultation
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white border border-[#04445c] hover:border-brand-teal hover:bg-white/5 rounded-md transition-colors"
            >
              Explore Software Suite
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
