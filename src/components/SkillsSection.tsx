import { motion } from "framer-motion";
import { Code2, BarChart3, Wrench } from "lucide-react";

const categories = [
  {
    title: "Python",
    icon: Code2,
    skills: ["Data Analysis", "Data Cleaning", "Automation Scripts", "Pandas", "NumPy", "Matplotlib", "API Integration", "File Processing"],
  },
  {
    title: "Power BI",
    icon: BarChart3,
    skills: ["Interactive Dashboards", "Data Modeling", "DAX", "Power Query", "KPI Reporting", "ETL Workflows", "Business Reporting", "Data Visualization"],
  },
  {
    title: "Other Tools",
    icon: Wrench,
    skills: ["Excel", "SQL", "Git", "CSV/Excel Data Handling"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.15 }}
            className="card-portfolio"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <cat.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
