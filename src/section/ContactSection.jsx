import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    const ownerParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      time: new Date().toLocaleString("id-ID"),
    };

    const autoReplyParams = {
      from_name: form.name,
      reply_to: form.email,
    };

    const sendToOwner = emailjs.send(
      "service_1bngjad",
      "template_7l4tl0q",
      ownerParams,
      "BmzZb2-3S1hOFYtUt",
    );

    const sendAutoReply = emailjs.send(
      "service_1bngjad",
      "template_l1hghoh",
      autoReplyParams,
      "BmzZb2-3S1hOFYtUt",
    );

    Promise.all([sendToOwner, sendAutoReply])
      .then(() => {
        setStatus({ loading: false, success: true, error: false });
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({ loading: false, success: false, error: true });
      });
  };

  return (
    <motion.section
      id="contact"
      className="mx-auto w-full rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-[1px] shadow-[0_0_25px_rgba(255,255,255,0.06)] scroll-mt-24"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="rounded-3xl bg-primary-bg p-6 sm:p-8 lg:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-text-primary sm:text-4xl">
            Let&apos;s Build Something Together.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
            Whether you&apos;re looking for a Machine Learning Engineer,
            Fullstack Developer, or simply want to discuss AI, I&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {[
              {
                label: "Email",
                value: "faisaaditya07@gmail.com",
                icon: Mail,
                href: "mailto:faisaaditya07@gmail.com",
              },
              {
                label: "Location",
                value: "Sleman, DI Yogyakarta",
                icon: MapPin,
                href: null,
              },
              {
                label: "GitHub",
                value: "https://github.com/Faisaaditya",
                icon: Github,
                href: "https://github.com/Faisaaditya",
              },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-secondary-bg p-4 text-text-primary transition hover:bg-accent/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-sm text-text-secondary">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          <form
            onSubmit={sendEmail}
            className="rounded-3xl border border-white/10 bg-secondary-bg/80 p-6"
          >
            <div className="grid gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-white/10 bg-primary-bg px-4 py-3 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-white/10 bg-primary-bg px-4 py-3 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-white/10 bg-primary-bg px-4 py-3 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent"
                  placeholder="Tell me about your idea..."
                />
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-3xl border border-white/10 bg-accent px-6 py-3 text-sm font-semibold text-primary-bg transition hover:bg-accent/90 sm:w-auto"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>
              {status.success && (
                <p className="text-sm text-emerald-300">
                  Message sent successfully.
                </p>
              )}
              {status.error && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
