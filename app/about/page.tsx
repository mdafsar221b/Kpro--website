import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Target,
  Users,
} from 'lucide-react';
import ClientsSection from '@/components/ClientsSection';

export const metadata = {
  title: 'About Us | We Architect Enterprise Progress Since 2014',
  description:
    'Learn about Kpro Solutions: Executive board, engineering legacy, core principles, and the True Fixed Cost Model.',
};

const LEADERS: {
  name: string;
  role: string;
  initials: string;
  description: string;
  image: string | null;
  linkedin: string;
}[] = [
  {
    name: 'Alok Ranjan Ojha',
    role: 'Founder & Director',
    initials: 'AO',
    description: 'Corporate vision, strategic growth alliances, and high-impact delivery execution.',
    image: '/img/alok-ranjan.png',
    linkedin: 'https://www.linkedin.com/in/alok-ranjan-ojha/',
  },
  {
    name: 'Bharat Shetty',
    role: 'Director & Co-Founder',
    initials: 'BS',
    description: 'Global operations, client engagement lifecycles, and outcome governance.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/bharatshetty/',
  },
  {
    name: 'Rupak Sriwastwa',
    role: 'Director & Co-Founder',
    initials: 'RS',
    description: 'Data lakehouses, big data streaming pipelines, and cloud automation.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/rupaksriwastwa/',
  },
  {
    name: 'Sushma Shukla',
    role: 'Director of HR',
    initials: 'SS',
    description: 'Talent acquisition, engineering team development, and academy operations.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/sushma-shukla-804b0a165/',
  },
  {
    name: 'Priti Kumari',
    role: 'HR Leader',
    initials: 'PK',
    description: 'Talent acquisition, human capital strategy, and engineering team operations.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/priti-kumari-3b6b9b391/',
  },
  {
    name: 'Smita Kashyap',
    role: 'Director of Finance',
    initials: 'SK',
    description: 'Enterprise accounting, financial scoping predictability, and budget models.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/smita-kashyap-b24935282/',
  },
  {
    name: 'Ritu Raj',
    role: 'Director of Analytics',
    initials: 'RR',
    description: 'Time-series forecasts, computer vision algorithms, and predictive ML systems.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/ritu-raj-3a001b34b/',
  },
  {
    name: 'Priyanka Shukla',
    role: 'Director of SaaS Products',
    initials: 'PS',
    description: 'Product lifecycles, ATS profiling engines, and web portal architecture.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/priyanka-shukla-buildmycv/',
  },
];

const ENGINEERING_LEADS: {
  name: string;
  role: string;
  initials: string;
  description: string;
  image: string | null;
  linkedin: string;
}[] = [
  {
    name: 'Md Afsar',
    role: 'Full Stack Engineer',
    initials: 'MA',
    description: 'Architecting enterprise web portals, micro-frontends, high-concurrency client platforms, and SaaS products.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/md-afsar-b13782270/',
  },
  {
    name: 'Krupali Atkari',
    role: 'Full Stack Engineer',
    initials: 'KA',
    description: 'Specializing in modular UI component systems, interactive client dashboards, and responsive web platforms.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/krupali-atkari-7a7761208/',
  },
  {
    name: 'Nitesh Kumar Singh',
    role: 'Cloud & DevOps Engineer',
    initials: 'NS',
    description: 'Continuous integration workflows, automated deployment pipelines, Kubernetes orchestration, and cloud reliability.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/nitesh-kumar-singh-372a9521a/',
  },
];

