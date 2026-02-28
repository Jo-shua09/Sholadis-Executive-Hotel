import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Event", href: "/event" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Sholadis Executive Hotel" className="h-10 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                location.pathname === link.href ? "text-gold" : "text-accent-foreground/80 hover:text-gold"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rooms"
            className="ml-2 rounded-sm bg-gold px-5 py-2.5 text-xs font-semibold tracking-wider text-accent-foreground uppercase transition-all hover:bg-gold-dark"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-accent-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Background with blur */}
        <div className="absolute inset-0 bg-background" />

        {/* Content Container */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col h-full min-h-screen w-full bg-background space-y-12 pt-8 pb-32 px-6 transition-transform duration-500 ease-in-out",
            isMobileMenuOpen ? "translate-y-0" : "translate-y-4",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="absolute top-8 right-8">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-foreground/80 hover:text-foreground transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-xl font-semibold py-0 transition-all duration-300 transform hover:scale-105",
                  location.pathname === link.href ? "text-gold" : "text-foreground/90 hover:text-gold",
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                )}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Animated CTA Button at Bottom */}
          <div className="flex justify-end flex-col pt-20">
            <div
              className={cn("w-full transition-all duration-700", isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}
              style={{
                transitionDelay: isMobileMenuOpen ? `${navLinks.length * 100 + 200}ms` : "0ms",
              }}
            >
              <Button variant="gold" size="lg" className="w-full py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
