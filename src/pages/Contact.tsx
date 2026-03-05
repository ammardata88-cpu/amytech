import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const contactInfo = [
    { icon: Phone, title: t("contactPage.info.phone"), value: "0583140470", href: "tel:0583140470" },
    { icon: Mail, title: t("contactPage.info.email"), value: "info@amytech.net", href: "mailto:info@amytech.net" },
    { icon: Clock, title: t("contactPage.info.hours"), value: t("contactPage.info.hoursValue"), href: null }
  ];

  const services = [
    { value: "ERP Implementation", label: t("contactPage.services.erp") },
    { value: "CRM Solutions", label: t("contactPage.services.crm") },
    { value: "AI Automation", label: t("contactPage.services.ai") },
    { value: "Digital Transformation", label: t("contactPage.services.digital") },
    { value: "Corporate Governance", label: t("contactPage.services.governance") },
    { value: "Other", label: t("contactPage.services.other") }
  ];

  const expectations = [
    t("contactPage.expect.item1"),
    t("contactPage.expect.item2"),
    t("contactPage.expect.item3"),
    t("contactPage.expect.item4")
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: t("contactPage.toast.title"),
      description: t("contactPage.toast.description"),
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <title>Contact Amy Tech - Get a Free Consultation</title>
      <meta name="description" content="Contact Amy Tech for AI-powered ERP, CRM solutions, and digital transformation services. Book a free consultation today. Call 0583140470 or email info@amytech.net" />

      <section className="py-24 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-8">{t("contactPage.form.title")}</h2>

              <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contactPage.form.name")} {t("contactPage.form.required")}</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder={t("contactPage.form.namePlaceholder")} required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contactPage.form.email")} {t("contactPage.form.required")}</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t("contactPage.form.emailPlaceholder")} required className="h-12" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("contactPage.form.phone")}</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder={t("contactPage.form.phonePlaceholder")} className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{t("contactPage.form.company")}</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder={t("contactPage.form.companyPlaceholder")} className="h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">{t("contactPage.form.service")} {t("contactPage.form.required")}</Label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">{t("contactPage.form.servicePlaceholder")}</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>{service.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("contactPage.form.message")} {t("contactPage.form.required")}</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={t("contactPage.form.messagePlaceholder")} required className="min-h-[150px] resize-none" />
                </div>

                <Button type="submit" variant="accent" size="xl" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t("contactPage.form.submitting") : <>
                    {t("contactPage.form.submit")}
                    <Send className="w-5 h-5" />
                  </>}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{t("contactPage.info.title")}</h2>
                <p className="text-muted-foreground text-lg">{t("contactPage.info.description")}</p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      {item.href ? <a href={item.href} className="text-accent hover:underline text-lg">{item.value}</a> : <span className="text-muted-foreground text-lg">{item.value}</span>}
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
