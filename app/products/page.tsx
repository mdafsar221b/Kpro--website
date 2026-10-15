import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Proprietary SaaS Products | Kpro Software Suite',
  description:
    'Explore Kpro proprietary SaaS products: Corely, Mentora, NyotaInvite, Resumea, HRHaaT, and BuildMyCV.',
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="section-tag">Our Software Suite</span>
            <h1 className="section-heading">Proprietary SaaS Products</h1>
            <p className="section-subtext">
              Purpose-built software platforms engineered, operated, and maintained by Kpro Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Product 1: Mentora (EdTech / Student Hub) */}
      <section className="py-20 border-b border-slate-200" id="mentora">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-800 text-xs font-semibold">
                <span>EDTECH HUB</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Mentora: Next-Gen Student Hub
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Centralized student intelligence platform bridging academic milestones and industry hiring with real-time parental visibility.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Student academic and skill benchmark tracking</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Integrated parent portal with attendance and progress telemetry</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Automated talent discovery matching students with recruiters</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://mentora.mediniaihub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs inline-flex items-center gap-1.5"
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link href="/contact?subject=Product: Mentora" className="btn-secondary text-xs">
                  Request Campus Demo
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="/img/mentora.png"
                alt="Mentora Student Hub Platform"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product 2: NyotaInvite (Event Tech) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="nyotainvite">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="/img/nyotainvite.png"
                alt="NyotaInvite Event Platform"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold">
                <span>EVENT TECH</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                NyotaInvite: Smart Event &amp; RSVP
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Digital invitation and guest experience platform with interactive itineraries, QR-code entry, and instant notifications.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Personalized interactive guest itineraries and maps</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Automated RSVP tracking with meal preferences</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant QR check-in and multi-channel guest reminders</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://nyotainvite.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs inline-flex items-center gap-1.5"
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link href="/contact?subject=Product: NyotaInvite" className="btn-secondary text-xs">
                  Request Event Pilot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 3: Resumea (AI Talent) */}
      <section className="py-20 border-b border-slate-200" id="resumea">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold">
                <span>AI TALENT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Resumea: AI ATS Resume Engine
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Intelligent ATS resume optimization benchmarking CV formats against corporate applicant tracking systems to maximize callbacks.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Real-time ATS compatibility scoring and parse validation</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>AI keyword suggestion engine matched to job descriptions</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Recruiter-tested executive and engineering resume templates</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://resumea.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs inline-flex items-center gap-1.5"
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link href="/contact?subject=Product: Resumea" className="btn-secondary text-xs">
                  Request Demo
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="/img/resumea.png"
                alt="Resumea ATS Optimization Engine"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product 4: HRHaaT (HR Tech) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="hrhaat">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="/img/hrhaat.png"
                alt="HRHaaT HRIMS Platform"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                <span>HR TECH</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                HRHaaT: Enterprise HRIMS
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Human Resource management system unifying automated payroll, statutory compliance filings, and employee onboarding.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Automated multi-tier payroll and statutory compliance</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Digital onboarding and employee self-service portal</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Integrated leave approvals and biometric attendance</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://www.hrhaat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs inline-flex items-center gap-1.5"
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link href="/contact?subject=Product: HRHaaT" className="btn-secondary text-xs">
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 5: BuildMyCV (Career SaaS) */}
      <section className="py-20 border-b border-slate-200" id="buildmycv">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold">
                <span>CAREER SAAS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                BuildMyCV: Portfolio &amp; CV Builder
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Personal branding platform enabling professionals to deploy live digital portfolios, hosted CV websites, and recruiter-ready PDFs.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>One-click conversion from profile data to published site</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Interactive project showcases and repository synchronization</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Export to clean, pixel-perfect PDF formats</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://www.buildmycv.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs inline-flex items-center gap-1.5"
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link href="/contact?subject=Product: BuildMyCV" className="btn-secondary text-xs">
                  Request Access
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="/img/buildmycv.png"
                alt="BuildMyCV Platform"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product 6: Corely CRM (PropTech CRM) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="corely">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="/img/swargaseema-crm-landing.png"
                alt="Corely Enterprise CRM Platform"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold">
                <span>PROPTECH CRM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Corely: Real Estate CRM
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enterprise real estate sales and inventory platform unifying browser-native WebRTC telephony, Google Gemini AI speech analytics, and 2D plot booking.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Browser-native WebRTC cloud telephony with 100% call recording</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Google Gemini AI speech analytics and automatic sentiment scoring</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Interactive 2D plotted layout engine with real-time inventory locking</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/case-studies/swargaseema"
                  className="btn-primary text-xs inline-flex items-center gap-1.5"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/contact?subject=Product: Corely CRM" className="btn-secondary text-xs">
                  Request Platform Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Security Guarantee */}
      <section className="py-16 bg-brand-navy text-white border-t border-[#043345]">
        <div className="section-container text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
            Institutional-Grade Architecture
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            All Kpro platforms run on dedicated VPC infrastructure with data isolation and strict SOC2 alignment.
          </p>
          <Link href="/contact" className="btn-accent px-6 py-2.5 text-xs">
            Discuss Enterprise Licensing
          </Link>
        </div>
      </section>
    </div>
  );
}
