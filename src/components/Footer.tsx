import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold tracking-wider text-accent-foreground">SHOLADIS</span>
              <span className="block text-[10px] font-medium tracking-[0.3em] text-gold uppercase">
                Executive Hotel
              </span>
            </div>
            <p className="text-sm leading-relaxed text-accent-foreground/60">
              Where refined comfort meets world-class hospitality in the heart of Ibadan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {["Home", "Rooms", "Dining", "Amenities", "Location"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-accent-foreground/60 transition-colors hover:text-gold"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <a href="tel:09155008322" className="flex items-center gap-3 text-sm text-accent-foreground/60 hover:text-gold transition-colors">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                09155008322
              </a>
              <a href="tel:08076896575" className="flex items-center gap-3 text-sm text-accent-foreground/60 hover:text-gold transition-colors">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                08076896575
              </a>
              <a href="mailto:info@sholadishotel.com" className="flex items-center gap-3 text-sm text-accent-foreground/60 hover:text-gold transition-colors">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                info@sholadishotel.com
              </a>
              <div className="flex items-start gap-3 text-sm text-accent-foreground/60">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                Plot 26, Block A, Olojuoro, Ibadan
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-accent-foreground/60">
              Subscribe for exclusive offers and updates.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-l-sm border border-accent-foreground/10 bg-navy-light px-4 py-2.5 text-sm text-accent-foreground placeholder:text-accent-foreground/30 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r-sm bg-gold px-4 py-2.5 text-xs font-semibold tracking-wider text-accent-foreground uppercase transition-colors hover:bg-gold-dark"
              >
                Join
              </button>
            </form>

            <div className="mt-6 flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-foreground/10 text-accent-foreground/50 transition-all hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-accent-foreground/10 pt-8 text-center">
          <p className="text-xs text-accent-foreground/40">
            © {new Date().getFullYear()} Sholadis Executive Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
