import { Github, Twitter, Instagram } from "lucide-react";

const SocialLinks = () => {
  const links = [
    {
      name: "GitHub",
      username: "Faisaaditya",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Faisaaditya",
    },
    {
      name: "Twitter",
      username: "adityaAtha_",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://x.com/Adityaatha_",
    },
    {
      name: "Instagram",
      username: "faisaadityaa",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/faisaadityaa",
    },
  ];

  return (
    <div className="card mt-6 p-4 rounded-lg shadow-lg bg-primary-bg">
      <ul className="flex flex-col gap-4">
        {links.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center p-2 rounded-lg hover:bg-secondary-bg transition-colors"
            >
              <div className="flex items-center gap-2 text-text-primary">
                {item.icon}
                <h6 className="font-medium">{item.name}</h6>
              </div>
              <span className="text-text-secondary">{item.username}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
