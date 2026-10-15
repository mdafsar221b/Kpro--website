import { Suspense } from 'react';
import Image from 'next/image';
import { Mail, MapPin, Clock, Phone, ShieldCheck } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Enterprise Architectural Discovery',
  description:
    'Schedule an architectural discovery session with Kpro Solutions in Bengaluru. Get a guaranteed fixed-cost proposal for your enterprise software initiative.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Direct Architecture Consultation
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
              Connect With Our Lead Architects
            </h1>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              We respond to all enterprise scoping inquiries within 24 business hours with initial feasibility findings.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact & Location Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  Engineering Headquarters
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Core engineering squads operating from Bengaluru, collaborating across global client time zones.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Registered Office</div>
                    <div className="text-slate-600 mt-1 leading-relaxed">
                      Kpro Solutions Pvt. Ltd.<br />
                      Bengaluru, Karnataka 560068, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Direct Commercial Contact</div>
                    <a
                      href="mailto:sales@kpro.co.in"
                      className="text-brand-blue font-semibold hover:underline mt-1 block"
                    >
                      sales@kpro.co.in
                    </a>
                    <div className="text-slate-500 mt-0.5 text-[11px]">
                      General inquiries &amp; RFP submissions
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Service Level Agreement</div>
                    <div className="text-slate-600 mt-1">
                      &lt; 24 business hours response time guarantee
                    </div>
                  </div>
                </div>
              </div>

              {/* Facility imagery */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
                  alt="Bengaluru technology office workspace and engineering hub"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Form & FAQ Column */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 text-center text-xs text-slate-400">Loading inquiry form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
