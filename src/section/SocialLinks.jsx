import { Github, Twitter, Instagram } from "lucide-react";

const SocialLinks = () => {
  const links = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/Faisaaditya",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/Adityaatha_",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://instagram.com/faisaadityaa",
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-primary-bg/90 p-5 shadow-xl sm:p-6">
      <div className="flex items-center justify-between gap-4 text-text-secondary">
        <span className="text-sm font-semibold">Social</span>
        <span className="text-xs uppercase tracking-[0.24em] text-white/40">
          Follow
        </span>
      </div>
      <div className="mt-4 flex justify-evenly gap-3">
        {links.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary-bg text-text-primary transition hover:bg-white/10"
            aria-label={item.name}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
