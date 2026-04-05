import { motion } from "framer-motion";
import { ExternalLink, BarChart3, FileSpreadsheet, Users, Building2, Database, DollarSign } from "lucide-react";

const projects = [
  {
    title: "Sales Performance Dashboard",
    tech: "Power BI, DAX, Power Query",
    desc: "Built an interactive sales dashboard to track revenue, profit, region-wise performance, and monthly trends. Included drill-down features, KPI cards, and executive summaries.",
    icon: BarChart3,
  },
  {
    title: "Automated Excel Reporting Tool",
    tech: "Python, Pandas, OpenPyXL",
    desc: "Developed a Python tool that reads raw Excel files, cleans the data, generates summaries, and exports formatted reports automatically, saving hours of manual work.",
    icon: FileSpreadsheet,
  },
  {
    title: "Customer Churn Analysis",
    tech: "Python, Pandas, Matplotlib",
    desc: "Analyzed customer behavior data to identify churn patterns and visualize key risk factors. Created charts and insights to support retention strategies.",
    icon: Users,
  },
  {
    title: "HR Analytics Dashboard",
    tech: "Power BI, DAX",
    desc: "Created an HR dashboard to monitor employee headcount, attrition, department trends, and hiring metrics. Designed for HR managers to make faster workforce decisions.",
    icon: Building2,
  },
  {
    title: "Data Cleaning Pipeline",
    tech: "Python, Pandas",
    desc: "Built a reusable data-cleaning workflow for inconsistent CSV and Excel datasets, including missing value treatment, formatting, deduplication, and validation checks.",
    icon: Database,
  },
  {
    title: "Financial KPI Dashboard",
    tech: "Power BI, Excel",
    desc: "Designed a finance dashboard to track budget vs actuals, expense categories, and profitability metrics with interactive filters and summary visuals.",
    icon: DollarSign,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Projects</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-portfolio group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <p.icon size={20} className="text-primary" />
              </div>
              {/* <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" /> */}
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-xs font-medium text-primary mb-3">{p.tech}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
