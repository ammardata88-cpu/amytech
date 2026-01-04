import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Database,
  CheckCircle,
  ArrowRight,
  Factory,
  ShoppingBag,
  Truck,
  Building2,
  Heart,
  GraduationCap,
  Zap,
  Shield,
  Globe,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const ERPNext = () => {
  const { t } = useLanguage();

  const whyErpNext = [
    {
      icon: Globe,
      title: t("erpPage.why.openSource"),
      description: t("erpPage.why.openSource.desc")
    },
    {
      icon: Zap,
      title: t("erpPage.why.allInOne"),
      description: t("erpPage.why.allInOne.desc")
    },
    {
      icon: Shield,
      title: t("erpPage.why.costEffective"),
      description: t("erpPage.why.costEffective.desc")
    },
    {
      icon: Settings,
      title: t("erpPage.why.customizable"),
      description: t("erpPage.why.customizable.desc")
    }
  ];

  const whyAmyTech = [
    {
      title: t("erpPage.partner.certified"),
      description: t("erpPage.partner.certified.desc")
    },
    {
      title: t("erpPage.partner.aiEnhanced"),
      description: t("erpPage.partner.aiEnhanced.desc")
    },
    {
      title: t("erpPage.partner.endToEnd"),
      description: t("erpPage.partner.endToEnd.desc")
    },
    {
      title: t("erpPage.partner.industry"),
      description: t("erpPage.partner.industry.desc")
    }
  ];

  const industries = [
    {
      icon: Factory,
      title: t("erpPage.industry.manufacturing"),
      description: t("erpPage.industry.manufacturing.desc"),
      features: [
        t("erpPage.industry.manufacturing.f1"),
        t("erpPage.industry.manufacturing.f2"),
        t("erpPage.industry.manufacturing.f3"),
        t("erpPage.industry.manufacturing.f4")
      ]
    },
    {
      icon: ShoppingBag,
      title: t("erpPage.industry.retail"),
      description: t("erpPage.industry.retail.desc"),
      features: [
        t("erpPage.industry.retail.f1"),
        t("erpPage.industry.retail.f2"),
        t("erpPage.industry.retail.f3"),
        t("erpPage.industry.retail.f4")
      ]
    },
    {
      icon: Truck,
      title: t("erpPage.industry.logistics"),
      description: t("erpPage.industry.logistics.desc"),
      features: [
        t("erpPage.industry.logistics.f1"),
        t("erpPage.industry.logistics.f2"),
        t("erpPage.industry.logistics.f3"),
        t("erpPage.industry.logistics.f4")
      ]
    },
    {
      icon: Building2,
      title: t("erpPage.industry.services"),
      description: t("erpPage.industry.services.desc"),
      features: [
        t("erpPage.industry.services.f1"),
        t("erpPage.industry.services.f2"),
        t("erpPage.industry.services.f3"),
        t("erpPage.industry.services.f4")
      ]
    },
    {
      icon: Heart,
      title: t("erpPage.industry.healthcare"),
      description: t("erpPage.industry.healthcare.desc"),
      features: [
        t("erpPage.industry.healthcare.f1"),
        t("erpPage.industry.healthcare.f2"),
        t("erpPage.industry.healthcare.f3"),
        t("erpPage.industry.healthcare.f4")
      ]
    },
    {
      icon: GraduationCap,
      title: t("erpPage.industry.education"),
      description: t("erpPage.industry.education.desc"),
      features: [
        t("erpPage.industry.education.f1"),
        t("erpPage.industry.education.f2"),
        t("erpPage.industry.education.f3"),
        t("erpPage.industry.education.f4")
      ]
    }
  ];

  const processSteps = [
    { step: "01", title: t("erpPage.process.step1"), desc: t("erpPage.process.step1.desc") },
    { step: "02", title: t("erpPage.process.step2"), desc: t("erpPage.process.step2.desc") },
    { step: "03", title: t("erpPage.process.step3"), desc: t("erpPage.process.step3.desc") },
    { step: "04", title: t("erpPage.process.step4"), desc: t("erpPage.process.step4.desc") },
    { step: "05", title: t("erpPage.process.step5"), desc: t("erpPage.process.step5.desc") }
  ];

  return (
    <Layout>
      <title>ERPNext Solutions - Implementation & Customization | Amy Tech</title>
      <meta name="description" content="Amy Tech is your trusted ERPNext implementation partner. We deliver customized ERP solutions for manufacturing, retail, logistics, and service industries." />

      {/* Hero Section */}
      <section className="py-24 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
              <Database className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t("erpPage.badge")}</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("erpPage.hero.title1")}{" "}
              <span className="text-gradient">{t("erpPage.hero.title2")}</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
              {t("erpPage.hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  {t("erpPage.hero.cta1")}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services#erp">
                <Button variant="heroOutline" size="xl">
                  {t("erpPage.hero.cta2")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why ERPNext */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">{t("erpPage.why.label")}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              {t("erpPage.why.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("erpPage.why.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyErpNext.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border card-hover text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Amy Tech */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">{t("erpPage.partner.label")}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                {t("erpPage.partner.title")}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t("erpPage.partner.description")}
              </p>

              <div className="space-y-6">
                {whyAmyTech.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-3xl" />
              <div className="relative p-10 rounded-3xl bg-card border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-8">{t("erpPage.process.title")}</h3>
                <div className="space-y-6">
                  {processSteps.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">{t("erpPage.industries.label")}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              {t("erpPage.industries.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("erpPage.industries.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <industry.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{industry.title}</h3>
                <p className="text-muted-foreground mb-6">{industry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Database className="w-16 h-16 text-accent mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("erpPage.cta.title")}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              {t("erpPage.cta.description")}
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                {t("erpPage.cta.button")}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ERPNext;
