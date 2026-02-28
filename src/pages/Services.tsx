import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bed, UtensilsCrossed, Wine, PartyPopper, ShieldCheck, Zap, Car, Phone, Sparkles, Tv, Wind, Bath } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import roomExecutive from "@/assets/room-executive.jpg";
import diningImage from "@/assets/dining.jpg";
import receptionThree from "@/assets/reception-three.jpg";

const services = [
  {
    title: "Accommodation",
    desc: "Spacious, well-appointed rooms with premium bedding, Smart TV with satellite channels, air conditioning, modern en-suite bathrooms, complimentary toiletries, and 24-hour room service.",
    image: roomExecutive,
    features: [
      { icon: Bed, label: "Premium Bedding" },
      { icon: Tv, label: "Smart TV & Satellite" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Bath, label: "Modern En-suite" },
    ],
  },
  {
    title: "Fine Dining & Restaurant",
    desc: "Our on-site restaurant serves a delicious menu of Nigerian and continental cuisine. From hearty breakfasts to exquisite dinners, we cater to every palate with only the freshest ingredients.",
    image: diningImage,
    features: [
      { icon: UtensilsCrossed, label: "Nigerian & Continental" },
      { icon: Phone, label: "24hr Room Service" },
      { icon: Sparkles, label: "Fresh Ingredients" },
      { icon: Wine, label: "Full Bar Service" },
    ],
  },
  {
    title: "Bar & Lounge",
    desc: "Unwind at our stylish bar with signature cocktails, premium spirits, and a vibrant atmosphere. Perfect for socializing after a long day or celebrating special moments.",
    image: receptionThree,
    features: [
      { icon: Wine, label: "Signature Cocktails" },
      { icon: PartyPopper, label: "Vibrant Atmosphere" },
      { icon: Phone, label: "Friendly Staff" },
      { icon: Zap, label: "Great Ambiance" },
    ],
  },
];

const additionalServices = [
  { icon: PartyPopper, title: "Event Center", desc: "Fully equipped venue for weddings, conferences, parties, and celebrations." },
  { icon: Phone, title: "24hr Front Desk", desc: "Round-the-clock service for check-in, queries, and assistance." },
  { icon: Car, title: "Secure Parking", desc: "On-site parking with 24/7 surveillance for your vehicles." },
  { icon: Sparkles, title: "Daily Housekeeping", desc: "Fresh linens, clean rooms, and spotless facilities every day." },
  { icon: ShieldCheck, title: "24/7 Surveillance", desc: "CCTV cameras throughout the premises for enhanced security." },
  { icon: Zap, title: "Stable Electricity", desc: "Uninterrupted power supply for your comfort at all times." },
];

const Services = () => {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const additionalRef = useRef(null);
  const additionalInView = useInView(additionalRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={roomExecutive} alt="Sholadis hotel room" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/50 to-navy-dark/80" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-sm font-medium tracking-[0.35em] text-gold uppercase"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-accent-foreground sm:text-5xl"
          >
            Our <span className="text-gold">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 max-w-xl text-base font-light leading-relaxed text-accent-foreground/70"
          >
            Experience comfort, great dining, and exceptional service — everything under one roof.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="bg-background py-16" ref={servicesRef}>
        <div className="container mx-auto px-6 space-y-24">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={`relative overflow-hidden rounded-lg ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={service.image} alt={service.title} loading="lazy" className="h-[400px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 to-transparent" />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Premium Service</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{service.title}</h2>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {service.features.map((f) => (
                    <div key={f.label} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <f.icon className="h-4 w-4 text-gold" />
                      </div>
                      <span className="text-sm text-foreground">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-6">
          <motion.div
            ref={additionalRef}
            initial={{ opacity: 0, y: 30 }}
            animate={additionalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">More Amenities</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Additional Services</h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={additionalInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-lg border border-border bg-card p-6 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-gold/10">
                  <s.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-sm font-semibold tracking-wide text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Pricing CTA */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">Room Rates</h2>
            <div className="mx-auto mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
              {[
                { name: "Standard", price: "₦10,000" },
                { name: "Deluxe", price: "₦12,000" },
                { name: "Executive", price: "₦15,000" },
              ].map((r) => (
                <div key={r.name} className="rounded-lg border border-accent-foreground/10 px-8 py-6 text-center">
                  <p className="text-xs font-semibold tracking-widest text-gold uppercase">{r.name}</p>
                  <p className="mt-2 text-2xl font-bold text-accent-foreground">{r.price}</p>
                  <p className="text-xs text-accent-foreground/50">per night</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-accent-foreground/60">
              <span>
                <span className="font-semibold text-gold">Check-in:</span> 12:00 PM
              </span>
              <span className="h-4 w-px bg-accent-foreground/20" />
              <span>
                <span className="font-semibold text-gold">Check-out:</span> 11:59 AM
              </span>
            </div>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-sm bg-gold px-8 py-3.5 text-xs font-semibold tracking-widest text-accent-foreground uppercase transition-colors hover:bg-gold-dark"
            >
              Book Now
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
