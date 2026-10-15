'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Send, HelpCircle, ChevronDown, Search } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: 'Commercial Model',
    question: 'How does the True Fixed Cost Model guarantee zero billing surprises?',
    answer:
      'Before contract execution, our principal architects conduct a comprehensive technical scoping to document all functional requirements, data schemas, and edge dependencies. We commit to a binding, fixed price for the entire scope. If engineering takes longer than anticipated, Kpro absorbs 100% of the cost overrun.',
  },
  {
    category: 'Intellectual Property',
    question: 'Who retains ownership of the codebase and intellectual property?',
    answer:
      'The client owns 100% of all software, models, infrastructure-as-code scripts, and documentation developed during the engagement. Full repository access and deployment documentation transition to your team at milestone signoff.',
  },
  {
    category: 'Generative AI',
    question: 'Can Kpro deploy Generative AI systems on private VPCs or on-premise?',
    answer:
      'Yes. We specialize in private, air-gapped, and sovereign cloud deployments of open-weights models (such as Llama, DeepSeek, and Mistral). Your proprietary data is never used for external model training.',
  },
  {
    category: 'Delivery',
    question: 'What is the typical engagement timeline from discovery to kickoff?',
    answer:
      'Architectural discovery typically requires 3 to 7 business days. Upon milestone signoff and mutual contract execution, engineering squads deploy within 10 to 14 business days.',
  },
  {
    category: 'Operations',
    question: 'Where is Kpro located, and do you serve international clients?',
    answer:
      'Kpro Solutions is headquartered in Bengaluru, Karnataka, India. We actively support enterprise clients across North America, Europe, the Middle East, and the Asia-Pacific region.',
  },
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get('subject') || 'Generative AI & LLMs';

  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // FAQ Search & Accordion
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const s = searchParams.get('subject');
    if (s) setSubject(s);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          data: {
            name,
            organization: org,
            reply_to: email,
            subject,
            message,
          },
        }),
      });

      if (res.ok) {
        setTicketId(`KPRO-${Math.floor(10000 + Math.random() * 90000)}`);
        setSubmitted(true);
      } else {
        setErrorMsg('Failed to transmit inquiry. Please email sales@kpro.co.in directly.');
      }
    } catch {
      setErrorMsg('Network error. Please try again or email sales@kpro.co.in.');
    } finally {
      setSubmitting(false);
    }
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="space-y-16">
      {/* Contact Form Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10">
        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Inquiry Dispatched Successfully
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your inquiry has been registered under reference <strong>{ticketId}</strong>. A principal architect will review your project parameters and respond to <strong>{email}</strong> within 24 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setName('');
                setOrg('');
                setEmail('');
                setMessage('');
              }}
              className="btn-secondary text-xs mt-2"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">
                  Organization / Company *
                </label>
                <input
                  type="text"
                  required
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="Enterprise Corporation"
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane.smith@company.com"
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">
                  Primary Practice Area *
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
                >
                  <option value="Generative AI & LLMs">Generative AI &amp; LLMs</option>
                  <option value="Cloud & DevOps Modernization">Cloud &amp; DevOps Modernization</option>
                  <option value="Analytics & Big Data Lakehouse">Analytics &amp; Big Data Lakehouse</option>
                  <option value="Blockchain & Ledger Systems">Blockchain &amp; Ledger Systems</option>
                  <option value="IoT & Industrial Edge">IoT &amp; Industrial Edge</option>
                  <option value="ThirdEye AI Solution">ThirdEye AI Vision</option>
                  <option value="Supply Chain Optimization">Supply Chain Optimization</option>
                  <option value="UEBA Threat Security">UEBA Threat Security</option>
                  <option value="Enterprise Training Scoping">Enterprise Training Scoping</option>
                  <option value="General Commercial Inquiry">General Commercial Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">
                Project Scope, Timelines &amp; Requirements *
              </label>
              <textarea
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Outline current architecture challenges, expected deliverables, or timeline constraints..."
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-rose-600 bg-rose-50 p-3 rounded border border-rose-200">
                {errorMsg}
              </p>
            )}

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                Strict confidentiality enforced. NDA available upon request.
              </span>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary text-sm px-6 py-2.5"
              >
                {submitting ? 'Transmitting...' : 'Dispatch Scoping Request'}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Searchable Enterprise FAQ Accordion */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 sm:p-10">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
            Frequently Addressed Questions
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Commercial &amp; Architectural FAQs
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Common questions regarding our contracting methodology, intellectual property governance, and technical onboarding.
          </p>

          <div className="mt-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search FAQs by topic or keyword..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-md text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>
        </div>

        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-brand-blue' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
