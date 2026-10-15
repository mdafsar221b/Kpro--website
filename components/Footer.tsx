'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'newsletter',
          data: { reply_to: email },
        }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-brand-navy text-slate-300 border-t border-[#043345]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block p-2.5 bg-white rounded-lg hover:opacity-95 transition-opacity">
              <Image
                src="/img/logo.png"
                alt="Kpro Solutions — We Deliver Competitive Business Advantage"
                width={160}
                height={82}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Kpro Solutions Pvt. Ltd. delivers enterprise-grade Generative AI, Cloud &amp; DevOps modernization, Analytics, and IoT engineering under an outcomes-guaranteed True Fixed Cost Model since 2014.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <div className="flex items-center gap-2">
                  <a href="mailto:info@kpro.co.in" className="hover:text-white transition-colors">
                    info@kpro.co.in
                  </a>
                  <span>/</span>
                  <a href="mailto:sales@kpro.co.in" className="hover:text-white transition-colors">
                    sales@kpro.co.in
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://www.linkedin.com/company/kprosolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#032e3e] flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-orange transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.64 1.64 0 0 0-1.66 1.64 1.65 1.65 0 0 0 1.66 1.65 1.65 1.65 0 0 0 1.65-1.65c0-.91-.74-1.64-1.65-1.64Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/kprosolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#032e3e] flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-orange transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCcks4KEpT694r1Qj2gwTqyQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#032e3e] flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-orange transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/kpro.solutions.pvt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#032e3e] flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-orange transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              What We Do
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/capabilities#genai" className="hover:text-white transition-colors">
                  Generative AI &amp; LLMs
                </Link>
              </li>
              <li>
                <Link href="/capabilities#cloud" className="hover:text-white transition-colors">
                  Cloud &amp; DevOps
                </Link>
              </li>
              <li>
                <Link href="/capabilities#analytics" className="hover:text-white transition-colors">
                  Big Data Lakehouses
                </Link>
              </li>
              <li>
                <Link href="/capabilities#blockchain" className="hover:text-white transition-colors">
                  Blockchain &amp; Web3
                </Link>
              </li>
              <li>
                <Link href="/capabilities#iot" className="hover:text-white transition-colors">
                  IoT &amp; Edge Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Platforms */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Platforms &amp; Solutions
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/solutions#thirdeye" className="hover:text-white transition-colors">
                  ThirdEye AI Vision
                </Link>
              </li>
              <li>
                <Link href="/solutions#supplychain" className="hover:text-white transition-colors">
                  Supply Chain Optimization
                </Link>
              </li>
              <li>
                <Link href="/solutions/expense-and-audit" className="hover:text-white transition-colors">
                  Expense and Audit
                </Link>
              </li>
              <li>
                <Link href="/products#mentora" className="hover:text-white transition-colors">
                  Mentora Student Hub
                </Link>
              </li>
              <li>
                <Link href="/products#resumea" className="hover:text-white transition-colors">
                  Resumea ATS Architect
                </Link>
              </li>
              <li>
                <Link href="/products#hrhaat" className="hover:text-white transition-colors">
                  HRHaaT HCM Suite
                </Link>
              </li>
              <li>
                <Link href="/products#nyotainvite" className="hover:text-white transition-colors">
                  NyotaInvite RSVP
                </Link>
              </li>
              <li>
                <Link href="/products#buildmycv" className="hover:text-white transition-colors">
                  BuildMyCV Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Insights */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Executive Briefings
            </h3>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Quarterly enterprise insights on GenAI architectures and cloud modernization.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full px-3 py-2 bg-[#032a3a] border border-[#04445c] rounded-md text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-cyan focus:border-brand-cyan"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-md text-xs font-semibold transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span>Subscribing...</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
            {status === 'success' && (
              <p className="text-xs text-emerald-400 flex items-center gap-1 mt-2">
                <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed successfully.
              </p>
            )}
            {status === 'error' && (
              <p className="text-xs text-rose-400 mt-2">
                Unable to subscribe. Please try again.
              </p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#043345] flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Kpro Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about#fixed-cost" className="hover:text-slate-400 transition-colors">
              Fixed Cost Guarantee
            </Link>
            <Link href="/careers" className="hover:text-slate-400 transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
