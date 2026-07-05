import { motion } from "framer-motion";
import PropTypes from "prop-types";

const HomeSection = ({ setActiveSection }) => {
  return (
    <motion.section
      id="home"
      className="w-full rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-[1px] shadow-[0_0_25px_rgba(255,255,255,0.06)] scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="rounded-3xl bg-primary-bg p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl space-y-6">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-400 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Machine Learning Engineer
            </span>
            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary">
              AI Native Fullstack Developer
            </span>
          </div>

          <motion.h1
            className="text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl md:text-5xl tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Building Intelligent Systems <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-text-primary via-text-secondary to-white/40 bg-clip-text text-transparent">
              for Production Environments.
            </span>
          </motion.h1>

          <motion.p
            className="max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            I specialize in designing and deploying end-to-end intelligent systems, focusing on <strong>Retrieval-Augmented Generation (RAG)</strong> applications, <strong>neural recommendation engines</strong>, and high-performance <strong>fullstack scalable applications</strong> that solve real-world problems.
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row pt-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.button
              type="button"
              onClick={() => setActiveSection("projects")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-3xl bg-text-primary text-primary-bg px-6 py-3.5 text-sm font-semibold transition hover:bg-text-secondary sm:w-auto shadow-md"
            >
              View Projects
            </motion.button>
            <motion.a
              href="/projects/Resume-Faisa-Aditya.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center rounded-3xl border border-white/10 bg-secondary-bg px-6 py-3.5 text-sm font-semibold text-text-primary transition hover:bg-white/5 sm:w-auto"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

HomeSection.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};

export default HomeSection;
