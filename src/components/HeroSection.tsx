import { motion } from "framer-motion";
import heroBg from "@/assets/hero-coffee.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Coffee cup with latte art"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-cafe-dark/60" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-3xl">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cafe-cream mb-6 leading-tight"
      >
        Your Daily Dose of Caffeine & Calm
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-body text-cafe-cream/80 text-lg md:text-xl mb-8"
      >
        Premium coffee, cozy vibes & great company — all at Kharghar, Navi Mumbai
      </motion.p>
      <motion.a
        href="#menu"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="inline-block bg-accent text-accent-foreground font-body font-semibold px-8 py-4 rounded-lg text-lg hover:brightness-110 transition-all hover:scale-105"
      >
        View Menu
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
