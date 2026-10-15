'use client';

import { useState } from 'react';
import { Search, MapPin, Briefcase, Clock, CheckCircle2, X, Send } from 'lucide-react';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  skills: string[];
  description: string;
}

const JOBS: JobOpening[] = [
  {
    id: 'genai-architect',
    title: 'Lead Generative AI Architect',
    department: 'Artificial Intelligence',
    location: 'Bengaluru (Hybrid)',
    type: 'Full-time',
    experience: '6-10 Years',
    skills: ['LangChain', 'LlamaIndex', 'Vector Databases', 'PyTorch', 'vLLM'],
    description:
      'Lead design and deployment of enterprise RAG pipelines, fine-tune open weights LLMs, and architect autonomous agent frameworks.',
  },
  {
    id: 'cloud-devsecops',
    title: 'Senior Cloud & Kubernetes Engineer',
    department: 'Cloud & Infrastructure',
    location: 'Bengaluru (Hybrid)',
    type: 'Full-time',
    experience: '4-8 Years',
    skills: ['Kubernetes', 'Terraform', 'AWS/GCP', 'ArgoCD', 'Prometheus'],
    description:
      'Manage multi-cloud Kubernetes clusters, automate GitOps deployments, and implement zero-trust network infrastructure.',
  },
  {
    id: 'data-lakehouse',
    title: 'Senior Big Data & Lakehouse Engineer',
    department: 'Data & Analytics',
    location: 'Bengaluru (Hybrid)',
    type: 'Full-time',
    experience: '5-9 Years',
    skills: ['Apache Spark', 'Kafka', 'Databricks', 'Delta Lake', 'dbt'],
    description:
      'Build low-latency streaming ingestion pipelines, design medallion data architectures, and ensure data governance standards.',
  },
  {
    id: 'edge-iot-lead',
    title: 'Embedded IoT & Edge Systems Engineer',
    department: 'IoT & Hardware',
    location: 'Bengaluru (On-site)',
    type: 'Full-time',
    experience: '3-7 Years',
    skills: ['C/C++', 'MQTT', 'TensorRT Edge', 'FreeRTOS', 'Linux Embedded'],
    description:
      'Develop edge sensor telemetry firmware, interface with industrial OPC-UA gateways, and deploy optimized neural models on edge chips.',
  },
  {
    id: 'fullstack-engineer',
    title: 'Senior Full Stack Systems Engineer',
    department: 'Software Engineering',
    location: 'Bengaluru (Hybrid)',
    type: 'Full-time',
    experience: '4-7 Years',
    skills: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'],
    description:
      'Build mission-critical web applications, intuitive dashboards, and resilient API microservices for enterprise clients.',
  },
];

export default function CareersPortal() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [note, setNote] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const departments = ['All', 'Artificial Intelligence', 'Cloud & Infrastructure', 'Data & Analytics', 'IoT & Hardware', 'Software Engineering'];

  const filteredJobs = JOBS.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDept = selectedDept === 'All' || job.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    setSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'careers',
          data: {
            from_name: name,
            reply_to: email,
            job_title: selectedJob.title,
            portfolio,
            message: note,
          },
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError('Unable to submit application. Please email careers@kpro.co.in directly.');
      }
    } catch {
      setSubmitError('Network error. Please try again or email careers@kpro.co.in.');
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = () => {
    setSelectedJob(null);
    setSubmitted(false);
    setName('');
    setEmail('');
    setPortfolio('');
    setNote('');
    setSubmitError('');
  };

  return (
    <div>
      {/* Search and Filters Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 sm:p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by role title, keyword, or technology (e.g. Kubernetes, RAG, PyTorch)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue"
            />
          </div>

          <div className="md:col-span-4">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === 'All' ? 'All Practice Areas' : dept}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filteredJobs.length} active positions</span>
          <span>Engineering Center: Bengaluru, India</span>
        </div>
      </div>

      {/* Jobs Listing Grid */}
      <div className="space-y-4">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-sm font-medium text-slate-600">No active openings match your filter query.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDept('All');
              }}
              className="mt-3 text-xs text-brand-blue font-semibold hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 hover:border-slate-400 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-50 text-brand-blue">
                    {job.department}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.location}</span>
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.experience}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="btn-primary text-xs w-full sm:w-auto"
                >
                  Apply for Position
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl border border-slate-300 max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                  Candidate Application
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {selectedJob.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Application Submitted</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                  Thank you for applying. Our talent acquisition team will review your profile and contact you directly via corporate email.
                </p>
                <div className="pt-4">
                  <button onClick={closeModal} className="btn-secondary text-xs">
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Corporate / Contact Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">LinkedIn or CV/Portfolio URL *</label>
                  <input
                    type="url"
                    required
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    placeholder="https://linkedin.com/in/username or portfolio link"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Summary Note / Relevant Engineering Impact *</label>
                  <textarea
                    rows={4}
                    required
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Briefly describe your production engineering achievements..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  />
                </div>

                {submitError && (
                  <p className="text-xs text-rose-600 bg-rose-50 p-2.5 rounded border border-rose-200">
                    {submitError}
                  </p>
                )}

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="btn-secondary text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary text-xs"
                  >
                    {submitting ? 'Transmitting...' : 'Submit Candidate Application'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
