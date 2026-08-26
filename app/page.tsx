import Link from 'next/link';
import Image from 'next/image';
import { Search, Check, Phone, BarChart3, ArrowRight, Sparkles, Mail, ShieldCheck } from 'lucide-react';
import ContactForm from './components/ContactForm';

export default function KylieHub() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header - Dark Navy like Kylie Audit */}
      <header className="bg-brand-navy shadow-md sticky top-0 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto py-4 px-6">
          <div className="flex justify-between items-center">
            <Image
              src="/kylie-ai-logo.png"
              alt="Kylie AI"
              width={240}
              height={80}
              className="h-16 w-auto"
              priority
            />
            <div className="text-sm font-medium text-on-dark-muted">
              The Trust & Verification Suite
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Gradient like Kylie Audit */}
      <section className="bg-gradient-to-br from-brand-navy via-[#0d2847] to-brand-navy pt-8 lg:pt-12 pb-20 lg:pb-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-brand-teal-light" />
            <span className="text-brand-teal-light text-sm font-medium">AI-Powered Compliance & Verification</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-on-dark mb-6 leading-tight">
            Trust. Verify. <span className="text-brand-teal-light">Resolve.</span>
          </h1>

          <p className="text-xl text-on-dark-muted mb-16 max-w-3xl mx-auto">
            The complete suite for automated compliance auditing, supplier verification,
            and AI-driven voice interactions. Built for regulated industries.
          </p>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

            {/* Card 1: AUDIT */}
            <Link href="https://audit.kylieai.net" className="group">
              <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 h-full flex flex-col text-left">
                <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6 text-brand-teal" />
                </div>
                <h2 className="text-2xl font-bold text-brand-navy mb-3">Kylie Audit</h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  Automated quality assurance and auditing for recorded telephone calls. Ensure 100% compliance across your contact center.
                </p>
                <div className="flex items-center text-brand-teal font-semibold group-hover:translate-x-1 transition-transform">
                  Launch Audit <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Card 2: VERIFY */}
            <Link href="https://verify.kylieai.net" className="group">
              <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 h-full flex flex-col text-left">
                <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Check className="w-6 h-6 text-brand-teal" />
                </div>
                <h2 className="text-2xl font-bold text-brand-navy mb-3">Kylie Verify</h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  Instant supplier verification via SMS and WhatsApp. Confirm identity and details securely before engagement.
                </p>
                <div className="flex items-center text-brand-teal font-semibold group-hover:translate-x-1 transition-transform">
                  Launch Verify <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Card 3: VOICE */}
            <Link href="https://voice.kylieai.net" className="group">
              <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 h-full flex flex-col text-left">
                <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-brand-teal" />
                </div>
                <h2 className="text-2xl font-bold text-brand-navy mb-3">Kylie Voice</h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  AI-driven outbound verification calling. Automate face-to-face donor confirmation and data validation calls.
                </p>
                <div className="flex items-center text-brand-teal font-semibold group-hover:translate-x-1 transition-transform">
                  Launch Voice <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Card 4: COACH */}
            <Link href="https://coach.kylieai.net" className="group">
              <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 h-full flex flex-col text-left relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    New
                  </span>
                </div>
                <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-brand-teal" />
                </div>
                <h2 className="text-2xl font-bold text-brand-navy mb-3">Kylie Coach</h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  AI coaching for face-to-face sales teams. Every booth and doorstep conversation captured, scored against your own rubric, with provable consent and PII-redacted records.
                </p>
                <div className="flex items-center text-brand-teal font-semibold group-hover:translate-x-1 transition-transform">
                  Launch Coach <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>

          </div>

          {/* Verification-as-a-Service banner */}
          <Link href="https://verification.kylieai.net" className="group block mt-6">
            <div className="bg-white/5 border border-brand-teal/30 rounded-xl p-8 md:flex md:items-center md:justify-between md:gap-8 text-left hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 bg-brand-teal/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-brand-teal-light" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-on-dark mb-2">
                    Kylie Verification
                    <span className="ml-3 align-middle inline-flex items-center bg-brand-teal/10 border border-brand-teal/30 text-brand-teal-light text-xs font-semibold px-2.5 py-1 rounded-full">
                      Verification-as-a-Service
                    </span>
                  </h2>
                  <p className="text-on-dark-muted max-w-2xl">
                    Voice, SMS, WhatsApp and web verification unified in one outcome-based
                    pipeline. Set your campaign rules once — you only pay for successful verifications.
                  </p>
                </div>
              </div>
              <div className="flex items-center text-brand-teal-light font-semibold whitespace-nowrap mt-6 md:mt-0 group-hover:translate-x-1 transition-transform">
                Explore Verification <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-teal/10 rounded-full mb-6">
              <Mail className="w-8 h-8 text-brand-teal" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our compliance and verification solutions? We&apos;d love to hear from you.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-card border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer - Dark Navy */}
      <footer className="bg-brand-navy py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-on-dark-muted">
              © {new Date().getFullYear()} Kylie AI. All rights reserved.
              {' '}&middot;{' '}
              <Link href="/privacy" className="hover:text-white underline underline-offset-4">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
