import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <title>Privacy Policy - Amy Tech</title>
      <meta name="description" content="Read the Privacy Policy for Amy Tech. Learn how we collect, use, and protect your personal data." />

      {/* Hero Section */}
      <section className="py-24 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto prose prose-lg dark:prose-invert"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Welcome to <strong>Amy Tech</strong>. We respect your privacy and are committed to protecting your personal data when you use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We may collect different types of information, including:
            </p>
            <ul className="list-disc pl-6 mb-8 text-muted-foreground">
              <li>Information you voluntarily provide, such as name, email address, and phone number when contacting us.</li>
              <li>Technical information collected automatically, such as IP address, browser type, operating system, and pages visited.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-muted-foreground">
              <li>Communicate with you and respond to inquiries.</li>
              <li>Improve our website and services.</li>
              <li>Provide digital transformation, ERPNext, and AI-powered solutions.</li>
              <li>Comply with legal and regulatory requirements.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Protection</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell or rent your personal data to third parties. Data may be shared only in the following cases:
            </p>
            <ul className="list-disc pl-6 mb-8 text-muted-foreground">
              <li>When required by law or legal process.</li>
              <li>With trusted service providers who assist us in delivering our services, under confidentiality obligations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Our website may use cookies to enhance user experience and analyze website performance.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">6. External Links</h2>
            <p className="text-muted-foreground mb-4">
              Our website may contain links to external websites. We are not responsible for the privacy practices of such websites.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to request access to, correction of, or deletion of your personal data by contacting us.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to update this Privacy Policy at any time. Updates will be posted on this page.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions regarding this Privacy Policy, please contact us through the Amy Tech website.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
