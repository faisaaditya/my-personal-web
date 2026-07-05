import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "KnowledgeHub-AI",
    eyebrow: "AI / RAG · Production Product",
    description: "AI-powered document intelligence system designed for multi-tenant internal knowledge management.",
    problem: "Traditional text search fails to capture context, leading to manual document scanning and slow information discovery.",
    solution: "Built a Retrieval-Augmented Generation (RAG) platform with multi-tenant secure boundaries, embedding document content into vector space to enable natural language querying with verifiable citations.",
    technologies: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "Gemini AI",
      "TypeScript",
    ],
    architecture: "Serverless data pipeline for PDF parsing, text chunking, and embedding generation stored in pgvector. Implemented Gemini-grounded query answering with source document highlight citations.",
    highlights: [
      "Vector-based semantic search with pgvector indexing",
      "Multi-tenant security architecture for document boundaries",
      "Gemini API LLM integration for grounded reasoning",
      "High performance serverless indexing pipelines",
    ],
    // impact: "⚡ Improved information discovery speed by 80% with zero halluncination reference tracing.",
    image: "/projects/knowledgehub-ai.svg",
    liveUrl: "https://knowledgehub-ai-mu.vercel.app/",
    githubUrl: "https://github.com/Faisaaditya",
  },
  {
    title: "Dual View Contrastive Learning (Thesis)",
    eyebrow: "Machine Learning · Deep Learning Research",
    description: "Sequential recommendation system using hybrid neural models with self-supervised contrastive learning.",
    problem: "Captured user preferences in transaction sequences are highly dynamic, noisy, and subject to severe data sparsity issues.",
    solution: "Designed a recommendation network coupling Transformer blocks (capturing long-term sequential preferences) with Graph Neural Networks (capturing global item-transition relationships) optimized via dual-view contrastive learning.",
    technologies: [
      "PyTorch",
      "Transformer",
      "GNN",
      "MovieLens-1M",
      "Steam",
      "LFM1b",
    ],
    architecture: "Dual-encoder architecture combining GNN graphs and sequential multi-head attention. Optimized using InfoNCE loss to align representations across different augmentations.",
    highlights: [
      "Graph Neural Networks mapping item-to-item global interactions",
      "Transformer self-attention layers recording sequence dynamics",
      "Self-supervised contrastive learning framework to regularize sparsity",
      "Benchmarked on MovieLens-1M, Steam, and LFM1b datasets",
    ],
    // impact: "📈 Outperformed baseline recommenders, raising HR@10 and NDCG@10 scores.",
    image: "/projects/dual-view-contrastive.svg",
    liveUrl: null,
    githubUrl: "https://github.com/Faisaaditya",
  },
  {
    title: "Personal Portfolio Website",
    eyebrow: "Frontend Engineering · UX / UI Design",
    description: "SaaS-landing style developer portfolio showcasing engineering impact and storytelling.",
    problem: "Standard text-only resumes fail to demonstrate design sensitivity, interactivity, and product execution details.",
    solution: "Developed a clean React codebase with modular components, smooth framer-motion reveals, and a scroll spy navigation overlay.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "EmailJS"],
    architecture: "Component-driven React layout hosted on Vercel. Incorporates a unified state for scroll tracking (IntersectionObserver) and serverless email sending.",
    highlights: [
      "Framer Motion interaction and scroll-reveal system",
      "Sticky blurred glassmorphism navigation overlays",
      "Fully responsive responsive CSS grid layout",
    ],
    // impact: "⚡ Score of 100% on performance and accessibility metrics.",
    image: "/projects/portfolio-preview.png",
    liveUrl: "https://faisaaditya.vercel.app/",
    githubUrl: "https://github.com/Faisaaditya",
  },
];

const ProjectSection = () => {
  return (
    <motion.section
      id="projects"
      className="mx-auto w-full rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-[1px] shadow-[0_0_25px_rgba(255,255,255,0.06)] scroll-mt-24"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="rounded-3xl bg-primary-bg p-6 sm:p-8 lg:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-text-primary sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 text-sm text-text-secondary">
            Detailing the problem statements, architectural solutions, and engineering outcomes.
          </p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-1 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.005 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-secondary-bg/80 hover:shadow-lg hover:shadow-white/[0.01] flex flex-col justify-between"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover border-b border-white/10"
                />

                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary/70">
                      {project.eyebrow}
                    </span>
                    <h3 className="text-2xl font-bold text-text-primary mt-1">
                      {project.title}
                    </h3>
                  </div>

                  <div className="text-sm space-y-2 border-l-2 border-accent/40 pl-3">
                    <p className="text-text-secondary">
                      <strong className="text-text-primary/95 text-xs font-semibold uppercase tracking-wider block mb-0.5">Problem</strong>
                      {project.problem}
                    </p>
                    <p className="text-text-secondary">
                      <strong className="text-text-primary/95 text-xs font-semibold uppercase tracking-wider block mb-0.5">Solution Approach</strong>
                      {project.solution}
                    </p>
                  </div>

                  <div className="text-sm">
                    <strong className="text-text-primary/95 text-xs font-semibold uppercase tracking-wider block mb-1">Architecture Summary</strong>
                    <p className="text-text-secondary">{project.architecture}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/5 bg-primary-bg px-2.5 py-1 text-xs font-medium text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <strong className="text-text-primary/95 text-xs font-semibold uppercase tracking-wider block mb-2">Key Highlights</strong>
                    <ul className="space-y-1.5 text-sm text-text-secondary">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2 items-start">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.impact && (
                    <div className="mt-3 rounded-2xl bg-white/5 border border-white/10 p-3.5 text-sm font-semibold text-text-primary">
                      {project.impact}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-primary-bg px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-accent hover:text-primary-bg"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-primary-bg px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-accent hover:text-primary-bg"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
