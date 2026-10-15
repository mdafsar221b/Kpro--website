'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Lock, ExternalLink, Globe } from 'lucide-react';
import { MAIN_NAVIGATION } from '@/lib/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [portalOpen, setPortalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setPortalOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-white ${
        isScrolled ? 'border-b border-slate-200' : 'border-b border-slate-100'
      }`}
    >
      {/* Top utility bar */}
      <div className="bg-brand-navy text-slate-300 text-xs border-b border-[#043345] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Globe className="w-3.5 h-3.5" />
              <span>Global | English</span>
            </span>
            <span className="text-slate-400">
              Kpro Solutions Pvt. Ltd. | Bengaluru, India
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://www.community.kpro.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Community
            </a>
            <a
              href="https://www.blog.kpro.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Tech Insights
            </a>

            {/* Portal dropdown */}
            <div className="relative">
              <button
                onClick={() => setPortalOpen(!portalOpen)}
                className="flex items-center gap-1 hover:text-white text-slate-300 focus:outline-none"
                aria-expanded={portalOpen}
              >
                <Lock className="w-3 h-3 text-brand-orange" />
                <span>Portal Logins</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {portalOpen && (
                <div
                  className="absolute right-0 mt-1.5 w-48 bg-white text-slate-800 rounded-md border border-slate-200 py-1 z-50 text-xs animate-fade-in"
                  onMouseLeave={() => setPortalOpen(false)}
                >
                  <a
                    href="https://www.kpro.co.in:2096"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3.5 py-2 text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition-colors font-medium"
                  >
                    <span>Corporate Email</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.hrhaat.com/login-page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3.5 py-2 text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition-colors font-medium"
                  >
                    <span>HRHaaT HCM Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-between px-3.5 py-2 text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition-colors font-medium"
                  >
                    <span>Enterprise Support</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2 group">
            <Image
              src="/img/logo.png"
              alt="Kpro Solutions — We Deliver Competitive Business Advantage"
              width={180}
              height={92}
              className="h-11 sm:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {MAIN_NAVIGATION.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    pathname === item.href
                      ? 'text-brand-blue font-semibold'
                      : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.children && <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-1.5 w-64 z-50">
                    <div className="bg-white rounded-md border border-slate-200 py-1.5 animate-fade-in">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="space-y-1">
            {MAIN_NAVIGATION.map((item) => (
              <div key={item.label} className="py-1">
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-md"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1 mt-1 border-l-2 border-slate-100 ml-3">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block py-1.5 text-sm text-slate-600 hover:text-brand-blue"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col gap-3">
            <Link href="/contact" className="btn-primary w-full text-center">
              Schedule Consultation
            </Link>
            <div className="grid grid-cols-2 gap-2 text-xs text-center text-slate-600 pt-2">
              <a
                href="https://www.kpro.co.in:2096"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-slate-200 rounded-md hover:bg-slate-50"
              >
                Webmail Login
              </a>
              <a
                href="https://www.hrhaat.com/login-page"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-slate-200 rounded-md hover:bg-slate-50"
              >
                HRM Portal
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
