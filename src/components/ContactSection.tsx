import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon ☕");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Get In Touch
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-accent shrink-0" />
                <span className="font-body text-foreground/80 text-sm">
                  Sector 12, Kharghar, Navi Mumbai, Maharashtra 410210
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-accent shrink-0" />
                <span className="font-body text-foreground/80 text-sm">+91 94044 55446</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-accent shrink-0" />
                <span className="font-body text-foreground/80 text-sm">contact@kaffeinatedcafe.com</span>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden h-64 lg:h-80">
              <iframe
                title="Kaffeinated Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30174.04!2d73.06!3d19.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39e5e3%3A0x8bd28e18bc67cdac!2sKharghar%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <label className="font-body text-sm text-foreground/70 mb-1 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-body text-sm text-foreground/70 mb-1 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="font-body text-sm text-foreground/70 mb-1 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
                placeholder="Tell us something..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-body font-semibold py-3 rounded-lg hover:brightness-110 transition-all text-sm"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
