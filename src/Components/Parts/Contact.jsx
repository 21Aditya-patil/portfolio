import emailjs from "emailjs-com";
import { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message sent!");
        setData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Something went wrong! Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <div className="w-full max-w-lg px-4 sm:px-6">
        <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
          Get In Touch
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
              placeholder="Name..."
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
              placeholder="example@gmail.com"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
              placeholder="Your Message..."
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="relative w-full overflow-hidden rounded bg-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
