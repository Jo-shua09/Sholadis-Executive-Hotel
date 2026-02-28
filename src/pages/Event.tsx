import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PartyPopper, Music, Mic2, Users, Utensils, Car } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import eventOne from "@/assets/event-one.jpg";
import eventTwo from "@/assets/event-two.jpg";
import eventThree from "@/assets/event-three.jpg";
import eventFour from "@/assets/event-four.jpg";
import receptionOne from "@/assets/reception-one.jpg";
import receptionFive from "@/assets/reception-five.jpg";

const eventTypes = [
  { icon: PartyPopper, title: "Celebrations", desc: "Birthdays, anniversaries, and special occasions in grand style." },
  { icon: Users, title: "Conferences", desc: "Professional meetings and corporate events with full AV support." },
  { icon: Music, title: "Parties", desc: "Social gatherings with our stylish bar and entertainment setup." },
  { icon: Mic2, title: "Ceremonies", desc: "Weddings, engagements, and traditional ceremonies." },
  { icon: Utensils, title: "Catering", desc: "In-house restaurant catering for all event types." },
  { icon: Car, title: "Parking", desc: "Ample secure parking for all your guests." },
];

const galleryImages = [
  { src: eventOne, alt: "Sholadis hotel front view at night" },
  { src: eventTwo, alt: "Sholadis hotel front entrance" },
  { src: eventThree, alt: "Hotel building side view with staircase" },
  { src: eventFour, alt: "Hotel building front view at dusk" },
  { src: receptionOne, alt: "Hotel bar and reception area" },
  { src: receptionFive, alt: "Hotel bar with drink display" },
];

const Event = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={eventOne} alt="Sholadis Executive Hotel event venue" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/50 to-navy-dark/80" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-sm font-medium tracking-[0.35em] text-gold uppercase"
          >
            Event Center
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-accent-foreground sm:text-5xl"
          >
            Host Your <span className="text-gold">Perfect Event</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 max-w-xl text-base font-light leading-relaxed text-accent-foreground/70"
          >
            Our fully equipped event center is designed to make every occasion unforgettable.
          </motion.p>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-6">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">What We Offer</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Event Services</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              From intimate gatherings to large celebrations, our venue and team are ready to deliver a flawless experience.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-lg border border-border bg-card p-6 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-gold/10">
                  <e.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-sm font-semibold tracking-wide text-foreground">{e.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-6">
          <motion.div
            ref={galleryRef}
            initial={{ opacity: 0, y: 30 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Gallery</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Venue & Facilities</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group overflow-hidden rounded-lg"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">Ready to Plan Your Event?</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-accent-foreground/60">
              Contact us today and let our team help you create an unforgettable experience.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-sm bg-gold px-8 py-3.5 text-xs font-semibold tracking-widest text-accent-foreground uppercase transition-colors hover:bg-gold-dark"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Event;
