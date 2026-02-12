import { motion } from "framer-motion";
import { CalendarDays, Users, Search } from "lucide-react";
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
      <div className="relative pt-32 md:pt-24 lg:pt-32 z-10 flex h-full flex-col items-center w-full text-center justify-between">
        <div className="flex flex-col items-center justify-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-2 md:mb-4 text-sm font-medium tracking-[0.35em] text-gold uppercase"
          >
            Welcome to Sholadis
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl text-3xl md:text-4xl font-bold leading-tight tracking-tight text-accent-foreground sm:text-5xl lg:text-6xl"
          >
            Experience Executive Luxury in the Heart of <span className="text-gold">Ibadan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-3 md:mt-6 max-w-xl text-sm md:text-base font-light leading-relaxed text-accent-foreground/70 sm:text-lg"
          >
            Where refined comfort meets world-class hospitality. Your exclusive retreat awaits at Sholadis Executive Hotel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-4 md:mt-10 flex gap-4"
          >
            <a
              href="#rooms"
              className="rounded-sm bg-gold px-8 py-3.5 flex items-center md:text-sm text-xs text-center font-semibold tracking-widest text-accent-foreground uppercase transition-all hover:bg-gold-dark hover:shadow-lg"
            >
              Explore <span className="md:block hidden pl-1"> Rooms</span>
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-accent-foreground/30 flex items-center px-8 py-3.5 text-nowrap md:text-sm text-xs text-center font-semibold tracking-widest text-accent-foreground uppercase transition-all hover:border-gold hover:text-gold"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
      {/* Booking bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="w-full absolute bottom-0 left-0 right-0 z-20"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-stretch gap-0 rounded-t-lg bg-card/95 backdrop-blur-sm shadow-2xl overflow-hidden">
            <div className="flex flex-1 items-center gap-3 border-b md:border-b-0 md:border-r border-border px-6 py-3 md:py-4">
              <CalendarDays className="h-5 w-5 text-gold shrink-0" />
              <div>
                <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Check-in</p>
                <p className="text-sm font-medium text-foreground">Select Date</p>
              </div>
            </div>
            <div className="flex flex-1 items-center gap-3 border-b md:border-b-0 md:border-r border-border px-6 py-3 md:py-4">
              <CalendarDays className="h-5 w-5 text-gold shrink-0" />
              <div>
                <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Check-out</p>
                <p className="text-sm font-medium text-foreground">Select Date</p>
              </div>
            </div>
            <div className="flex flex-1 items-center gap-3 border-b md:border-b-0 md:border-r border-border px-6 py-3 md:py-4">
              <Users className="h-5 w-5 text-gold shrink-0" />
              <div>
                <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Guests</p>
                <p className="text-sm font-medium text-foreground">2 Adults</p>
              </div>
            </div>
            <a
              href="#rooms"
              className="flex items-center justify-center gap-2 bg-gold px-8 py-3 md:py-4 text-xs font-bold tracking-widest text-accent-foreground uppercase transition-colors hover:bg-gold-dark"
            >
              <Search className="h-4 w-4" />
              Check Availability
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
