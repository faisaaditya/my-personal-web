import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      reply_to: form.email, // wajib agar auto-reply terkirim
    };

    // 1) SEND TO YOU (OWNER)
    const sendToOwner = emailjs.send(
      "service_1bngjad", // <-- isi
      "template_7l4tl0q", // <-- isi
      ownerParams,
      "BmzZb2-3S1hOFYtUt" // <-- isi
    );

    // 2) AUTO-REPLY BACK TO USER
    const sendAutoReply = emailjs.send(
      "service_1bngjad", // <-- sama service
      "template_l1hghoh", // <-- isi template khusus auto reply
      autoReplyParams,
      "BmzZb2-3S1hOFYtUt" // <-- isi
    );

    // RUN BOTH PROMISES
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
    <motion.div
      className="w-full bg-gradient-to-br from-white/10 to-white/5 p-[1px] rounded-xl shadow-[0_0_25px_rgba(255,255,255,0.06)]"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-primary-bg rounded-xl p-10">
        {/* TITLE */}
        <h1 className="text-4xl font-extrabold text-text-primary mb-4">
          Contact
        </h1>

        <p className="text-lg text-text-secondary mb-10 max-w-xl">
          Jika kamu memiliki pertanyaan, kebutuhan proyek, atau ingin bekerja
          sama, silakan kirim pesan melalui form berikut.
        </p>

        {/* FORM */}
        <form onSubmit={sendEmail} className="flex flex-col gap-6 max-w-md">
          {/* NAME */}
          <div>
            <label className="block text-text-primary font-medium mb-1">
              Nama
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-secondary-bg text-text-primary border border-white/10 focus:outline-none focus:border-accent transition"
              placeholder="Nama kamu"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-text-primary font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-secondary-bg text-text-primary border border-white/10 focus:outline-none focus:border-accent transition"
              placeholder="email@example.com"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-text-primary font-medium mb-1">
              Pesan
            </label>
            <textarea
              name="message"
              required
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-secondary-bg text-text-primary border border-white/10 focus:outline-none focus:border-accent transition"
              placeholder="Tulis pesanmu..."
            ></textarea>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={status.loading}
            className="px-6 py-3 rounded-xl border border-text-primary text-text-primary font-semibold hover:bg-text-primary hover:text-primary-bg transition"
          >
            {status.loading ? "Mengirim..." : "Kirim Pesan"}
          </button>

          {/* STATUS MESSAGE */}
          {status.success && (
            <p className="text-green-400 font-medium">
              ✔ Pesan berhasil terkirim!
            </p>
          )}

          {status.error && (
            <p className="text-red-400 font-medium">
              ✖ Terjadi kesalahan, coba lagi.
            </p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactSection;
