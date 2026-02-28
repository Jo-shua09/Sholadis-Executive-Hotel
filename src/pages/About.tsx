import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Users, Clock, Star, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import eventTwo from "@/assets/event-two.jpg";
import receptionTwo from "@/assets/reception-two.jpg";
import receptionFour from "@/assets/reception-four.jpg";

const values = [
  { icon: Heart, title: "Warm Hospitality", desc: "Every guest is treated like family with genuine Nigerian warmth and care." },
  { icon: Shield, title: "Safety & Security", desc: "24/7 surveillance cameras and secure premises for your peace of mind." },
  { icon: Star, title: "Quality Service", desc: "We go above and beyond to ensure every detail of your stay is perfect." },
  { icon: Clock, title: "Always Available", desc: "Our 24-hour front desk ensures assistance is always just a call away." },
];

const milestones = [
  { year: "2022", title: "Grand Opening", desc: "Sholadis Executive Hotel opened its doors in January 2022." },
  { year: "2023", title: "Event Center Launch", desc: "Fully equipped event center added for celebrations and conferences." },
  { year: "2024", title: "Growing Reputation", desc: "Became a trusted name for business travellers and families in Ibadan." },
  { year: "2025", title: "Expanding Services", desc: "Enhanced dining, bar services, and room upgrades for an elevated experience." },
];

const About = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={eventTwo} alt="Sholadis Executive Hotel building" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/50 to-navy-dark/80" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-sm font-medium tracking-[0.35em] text-gold uppercase"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-accent-foreground sm:text-5xl"
          >
            About <span className="text-gold">Sholadis</span> Executive Hotel
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2" ref={heroRef}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={heroInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Est. January 2022</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">A Legacy of Comfort & Excellence</h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Founded in January 2022, Sholadis Executive Hotel was born from a vision to provide exceptional hospitality in the heart of Ibadan.
                Nestled at Plot 26, Block A, Olojuoro, Odo-Oba Junction, Boluwaji Bus Stop, our hotel has quickly become a premier destination for
                business travellers, families, and event planners.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We pride ourselves on offering elegant rooms, a vibrant bar, a fine restaurant, and a fully equipped event center — all backed by
                exceptional service, stable electricity, and 24-hour security surveillance. Whether you're here for business, celebrations, or a
                relaxing getaway, Sholadis is your home away from home.
              </p>
              <div className="mt-8 flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-gold">3+</p>
                  <p className="text-xs text-muted-foreground">Years of Service</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold">1000+</p>
                  <p className="text-xs text-muted-foreground">Happy Guests</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold">24/7</p>
                  <p className="text-xs text-muted-foreground">Available</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-lg"
            >
              <img src={receptionTwo} alt="Sholadis hotel reception area" loading="lazy" className="h-[400px] w-full object-cover lg:h-[500px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-6">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">What Drives Us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Core Values</h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-lg border border-border bg-card p-6 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-gold/10">
                  <v.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-sm font-semibold tracking-wide text-foreground">{v.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-6">
          <motion.div
            ref={timelineRef}
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Our Journey</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Milestones</h2>
          </motion.div>
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative mb-12 pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}
              >
                {/* <div
                  className={`absolute top-1 left-2 h-5 w-5 rounded-full border-2 border-gold bg-background md:left-auto ${i % 2 === 0 ? "md:-right-2.5" : "md:-left-2.5"}`}
                /> */}
                <span className="text-xs font-bold tracking-widest text-gold uppercase">{m.year}</span>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{m.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
