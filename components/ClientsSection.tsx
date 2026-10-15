import Image from 'next/image';

export interface ClientItem {
  name: string;
  clientDetail?: string;
  deliverable: string;
  category: string;
  logo: string;
}

export const CLIENTS: ClientItem[] = [
  {
    name: 'Swargaseema',
    clientDetail: 'Sandalwood Farms Pvt. Ltd.',
    deliverable: 'Complete CRM and Enterprise ERP Solutions',
    category: 'Real Estate & Agriculture',
    logo: '/img/clients/swargaseema.png',
  },
  {
    name: 'Daimler',
    deliverable: 'Part-level Forecasting and Safety Stock',
    category: 'Automotive & Supply Chain',
    logo: '/img/clients/daimler.png',
  },
  {
    name: 'Daimler Fuso',
    deliverable: 'End-to-End Supply Chain Analytics',
    category: 'Commercial Vehicles',
    logo: '/img/clients/daimler-fuso.png',
  },
  {
    name: 'Toyota',
    deliverable: 'End Customer Segmentation and Customer Experience',
    category: 'Automotive & Mobility',
    logo: '/img/clients/toyota.png',
  },
  {
    name: 'Mahindra & Mahindra',
    deliverable: 'Real-time Roadside Assistance Mobile App',
    category: 'Automotive & Telematics',
    logo: '/img/clients/mahindra.png',
  },
  {
    name: 'Kotak Mahindra Bank',
    deliverable: 'Analytics on Real-time Transaction for Fraud & Anomaly Detection',
    category: 'Banking & Fintech',
    logo: '/img/clients/kotak.png',
  },
  {
    name: 'Standard Chartered',
    deliverable: 'Churn Analytics and Inactive Customer Activation',
    category: 'Global Banking',
    logo: '/img/clients/standard-chartered.png',
  },
  {
    name: 'BNY Mellon',
    deliverable: 'Application CR Management & Decommissioning of Tool',
    category: 'Investment Banking',
    logo: '/img/clients/bny-mellon.png',
  },
  {
    name: 'e4e',
    deliverable: 'Customer Behavior Analytics and Recommendations',
    category: 'Enterprise BPO Services',
    logo: '/img/clients/e4e.png',
  },
  {
    name: 'Smart City Mission',
    clientDetail: 'Asansol Municipal Corporation',
    deliverable: 'Smart City Municipal Governance Platform',
    category: 'Urban Tech & Governance',
    logo: '/img/clients/smart-city.png',
  },
  {
    name: 'Government of Rajasthan',
    deliverable: 'Enterprise Security Implementation',
    category: 'Public Sector & State Governance',
    logo: '/img/clients/rajasthan-govt.png',
  },
  {
    name: 'Ayushman Initiative',
    clientDetail: 'Initiative for Child Rights',
    deliverable: 'Complete Digital Platform and CRM Applications',
    category: 'Non-Profit & Social Impact',
    logo: '/img/clients/ayushman.png',
  },
];

interface ClientsSectionProps {
  id?: string;
  className?: string;
  showHeading?: boolean;
}

export default function ClientsSection({
  id = 'clients',
  className = '',
  showHeading = true,
}: ClientsSectionProps) {
  return (
    <section id={id} className={`py-20 bg-slate-50 border-b border-slate-200 ${className}`}>
      <div className="section-container">
        {showHeading && (
          <div className="max-w-2xl mb-12">
            <span className="section-tag">Enterprise Portfolio</span>
            <h2 className="section-heading">Our Enterprise Clients</h2>
            <p className="section-subtext">
              Production engineering deliveries across global automotive leaders, premier banks, and public institutions.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="card-flat overflow-hidden flex flex-col justify-between p-0 border border-slate-200 bg-white hover:border-brand-blue/40 transition-colors shadow-sm"
            >
              {/* Deliverable Scope Banner */}
              <div className="bg-slate-900 text-white p-4 border-b border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange block mb-1">
                  {client.category}
                </span>
                <h3 className="text-xs font-semibold text-slate-100 leading-snug line-clamp-2 min-h-[32px]">
                  {client.deliverable}
                </h3>
              </div>

              {/* Client Logo Canvas */}
              <div className="px-5 py-6 bg-white flex items-center justify-center min-h-[110px] relative">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={220}
                  height={75}
                  className="max-h-14 w-auto max-w-[90%] object-contain"
                />
              </div>

              {/* Client Name & Detail Footer */}
              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-slate-700">
                <span className="text-xs font-bold truncate">{client.name}</span>
                {client.clientDetail && (
                  <span className="text-[10px] text-slate-500 truncate max-w-[130px] ml-2 text-right">
                    {client.clientDetail}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
