import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import eventFour from "@/assets/event-four.jpg";

const contactInfo = [
  { icon: Phone, title: "Phone", lines: ["09155008322", "08076896575"], href: ["tel:09155008322", "tel:08076896575"] },
  { icon: Mail, title: "Email", lines: ["info@sholadishotel.com"], href: ["mailto:info@sholadishotel.com"] },
  {
    icon: MapPin,
    title: "Address",
    lines: ["Plot 26, Block A, Olojuoro,", "Odo-Oba Junction, Boluwaji Bus Stop,", "Ibadan, Oyo State, Nigeria"],
    href: [],
  },
  { icon: Clock, title: "Front Desk", lines: ["24 hours, 7 days a week"], href: [] },
];

const Contact = () => {
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hello Sholadis Hotel! My name is ${form.name}. ${form.subject ? `Subject: ${form.subject}. ` : ""}${form.message}`;
    window.open(`https://wa.me/2349155008322?text=${encodeURIComponent(whatsappMsg)}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={eventFour} alt="Sholadis Executive Hotel" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/50 to-navy-dark/80" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-sm font-medium tracking-[0.35em] text-gold uppercase"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-accent-foreground sm:text-5xl"
          >
            Contact <span className="text-gold">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 max-w-xl text-base font-light leading-relaxed text-accent-foreground/70"
          >
            We'd love to hear from you. Reach out for reservations, inquiries, or event bookings.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-lg border border-border bg-card p-6 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-gold/10">
                  <c.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-sm font-semibold tracking-wide text-foreground">{c.title}</h3>
                <div className="mt-2 space-y-1">
                  {c.lines.map((line, j) =>
                    c.href[j] ? (
                      <a key={j} href={c.href[j]} className="block text-xs text-muted-foreground hover:text-gold transition-colors">
                        {line}
                      </a>
                    ) : (
                      <p key={j} className="text-xs text-muted-foreground">
                        {line}
                      </p>
                    ),
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2" ref={formRef}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={formInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Send a Message</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">We're Here to Help</h2>
              <p className="mt-4 text-sm text-muted-foreground">Fill out the form and we'll redirect you to WhatsApp for instant communication.</p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none resize-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-3 text-xs font-semibold tracking-widest text-accent-foreground uppercase transition-colors hover:bg-gold-dark"
                >
                  <Send className="h-4 w-4" />
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <iframe
                title="Sholadis Executive Hotel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5!2d3.9!3d7.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjEnMDAuMCJOIDPCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale transition-all duration-500 hover:grayscale-0"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <MessageSquare className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-accent-foreground sm:text-3xl">Prefer WhatsApp?</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-accent-foreground/60">
              Chat with us directly for quick responses on bookings, event inquiries, and more.
            </p>
            <a
              href="https://wa.me/2349155008322"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-sm bg-gold px-8 py-3.5 text-xs font-semibold tracking-widest text-accent-foreground uppercase transition-colors hover:bg-gold-dark"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
