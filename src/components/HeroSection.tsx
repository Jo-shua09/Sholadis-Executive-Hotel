import { motion } from "framer-motion";
import heroImage from "@/assets/hero-hotel.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-full w-full min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img loading="lazy" src={heroImage} alt="Sholadis Executive Hotel exterior at golden hour" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/50 to-navy-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen h-full justify-center items-center w-full text-center">
        <div className="flex flex-col items-center justify-center px-6  h-full w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-sm font-medium tracking-[0.35em] text-gold uppercase"
          >
            Welcome to Sholadis Executive Hotel
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-accent-foreground sm:text-5xl lg:text-6xl"
          >
            Experience Executive Luxury in the Heart of <span className="text-gold">Ibadan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 max-w-xl text-sm md:text-base font-light leading-relaxed text-accent-foreground/70 sm:text-lg"
          >
            Experience comfort, great dining, and exceptional service. Enjoy elegant rooms, a vibrant bar, a fine restaurant, and a fully equipped
            event center, perfect for business, celebrations, or a relaxing stay.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex gap-4"
          >
            <a
              href="/services"
              className="rounded-sm bg-gold px-8 py-3.5 flex items-center md:text-sm text-xs text-center font-semibold tracking-widest text-accent-foreground uppercase transition-all hover:bg-gold-dark hover:shadow-lg"
            >
              Explore <span className="md:block hidden pl-1"> Rooms</span>
            </a>
            <a
              href="/contact"
              className="rounded-sm border border-accent-foreground/30 flex items-center px-8 py-3.5 text-nowrap md:text-sm text-xs text-center font-semibold tracking-widest text-accent-foreground uppercase transition-all hover:border-gold hover:text-gold"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
