import Image from 'next/image';
import Link from 'next/link';
import { Cpu, Cloud, Database, Layers, Radio, CheckCircle2, Code2 } from 'lucide-react';

export const metadata = {
  title: 'Capabilities | Enterprise Engineering Practices',
  description:
    'Technical practices: Generative AI, Cloud & DevOps, Analytics & Big Data, Blockchain, and IoT Engineering.',
};

export default function CapabilitiesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="section-tag">Engineering Practices</span>
            <h1 className="section-heading">Data, Algorithmic &amp; AI Capabilities</h1>
            <p className="section-subtext">
              Transforming raw enterprise telemetry into mathematical signal, streaming lakehouses, and production AI under our True Fixed Cost Model.
            </p>
          </div>
        </div>
      </section>

      {/* Practice 1: GenAI & LLMs */}
      <section className="py-20 border-b border-slate-200" id="genai">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="w-10 h-10 rounded bg-brand-blue-light flex items-center justify-center text-brand-blue">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Generative AI &amp; Autonomous Agents
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Production-grade RAG pipelines and autonomous multi-agent cognitive networks respecting enterprise data boundaries.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Production RAG pipelines with enterprise vector databases</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Private VPC and on-premise model deployments</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Domain fine-tuning with strict guardrails and benchmarks</span>
                </div>
              </div>

              <div className="pt-1">
                <Link href="/contact?subject=Generative AI" className="btn-primary text-xs">
                  Consult With GenAI Architect
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/11] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80"
                alt="Artificial Intelligence neural computing and model architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice 2: Cloud & DevOps */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="cloud">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[16/11] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80"
                alt="Cloud infrastructure and server cluster"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="w-10 h-10 rounded bg-brand-blue-light flex items-center justify-center text-brand-blue">
                <Cloud className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Cloud Migration &amp; DevSecOps
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Modernizing legacy architectures into containerized microservices operating on resilient Kubernetes infrastructure.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Kubernetes cluster orchestration (EKS, GKE, AKS) with auto-scaling</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Multi-cloud disaster recovery architectures with automated failover</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Automated CI/CD security gating and container vulnerability scanning</span>
                </div>
              </div>

              <div className="pt-1">
                <Link href="/contact?subject=Cloud Infrastructure" className="btn-primary text-xs">
                  Scope Cloud Modernization
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice 3: Analytics & Big Data */}
      <section className="py-20 border-b border-slate-200" id="analytics">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="w-10 h-10 rounded bg-brand-blue-light flex items-center justify-center text-brand-blue">
                <Database className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Analytics &amp; Big Data Lakehouses
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Consolidating corporate silos into unified data lakehouses with low-latency streaming ingestion pipelines.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Real-time streaming ingestion with Apache Kafka and Spark</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Governed lakehouse deployments on Databricks and Snowflake</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Automated data governance and regulatory classification</span>
                </div>
              </div>

              <div className="pt-1">
                <Link href="/contact?subject=Big Data Lakehouse" className="btn-primary text-xs">
                  Review Data Architecture
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/11] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
                alt="Data analytics dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice 4: IoT & Edge */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="iot">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[16/11] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
                alt="Electronic circuit hardware and industrial IoT sensor boards"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="w-10 h-10 rounded bg-brand-blue-light flex items-center justify-center text-brand-blue">
                <Radio className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                IoT &amp; Industrial Edge Intelligence
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ingesting physical plant telemetry via OPC-UA and MQTT protocols with local edge neural inferencing.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Industrial IoT gateways supporting MQTT, CoAP, and OPC-UA</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Edge machine learning for vibration and predictive maintenance</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Encrypted OTA firmware updates and device fleet governance</span>
                </div>
              </div>

              <div className="pt-1">
                <Link href="/contact?subject=IoT Systems" className="btn-primary text-xs">
                  Request Edge Scoping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice 5: Blockchain */}
      <section className="py-20 border-b border-slate-200" id="blockchain">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="w-10 h-10 rounded bg-brand-blue-light flex items-center justify-center text-brand-blue">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Blockchain &amp; Distributed Ledgers
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Verifiable distributed ledgers for multi-party supply chain provenance, smart contracts, and forensic reconciliation.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Enterprise permissioned ledgers (Hyperledger Fabric, Quorum)</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Smart contract verification and cognitive forensic audits</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Multi-institution data provenance pipelines and digital attestation</span>
                </div>
              </div>

              <div className="pt-1">
                <Link href="/contact?subject=Blockchain Ledgers" className="btn-primary text-xs">
                  Consult With Blockchain Architect
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/11] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1000&q=80"
                alt="Digital cryptographic ledger network"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice 6: Enterprise Web */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="web">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[16/11] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                alt="Enterprise web application interface"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="w-10 h-10 rounded bg-brand-blue-light flex items-center justify-center text-brand-blue">
                <Code2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Enterprise Web &amp; Portal Engineering
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                High-concurrency web applications, micro-frontend architectures, secure REST/GraphQL API backends, and responsive design systems.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Production Next.js &amp; React architecture with Server Components</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>High-throughput Node.js, TypeScript, and Go microservices</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strict SOC2 compliant authentication, SSO, and RBAC</span>
                </div>
              </div>

              <div className="pt-1">
                <Link href="/contact?subject=Enterprise Web Engineering" className="btn-primary text-xs">
                  Scope Web Application
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="section-container text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
            Transform Your Engineering Infrastructure
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            Delivered under our True Fixed Cost Model with guaranteed pricing and zero billing variance.
          </p>
          <Link href="/contact" className="btn-primary px-6 py-2.5 text-xs">
            Schedule Discovery Session
          </Link>
        </div>
      </section>
    </div>
  );
}
