import PropTypes from "prop-types";
import {
  MapPin,
  Globe2,
  Clock,
  Download,
  Github,
  MessageSquare,
} from "lucide-react";
import profileImage from "../assets/images/fotoProfile.jpg";

const skillsPreview = [
  "Python",
  "PyTorch",
  "Next.js",
  "pgvector",
  "Gemini AI",
  "React.js",
];

const ProfileCard = ({ onNavigate }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-primary-bg/90 p-5 shadow-xl backdrop-blur-sm sm:p-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <img
          src={profileImage}
          alt="Profile"
          className="h-28 w-28 rounded-full border border-white/10 object-cover"
        />

        <div className="space-y-2">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available to Work
          </p>
          <h2 className="text-xl font-bold text-text-primary">
            Faisa Aditya Athallah
          </h2>
          <p className="text-sm font-medium text-text-secondary">
            Machine Learning Engineer
          </p>
          <p className="text-sm text-text-secondary">
            AI Native Fullstack Developer
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        <div className="rounded-3xl border border-white/10 bg-secondary-bg p-4 text-sm text-text-primary flex items-center gap-2">
          <MapPin className="h-4 w-4" /> Sleman, DI Yogyakarta
        </div>
        <div className="rounded-3xl border border-white/10 bg-secondary-bg p-4 text-sm text-text-primary flex items-center gap-2">
          <Globe2 className="h-4 w-4" /> Indonesian / English
        </div>

      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary">
          Skills Preview
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {skillsPreview.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        <a
          href="/projects/cv-FaisaAditya.pdf"
          download
          className="inline-flex items-center justify-center gap-2 rounded-3xl border border-white/10 bg-secondary-bg px-4 py-3 text-sm font-semibold text-text-primary transition hover:bg-accent hover:text-primary-bg"
        >
          <Download className="h-4 w-4" />
          Download CV
        </a>
        <a
          href="https://github.com/Faisaaditya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-3xl border border-white/10 bg-secondary-bg px-4 py-3 text-sm font-semibold text-text-primary transition hover:bg-accent hover:text-primary-bg"
        >
          <Github className="h-4 w-4" />
          View GitHub
        </a>
        <button
          type="button"
          onClick={() => onNavigate("contact")}
          className="inline-flex items-center justify-center gap-2 rounded-3xl border border-white/10 bg-secondary-bg px-4 py-3 text-sm font-semibold text-text-primary transition hover:bg-accent hover:text-primary-bg"
        >
          <MessageSquare className="h-4 w-4" />
          Contact Me
        </button>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  onNavigate: PropTypes.func,
};

export default ProfileCard;
