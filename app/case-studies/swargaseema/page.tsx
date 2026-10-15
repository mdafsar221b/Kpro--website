import Image from 'next/image';
import Link from 'next/link';
import {
  PhoneCall,
  Brain,
  Map,
  Car,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const metadata = {
  title: 'Client Spotlight: Swargaseema Real Estate CRM | Kpro Solutions',
  description:
    'Case study: WebRTC telephony, Google Gemini AI speech analytics, and 2D plot booking for Swargaseema Infra Developers.',
};

export default function SwargaseemaCaseStudyPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded border border-slate-200">
                <Image
                  src="/img/swargaseema-logo-official.png"
                  alt="Swargaseema Official Logo"
                  width={180}
                  height={45}
                  className="h-8 w-auto object-contain"
                  priority
                />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
                  Client Spotlight
                </span>
                <div className="text-xs font-semibold text-slate-700">
                  Swargaseema Infra Developers Pvt. Ltd.
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Production Deployment Active</span>
            </div>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Enterprise Real Estate Sales Platform &amp; Cloud Telephony Intelligence
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              Browser-native WebRTC softphone, Google Gemini AI speech analytics, and interactive 2D plot booking for Hyderabad&apos;s leading plotted real estate developer.
            </p>
          </div>

          {/* Client Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 mt-6 border-t border-slate-200 text-center sm:text-left">
            <div>
              <div className="text-2xl font-bold text-slate-900">20+ Yrs</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Industry Legacy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-blue">2,000+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Satisfied Families</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">500+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Acres Developed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">3x</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Faster Follow-up</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase: Client Team & Live CRM */}
      <section className="py-16 border-b border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Team Celebration */}
            <div className="lg:col-span-6 space-y-2">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-[16/11] bg-slate-100">
                <Image
                  src="/img/swargaseema-team.jpg"
                  alt="Swargaseema sales team in Hyderabad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="text-xs text-slate-500 flex items-center justify-between">
                <span>Sales and operations floor in Hyderabad</span>
                <span className="font-semibold text-slate-700">Project Vibhava</span>
              </div>
            </div>

            {/* Live CRM Interface */}
            <div className="lg:col-span-6 space-y-2">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-[16/11] bg-slate-100">
                <Image
                  src="/img/swargaseema-crm-landing.png"
                  alt="Swargaseema CRM portal interface"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="text-xs text-slate-500 flex items-center justify-between">
                <span>Integrated customer and admin CRM portal</span>
                <span className="font-semibold text-slate-700">Super Admin Cockpit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge & Solution */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="section-tag">The Business Challenge</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Eliminating Lead Decay &amp; Inventory Conflicts
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Swargaseema operates high-value plotted ventures across Hyderabad. Marketing inquiries from Meta, Google Ads, and real estate portals previously lacked centralized telephony recording and real-time inventory locking.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white p-6 rounded-lg border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Operational Bottlenecks Solved by Kpro
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-slate-900 mb-0.5">Unmonitored Telephony &amp; Delayed Follow-ups</div>
                  <div className="text-slate-600">Personal dialing eliminated audit trails. Inquiries sat uncontacted for hours, eroding conversion rates.</div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-slate-900 mb-0.5">Double Booking on Static Spreadsheets</div>
                  <div className="text-slate-600">Disconnected branches occasionally took tokens on the same corner plot, creating brand friction.</div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-slate-900 mb-0.5">Closed-Loop Marketing Attribution</div>
                  <div className="text-slate-600">Zero clarity on which ad campaign produced actual site visits and verified sale deeds.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Unified Solution Architecture */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <span className="section-tag">Engineered Solution</span>
            <h2 className="section-heading">Six Architectural Pillars</h2>
            <p className="section-subtext">
              Unified browser cockpit integrating cloud telephony, conversational AI, visual plot inventory, and chauffeur dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="card-flat p-6">
              <div className="w-10 h-10 rounded bg-blue-50 text-brand-blue flex items-center justify-center mb-4">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                1. WebRTC Cloud Softphone
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Browser-native dialer via Tata Smartflo PBX with zero desktop hardware, queue routing, and call recordings.
              </p>
              <div className="text-xs font-semibold text-brand-blue">
                Zero Hardware // Instant Disposition
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="card-flat p-6">
              <div className="w-10 h-10 rounded bg-blue-50 text-brand-blue flex items-center justify-center mb-4">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                2. Google Gemini Speech AI
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Call recordings automatically transcribed with speaker diarization, sentiment analysis, and buying intent scoring.
              </p>
              <div className="text-xs font-semibold text-brand-blue">
                Gemini AI // Intent Scoring (0-5)
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="card-flat p-6">
              <div className="w-10 h-10 rounded bg-blue-50 text-brand-blue flex items-center justify-center mb-4">
                <Map className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                3. Interactive 2D Plot Map
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Color-coded layout maps: Available (Green), Reserved (Blue), Sold (Slate) with real-time token locking.
              </p>
              <div className="text-xs font-semibold text-brand-blue">
                Real-Time Lock // Zero Overlaps
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="card-flat p-6">
              <div className="w-10 h-10 rounded bg-blue-50 text-brand-blue flex items-center justify-center mb-4">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                4. Chauffeur Fleet Logistics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Fleet dispatch coordination for buyer site visits with automated gate assignment and driver tracking.
              </p>
              <div className="text-xs font-semibold text-brand-blue">
                Fleet Dispatch // Site Gate Handover
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="card-flat p-6">
              <div className="w-10 h-10 rounded bg-blue-50 text-brand-blue flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                5. Closed-Loop Marketing ROI
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Virtual DIDs connect ad clicks directly to customer profiles, calls, site visits, and registered sale deeds.
              </p>
              <div className="text-xs font-semibold text-brand-blue">
                Meta &amp; Google Ads // True CAC
              </div>
            </div>

            {/* Pillar 6 */}
            <div className="card-flat p-6">
              <div className="w-10 h-10 rounded bg-blue-50 text-brand-blue flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                6. Telecom Blacklist &amp; Security
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Account-wide number blacklisting that deflects robocalls and fraudulent broker inquiries automatically.
              </p>
              <div className="text-xs font-semibold text-brand-blue">
                Carrier Whitelisting // Spam Shield
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Feedback */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="bg-white rounded-lg border border-slate-200 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                  Verified Client Outcome
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  &quot;Kpro&apos;s CRM transformed how our 25+ member floor operates across Hyderabad.&quot;
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Zero desk hardware, automated call scoring via Gemini AI, and live plot locking have streamlined our site-visit conversions with 100% predictability.
                </p>
                <div className="text-xs text-slate-500 pt-1">
                  <strong>Operations Leadership</strong> — Swargaseema Infra Developers Pvt. Ltd.
                </div>
              </div>

              <div className="lg:col-span-4 p-5 bg-slate-50 rounded border border-slate-200 text-center space-y-1">
                <div className="text-2xl font-bold text-brand-blue">0 Sec</div>
                <div className="text-xs font-semibold text-slate-700">Dial Latency with WebRTC</div>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                  Deployed under Kpro&apos;s True Fixed Cost Model.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy text-white border-t border-[#043345]">
        <div className="section-container text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
            Need an Operations &amp; Telephony CRM?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            Consult with Kpro architects for a fixed-cost scoping of your call center, dispatch, and inventory workflows.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-accent px-6 py-2.5 text-xs">
              Schedule Consultation
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white border border-[#04445c] hover:border-brand-teal hover:bg-white/5 rounded-md transition-colors"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
