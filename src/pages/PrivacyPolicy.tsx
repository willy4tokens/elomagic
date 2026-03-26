import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-display text-xl font-bold mb-3 text-foreground">{title}</h2>
    <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="container max-w-2xl mx-auto">
          <h1 className="font-display text-4xl font-extrabold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">
            Effective date: March 26, 2026 &nbsp;·&nbsp; Last updated: March 26, 2026
          </p>

          <Section title="1. Who We Are">
            <p>
              Elo ("we," "us," or "our") is a digital growth agency operated by William,
              located in North Hollywood, California, USA. We can be reached at{" "}
              <a href="mailto:william@elo-magic.com" className="text-primary hover:underline">
                william@elo-magic.com
              </a>{" "}
              or by phone at{" "}
              <a href="tel:+18185748339" className="text-primary hover:underline">
                +1 818 574 8339
              </a>
              .
            </p>
            <p>
              This Privacy Policy explains how we collect, use, and protect personal information
              when you visit{" "}
              <a href="https://www.elo-magic.com" className="text-primary hover:underline">
                www.elo-magic.com
              </a>{" "}
              or contact us through our website.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>
              We collect information you voluntarily provide when you fill out our contact form:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>First name and last name</li>
              <li>Email address</li>
              <li>Phone number (optional)</li>
              <li>Company name (optional)</li>
              <li>Industry (optional)</li>
              <li>Message or project description (optional)</li>
            </ul>
            <p>
              We do not collect payment information, government-issued IDs, or sensitive
              personal information (as defined under applicable law).
            </p>
            <p>
              We may also collect limited technical data automatically, such as your browser
              type, IP address, and pages visited, through standard web server logs or
              analytics tools. This data is used in aggregate and is not linked to your identity.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your inquiry and schedule a consultation</li>
              <li>Deliver the free growth plan you requested</li>
              <li>Send relevant follow-up communications related to your request</li>
              <li>Improve our website and services</li>
            </ul>
            <p>
              We will not send you unsolicited marketing emails or add you to mailing lists
              without your explicit consent.
            </p>
          </Section>

          <Section title="4. How We Share Your Information">
            <p>
              <strong className="text-foreground">We do not sell, rent, or trade your personal information.</strong>
            </p>
            <p>
              Your information may be shared with the following service providers who help
              us operate our business, each bound by their own privacy and security policies:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-foreground">Make.com</strong> — our form data is transmitted
                via Make.com's webhook service to process and store your submission.
              </li>
              <li>
                <strong className="text-foreground">Google Sheets / Google Workspace</strong> — submitted
                form data is stored in a private Google Sheet accessible only to Elo.
              </li>
              <li>
                <strong className="text-foreground">Vercel</strong> — our website is hosted on Vercel,
                which may process technical data (IP addresses, request logs) as part of
                standard web hosting operations.
              </li>
              <li>
                <strong className="text-foreground">Google Fonts</strong> — our website loads fonts
                from Google's servers, which may process your IP address.
              </li>
            </ul>
            <p>
              We may disclose your information if required by law, court order, or
              governmental authority.
            </p>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain your personal information for as long as necessary to fulfill the
              purpose for which it was collected (typically, the duration of our business
              relationship with you), or as required by law. You may request deletion at
              any time (see Section 7).
            </p>
          </Section>

          <Section title="6. Cookies & Tracking">
            <p>
              Our website does not currently use advertising cookies or third-party tracking
              pixels. We may use essential session data to ensure the website functions
              correctly. If we introduce analytics tools in the future, we will update this
              policy and, where required, seek your consent.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>
              Depending on where you live, you may have the following rights regarding your
              personal information:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-foreground">Access</strong> — request a copy of the personal
                data we hold about you.
              </li>
              <li>
                <strong className="text-foreground">Correction</strong> — request correction of
                inaccurate data.
              </li>
              <li>
                <strong className="text-foreground">Deletion</strong> — request deletion of your
                personal data ("right to be forgotten").
              </li>
              <li>
                <strong className="text-foreground">Opt-out of communications</strong> — unsubscribe
                from any emails we send at any time by replying "unsubscribe."
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:william@elo-magic.com" className="text-primary hover:underline">
                william@elo-magic.com
              </a>
              . We will respond within 45 days.
            </p>
          </Section>

          <Section title="8. California Residents — CCPA / CPRA Rights">
            <p>
              If you are a California resident, you have the following additional rights
              under the California Consumer Privacy Act (CCPA) as amended by the California
              Privacy Rights Act (CPRA):
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-foreground">Right to Know</strong> — you may request
                disclosure of the categories and specific pieces of personal information we
                have collected about you, the sources, the purpose of collection, and the
                categories of third parties with whom we share it.
              </li>
              <li>
                <strong className="text-foreground">Right to Delete</strong> — you may request
                deletion of your personal information, subject to certain exceptions.
              </li>
              <li>
                <strong className="text-foreground">Right to Correct</strong> — you may request
                correction of inaccurate personal information.
              </li>
              <li>
                <strong className="text-foreground">Right to Opt-Out of Sale or Sharing</strong> — we
                do not sell or share your personal information for cross-context behavioral
                advertising. No opt-out is necessary, but you may contact us to confirm.
              </li>
              <li>
                <strong className="text-foreground">Right to Non-Discrimination</strong> — we will
                not discriminate against you for exercising any CCPA rights.
              </li>
            </ul>
            <p>
              To submit a CCPA request, email us at{" "}
              <a href="mailto:william@elo-magic.com" className="text-primary hover:underline">
                william@elo-magic.com
              </a>{" "}
              with the subject line "California Privacy Request." We will verify your identity
              before processing the request and respond within 45 days.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              Our website and services are not directed to children under the age of 13.
              We do not knowingly collect personal information from children under 13. If you
              believe we have inadvertently collected such information, please contact us
              immediately and we will delete it.
            </p>
          </Section>

          <Section title="10. Data Security">
            <p>
              We implement reasonable technical and organizational measures to protect your
              personal information from unauthorized access, disclosure, alteration, or
              destruction. However, no transmission over the internet is 100% secure. We
              encourage you to use caution when sharing information online.
            </p>
          </Section>

          <Section title="11. Links to Other Websites">
            <p>
              Our website may contain links to third-party websites. We are not responsible
              for the privacy practices or content of those sites. We encourage you to review
              their privacy policies before providing any personal information.
            </p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise
              the "Last updated" date at the top of this page. We encourage you to review this
              policy periodically. Continued use of our website after changes are posted
              constitutes your acceptance of the updated policy.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>If you have questions about this Privacy Policy or our data practices, please contact:</p>
            <div className="mt-3 bg-card border border-border rounded-xl p-5 text-foreground space-y-1">
              <p className="font-semibold font-display">Elo</p>
              <p>Attn: Privacy</p>
              <p>North Hollywood, California, USA</p>
              <p>
                <a href="mailto:william@elo-magic.com" className="text-primary hover:underline">
                  william@elo-magic.com
                </a>
              </p>
              <p>
                <a href="tel:+18185748339" className="text-primary hover:underline">
                  +1 818 574 8339
                </a>
              </p>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
