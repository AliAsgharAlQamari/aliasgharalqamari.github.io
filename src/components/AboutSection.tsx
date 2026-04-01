import { motion } from "framer-motion";
import { User, BarChart3, Code2 } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Python Developer", desc: "Automation, data pipelines & analysis" },
  { icon: BarChart3, label: "Power BI Expert", desc: "Interactive dashboards & reporting" },
  { icon: User, label: "Data Analyst", desc: "Insights & business intelligence" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-card">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">
          I am a data-focused professional with hands-on experience in Python and
          Power BI. I enjoy building dashboards, automating workflows, cleaning and
          analyzing data, and creating solutions that help businesses make better
          decisions. My work combines technical problem-solving with clear data
          storytelling.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="card-portfolio text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
              <h.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{h.label}</h3>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
