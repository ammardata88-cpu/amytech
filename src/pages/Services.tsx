import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Database,
  Users,
  Cpu,
  Rocket,
  Shield,
  ArrowRight,
  DollarSign,
  Package,
  ClipboardList,
  Settings,
  TrendingUp,
  Zap,
  Cloud,
  FileCheck,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: "erp",
      icon: Database,
      title: t("servicesPage.erp.title"),
      subtitle: t("servicesPage.erp.subtitle"),
      description: t("servicesPage.erp.description"),
      features: [
        { icon: DollarSign, text: t("servicesPage.erp.finance") },
        { icon: Users, text: t("servicesPage.erp.hr") },
        { icon: Package, text: t("servicesPage.erp.inventory") },
        { icon: TrendingUp, text: t("servicesPage.erp.sales") },
        { icon: ClipboardList, text: t("servicesPage.erp.procurement") },
        { icon: Settings, text: t("servicesPage.erp.workflows") }
      ]
    },
    {
      id: "crm",
      icon: Users,
      title: t("servicesPage.crm.title"),
      subtitle: t("servicesPage.crm.subtitle"),
      description: t("servicesPage.crm.description"),
      features: [
        { icon: Cpu, text: t("servicesPage.crm.insights") },
        { icon: TrendingUp, text: t("servicesPage.crm.pipeline") },
        { icon: Users, text: t("servicesPage.crm.leads") },
        { icon: Zap, text: t("servicesPage.crm.marketing") },
        { icon: Settings, text: t("servicesPage.crm.integrations") },
        { icon: CheckCircle, text: t("servicesPage.crm.analytics") }
      ]
    },
    {
      id: "ai",
      icon: Cpu,
      title: t("servicesPage.ai.title"),
      subtitle: t("servicesPage.ai.subtitle"),
      description: t("servicesPage.ai.description"),
      features: [
        { icon: TrendingUp, text: t("servicesPage.ai.reporting") },
        { icon: Zap, text: t("servicesPage.ai.predictive") },
        { icon: Settings, text: t("servicesPage.ai.process") },
        { icon: Cpu, text: t("servicesPage.ai.ml") },
        { icon: CheckCircle, text: t("servicesPage.ai.alerts") },
        { icon: Cloud, text: t("servicesPage.ai.decision") }
      ]
    },
    {
      id: "digital",
      icon: Rocket,
      title: t("servicesPage.digital.title"),
      subtitle: t("servicesPage.digital.subtitle"),
      description: t("servicesPage.digital.description"),
      features: [
        { icon: Settings, text: t("servicesPage.digital.reengineering") },
        { icon: Cloud, text: t("servicesPage.digital.cloud") },
        { icon: Zap, text: t("servicesPage.digital.legacy") },
        { icon: TrendingUp, text: t("servicesPage.digital.strategy") },
        { icon: Users, text: t("servicesPage.digital.change") },
        { icon: CheckCircle, text: t("servicesPage.digital.training") }
      ]
    },
    {
      id: "governance",
      icon: Shield,
      title: t("servicesPage.governance.title"),
      subtitle: t("servicesPage.governance.subtitle"),
      description: t("servicesPage.governance.description"),
      features: [
        { icon: FileCheck, text: t("servicesPage.governance.policy") },
        { icon: Shield, text: t("servicesPage.governance.audit") },
        { icon: CheckCircle, text: t("servicesPage.governance.compliance") },
        { icon: Settings, text: t("servicesPage.governance.risk") },
        { icon: TrendingUp, text: t("servicesPage.governance.regulatory") },
        { icon: Users, text: t("servicesPage.governance.consulting") }
      ]
    }
  ];

  return (
    <Layout>
      <title>Services - ERP, CRM, AI Solutions | Amy Tech</title>
      <meta name="description" content="Explore Amy Tech's comprehensive services including ERPNext implementation, AI-powered CRM, digital transformation, and corporate governance solutions." />

      {/* Hero Section */}
      <section className="py-24 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
              <Settings className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t("servicesPage.badge")}</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("servicesPage.hero.title1")}{" "}
              <span className="text-gradient">{t("servicesPage.hero.title2")}</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              {t("servicesPage.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-6">
                    <service.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">{service.subtitle}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to="/contact">
                    <Button variant="accent" size="lg" className="group">
                      {t("servicesPage.getStarted")}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {service.features.map((feature, fIndex) => (
                    <motion.div
                      key={fIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fIndex * 0.1 }}
                      className="p-5 rounded-xl bg-card border border-border hover:border-accent/50 card-hover"
                    >
                      <feature.icon className="w-6 h-6 text-accent mb-3" />
                      <span className="text-foreground font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("servicesPage.cta.title")}
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              {t("servicesPage.cta.description")}
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                {t("servicesPage.cta.button")}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
