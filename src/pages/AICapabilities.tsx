import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Brain,
  BarChart3,
  Zap,
  Bell,
  TrendingUp,
  Settings,
  ArrowRight,
  Cpu,
  LineChart,
  Bot,
  Lightbulb,
  Clock,
  Eye,
  Activity,
  Shield,
  Users,
  Building2,
  GraduationCap,
  Dumbbell,
  Factory,
  Construction,
  ShoppingBag,
  ChefHat,
  HardHat
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const AICapabilities = () => {
  const { t } = useLanguage();

  const capabilities = [
    {
      icon: BarChart3,
      title: t("aiPage.reporting.title"),
      description: t("aiPage.reporting.description"),
      features: [
        t("aiPage.reporting.f1"),
        t("aiPage.reporting.f2"),
        t("aiPage.reporting.f3"),
        t("aiPage.reporting.f4")
      ]
    },
    {
      icon: Lightbulb,
      title: t("aiPage.decision.title"),
      description: t("aiPage.decision.description"),
      features: [
        t("aiPage.decision.f1"),
        t("aiPage.decision.f2"),
        t("aiPage.decision.f3"),
        t("aiPage.decision.f4")
      ]
    },
    {
      icon: Settings,
      title: t("aiPage.workflow.title"),
      description: t("aiPage.workflow.description"),
      features: [
        t("aiPage.workflow.f1"),
        t("aiPage.workflow.f2"),
        t("aiPage.workflow.f3"),
        t("aiPage.workflow.f4")
      ]
    },
    {
      icon: Bell,
      title: t("aiPage.alerts.title"),
      description: t("aiPage.alerts.description"),
      features: [
        t("aiPage.alerts.f1"),
        t("aiPage.alerts.f2"),
        t("aiPage.alerts.f3"),
        t("aiPage.alerts.f4")
      ]
    }
  ];

  const useCases = [
    {
      icon: TrendingUp,
      title: t("aiPage.useCase.sales"),
      description: t("aiPage.useCase.sales.desc")
    },
    {
      icon: Clock,
      title: t("aiPage.useCase.inventory"),
      description: t("aiPage.useCase.inventory.desc")
    },
    {
      icon: Bot,
      title: t("aiPage.useCase.customer"),
      description: t("aiPage.useCase.customer.desc")
    },
    {
      icon: LineChart,
      title: t("aiPage.useCase.financial"),
      description: t("aiPage.useCase.financial.desc")
    }
  ];

  const visionFeatures = [
    {
      icon: Users,
      title: t("aiPage.vision.feature.detection"),
      description: t("aiPage.vision.feature.detection.desc")
    },
    {
      icon: Activity,
      title: t("aiPage.vision.feature.behavior"),
      description: t("aiPage.vision.feature.behavior.desc")
    },
    {
      icon: Shield,
      title: t("aiPage.vision.feature.safety"),
      description: t("aiPage.vision.feature.safety.desc")
    },
    {
      icon: BarChart3,
      title: t("aiPage.vision.feature.analytics"),
      description: t("aiPage.vision.feature.analytics.desc")
    }
  ];

  const visionIndustries = [
    {
      icon: Building2,
      title: t("aiPage.vision.hospital"),
      description: t("aiPage.vision.hospital.desc"),
      features: [
        t("aiPage.vision.hospital.f1"),
        t("aiPage.vision.hospital.f2"),
        t("aiPage.vision.hospital.f3"),
        t("aiPage.vision.hospital.f4")
      ]
    },
    {
      icon: GraduationCap,
      title: t("aiPage.vision.school"),
      description: t("aiPage.vision.school.desc"),
      features: [
        t("aiPage.vision.school.f1"),
        t("aiPage.vision.school.f2"),
        t("aiPage.vision.school.f3"),
        t("aiPage.vision.school.f4")
      ]
    },
    {
      icon: Dumbbell,
      title: t("aiPage.vision.club"),
      description: t("aiPage.vision.club.desc"),
      features: [
        t("aiPage.vision.club.f1"),
        t("aiPage.vision.club.f2"),
        t("aiPage.vision.club.f3"),
        t("aiPage.vision.club.f4")
      ]
    },
    {
      icon: Factory,
      title: t("aiPage.vision.factory"),
      description: t("aiPage.vision.factory.desc"),
      features: [
        t("aiPage.vision.factory.f1"),
        t("aiPage.vision.factory.f2"),
        t("aiPage.vision.factory.f3"),
        t("aiPage.vision.factory.f4")
      ]
    },
    {
      icon: Construction,
      title: t("aiPage.vision.construction"),
      description: t("aiPage.vision.construction.desc"),
      features: [
        t("aiPage.vision.construction.f1"),
        t("aiPage.vision.construction.f2"),
        t("aiPage.vision.construction.f3"),
        t("aiPage.vision.construction.f4")
      ]
    },
    {
      icon: ShoppingBag,
      title: t("aiPage.vision.retail"),
      description: t("aiPage.vision.retail.desc"),
      features: [
        t("aiPage.vision.retail.f1"),
        t("aiPage.vision.retail.f2"),
        t("aiPage.vision.retail.f3"),
        t("aiPage.vision.retail.f4")
      ]
    },
    {
      icon: ChefHat,
      title: t("aiPage.vision.kitchen"),
      description: t("aiPage.vision.kitchen.desc"),
      features: [
        t("aiPage.vision.kitchen.f1"),
        t("aiPage.vision.kitchen.f2"),
        t("aiPage.vision.kitchen.f3"),
        t("aiPage.vision.kitchen.f4")
      ]
    },
    {
      icon: HardHat,
      title: t("aiPage.vision.ppe"),
      description: t("aiPage.vision.ppe.desc"),
      features: [
        t("aiPage.vision.ppe.f1"),
        t("aiPage.vision.ppe.f2"),
        t("aiPage.vision.ppe.f3"),
        t("aiPage.vision.ppe.f4")
      ]
    }
  ];

  return (
    <Layout>
      <title>AI Capabilities - Intelligent Automation & Computer Vision | Amy Tech</title>
      <meta name="description" content="Discover how Amy Tech uses AI for intelligent reporting, computer vision, decision support, workflow automation, and predictive analytics to transform your business operations." />

      {/* Hero Section */}
      <section className="py-24 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
              <Brain className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t("aiPage.badge")}</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("aiPage.hero.title1")}{" "}
              <span className="text-gradient">{t("aiPage.hero.title2")}</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              {t("aiPage.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">{t("aiPage.core.label")}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              {t("aiPage.core.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("aiPage.core.description")}
            </p>
          </motion.div>

          <div className="space-y-16">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <capability.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">{capability.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {capability.description}
                  </p>
                  <ul className="space-y-3">
                    {capability.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-teal/20 rounded-3xl blur-2xl" />
                  <div className="relative p-10 rounded-3xl bg-card border border-border">
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <capability.icon className="w-24 h-24 text-accent/50" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Computer Vision Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <Eye className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t("aiPage.vision.label")}</span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("aiPage.vision.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t("aiPage.vision.description")}
            </p>
          </motion.div>

          {/* Core Vision Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {visionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border card-hover text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Industry Applications Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("aiPage.vision.industries.title")}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("aiPage.vision.industries.description")}
            </p>
          </motion.div>

          {/* Industry Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionIndustries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <industry.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{industry.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm">
                      <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">{t("aiPage.useCases.label")}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              {t("aiPage.useCases.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("aiPage.useCases.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border card-hover text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Cpu className="w-16 h-16 text-accent mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("aiPage.cta.title")}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              {t("aiPage.cta.description")}
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                {t("aiPage.cta.button")}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AICapabilities;
