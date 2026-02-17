import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import roomExecutive from "@/assets/room-executive.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";

const rooms = [
  {
    name: "Standard Room",
    description: "A cozy and well-equipped room with all the essentials for a comfortable stay.",
    price: "₦10,000",
    perNight: "per night",
    image: roomDeluxe,
    features: ["Smart TV", "Air Conditioning", "En-suite Bathroom"],
  },
  {
    name: "Deluxe Room",
    description: "Spacious comfort with premium bedding, modern amenities, and 24-hour room service.",
    price: "₦12,000",
    perNight: "per night",
    image: roomExecutive,
    features: ["Premium Bedding", "Room Service", "Complimentary Toiletries"],
  },
  {
    name: "Executive Suite",
    description: "Our finest accommodation with elegant furnishings and exclusive services.",
    price: "₦15,000",
    perNight: "per night",
    image: roomPresidential,
    features: ["Satellite TV", "24hr Service", "Stable Electricity"],
  },
];

const RoomCard = ({ room, index }: { room: (typeof rooms)[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.7 }}
      className="group relative overflow-hidden rounded-lg bg-card shadow-md"
    >
      <div className="relative h-72 overflow-hidden">
        <img src={room.image} alt={room.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href="#contact"
            className="block w-full rounded-sm bg-gold py-3 text-center text-xs font-bold tracking-widest text-accent-foreground uppercase transition-colors hover:bg-gold-dark"
          >
            Book Now
          </a>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-semibold tracking-wide text-foreground">{room.name}</h3>
          <div className="text-right">
            <span className="text-lg font-bold text-gold">{room.price}</span>
            <span className="block text-[10px] text-muted-foreground">{room.perNight}</span>
          </div>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{room.description}</p>
        <div className="mt-4 flex gap-2 flex-wrap w-full">
          {room.features.map((f) => (
            <span key={f} className="rounded-full text-nowrap bg-secondary px-3 py-1 text-[10px] font-medium tracking-wide text-muted-foreground">
              {f}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const RoomsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rooms" className="bg-background py-16">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Accommodations</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Rooms & Suites</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Each room is thoughtfully designed to provide the ultimate in comfort and sophistication.
          </p>
          <div className="mt-6 flex items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-semibold text-gold">Check-in:</span> 12:00 PM
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-semibold text-gold">Check-out:</span> 11:59 AM
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <RoomCard key={room.name} room={room} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
