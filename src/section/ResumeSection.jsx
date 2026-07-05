import { motion } from "framer-motion";
import { Brain, Code2, Download, GraduationCap, Sparkles } from "lucide-react";

const skillsGroups = [
  {
    title: "AI / Machine Learning",
    items: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Transformer",
      "Graph Neural Network",
      "Contrastive Learning",
      "RAG",
      "pgvector",
    ],
  },
  {
    title: "Fullstack Development",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "REST API",
    ],
  },
  {
    title: "Tools & Infrastructure",
    items: ["Git", "GitHub", "Vercel", "Google Gemini API", "SQL"],
  },
];

const ResumeSection = () => {
  return (
    <motion.section
      id="resume"
      className="mx-auto w-full rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-[1px] shadow-[0_0_25px_rgba(255,255,255,0.06)] scroll-mt-24"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="rounded-3xl bg-primary-bg p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Resume
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-text-primary sm:text-4xl">
              An engineering-minded background with AI and product focus.
            </h2>
          </div>
          <a
            href="/projects/CV-FaisaAditya.pdf"
            download="CV-FaisaAditya.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-3xl border border-white/10 bg-secondary-bg px-5 py-3 text-sm font-semibold text-text-primary transition hover:bg-accent hover:text-primary-bg"
          >
            <Download className="h-4 w-4" />
            CV
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-white/10 bg-secondary-bg p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-semibold text-text-primary">
                Education
              </h3>
            </div>
            <div className="mt-5 space-y-4 border-l border-white/10 pl-5">
              <div>
                <p className="text-lg font-semibold text-text-primary">
                  Universitas Amikom Yogyakarta
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  Bachelor of Informatics
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  GPA 3.19 / 4.00
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Focus: Artificial Intelligence, Machine Learning, Data Mining,
                  Software Engineering
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-secondary-bg p-6">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-semibold text-text-primary">
                Experience
              </h3>
            </div>
            <div className="mt-5 space-y-4 border-l border-white/10 pl-5">
              <div>
                <p className="text-base font-semibold text-text-primary">
                  Freelance Graphic Designer
                </p>
                <p className="mt-1 text-sm text-accent">2023 – Present</p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Managed concept execution and production design workflows, collaborating with client teams to deliver layout assets. Engineered vector patterns and typography configurations ensuring production-ready visual asset handoffs.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <section className="rounded-3xl border border-white/10 bg-secondary-bg p-6">
            <div className="flex items-center gap-3">
              <Code2 className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-semibold text-text-primary">
                Skills
              </h3>
            </div>
            <div className="mt-5 space-y-4">
              {skillsGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-3xl bg-primary-bg p-4 border border-white/5"
                >
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                    {group.title}
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-text-primary hover:border-white/40 transition duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-secondary-bg p-6">
            <div className="flex items-center gap-3">
              <Brain className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-semibold text-text-primary">
                Leadership
              </h3>
            </div>
            <div className="mt-5 space-y-4">
              <div className="rounded-3xl bg-primary-bg p-4 border border-white/5">
                <p className="text-base font-semibold text-text-primary">
                  Vice Chairman
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  Independence Day Committee
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  80th & 81st Indonesian Independence Day Celebration
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">
                Languages
              </h4>
              <div className="mt-3 space-y-3 text-sm text-text-secondary">
                <div className="flex items-center justify-between rounded-3xl bg-primary-bg border border-white/5 px-4 py-3">
                  <span>Indonesian</span>
                  <span className="text-accent">Native</span>
                </div>
                <div className="flex items-center justify-between rounded-3xl bg-primary-bg border border-white/5 px-4 py-3">
                  <span>English</span>
                  <span className="text-accent">Intermediate</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.section>
  );
};

export default ResumeSection;
