import Image from 'next/image';
import Link from 'next/link';
import { Eye, Truck, ShieldAlert, CreditCard, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Enterprise Solutions | Expense and Audit, ThirdEye Vision, Supply Chain, and UEBA',
  description:
    'Explore Kpro signature enterprise solutions: Expense and Audit, ThirdEye edge computer vision, Supply Chain optimization solvers, and UEBA security analytics.',
};

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Signature Industry Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
              Purpose-Engineered Enterprise Solutions
            </h1>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Domain platforms combining computer vision, supply chain solvers, and zero-trust security analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Deep-Dive Solution 1: ThirdEye AI */}
      <section className="py-24 border-b border-slate-200" id="thirdeye">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-light text-brand-blue text-xs font-semibold">
                <Eye className="w-3.5 h-3.5" />
                <span>Industrial Computer Vision</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                ThirdEye AI: Real-Time Assembly Defect Inspection
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Edge computer vision processing 4K optical streams at 60 FPS to detect manufacturing micro-defects with sub-15ms latency.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div>
                  <div className="text-2xl font-bold text-brand-blue">99.8%</div>
                  <div className="text-xs text-slate-500 mt-1">Defect Detection Precision</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">&lt; 15ms</div>
                  <div className="text-xs text-slate-500 mt-1">Edge Inference Latency</div>
                </div>
              </div>

              <div>
                <Link href="/contact?subject=ThirdEye AI" className="btn-primary text-xs">
                  Request ThirdEye Architecture Brief
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                alt="Automated industrial manufacturing assembly line with optical sensors"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Solution 2: Supply Chain */}
      <section className="py-24 bg-slate-50 border-b border-slate-200" id="supplychain">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                alt="Modern automated logistics and distribution warehouse"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold">
                <Truck className="w-3.5 h-3.5" />
                <span>Logistics &amp; Operations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                SupplyChain ML: Predictive Rebalancing Solver
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Mixed-integer linear programming and demand forecasting to recalculate safety stock and routes dynamically.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                <div>
                  <div className="text-2xl font-bold text-brand-blue">22%</div>
                  <div className="text-xs text-slate-500 mt-1">Carrying Cost Savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">99.4%</div>
                  <div className="text-xs text-slate-500 mt-1">Order Fulfillment SLA</div>
                </div>
              </div>

              <div>
                <Link href="/contact?subject=Supply Chain Optimization" className="btn-primary text-xs">
                  Schedule Solver Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Solution 3: UEBA */}
      <section className="py-24 border-b border-slate-200" id="ueba">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Zero-Trust Cybersecurity</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                UEBA Security: Internal Threat Analytics
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Behavioral anomaly detection across endpoints and cloud access tokens with automated quarantine in under 3 seconds.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div>
                  <div className="text-2xl font-bold text-brand-blue">&lt; 3 sec</div>
                  <div className="text-xs text-slate-500 mt-1">Automated Anomaly Quarantine</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">Zero</div>
                  <div className="text-xs text-slate-500 mt-1">False-Positive Disruptions</div>
                </div>
              </div>

              <div>
                <Link href="/contact?subject=UEBA Security" className="btn-primary text-xs">
                  Consult With Security Architect
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80"
                alt="Cybersecurity operations center with analysts monitoring threat perimeters"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Architecture: Expense and Audit */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Enterprise Solutions</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Expense and Audit
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Autonomous 3-way reconciliation, MCC card terminal controls, and 100% pre-payment continuous forensic audit for global finance organizations.
              </p>
            </div>
            <Link
              href="/solutions/expense-and-audit"
              className="btn-primary text-xs shrink-0 inline-flex items-center gap-2 self-start lg:self-center"
            >
              <span>Explore Expense and Audit Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Discovery CTA */}
      <section className="py-20 bg-brand-navy text-white border-t border-[#043345]">
        <div className="section-container text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Evaluate Solutions for Your Organization
          </h2>
          <p className="text-sm text-slate-300 mb-8 leading-relaxed">
            Connect with our solutions architects for technical deep-dives, hardware requirements, and deployment timelines.
          </p>
          <Link href="/contact" className="btn-accent px-8 py-3 text-sm">
            Schedule Technical Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
