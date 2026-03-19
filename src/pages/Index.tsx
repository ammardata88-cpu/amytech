import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Database, 
  Users, 
  Cpu, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle, 
  Zap,
  BarChart3,
  Shield,
  Rocket,
  Building2,
  Factory,
  ShoppingBag,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Index = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      icon: Database,
      titleKey: "service.erp.title",
      descKey: "service.erp.description",
      link: "/services#erp"
    },
    {
      icon: Users,
      titleKey: "service.crm.title",
      descKey: "service.crm.description",
      link: "/services#crm"
    },
    {
      icon: Cpu,
      titleKey: "service.ai.title",
      descKey: "service.ai.description",
      link: "/services#ai"
    },
    {
      icon: Rocket,
      titleKey: "service.digital.title",
      descKey: "service.digital.description",
      link: "/services#digital"
    },
    {
      icon: Shield,
      titleKey: "service.governance.title",
      descKey: "service.governance.description",
      link: "/services#governance"
    },
    {
      icon: BarChart3,
      titleKey: "service.analytics.title",
      descKey: "service.analytics.description",
      link: "/ai-capabilities"
    }
  ];

  const industries = [
    { icon: Factory, nameKey: "industry.manufacturing" },
    { icon: ShoppingBag, nameKey: "industry.retail" },
    { icon: Truck, nameKey: "industry.logistics" },
    { icon: Building2, nameKey: "industry.services" }
  ];

  const whyUsItems = [
    t("why.item1"),
    t("why.item2"),
    t("why.item3"),
    t("why.item4"),
    t("why.item5")
  ];

  return (
    <Layout>
      {/* SEO */}
      <title>Amy Tech - AI-Powered Digital Transformation & ERPNext Solutions</title>
      <meta name="description" content="Amy Tech provides AI-driven ERP, CRM solutions, and digital transformation services. Expert ERPNext implementation for businesses seeking automation and governance." />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="AI Technology Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        {/* Animated glow effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teal/20 rounded-full blur-3xl animate-pulse animation-delay-400" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t("hero.badge")}</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
            >
              {t("hero.title1")}{" "}
              <span className="text-gradient">{t("hero.title2")}</span>{" "}
              {t("hero.title3")}
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  {t("hero.cta1")}
                  <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  {t("hero.cta2")}
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              variants={itemVariants}
              className="mt-16 pt-8 border-t border-primary-foreground/10"
            >
              <p className="text-primary-foreground/50 text-sm mb-4">{t("hero.trusted")}</p>
              <div className="flex flex-wrap gap-8">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center gap-2 text-primary-foreground/70">
                    <industry.icon className="w-5 h-5" />
                    <span>{t(industry.nameKey)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">{t("services.label")}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              {t("services.title1")} <br />
              <span className="text-gradient">{t("services.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("services.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={service.link}>
                  <div className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 card-hover h-full">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{t(service.titleKey)}</h3>
                    <p className="text-muted-foreground mb-4">{t(service.descKey)}</p>
                    <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                      {t("services.learnMore")} <ArrowIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">{t("why.label")}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                {t("why.title1")}{" "}
                <span className="text-gradient">{t("why.title2")}</span>
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8">
                {t("why.description")}
              </p>

              <div className="space-y-4">
                {whyUsItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-primary-foreground/80">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/about">
                  <Button variant="hero" size="lg">
                    {t("why.learnMore")}
                    <ArrowIcon className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl" />
              <div className="relative glass rounded-3xl p-8 border border-primary-foreground/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                    <Brain className="w-10 h-10 text-accent mb-4" />
                    <h4 className="font-bold text-lg mb-2">{t("feature.aiPowered")}</h4>
                    <p className="text-primary-foreground/60 text-sm">{t("feature.aiPowered.desc")}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                    <Database className="w-10 h-10 text-teal mb-4" />
                    <h4 className="font-bold text-lg mb-2">{t("feature.erpnext")}</h4>
                    <p className="text-primary-foreground/60 text-sm">{t("feature.erpnext.desc")}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                    <Shield className="w-10 h-10 text-accent mb-4" />
                    <h4 className="font-bold text-lg mb-2">{t("feature.secure")}</h4>
                    <p className="text-primary-foreground/60 text-sm">{t("feature.secure.desc")}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                    <Rocket className="w-10 h-10 text-teal mb-4" />
                    <h4 className="font-bold text-lg mb-2">{t("feature.scalable")}</h4>
                    <p className="text-primary-foreground/60 text-sm">{t("feature.scalable.desc")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-teal opacity-90" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            
            <div className="relative z-10 py-16 px-8 md:py-20 md:px-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-10">
                {t("cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                    {t("cta.button1")}
                    <ArrowIcon className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="xl" variant="outline" className="border-2 border-primary/30 bg-transparent text-primary hover:bg-primary/10">
                    {t("cta.button2")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
