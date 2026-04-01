import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    role: "Data Analyst / Python Developer",
    company: "ABC Analytics Solutions",
    period: "Jan 2023 – Present",
    bullets: [
      "Built Python scripts to automate repetitive reporting tasks, reducing manual work by 40%.",
      "Cleaned and transformed large datasets using Pandas for reporting and analysis.",
      "Developed internal data tools to streamline file processing and business operations.",
      "Collaborated with business teams to convert raw data into useful insights.",
    ],
  },
  {
    role: "Power BI Developer",
    company: "Insight Metrics Pvt. Ltd.",
    period: "Jun 2021 – Dec 2022",
    bullets: [
      "Designed dynamic Power BI dashboards for sales, operations, and performance tracking.",
      "Built DAX measures and KPIs for executive reporting.",
      "Used Power Query to prepare and transform data from multiple sources.",
      "Improved reporting efficiency and helped stakeholders monitor business performance in real time.",
    ],
  },
  {
    role: "Junior Data Analyst",
    company: "DataBridge Technologies",
    period: "Jan 2020 – May 2021",
    bullets: [
      "Assisted in preparing reports and dashboards using Excel, SQL, and Power BI.",
      "Supported data cleaning, validation, and visualization for business teams.",
      "Helped maintain weekly and monthly reporting pipelines.",
      "Contributed to dashboard enhancements and process improvements.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-card">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {jobs.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="md:pl-16 relative"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-3.5 top-2 w-5 h-5 rounded-full bg-primary/20 items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>

              <div className="card-portfolio">
                <div className="flex items-start gap-3 mb-3">
                  <Briefcase size={20} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{job.role}</h3>
                    <p className="text-sm text-primary font-medium">{job.company}</p>
                    <p className="text-xs text-muted-foreground mt-1">{job.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-8">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
