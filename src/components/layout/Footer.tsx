import { Link } from "react-router-dom";
import { Brain, Mail, Phone, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { name: t("nav.about"), path: "/about" },
      { name: t("nav.services"), path: "/services" },
      { name: t("nav.ai"), path: "/ai-capabilities" },
      { name: t("nav.erpnext"), path: "/erpnext" },
    ],
    services: [
      { name: t("service.erp.title"), path: "/services#erp" },
      { name: t("service.crm.title"), path: "/services#crm" },
      { name: t("service.ai.title"), path: "/services#ai" },
      { name: t("service.digital.title"), path: "/services#digital" },
    ],
    contact: [
      { icon: Phone, text: "0583140470", href: "tel:0583140470" },
      { icon: Mail, text: "info@amytech.net", href: "mailto:info@amytech.net" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Brain className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">
                Amy<span className="text-accent">Tech</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/amy-tech/"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.company")}</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.services")}</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span dir="ltr">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Amy Tech. {t("footer.rights")}
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-primary-foreground/50 hover:text-accent text-sm transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/50 hover:text-accent text-sm transition-colors"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
