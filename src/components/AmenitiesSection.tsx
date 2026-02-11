import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wifi, Zap, UtensilsCrossed, ShieldCheck, Car, Dumbbell, Wind, Phone } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "High-Speed Wi-Fi", desc: "Complimentary fiber-optic internet" },
  { icon: Zap, label: "24/7 Power Supply", desc: "Uninterrupted backup power" },
  { icon: UtensilsCrossed, label: "Fine Restaurant", desc: "Nigerian & continental cuisine" },
  { icon: ShieldCheck, label: "24/7 Security", desc: "Round-the-clock surveillance" },
  { icon: Car, label: "Free Parking", desc: "Secure on-site parking" },
  { icon: Dumbbell, label: "Fitness Center", desc: "State-of-the-art equipment" },
  { icon: Wind, label: "Air Conditioning", desc: "Climate-controlled rooms" },
  { icon: Phone, label: "Concierge", desc: "Dedicated guest services" },
];

const AmenitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            World-Class Facilities
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hotel Amenities
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Everything you need for a comfortable and productive stay, all under one roof.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-lg border border-border bg-card p-6 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-gold/10">
                <a.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-sm font-semibold tracking-wide text-foreground">{a.label}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
