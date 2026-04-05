import { motion } from "framer-motion";
import { ArrowDown, Mail, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center pt-16"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Welcome to my portfolio
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">Ali Asghar Al Qamari</span>
            </h1>
            <p className="font-display text-lg sm:text-xl text-muted-foreground font-medium mb-6">
              Python Developer | Power BI Developer | Data Analyst
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
              I build data-driven solutions using Python and Power BI,
              transforming raw data into actionable insights, interactive
              dashboards, and automation tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-medium">
                <a href="#projects">
                  <ArrowDown size={18} className="mr-2" />
                  View Projects
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium">
                <a href="#contact">
                  <Mail size={18} className="mr-2" />
                  Contact Me
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium">
                <a href="/AliAsgharAlQamari_Resume.pdf" download>
                  <FileDown size={18} className="mr-2" />
                  View My Resume
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 overflow-hidden">
              <img
                src="/dp.jpeg"
                alt="Ali Asghar Al Qamari"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
