import { motion } from "framer-motion";
import { Cpu, Database, Rocket, GitMerge } from "lucide-react";

const metrics = [

  {
    icon: Cpu,
    metric: "AI Systems",
    title: "Built & Integrated",
    description: "Designed recommendation engines, RAG pipelines, and deep learning sequence architectures.",
    colorClass: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Database,
    metric: "3 Public Datasets",
    title: "Research Validated",
    description: "Trained and benchmarked recommendation systems on MovieLens, Steam, and LFM1b datasets.",
    colorClass: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Rocket,
    metric: "Production Ready",
    title: "Fullstack AI Deployed",
    description: "Built KnowledgeHub-AI with multi-tenancy, serverless vector pipelines, and citation validation.",
    colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: GitMerge,
    metric: "Transformer + GNN",
    title: "Advanced Recommendation",
    description: "Implemented dual-encoder sequence recommendations with contrastive learning paradigms.",
    colorClass: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  },
];

const ImpactSection = () => {
  return (
    <motion.section
      id="impact"
      className="w-full rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-[1px] shadow-[0_0_25px_rgba(255,255,255,0.06)] scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="rounded-3xl bg-primary-bg p-6 sm:p-8 lg:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Impact & Metrics
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-text-primary sm:text-4xl">
            Measurable contributions to engineering and research.
          </h2>
          <p className="mt-4 text-sm text-text-secondary">
            A snapshot of performance metrics, architectural milestones, and scale.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-secondary-bg/60 p-5 transition-shadow hover:shadow-[0_4px_20px_rgba(255,255,255,0.02)]"
              >
                <div>
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border ${item.colorClass}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-2xl font-black text-text-primary tracking-tight">
                    {item.metric}
                  </h3>
                  <h4 className="mt-1 text-sm font-semibold text-text-primary/90">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ImpactSection;
