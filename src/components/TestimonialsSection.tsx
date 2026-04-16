import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    text: "Kaffeinated is my go-to study spot! The cold coffee is unreal, and the vibe is so calming. Love the aesthetic interiors — perfect for Instagram too! 📸",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    text: "Best café in Kharghar, hands down. The smash burger is insane and the coffee quality rivals any big chain. Plus, the staff is super friendly.",
    rating: 5,
  },
  {
    name: "Ananya Desai",
    text: "My boyfriend and I love coming here for date nights. Cozy seating, great desserts, and the ambience is just *chef's kiss*. The brownie is a must-try!",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-secondary/50">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          What People Say
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
              "{r.text}"
            </p>
            <p className="font-body font-semibold text-foreground text-sm">— {r.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
