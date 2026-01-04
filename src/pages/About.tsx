import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Lightbulb,
  Shield,
  BarChart3,
  ArrowRight,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Lightbulb,
      title: t("about.value.innovation"),
      description: t("about.value.innovation.desc")
    },
    {
      icon: Shield,
      title: t("about.value.reliability"),
      description: t("about.value.reliability.desc")
    },
    {
      icon: BarChart3,
      title: t("about.value.dataDriven"),
      description: t("about.value.dataDriven.desc")
    },
    {
      icon: Eye,
      title: t("about.value.transparency"),
      description: t("about.value.transparency.desc")
    }
  ];

  const team = [
    { role: t("about.team.leadership"), description: t("about.team.leadership.desc") },
    { role: t("about.team.engineers"), description: t("about.team.engineers.desc") },
    { role: t("about.team.consultants"), description: t("about.team.consultants.desc") },
    { role: t("about.team.support"), description: t("about.team.support.desc") }
  ];

  return (
    <Layout>
      <title>About Amy Tech - AI-Driven Digital Transformation Partner</title>
      <meta name="description" content="Learn about Amy Tech's mission to empower businesses through AI-driven ERP & CRM solutions. Discover our values, vision, and commitment to digital excellence." />

      {/* Hero Section */}
      <section className="py-24 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t("about.badge")}</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("about.hero.title1")}{" "}
              <span className="text-gradient">{t("about.hero.title2")}</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              {t("about.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-card border border-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t("about.mission.title")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("about.mission.description")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-gradient-to-br from-accent/10 to-teal/10 border border-accent/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t("about.vision.title")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("about.vision.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">{t("about.values.label")}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              {t("about.values.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("about.values.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border text-center card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">{t("about.team.label")}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              {t("about.team.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border text-center"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">{item.role}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {t("about.whyPartner.title")}
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8">
                {t("about.whyPartner.description")}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-1">{t("about.whyPartner.expertise")}</h4>
                  <p className="text-primary-foreground/60">{t("about.whyPartner.expertise.desc")}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t("about.whyPartner.global")}</h4>
                  <p className="text-primary-foreground/60">{t("about.whyPartner.global.desc")}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t("about.whyPartner.longterm")}</h4>
                  <p className="text-primary-foreground/60">{t("about.whyPartner.longterm.desc")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-primary-foreground/10">
                <div className="p-10 bg-primary-foreground/5 backdrop-blur-lg">
                  <h3 className="text-2xl font-bold mb-8">{t("about.cta.title")}</h3>
                  <p className="text-primary-foreground/70 mb-8">
                    {t("about.cta.description")}
                  </p>
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="w-full">
                      {t("about.cta.button")}
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
