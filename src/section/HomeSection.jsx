import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import PropTypes from "prop-types";

const HomeSection = ({ setActiveSection }) => {
  return (
    <motion.div
      className="min-h-[60vh] bg-primary-bg rounded-lg shadow-lg p-10 flex flex-col items-start justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Tagline */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <ReactTyped
          strings={[
            "Crafting Code, Printing Stories.",
            "Membangun Website, Merancang Cerita.",
          ]}
          typeSpeed={40}
          backSpeed={20}
          loop
        />
      </motion.h1>

      {/* Brand Statement */}
      <motion.p
        className="text-lg md:text-xl text-text-secondary max-w-3xl leading-relaxed mb-8 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        Web developer dan graphic t-shirt designer. Saya membuat website sama
        seperti merancang desain kaos yang membawa karakter, suara, dan sikap.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-wrap gap-4 justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <button
          onClick={() => setActiveSection("contacts")}
          className="px-6 py-3 rounded-xl border border-text-primary text-text-primary font-semibold hover:bg-text-primary hover:text-primary-bg transition"
        >
          Lihat Portofolio
        </button>

        <button
          onClick={() => setActiveSection("contacts")}
          className="px-6 py-3 rounded-xl border border-text-primary text-text-primary font-semibold hover:bg-text-primary hover:text-primary-bg transition"
        >
          Hubungi Saya
        </button>
      </motion.div>
    </motion.div>
  );
};

HomeSection.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};

export default HomeSection;
