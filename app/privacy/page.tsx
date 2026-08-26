import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Privacy Policy - Kylie AI',
  description:
    'Privacy Policy for Sector 3 Solutions Pty Ltd, operator of the Kylie AI suite (kylieai.net).',
};

const LAST_UPDATED = 'August 2026';

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-12">
          Sector 3 Solutions Pty Ltd &middot; Last updated {LAST_UPDATED}
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-navy [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">

          <section>
            <h2>1. About This Policy</h2>
            <p>
              Sector 3 Solutions Pty Ltd (&ldquo;Sector 3&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;) operates the Kylie AI suite of compliance and
              verification services, including this website (kylieai.net) and the Kylie Audit,
              Kylie Verify, Kylie Voice, Kylie Coach and Kylie Verification products available
              on subdomains of kylieai.net.
            </p>
            <p className="mt-3">
              We are committed to protecting personal information in accordance with the
              Australian <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles
              (APPs). This policy explains what personal information we collect across the
              Kylie AI suite, how we use it, and the rights you have. Individual products may
              publish supplementary privacy documentation specific to their operation.
            </p>
            <p className="mt-3">
              <strong>Contact:</strong>{' '}
              <a href="mailto:contact@kylieai.net" className="text-brand-teal font-medium">
                contact@kylieai.net
              </a>
            </p>
          </section>

          <section>
            <h2>2. Personal Information We Collect</h2>
            <p className="mb-3"><strong>Website enquiries.</strong> When you contact us through
              this website we collect your name, email address, company, phone number and the
              content of your message, so that we can respond to your enquiry.</p>
            <p className="mb-3"><strong>Account holders.</strong> When you or your organisation
              use a Kylie product, we collect account details such as your name, email address
              and authentication credentials. Passwords are never stored in plaintext.</p>
            <p className="mb-3"><strong>Billing.</strong> When you purchase our services we
              collect billing contact details and transaction records. Payments are processed
              by Stripe; we do not store full payment card numbers on our systems.</p>
            <p><strong>Service data processed on behalf of clients.</strong> Our products
              process information supplied by our business clients — for example call
              recordings submitted for compliance auditing, or contact details submitted for
              verification. These may contain personal information about our clients&rsquo;
              customers, donors or suppliers. We process this information as a service
              provider under our clients&rsquo; instructions, and our platforms are designed
              to automatically redact personally identifiable information from retained
              transcripts and records wherever practicable.</p>
          </section>

          <section>
            <h2>3. How We Use Personal Information</h2>
            <ul>
              <li>To provide, operate and support the Kylie AI services</li>
              <li>To respond to enquiries submitted through this website</li>
              <li>To administer accounts, billing and payments</li>
              <li>To perform compliance analysis and verification on behalf of our clients</li>
              <li>To maintain the security and integrity of our services</li>
              <li>To meet our legal and regulatory obligations</li>
            </ul>
            <p className="mt-3">
              We do not use personal information for marketing without consent, and we do not
              sell or rent personal information to third parties.
            </p>
          </section>

          <section>
            <h2>4. Disclosure to Third Parties</h2>
            <p>
              We disclose personal information only to service providers who help us operate
              the Kylie AI suite, each bound by contractual and confidentiality obligations:
            </p>
            <ul className="mt-3">
              <li><strong>Payment processing</strong> — Stripe processes payments on our
                behalf. Stripe&rsquo;s handling of your payment information is described in
                Stripe&rsquo;s own privacy policy at stripe.com/privacy.</li>
              <li><strong>Cloud infrastructure</strong> — reputable hosting and infrastructure
                providers engaged under data processing agreements.</li>
              <li><strong>Communications providers</strong> — providers that deliver SMS,
                WhatsApp, email and voice communications where a product requires them.</li>
            </ul>
            <p className="mt-3">
              Some providers (including Stripe) may process information outside Australia. Where
              this occurs, we take reasonable steps to ensure the information is handled
              consistently with the APPs. Client service data processed by our platforms is
              stored in Australia.
            </p>
          </section>

          <section>
            <h2>5. Data Storage and Security</h2>
            <ul>
              <li>Data is encrypted in transit and at rest</li>
              <li>Access is restricted to authorised personnel and protected by
                multi-factor authentication</li>
              <li>Client platform data is stored in Australian data centres</li>
              <li>Source recordings are retained only transiently — deleted promptly after
                processing in accordance with each product&rsquo;s retention schedule</li>
            </ul>
          </section>

          <section>
            <h2>6. Data Retention</h2>
            <p>
              We retain personal information only as long as needed for the purposes described
              above or as required by law. Account information is retained for the duration of
              the client relationship; upon termination, client data is deleted within 30 days
              with written confirmation. Product-specific retention periods (for example, the
              deletion of audio files within 24 hours of processing by Kylie Audit) are set out
              in each product&rsquo;s documentation.
            </p>
          </section>

          <section>
            <h2>7. Cookies and Analytics</h2>
            <p>
              This website uses only the cookies necessary for it to function. Our product
              platforms use cookies for authentication and session management. We do not use
              third-party advertising cookies.
            </p>
          </section>

          <section>
            <h2>8. Your Rights</h2>
            <p>Under the Australian Privacy Principles, you may:</p>
            <ul className="mt-3">
              <li><strong>Access</strong> — request access to the personal information we hold
                about you</li>
              <li><strong>Correction</strong> — request correction of inaccurate personal
                information</li>
              <li><strong>Complaint</strong> — lodge a complaint about our handling of your
                personal information</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact{' '}
              <a href="mailto:contact@kylieai.net" className="text-brand-teal font-medium">
                contact@kylieai.net
              </a>. We respond to all privacy requests within 30 days. If your personal
              information was supplied to us by one of our business clients, we may refer your
              request to that client as the party responsible for the information.
            </p>
          </section>

          <section>
            <h2>9. Complaints</h2>
            <p>
              If you are not satisfied with our response, you may contact the Office of the
              Australian Information Commissioner (OAIC): oaic.gov.au, phone 1300 363 992.
            </p>
          </section>

          <section>
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Material changes will be notified to
              clients with at least 30 days notice. The current version is always available at
              kylieai.net/privacy.
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
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
