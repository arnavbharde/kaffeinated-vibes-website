import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import espresso from "@/assets/menu-espresso.jpg";
import cappuccino from "@/assets/menu-cappuccino.jpg";
import latte from "@/assets/menu-latte.jpg";
import coldcoffee from "@/assets/menu-coldcoffee.jpg";
import sandwich from "@/assets/menu-sandwich.jpg";
import pasta from "@/assets/menu-pasta.jpg";
import burger from "@/assets/menu-burger.jpg";
import brownie from "@/assets/menu-brownie.jpg";
import cheesecake from "@/assets/menu-cheesecake.jpg";

const categories = ["Coffee", "Food", "Desserts"] as const;

const menuItems = {
  Coffee: [
    { name: "Espresso", price: "₹149", desc: "Bold, rich, and full-bodied single shot", img: espresso },
    { name: "Cappuccino", price: "₹199", desc: "Velvety foam over a perfect espresso base", img: cappuccino },
    { name: "Café Latte", price: "₹219", desc: "Smooth espresso blended with steamed milk", img: latte },
    { name: "Cold Coffee", price: "₹249", desc: "Iced, creamy and refreshingly caffeinated", img: coldcoffee },
  ],
  Food: [
    { name: "Club Sandwich", price: "₹279", desc: "Triple-stacked with fresh veggies & cheese", img: sandwich },
    { name: "Creamy Pasta", price: "₹299", desc: "Al dente pasta in a rich cream sauce", img: pasta },
    { name: "Smash Burger", price: "₹329", desc: "Juicy patty with melted cheese & fries", img: burger },
  ],
  Desserts: [
    { name: "Chocolate Brownie", price: "₹179", desc: "Warm, fudgy, drizzled with chocolate sauce", img: brownie },
    { name: "NY Cheesecake", price: "₹229", desc: "Creamy classic topped with berry compote", img: cheesecake },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState<typeof categories[number]>("Coffee");

  return (
    <section id="menu" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Crafted with love, served with a smile
          </motion.p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground/70 hover:bg-card/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {menuItems[active].map((item) => (
              <div
                key={item.name}
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-heading font-semibold text-lg text-foreground">{item.name}</h3>
                    <span className="font-body font-bold text-accent text-lg">{item.price}</span>
                  </div>
                  <p className="font-body text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
