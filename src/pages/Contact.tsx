import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  MessageSquare,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: t("contactPage.info.phone"),
      value: "(+966)583140470",
      href: "tel:+966583140470"
    },
     {
      icon: Phone,
      title: t("contactPage.info.phone"),
      value: "(+20)1554715710",
      href: "tel:+201554715710"
    },
    {
      icon: Mail,
      title: t("contactPage.info.email"),
      value: "info@amytech.net",
      href: "mailto:info@amytech.net"
    },
    {
      icon: Clock,
      title: t("contactPage.info.hours"),
      value: t("contactPage.info.hoursValue"),
      href: null
    }
  ];

  const expectations = [
    t("contactPage.expect.item1"),
    t("contactPage.expect.item2"),
    t("contactPage.expect.item3"),
    t("contactPage.expect.item4")
  ];

  return (
    <Layout>
      <title>Contact Amy Tech - Get a Free Consultation</title>
      <meta name="description" content="Contact Amy Tech for AI-powered ERP, CRM solutions, and digital transformation services. Book a free consultation today. Call 0583140470 or email info@amytech.net" />

      {/* Hero Section */}
      <section className="py-24 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
              <MessageSquare className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t("contactPage.badge")}</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("contactPage.hero.title1")}{" "}
              <span className="text-gradient">{t("contactPage.hero.title2")}</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              {t("contactPage.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t("whatsapp.title")}</h2>
                <p className="text-xl text-muted-foreground max-w-md mx-auto">
                  {t("whatsapp.subtitle")}
                </p>

              </div>
              <a
                href="https://wa.me/966583140470?text=Hi%20!%20I%27m%20interested%20in%20your%20AI%2FERP%20services.%20Can%20we%20schedule%20a%20call%3F"

                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-sm mx-auto"
              >
                <Button
                  variant="default"
                  size="xl"
                  className="w-full h-16 text-xl font-semibold shadow-2xl bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none"
                >
                  <MessageCircle className="w-8 h-8 mr-3" />
                  {t("whatsapp.button")}
                  <MessageCircle className="w-8 h-8 ml-3" />
                </Button>

              </a>
              <div className="pt-8 border-t border-border">
              </div>


            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{t("contactPage.info.title")}</h2>
                <p className="text-muted-foreground text-lg">
                  {t("contactPage.info.description")}
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-6 rounded-2xl bg-card border border-border"
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-accent hover:underline text-lg"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground text-lg">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-teal/10 border border-accent/20">
                <h3 className="text-xl font-bold text-foreground mb-6">{t("contactPage.expect.title")}</h3>
                <div className="space-y-4">
                  {expectations.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
