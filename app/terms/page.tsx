import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Wall of Gardens terms and conditions — the agreement governing your use of our website and engagement of our landscaping and vertical garden services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#1a2e1a] text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">
              Terms &amp; Conditions
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
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of
              the website{" "}
              <Link href="/" className="text-green-800 underline">
                wallofgardens.com
              </Link>{" "}
              and the services provided by Wall of Gardens Private Limited
              (&quot;Wall of Gardens,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;). By using our website or engaging our services, you
              agree to these Terms.
            </p>

            <h2>1. Services</h2>
            <p>
              Wall of Gardens provides landscaping, vertical garden
              installation, plant maintenance (AMC), moss wall installation,
              terrace garden design, balcony garden design, and corporate
              plantscaping services. The scope of each project is defined in a
              separate quotation or service agreement provided to you.
            </p>

            <h2>2. Quotations &amp; Pricing</h2>
            <ul>
              <li>
                All quotations are valid for 15 days from the date of issue
                unless otherwise specified.
              </li>
              <li>
                Prices are subject to change based on site conditions, material
                availability, and scope modifications.
              </li>
              <li>
                GST and applicable taxes will be charged as per prevailing
                government rates in addition to the quoted amount.
              </li>
              <li>
                A formal quotation or proforma invoice constitutes the binding
                price agreement for a specific project.
              </li>
            </ul>

            <h2>3. Payment Terms</h2>
            <ul>
              <li>
                An advance payment (typically 50%) is required to initiate any
                project. Exact terms are specified in the project quotation.
              </li>
              <li>
                Balance payment is due upon project completion, prior to final
                handover, unless a milestone-based payment schedule has been
                agreed upon.
              </li>
              <li>
                Payments can be made via bank transfer (NEFT/RTGS/IMPS), UPI,
                or cheque.
              </li>
              <li>
                Delayed payments beyond 7 days of the due date may attract
                interest at 1.5% per month.
              </li>
            </ul>

            <h2>4. Project Execution</h2>
            <ul>
              <li>
                Timelines provided are estimates and may vary based on weather
                conditions, site access, material procurement, and client-side
                approvals.
              </li>
              <li>
                The client is responsible for providing clear site access,
                water supply, and electrical points as needed during
                installation.
              </li>
              <li>
                Any changes to the agreed scope of work must be communicated in
                writing and may result in revised pricing and timelines.
              </li>
            </ul>

            <h2>5. Plant Health &amp; Replacement</h2>
            <ul>
              <li>
                For AMC (Annual Maintenance Contract) clients, plant replacement
                is covered as per the terms of the specific AMC agreement.
              </li>
              <li>
                Plant health is subject to environmental factors including
                sunlight, water quality, air pollution, and temperature. We
                provide expert care but cannot guarantee outcomes against
                extreme environmental conditions beyond our control.
              </li>
              <li>
                Non-AMC clients may purchase maintenance packages separately.
              </li>
            </ul>

            <h2>6. Warranty &amp; Liability</h2>
            <ul>
              <li>
                Structural installations (frames, planters, irrigation systems)
                carry a workmanship warranty as specified in the project
                agreement.
              </li>
              <li>
                Plant health warranties apply only when the client follows the
                care guidelines provided by Wall of Gardens or has an active AMC
                in place.
              </li>
              <li>
                Wall of Gardens is not liable for damage caused by
                client-initiated modifications, natural disasters, pest
                infestations beyond reasonable control, or negligent care by
                third parties.
              </li>
              <li>
                Our total liability for any claim shall not exceed the amount
                paid by the client for the specific service in question.
              </li>
            </ul>

            <h2>7. Cancellation &amp; Refunds</h2>
            <ul>
              <li>
                Cancellations made before material procurement: advance payment
                refunded minus a 10% administrative charge.
              </li>
              <li>
                Cancellations made after material procurement or work has
                commenced: refund will be adjusted against materials purchased
                and work completed.
              </li>
              <li>
                Custom-ordered materials (moss panels, imported planters, etc.)
                are non-refundable.
              </li>
            </ul>

            <h2>8. Intellectual Property</h2>
            <p>
              All designs, plans, renderings, and content on this website are
              the intellectual property of Wall of Gardens Private Limited. They
              may not be reproduced, distributed, or used without our prior
              written consent. Project-specific designs created for a client may
              be used by the client solely for the agreed project.
            </p>

            <h2>9. Website Use</h2>
            <ul>
              <li>
                The content on this website is for informational purposes and
                does not constitute a binding offer.
              </li>
              <li>
                We strive to keep information accurate and up to date but do not
                warrant completeness or accuracy of all website content.
              </li>
              <li>
                You agree not to use our website for any unlawful purpose or in
                a way that could damage, disable, or impair the site.
              </li>
            </ul>

            <h2>10. Privacy</h2>
            <p>
              Your use of our website is also governed by our{" "}
              <Link
                href="/privacy-policy"
                className="text-green-800 underline"
              >
                Privacy Policy
              </Link>
              , which explains how we collect, use, and protect your personal
              information.
            </p>

            <h2>11. Governing Law &amp; Disputes</h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of India. Any disputes arising out of or in connection with
              these Terms or our services shall be subject to the exclusive
              jurisdiction of the courts in New Delhi, India.
            </p>

            <h2>12. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Updated
              Terms will be posted on this page with a revised date. Continued
              use of our website or services after changes constitutes
              acceptance of the updated Terms.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              For any questions regarding these Terms, please reach out:
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
