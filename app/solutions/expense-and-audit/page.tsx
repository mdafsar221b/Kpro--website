import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2, CreditCard } from 'lucide-react';

export const metadata = {
  title: 'Expense and Audit | Kpro Solutions',
  description:
    'Autonomous pre-spend controls, 3-way reconciliation, and 100% pre-payment continuous forensic audit for enterprise finance organizations.',
};

export default function ExpenseAndAuditPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-brand-blue transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/solutions" className="hover:text-brand-blue transition-colors">
              Solutions
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Expense and Audit</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Enterprise Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Expense and Audit
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              Global enterprises managing high-volume travel and operational spend face systemic capital leakage from manual post-payment sampling. We architect end-to-end autonomous spend pipelines, transitioning finance teams to 100% pre-payment continuous forensic audit, real-time MCC terminal controls, and straight-through reconciliation.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/contact?subject=Expense and Audit Architecture"
                className="btn-primary text-xs inline-flex items-center gap-1.5"
              >
                <span>Schedule Architectural Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/solutions"
                className="btn-secondary text-xs inline-flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Enterprise Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Impact Metrics */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-3xl sm:text-4xl font-bold text-brand-blue">100%</div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Pre-Payment Audit</div>
              <div className="text-xs text-slate-500 mt-1">Continuous inspection across all claims before payout</div>
            </div>
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900">3-Way Match</div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Tri-Stream Ingestion</div>
              <div className="text-xs text-slate-500 mt-1">Itinerary + Card Feeds + Folio OCR models</div>
            </div>
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-3xl sm:text-4xl font-bold text-brand-blue">&lt; 2.4s</div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Line-Item Extraction</div>
              <div className="text-xs text-slate-500 mt-1">Sub-second receipt and hotel folio disaggregation</div>
            </div>
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900">Zero Leakage</div>
              <div className="text-sm font-semibold text-slate-900 mt-2">MCC Terminal Gating</div>
              <div className="text-xs text-slate-500 mt-1">Upstream policy enforcement at point of swipe</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core Architectural Pillars */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="section-container max-w-5xl">
          <div className="max-w-2xl mb-12">
            <span className="section-tag">Implementation Framework</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our 5-Pillar Architecture
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Engineered for Fortune 500 enterprises and multinational corporations to enforce compliance, eradicate fraud, and eliminate administrative bottlenecks.
            </p>
          </div>

          <div className="space-y-8">
            {/* Pillar 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-brand-blue font-mono font-bold text-base shrink-0">
                  01
                </span>
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Pre-Spend Controls and Policy Enforcement
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Traditional finance models review expenses after capital has cleared. We architect upstream pre-spend gating mechanisms to control cash outflows before transactions occur:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">Pre-Trip Approvals</div>
                      <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Enforces mandatory travel authorization workflows before tickets are booked, restricting bookings strictly to approved airline tiers and hotel classes.
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">Corporate Cards with MCC Controls</div>
                      <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Physical and virtual card provisioning (Amex CDF, Visa VCF, Mastercard) enforcing Merchant Category Code (MCC) blocking at payment terminals for unauthorized categories.
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">Dynamic Per Diem Calculators</div>
                      <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Automated statutory allowance engines mapped to US GSA, UK HMRC, and municipal tax standards, adjusting meal and lodging caps dynamically by destination tier.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-brand-blue font-mono font-bold text-base shrink-0">
                  02
                </span>
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Multi-Stream Ingestion and 3-Way Reconciliation
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Receipts are never audited in isolation. Our pipelines ingest and synchronize three distinct corporate data feeds in parallel:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">Travel Booking Itineraries</div>
                      <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Direct API ingestion from Online Booking Tools (OBT) such as Amadeus, Sabre, and corporate travel agencies with exact PNR records and fare classes.
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">Corporate Card Feeds</div>
                      <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Automated daily bank feeds delivering settlement timestamps, exact transaction currencies, interchange codes, and merchant metadata.
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">Receipts &amp; Hotel Folios</div>
                      <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Multimodal OCR vision models extracting vendor tax entities, itemized charge breakdowns, and applicable regional VAT/GST brackets.
                      </div>
                    </div>
                  </div>

                  {/* Matching Formula */}
                  <div className="p-4 bg-brand-navy rounded-md text-white text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="font-mono text-slate-300">Deterministic Match:</span>
                    <span className="font-mono font-semibold text-brand-orange text-center sm:text-left">
                      Booking Itinerary &hArr; Card Transaction &hArr; Receipt Folio
                    </span>
                    <span className="text-[11px] text-slate-400">Zero discrepancy tolerance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-brand-blue font-mono font-bold text-base shrink-0">
                  03
                </span>
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Straight-Through Processing (STP) vs. Exception Routing
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Eliminating managerial approval fatigue and routine rubber-stamping through intelligent, risk-tiered routing:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="p-5 bg-emerald-50/50 rounded-md border border-emerald-100">
                      <div className="text-sm font-bold text-emerald-900">Straight-Through Processing (Low Risk)</div>
                      <div className="text-xs text-slate-600 mt-2 leading-relaxed">
                        When transactions fall beneath configured spend limits, match card feeds precisely, and pass all algorithmic audit checks, they are approved and settled autonomously without human delay.
                      </div>
                    </div>
                    <div className="p-5 bg-amber-50/50 rounded-md border border-amber-100">
                      <div className="text-sm font-bold text-amber-900">Exception-Based Routing (Medium / High Risk)</div>
                      <div className="text-xs text-slate-600 mt-2 leading-relaxed">
                        Only claims flagged with policy variances, missing itemized folios, weekend/holiday anomalies, or elevated fraud risk scores are routed to line managers and financial controllers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-brand-blue font-mono font-bold text-base shrink-0">
                  04
                </span>
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      100% Pre-Payment Continuous AI Forensic Audit
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Replacing 5% post-facto sampling with continuous, 100% automated inspection applied before funds are disbursed:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-3.5 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">Cross-Employee Duplicates</div>
                      <div className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                        Detects identical receipts claimed simultaneously across multiple team members or across out-of-pocket and corporate card channels.
                      </div>
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">Hotel Folio Line Items</div>
                      <div className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                        Deep OCR breaks down complex multi-page hotel folios, isolating eligible room and tax charges from personal mini-bar, spa, or entertainment incidentals.
                      </div>
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">Tampering &amp; Forgery Checks</div>
                      <div className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                        Forensic image analytics identify altered dollar values, recycled legacy invoices, synthetic receipts, and invalid tax identifiers.
                      </div>
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">Anti-Bribery &amp; FCPA</div>
                      <div className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                        Automated entity screening of attendee lists against government official databases, PEP registries, and healthcare compliance guidelines.
                      </div>
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">VAT &amp; GST Reclamation</div>
                      <div className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                        Automated extraction and classification of input tax credits, split tax brackets, and cross-border invoicing compliance.
                      </div>
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-xs font-bold text-slate-900">Prohibited Item Detection</div>
                      <div className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                        Natural language semantic parsing of itemized meal bills to isolate alcohol, gift shop, or non-reimbursable purchases.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-brand-blue font-mono font-bold text-base shrink-0">
                  05
                </span>
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      ERP General Ledger Integration and Settlement
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Once audit clearance is achieved, transactions post automatically into enterprise financial backbones without manual journal entry:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="p-5 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-sm font-bold text-slate-900">Automated GL Allocation</div>
                      <div className="text-xs text-slate-600 mt-2 leading-relaxed">
                        Deterministic mapping to General Ledger accounts, cost centers, and project codes within SAP S/4HANA, Oracle Cloud ERP, and Workday Financials.
                      </div>
                    </div>
                    <div className="p-5 bg-slate-50 rounded-md border border-slate-100">
                      <div className="text-sm font-bold text-slate-900">Direct Payment Rails</div>
                      <div className="text-xs text-slate-600 mt-2 leading-relaxed">
                        Seamless execution of out-of-pocket employee reimbursements via corporate ACH/SEPA batch transfers, and direct balance clearing with corporate card issuers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark Comparison Table */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="section-container max-w-5xl">
          <div className="max-w-2xl mb-10">
            <span className="section-tag">Industry Benchmark</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Legacy Manual Audit vs. Modern Enterprise Architecture
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A side-by-side comparison illustrating why manual sampling creates vulnerability and how automated inspection closes the gap.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-semibold">
                  <th className="py-3.5 px-5">Capability</th>
                  <th className="py-3.5 px-5 text-slate-500">Legacy Approach</th>
                  <th className="py-3.5 px-5 text-brand-blue bg-blue-50/50">Modern Enterprise Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="py-3.5 px-5 font-semibold text-slate-900">Audit Coverage</td>
                  <td className="py-3.5 px-5 text-slate-500">5% to 10% post-payment sample</td>
                  <td className="py-3.5 px-5 font-medium text-slate-900 bg-blue-50/30">100% pre-payment continuous inspection</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-semibold text-slate-900">Review Method</td>
                  <td className="py-3.5 px-5 text-slate-500">Manual human inspection</td>
                  <td className="py-3.5 px-5 font-medium text-slate-900 bg-blue-50/30">AI OCR/vision models + automated exception routing</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-semibold text-slate-900">Card Integration</td>
                  <td className="py-3.5 px-5 text-slate-500">Manual statement reconciliation</td>
                  <td className="py-3.5 px-5 font-medium text-slate-900 bg-blue-50/30">Real-time direct bank feeds with MCC gating</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-semibold text-slate-900">Receipt Verification</td>
                  <td className="py-3.5 px-5 text-slate-500">Total amount check only</td>
                  <td className="py-3.5 px-5 font-medium text-slate-900 bg-blue-50/30">Line-item disaggregation (hotel folios, alcohol)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-semibold text-slate-900">Duplicate Check</td>
                  <td className="py-3.5 px-5 text-slate-500">Single employee history only</td>
                  <td className="py-3.5 px-5 font-medium text-slate-900 bg-blue-50/30">Cross-employee and cross-period forensic matching</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-semibold text-slate-900">Approval Flow</td>
                  <td className="py-3.5 px-5 text-slate-500">Linear (every claim reviewed manually)</td>
                  <td className="py-3.5 px-5 font-medium text-slate-900 bg-blue-50/30">Straight-through processing for verified spend</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Architecture CTA */}
      <section className="py-20 bg-brand-navy text-white border-t border-[#043345]">
        <div className="section-container text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Architecting Expense and Audit for Your Enterprise?
          </h2>
          <p className="text-sm text-slate-300 mb-8 leading-relaxed">
            Speak directly with Kpro engineering leads about custom ERP connector integration, policy rule engine design, and automated deployment timelines under our True Fixed Cost delivery guarantee.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?subject=Expense and Audit Architecture"
              className="btn-accent px-8 py-3 text-sm"
            >
              Schedule Technical Discovery Call
            </Link>
            <Link
              href="/solutions"
              className="px-6 py-3 rounded-md border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 text-sm font-medium transition-colors"
            >
              Explore Other Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
