import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="bg-secondary py-16">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Find Us</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Location</h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <iframe
              title="Sholadis Executive Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5!2d3.9!3d7.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjEnMDAuMCJOIDPCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale transition-all duration-500 hover:grayscale-0"
            />
          </motion.div>

          {/* Address info */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="flex items-start gap-4 mb-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <MapPin className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Address</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Plot 26, Block A, Olojuoro,
                  <br />
                  Odo-Oba Junction, Boluwaji Bus Stop,
                  <br />
                  Ibadan, Oyo State, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <Navigation className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Getting Here</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Conveniently located near major routes. Easily accessible from Ibadan Expressway. Airport shuttle service available upon request.
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Plot+26+Block+A+Olojuoro+Odo-Oba+Junction+Boluwaji+Bus+Stop+Ibadan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-xs font-semibold tracking-widest text-accent-foreground uppercase transition-colors hover:bg-gold-dark"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
