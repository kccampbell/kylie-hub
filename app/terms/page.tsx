import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Terms of Service - Kylie AI',
  description:
    'Terms of Service for Sector 3 Solutions Pty Ltd, operator of the Kylie AI suite (kylieai.net).',
};

const LAST_UPDATED = 'August 2026';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header - Dark Navy */}
      <header className="bg-brand-navy shadow-md sticky top-0 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto py-4 px-6">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/kylie-ai-logo.png"
                alt="Kylie AI"
                width={240}
                height={80}
                className="h-16 w-auto"
                priority
              />
            </Link>
            <div className="text-sm font-medium text-on-dark-muted">
              The Trust &amp; Verification Suite
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-500 mb-12">
          Sector 3 Solutions Pty Ltd &middot; Last updated {LAST_UPDATED}
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-navy [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">

          <section>
            <h2>1. Agreement</h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Kylie AI
              suite of services operated by Sector 3 Solutions Pty Ltd
              (&ldquo;Sector 3&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), including this
              website (kylieai.net) and the Kylie Audit, Kylie Verify, Kylie Voice, Kylie
              Coach and Kylie Verification products available on subdomains of kylieai.net
              (together, the &ldquo;Services&rdquo;).
            </p>
            <p className="mt-3">
              By accessing or using the Services you agree to these Terms. If you use the
              Services on behalf of an organisation, you represent that you are authorised to
              bind that organisation, and &ldquo;you&rdquo; refers to that organisation. If
              your organisation has a separate signed agreement with Sector 3, that agreement
              prevails over these Terms to the extent of any inconsistency.
            </p>
            <p className="mt-3">
              <strong>Contact:</strong>{' '}
              <a href="mailto:contact@kylieai.net" className="text-brand-teal font-medium">
                contact@kylieai.net
              </a>
            </p>
          </section>

          <section>
            <h2>2. The Services</h2>
            <p>
              The Services provide AI-assisted compliance auditing, verification, voice
              interaction and coaching tools for business customers. The Services are
              intended for business use and are not directed at consumers. We may improve,
              modify or add features to the Services from time to time.
            </p>
            <p className="mt-3">
              AI-generated outputs (such as compliance scores, transcripts, verification
              outcomes and coaching feedback) are produced by automated analysis and are
              provided to support — not replace — your own judgement and compliance
              processes. You remain responsible for decisions made using the Services.
            </p>
          </section>

          <section>
            <h2>3. Accounts</h2>
            <ul>
              <li>You must provide accurate account information and keep it up to date.</li>
              <li>You are responsible for maintaining the confidentiality of your
                credentials and for all activity under your account.</li>
              <li>Notify us promptly at contact@kylieai.net if you suspect unauthorised use
                of your account.</li>
            </ul>
          </section>

          <section>
            <h2>4. Acceptable Use</h2>
            <p>You must not, and must not permit others to:</p>
            <ul className="mt-3">
              <li>Use the Services in breach of any applicable law, including privacy,
                telecommunications and anti-spam laws;</li>
              <li>Submit content or data you do not have the right to submit — including
                recordings made without any legally required consent;</li>
              <li>Attempt to gain unauthorised access to the Services, other customers&rsquo;
                data, or our infrastructure;</li>
              <li>Interfere with or disrupt the integrity or performance of the Services;</li>
              <li>Resell or provide the Services to third parties except as agreed with us
                in writing; or</li>
              <li>Use the Services to develop a competing product.</li>
            </ul>
            <p className="mt-3">
              We may suspend access where we reasonably believe use of the Services breaches
              these Terms or poses a security risk, and will notify you where practicable.
            </p>
          </section>

          <section>
            <h2>5. Your Data</h2>
            <p>
              You retain all rights in the data you or your organisation submit to the
              Services (&ldquo;Client Data&rdquo;), including call recordings, contact
              details and documents. You grant us a licence to host and process Client Data
              solely to provide the Services. You are responsible for ensuring you have the
              necessary rights and consents — including any consents required to record
              calls and conversations — to submit Client Data to the Services.
            </p>
            <p className="mt-3">
              Our handling of personal information is described in our{' '}
              <Link href="/privacy" className="text-brand-teal font-medium">
                Privacy Policy
              </Link>. Data retention and deletion timeframes are set out there and in each
              product&rsquo;s documentation.
            </p>
          </section>

          <section>
            <h2>6. Fees and Payment</h2>
            <ul>
              <li>Fees are as agreed in your order, proposal or the applicable product
                pricing, and are in Australian dollars unless stated otherwise.</li>
              <li>Payments are processed by Stripe. By providing payment details you
                authorise us and Stripe to charge the applicable fees.</li>
              <li>Unless otherwise stated, fees are exclusive of GST, which will be added
                where applicable.</li>
              <li>Overdue amounts may result in suspension of the Services after reasonable
                notice.</li>
            </ul>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>
            <p>
              We (and our licensors) own all intellectual property in the Services, including
              software, models, interfaces and documentation. These Terms do not transfer any
              of that ownership to you. Reports and outputs generated from your Client Data
              are yours to use for your internal business purposes. You may not copy,
              reverse-engineer or create derivative works of the Services except as permitted
              by law.
            </p>
          </section>

          <section>
            <h2>8. Confidentiality</h2>
            <p>
              Each party must keep the other&rsquo;s confidential information confidential
              and use it only for the purposes of the Services, except where disclosure is
              required by law or the information is already public through no fault of the
              receiving party.
            </p>
          </section>

          <section>
            <h2>9. Availability and Support</h2>
            <p>
              We aim to keep the Services available and performant, but the Services are
              provided on an &ldquo;as available&rdquo; basis and we do not guarantee
              uninterrupted or error-free operation. Planned maintenance will be scheduled to
              minimise disruption where practicable. Any specific service levels apply only
              if set out in a signed agreement with us.
            </p>
          </section>

          <section>
            <h2>10. Liability</h2>
            <p>
              Nothing in these Terms excludes, restricts or modifies any consumer guarantee,
              right or remedy under the Australian Consumer Law or any other right that
              cannot lawfully be excluded.
            </p>
            <p className="mt-3">
              Subject to that, and to the maximum extent permitted by law: (a) our total
              aggregate liability arising out of or in connection with the Services in any
              12-month period is limited to the fees you paid for the Services in that
              period; (b) neither party is liable for indirect or consequential loss, loss of
              profits, revenue, data or goodwill; and (c) where a condition or warranty
              cannot be excluded but liability can be limited, our liability is limited to
              re-supplying the relevant services or paying the cost of having them
              re-supplied.
            </p>
            <p className="mt-3">
              You are responsible for your compliance with the laws and industry codes that
              apply to your business. Use of the Services does not of itself constitute or
              guarantee regulatory compliance.
            </p>
          </section>

          <section>
            <h2>11. Termination</h2>
            <p>
              Either party may terminate as set out in the applicable order or agreement, or
              otherwise on 30 days written notice. Either party may terminate immediately for
              a material breach that is not remedied within 14 days of notice. On
              termination, your access ends, unpaid fees for services already provided become
              payable, and Client Data is deleted in accordance with our Privacy Policy.
              Clauses which by their nature should survive (including confidentiality,
              intellectual property and liability) survive termination.
            </p>
          </section>

          <section>
            <h2>12. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Material changes will be notified
              to clients with at least 30 days notice, and continued use of the Services
              after changes take effect constitutes acceptance. The current version is always
              available at kylieai.net/terms.
            </p>
          </section>

          <section>
            <h2>13. General</h2>
            <p>
              These Terms are governed by the laws of Queensland, Australia, and the
              parties submit to the non-exclusive jurisdiction of its courts. If any
              provision of these Terms is found invalid, the remainder continues in effect. A
              failure to enforce a provision is not a waiver of it. You may not assign these
              Terms without our consent; we may assign them as part of a corporate
              reorganisation or sale of the business.
            </p>
          </section>

        </div>
      </main>

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
              {' '}&middot;{' '}
              <Link href="/terms" className="hover:text-white underline underline-offset-4">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
