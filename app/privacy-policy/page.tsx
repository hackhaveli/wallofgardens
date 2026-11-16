import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Wall of Gardens privacy policy — how we collect, use, and protect your personal information when you use our website and services.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#1a2e1a] text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/70 text-sm">
              Last updated: November 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-neutral prose-lg">
            <p>
              Wall of Gardens Private Limited (&quot;Wall of Gardens,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
              privacy and is committed to protecting your personal data. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website{" "}
              <Link href="/" className="text-green-800 underline">
                wallofgardens.com
              </Link>{" "}
              or engage our services.
            </p>

            <h2>1. Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li>
                <strong>Contact Information:</strong> Name, email address, phone
                number, and address when you fill out our contact form, request
                a quote, or schedule a site visit.
              </li>
              <li>
                <strong>Project Details:</strong> Property type, garden
                preferences, site photographs, and other details you share
                during consultation.
              </li>
              <li>
                <strong>Payment Information:</strong> Billing details processed
                through secure third-party payment gateways. We do not store
                your payment card information on our servers.
              </li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <ul>
              <li>
                <strong>Usage Data:</strong> Browser type, device information,
                IP address, pages visited, and time spent on our website.
              </li>
              <li>
                <strong>Cookies:</strong> We use essential cookies to ensure
                website functionality and analytics cookies to understand how
                visitors interact with our site.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To respond to your enquiries and provide quotations</li>
              <li>To schedule and manage site visits and consultations</li>
              <li>To deliver, maintain, and improve our services</li>
              <li>To send project updates and service-related communications</li>
              <li>
                To send promotional materials (only with your explicit consent;
                you may opt out at any time)
              </li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may
              share your data with:
            </p>
            <ul>
              <li>
                <strong>Service Partners:</strong> Trusted vendors, nurseries,
                and sub-contractors involved in executing your project, only to
                the extent necessary for service delivery.
              </li>
              <li>
                <strong>Payment Processors:</strong> Secure third-party gateways
                for processing payments.
              </li>
              <li>
                <strong>Legal Authorities:</strong> When required by law, court
                order, or governmental regulation.
              </li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement industry-standard security measures including SSL
              encryption, secure servers, and restricted access controls to
              protect your personal data. However, no method of transmission
              over the internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to
              fulfil the purposes outlined in this policy, comply with legal
              obligations, resolve disputes, and enforce our agreements.
              Typically, project-related data is retained for a period of 7
              years after project completion.
            </p>

            <h2>6. Your Rights</h2>
            <p>Under applicable Indian data protection laws, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Lodge a complaint with the relevant data protection authority</li>
            </ul>

            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (e.g.,
              Instagram, WhatsApp). We are not responsible for the privacy
              practices of these external sites. We encourage you to review
              their privacy policies independently.
            </p>

            <h2>8. Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience. You can
              control cookie preferences through your browser settings. Disabling
              cookies may affect certain website functionalities.
            </p>

            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed at individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date. We encourage
              you to review this policy periodically.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to
              exercise your data rights, please contact us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@wallofgardens.com"
                  className="text-green-800 underline"
                >
                  info@wallofgardens.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919990960669" className="text-green-800 underline">
                  +91 99909 60669
                </a>
              </li>
              <li>
                <strong>Address:</strong> 6th Floor, MERI, Janakpuri, New
                Delhi — 110058
              </li>
            </ul>

            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                Wall of Gardens Private Limited · GSTIN: 07AALCW9498N1Z0 ·
                CIN: U01403DL2021PTC389498
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
