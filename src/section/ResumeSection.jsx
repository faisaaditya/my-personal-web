import { motion } from "framer-motion";
import {
  Code2,
  PenTool,
  GraduationCap,
  Wrench,
  Download,
  Sparkles,
} from "lucide-react";

const ResumeSection = () => {
  return (
    <motion.div
      className="w-full bg-gradient-to-br from-white/10 to-white/5 p-[1px] rounded-xl shadow-[0_0_25px_rgba(255,255,255,0.06)]"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-primary-bg rounded-xl p-10">
        {/* HEADER + DOWNLOAD BUTTON */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-extrabold text-text-primary">Resume</h1>

          <a
            href="/src/assets/images/Resume-Faisa-Aditya.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-text-primary text-text-primary font-semibold hover:bg-text-primary hover:text-primary-bg transition"
          >
            <Download className="w-4 h-4" /> Download PDF
          </a>
        </div>

        <div className="flex flex-col gap-10">
          {/* SKILLS */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Code2 className="text-accent w-6 h-6" />
              <h2 className="text-2xl font-bold text-text-primary">Skills</h2>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-text-secondary">
              <li>• Frontend Development (React, Vite, Tailwind)</li>
              <li>• UI/UX Structure & Component Thinking</li>
              <li>• JavaScript (ES6+)</li>
              <li>• Python (Machine Learning Basics)</li>
              <li>• Responsive Web Design</li>
              <li>• Version Control (Git/GitHub)</li>
            </ul>
          </div>

          {/* DESIGN */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <PenTool className="text-accent w-6 h-6" />
              <h2 className="text-2xl font-bold text-text-primary">
                Design & Branding
              </h2>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-text-secondary">
              <li>• T-shirt Graphic Design</li>
              <li>• Typography-Based Artwork</li>
              <li>• Brand Identity Exploration</li>
              <li>• Adobe Illustrator, Photoshop</li>
              <li>• Mockup Composition & Print-Ready Setup</li>
            </ul>
          </div>

          {/* EXPERIENCE */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Wrench className="text-accent w-6 h-6" />
              <h2 className="text-2xl font-bold text-text-primary">
                Experience
              </h2>
            </div>

            <div className="space-y-6">
              {/* LCA */}
              <div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Freelance T-Shirt Designer — LCA Dominate
                </h3>
                <p className="text-sm text-accent mb-1">
                  2023 – Sekarang (2 tahun)
                </p>
                <p className="text-text-secondary">
                  Membuat seri desain streetwear tipografi bold dan layout
                  maskulin siap produksi untuk brand lokal LCA Dominate.
                </p>
              </div>

              {/* SUPERMATCHY */}
              <div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Freelance Designer — Supermatchy Vendor
                </h3>
                <p className="text-sm text-accent mb-1">
                  2022 – Sekarang (3 tahun)
                </p>
                <p className="text-text-secondary">
                  Mendesain apparel, layout sablon, dan revisi teknis produksi
                  untuk vendor Supermatchy.
                </p>
              </div>

              {/* WEB DEV */}
              <div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Web Developer — Personal & Academic Projects
                </h3>
                <p className="text-sm text-accent mb-1">
                  2021 – Sekarang (4 tahun)
                </p>
                <p className="text-text-secondary">
                  Membangun projek web modern dengan React, Tailwind, dan CSS
                  modular dengan fokus pada UI bersih dan pengalaman pengguna.
                </p>
              </div>
            </div>
          </div>

          {/* SOFT SKILLS */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Sparkles className="text-accent w-6 h-6" />
              <h2 className="text-2xl font-bold text-text-primary">
                Soft Skills
              </h2>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-text-secondary">
              <li>• Communication & Collaboration</li>
              <li>• Creative Problem Solving</li>
              <li>• Visual Thinking</li>
              <li>• Attention to Detail</li>
              <li>• Time & Task Management</li>
            </ul>
          </div>

          {/* EDUCATION */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap className="text-accent w-6 h-6" />
              <h2 className="text-2xl font-bold text-text-primary">
                Education
              </h2>
            </div>

            <p className="text-text-secondary">
              S1 Informatika — Universitas Amikom Yogyakarta
              <br />
              Fokus: Web Development, Data Mining, Machine Learning
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeSection;
