import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  "Python Basic",
  "Python Functions, Files, and Dictionaries",
  "Power BI Dashboard Development",
  "Data Visualization and Reporting",
  "SQL and Excel for Analytics",
];

const CertificationsSection = () => (
  <section className="section-padding bg-card">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Certifications & Highlights
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card-portfolio flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Award size={20} className="text-primary" />
            </div>
            <p className="font-medium text-sm text-foreground">{c}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