const TIMELINE = [
  {
    year: '2014',
    title: 'Company Founded',
    description: 'Kpro Solutions incorporated in Bengaluru focusing on custom analytics and database engineering.',
  },
  {
    year: '2016',
    title: 'Big Data & IoT Integration',
    description: 'Scaled real-time streaming pipelines and edge sensor telemetry integrations.',
  },
  {
    year: '2019',
    title: 'Proprietary Solutions Launch',
    description: 'Released ThirdEye AI vision tool, Supply Chain Analytics, and Threat Analytics UEBA.',
  },
  {
    year: '2022',
    title: 'Decentralized Ledgers Expansion',
    description: 'Integrated enterprise blockchain architecture services for banking and logistics clients.',
  },
  {
    year: '2026',
    title: 'Renovation & Global Delivery',
    description: 'Modernized SaaS products (Mentora, NyotaInvite, Resumea, HRHaaT, BuildMyCV) and scaled GenAI.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="section-tag">Our Identity</span>
            <h1 className="section-heading">Applied Mathematics &amp; Enterprise Intelligence</h1>
            <p className="section-subtext">
              Engineering consultancy rooted in data science, predictive modeling, and scalable software architectures since 2014.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Metrics Bar */}
      <section className="py-10 border-b border-slate-200 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
            <div className="p-4 rounded-md bg-slate-50 border border-slate-200">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">10+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Years of Analytics Depth</div>
            </div>
            <div className="p-4 rounded-md bg-slate-50 border border-slate-200">
              <div className="text-2xl sm:text-3xl font-bold text-brand-blue">50+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Engagements Delivered</div>
            </div>
            <div className="p-4 rounded-md bg-slate-50 border border-slate-200">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">100M+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Daily Telemetry Events</div>
            </div>
            <div className="p-4 rounded-md bg-slate-50 border border-slate-200">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600">100%</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Fixed Cost Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Kpro Philosophy & Principles */}
      <section className="py-20 border-b border-slate-200 bg-white">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <span className="section-tag">Our Principles</span>
            <h2 className="section-heading">The Kpro Philosophy</h2>
            <p className="section-subtext">
              Mathematical rigor, predictable financials, and deep data insight with complete transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-flat p-6">
              <div className="w-10 h-10 rounded bg-brand-blue-light text-brand-blue flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Mathematical Accountability
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard-compliant code with modular designs and full IP ownership transfer without vendor lock-in.
              </p>
            </div>

            <div className="card-flat p-6">
              <div className="w-10 h-10 rounded bg-brand-blue-light text-brand-blue flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Outcome-Focused Scoping
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scoping criteria tethered directly to measurable business ROI rather than billable hourly increments.
              </p>
            </div>

            <div className="card-flat p-6">
              <div className="w-10 h-10 rounded bg-brand-blue-light text-brand-blue flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Embedded Partnership
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamless collaboration with internal client teams ensuring knowledge transfer and long-term autonomy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Model - True Fixed Cost */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="fixed-cost">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <span className="section-tag">Engagement Model</span>
            <h2 className="section-heading">The True Fixed Cost Model</h2>
            <p className="section-subtext">
              Guaranteed milestone deliverables with zero hourly billing surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-flat p-6">
              <div className="text-[11px] font-bold uppercase tracking-wider text-brand-blue mb-1">Pillar 1</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Risk Absorption</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kpro absorbs unexpected sprint complexities, safeguarding the client from scope creep expenses.
              </p>
            </div>

            <div className="card-flat p-6">
              <div className="text-[11px] font-bold uppercase tracking-wider text-brand-blue mb-1">Pillar 2</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Milestone Discipline</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Timeline commitments aligned with chronological milestone sign-offs and zero schedule slip.
              </p>
            </div>

            <div className="card-flat p-6">
              <div className="text-[11px] font-bold uppercase tracking-wider text-brand-blue mb-1">Pillar 3</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Measurable ROI</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Functional specifications defined upfront so leadership can calculate exact commercial returns.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="btn-primary text-xs px-6 py-2.5">
              Discuss Your Scoping Needs
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 border-b border-slate-200 bg-white" id="leadership">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <span className="section-tag">Our Leadership</span>
            <h2 className="section-heading">Executive Board &amp; Directors</h2>
            <p className="section-subtext">
              Technologists, strategists, and domain leaders guiding enterprise delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LEADERS.map((leader) => (
              <div
                key={leader.name}
                className="card-flat overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-52 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200/90 select-none">
                    {leader.image ? (
                      <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-sm border-2 border-white shrink-0">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          sizes="80px"
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-slate-900 text-white font-bold text-xl flex items-center justify-center shadow-sm border-2 border-white tracking-wider shrink-0">
                        {leader.initials}
                      </div>
                    )}
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mt-2.5">
                      Leadership
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-bold text-slate-900">
                      {leader.name}
                    </h3>
                    <div className="text-[11px] font-semibold text-brand-blue uppercase tracking-wider mt-0.5">
                      {leader.role}
                    </div>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {leader.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-2 border-t border-slate-100">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-brand-blue transition-colors font-medium"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.64 1.64 0 0 0-1.66 1.64 1.65 1.65 0 0 0 1.66 1.65 1.65 1.65 0 0 0 1.65-1.65c0-.91-.74-1.64-1.65-1.64Z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Technical & Engineering Leads */}
          <div className="max-w-2xl mt-16 mb-10">
            <span className="section-tag">Engineering Core</span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Technical &amp; Engineering Leads
            </h3>
            <p className="section-subtext">
              Engineers and architects driving client implementations, cloud DevOps, and proprietary platform development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ENGINEERING_LEADS.map((member) => (
              <div
                key={member.name}
                className="card-flat overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-52 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200/90 select-none">
                    {member.image ? (
                      <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-sm border-2 border-white shrink-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="80px"
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-slate-900 text-white font-bold text-xl flex items-center justify-center shadow-sm border-2 border-white tracking-wider shrink-0">
                        {member.initials}
                      </div>
                    )}
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mt-2.5">
                      Engineering
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-bold text-slate-900">
                      {member.name}
                    </h3>
                    <div className="text-[11px] font-semibold text-brand-blue uppercase tracking-wider mt-0.5">
                      {member.role}
                    </div>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-2 border-t border-slate-100">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-brand-blue transition-colors font-medium"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.64 1.64 0 0 0-1.66 1.64 1.65 1.65 0 0 0 1.66 1.65 1.65 1.65 0 0 0 1.65-1.65c0-.91-.74-1.64-1.65-1.64Z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Clients & Deliverables Showcase */}
      <ClientsSection id="about-clients" />

      {/* Corporate Timeline */}
      <section className="py-20 bg-white border-b border-slate-200" id="timeline">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-heading">Corporate Milestones</h2>
            <p className="section-subtext">
              A decade of steady architectural expansion and product innovation since 2014.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 space-y-8">
            {TIMELINE.map((item) => (
              <div key={item.year} className="relative pl-6 sm:pl-8">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-brand-blue border-2 border-white" />
                <div className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-brand-blue-light text-brand-blue mb-1">
                  {item.year}
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Call To Action */}
      <section className="py-16 bg-brand-navy text-white border-t border-[#043345]">
        <div className="section-container text-center max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
            Transform With Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1.5 mb-3 tracking-tight">
            Ready to Build with Kpro?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            Partner with us for guaranteed fixed-cost digital engineering and cloud modernization.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-accent px-6 py-2.5 text-xs">
              Schedule Consultation
            </Link>
            <Link href="/products" className="btn-secondary text-xs px-5 py-2.5">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
