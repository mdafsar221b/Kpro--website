'use client';

import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export default function TrainingScopingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [audience, setAudience] = useState('Enterprise Engineering Team');
  const [batchSize, setBatchSize] = useState('15 - 30 Engineers');
  const [notes, setNotes] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'training',
          data: {
            from_name: name,
            reply_to: email,
            phone,
            organization: org,
            audience,
            batch_size: batchSize,
            message: notes,
          },
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg('Failed to submit training scoping request. Please email sales@kpro.co.in directly.');
      }
    } catch {
      setErrorMsg('Network error. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-8 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Curriculum Scoping Request Received</h3>
        <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
          An academy director will review your cohort requirements and reach out to <strong>{email}</strong> within 24 hours with custom syllabus options and scheduling timelines.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setName('');
            setEmail('');
            setPhone('');
            setOrg('');
            setNotes('');
          }}
          className="btn-secondary text-xs mt-2"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 mb-1">Coordinator / Lead Name *</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-blue"
          />
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-1">Corporate / Institution Email *</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-blue"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 mb-1">Contact Phone Number *</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-blue"
          />
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-1">Company / University Name *</label>
          <input
            type="text"
            required
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            placeholder="Enterprise Corp or Tech Institute"
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-blue"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 mb-1">Target Audience Profile</label>
          <select
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-blue"
          >
            <option value="Enterprise Engineering Team">Enterprise Engineering Team (Mid-Senior)</option>
            <option value="Cloud & Infrastructure Architects">Cloud &amp; Infrastructure Architects</option>
            <option value="Data & Analytics Practitioners">Data &amp; Analytics Practitioners</option>
            <option value="University Undergraduate Engineering">University / College Students</option>
            <option value="Executive Technology Leaders">Executive Technology Leaders</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-1">Expected Cohort / Batch Size</label>
          <select
            value={batchSize}
            onChange={(e) => setBatchSize(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-blue"
          >
            <option value="10 - 25 Cohort">10 - 25 Engineers</option>
            <option value="25 - 50 Cohort">25 - 50 Engineers</option>
            <option value="50 - 100+ Cohort">50 - 100+ Cohort</option>
            <option value="Custom Enterprise Workshop">Custom Enterprise Workshop</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block font-semibold text-slate-700 mb-1">Curriculum Focus &amp; Requirements *</label>
        <textarea
          rows={4}
          required
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Specify technologies, timeline expectations, or skill outcomes required..."
          className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-blue"
        />
      </div>

      {errorMsg && (
        <p className="text-xs text-rose-600 bg-rose-50 p-2.5 rounded border border-rose-200">
          {errorMsg}
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary text-xs w-full py-2.5"
        >
          {submitting ? 'Transmitting Scoping Request...' : 'Submit Scoping Request'}
        </button>
      </div>
    </form>
  );
}
