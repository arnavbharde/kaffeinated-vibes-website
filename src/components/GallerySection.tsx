import { motion } from "framer-motion";
import interior1 from "@/assets/cafe-interior-1.jpeg";
import interior2 from "@/assets/cafe-interior-2.jpeg";
import interior3 from "@/assets/cafe-interior-3.jpeg";
import bar from "@/assets/cafe-bar.jpeg";
import espresso from "@/assets/menu-espresso.jpg";
import burger from "@/assets/menu-burger.jpg";
import brownie from "@/assets/menu-brownie.jpg";
import latte from "@/assets/menu-latte.jpg";

const images = [
  { src: interior1, alt: "Rajasthani-themed dining area" },
  { src: bar, alt: "Coffee bar counter" },
  { src: espresso, alt: "Espresso shot" },
  { src: interior2, alt: "Window seating" },
  { src: burger, alt: "Smash burger" },
  { src: interior3, alt: "Cozy corner" },
  { src: brownie, alt: "Chocolate brownie" },
  { src: latte, alt: "Café latte" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          A glimpse into the Kaffeinated experience
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`overflow-hidden rounded-xl ${
              i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 min-h-[160px]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
