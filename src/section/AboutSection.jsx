import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Machine Learning",
    description: "Developing robust neural recommendation systems, deep sequence models, and predictive algorithms.",
    icon: Brain,
  },
  {
    title: "Fullstack Development",
    description: "Architecting scalable web systems, database integrations, and robust API layouts.",
    icon: Code2,
  },
  {
    title: "AI Engineering",
    description: "Designing Retrieval-Augmented Generation (RAG) platforms, vector spaces, and LLM implementations.",
    icon: Sparkles,
  },
];

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="w-full rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-[1px] shadow-[0_0_25px_rgba(255,255,255,0.06)] scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="rounded-3xl bg-primary-bg p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            About Me
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-text-primary sm:text-4xl">
            Engineering intelligent systems with solid product execution.
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-text-secondary sm:text-base">
            <p>
              I am an Informatics graduate from Universitas Amikom Yogyakarta specializing in Machine Learning and Fullstack Development. I am driven by the challenge of bridging theoretical AI concepts with production-ready codebases.
            </p>
            <p>
              My hands-on experience spans building production-scale Retrieval-Augmented Generation (RAG) platforms and researching deep sequence recommendations using Transformer layers and Graph Neural Networks (GNNs).
            </p>
            <p>
              Additionally, my background in visual execution gives me an edge in UI/UX collaboration, helping me deliver systems that are both architecturally sound and user-focused.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-white/10 bg-secondary-bg p-5"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
