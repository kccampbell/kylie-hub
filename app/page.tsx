import Link from 'next/link';
import Image from 'next/image';
import { Search, Check, Phone, Lightbulb, ArrowRight, Sparkles, Clock } from 'lucide-react';

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
              <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 h-full flex flex-col relative overflow-hidden text-left">
                {/* Highlight bar for middle product */}
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-teal" />
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

            {/* Card 4: COACH - Coming Soon */}
            <div className="group cursor-default">
              <div className="bg-white/80 rounded-xl p-8 shadow-card transition-all duration-300 border border-gray-100 h-full flex flex-col text-left relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded-full">
                    <Clock className="w-3 h-3" />
                    Coming Soon
                  </span>
                </div>
                <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-brand-teal" />
                </div>
                <h2 className="text-2xl font-bold text-brand-navy mb-3">Kylie Coach</h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  Real-time AI coaching for field teams. Elevate performance with instant feedback on pitch delivery and engagement techniques.
                </p>
                <div className="flex items-center text-gray-400 font-semibold">
                  Coming Soon <Clock className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer - Dark Navy */}
      <footer className="bg-brand-navy py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-on-dark-muted">
              © {new Date().getFullYear()} Kylie AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
