import { motion } from "framer-motion";
import interior1 from "@/assets/cafe-interior-1.jpeg";
import interior2 from "@/assets/cafe-interior-2.jpeg";
import interior3 from "@/assets/cafe-interior-3.jpeg";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Our Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          Kaffeinated is more than just a café — it's a vibe. Nestled in the heart of Kharghar,
          we're your go-to spot for handcrafted coffee, comfort food, and unforgettable moments.
          Whether you're pulling an all-nighter, catching up with friends, or just need a quiet
          corner to think — we've got you covered.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[interior1, interior2, interior3].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={img}
              alt={`Kaffeinated interior ${i + 1}`}
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
