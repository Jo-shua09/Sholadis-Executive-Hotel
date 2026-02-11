import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import diningImage from "@/assets/dining.jpg";

const DiningSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dining" className="bg-secondary py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              src={diningImage}
              alt="Fine dining at Sholadis Executive Hotel"
              className="h-[400px] w-full object-cover lg:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/30 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">
              Culinary Excellence
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Fine Dining Experience
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Indulge in an exquisite culinary journey at our signature restaurant.
              Our world-class chefs craft a menu that celebrates both local Nigerian
              flavors and international cuisine, using only the freshest ingredients.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              From intimate dinners to grand celebrations, our dining spaces are
              designed to create unforgettable moments. Enjoy 24-hour room service
              for the ultimate in-room dining experience.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-2xl font-bold text-gold">6AM</p>
                <p className="text-xs text-muted-foreground">Breakfast Opens</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gold">24/7</p>
                <p className="text-xs text-muted-foreground">Room Service</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gold">50+</p>
                <p className="text-xs text-muted-foreground">Menu Items</p>
              </div>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-sm bg-gold px-8 py-3 text-xs font-semibold tracking-widest text-accent-foreground uppercase transition-colors hover:bg-gold-dark"
            >
              Reserve a Table
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
