import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ==========================
// PROJECT DATA WITH MULTIPLE IMAGES
// ==========================
const projects = [
  {
    title: "T-Shirt Graphics for LCA Dominate",
    desc: "Seri desain kaos streetwear untuk brand LCA Dominate, dengan fokus pada tipografi agresif dan karakter visual maskulin.",
    tools: "Illustrator, Typography, Streetwear Layout",
    images: [
      "/src/assets/images/lca01.jpg",
      "/src/assets/images/lca02.jpg",
      "/src/assets/images/lca03.jpg",
      "/src/assets/images/lca04.jpg",
      "/src/assets/images/lca05.jpg",
      "/src/assets/images/lca06.jpg",
      "/src/assets/images/lca07.png",
    ],
    ratio: "aspect-square",
  },
  {
    title: "Freelance Design",
    desc: "Desain apparel siap produksi, berfokus pada layout bersih dan identitas brand. Mencakup layout kaos siap produksi dan visual untuk kebutuhan pelanggan.",
    tools: "Illustrator, Print-Ready Setup",
    images: [
      "/src/assets/images/FREE01.png",
      "/src/assets/images/FREE02.jpg",
      "/src/assets/images/FREE03.png",
      "/src/assets/images/FREE04.png",
      "/src/assets/images/FREE05.png",
      "/src/assets/images/FREE06.jpg",
      "/src/assets/images/FREE07.png",
    ],
    ratio: "aspect-square",
  },
  {
    title: "Personal Portfolio Website",
    desc: "Website portofolio interaktif dengan animasi modern dan layout profesional.",
    tools: "React, Tailwind, Framer Motion",
    images: ["/src/assets/images/portfolio-preview.png"],
    ratio: "aspect-video",
  },
];

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevSlide = () => {
    setSlideIndex(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  return (
    <>
      {/* ==== PROJECT SECTION WRAPPER ==== */}
      <motion.div
        className="w-full bg-gradient-to-br from-white/10 to-white/5 p-[1px] rounded-xl shadow-[0_0_25px_rgba(255,255,255,0.06)]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-primary-bg rounded-xl p-10">
          <h1 className="text-4xl font-extrabold text-text-primary mb-8">
            Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                onClick={() => {
                  setSelectedProject(p);
                  setSlideIndex(0);
                }}
                className="cursor-pointer p-[1px] rounded-xl bg-gradient-to-br from-white/10 to-white/5 shadow-[0_0_20px_rgba(255,255,255,0.04)] hover:shadow-[0_0_35px_rgba(255,255,255,0.07)] transition"
              >
                <div className="bg-secondary-bg rounded-xl overflow-hidden">
                  <div className={`${p.ratio} w-full overflow-hidden`}>
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {p.title}
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {p.desc}
                    </p>
                    <p className="text-sm text-accent">{p.tools}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ========================== */}
      {/* MODAL SLIDESHOW           */}
      {/* ========================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-primary-bg rounded-xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 shadow-[0_0_35px_rgba(255,255,255,0.12)] max-w-xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-secondary-bg rounded-xl overflow-hidden">
                {/* IMAGE SLIDE */}
                <div className="relative">
                  <img
                    src={selectedProject.images[slideIndex]}
                    className="w-full object-cover"
                  />

                  {/* NEXT BUTTON */}
                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 px-3 py-2 rounded-md transition"
                  >
                    ➤
                  </button>

                  {/* PREV BUTTON */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 px-3 py-2 rounded-md transition"
                  >
                    ←
                  </button>

                  {/* INDICATOR */}
                  <div className="absolute bottom-3 right-3 bg-black/40 text-white px-3 py-1 rounded-md text-sm">
                    {slideIndex + 1} / {selectedProject.images.length}
                  </div>
                </div>

                {/* TEXT AND BUTTON */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-text-primary mb-2">
                    {selectedProject.title}
                  </h2>

                  <p className="text-text-secondary mb-4">
                    {selectedProject.desc}
                  </p>

                  <p className="text-accent text-sm mb-6">
                    Tools: {selectedProject.tools}
                  </p>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2 rounded-lg border border-text-primary text-text-primary hover:bg-text-primary hover:text-primary-bg transition"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectSection;
