'use clinet'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";
interface ServiceCardProps {
  icon?: string;
  title: string;
  price?: string;
  features: string[];
  idx: number;
}

export function ServiceCard({ icon, title, features, price, idx }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.2 }}
      viewport={{ once: true }}
      className="relative group w-full rounded-lg overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl p-6 transition-all"
    >
      
      {/* Glowing Top Bar */}
      <div className="absolute top-0 left-1/2 h-[5px] w-[80%] -translate-x-1/2 rounded-full bg-primary blur-[2px] shadow-[0_0_15px_theme(colors.primary)]"></div>

      {/* Shine Border */}
      {/* <div className="absolute inset-0 z-0 rounded-lg pointer-events-none group-hover:animate-shimmer border border-transparent bg-gradient-to-r from-transparent via-primary/30 to-transparent [mask-image:linear-gradient(90deg,transparent,white,transparent)]" /> */}

      {/* Background Blur Glow */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl pointer-events-none bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-xl" />

      {/* Icon Animation */}
      <motion.div
        whileHover={{ y: -6, rotate: 5 }}
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          type: "tween",
        }}
        className="flex justify-start"
      >
     <div className="relative rounded-lg">
      <BorderBeam borderWidth={1.5} />
          <Image
            src={icon || '/atom.png'}
            alt={title}
            width={50}
            height={50}
            className="border  my-0.5 bg-[#15101E] border-primary rounded-lg p-2 group-hover:drop-shadow-[0_0_10px_theme(colors.primary)] transition-all"
          />
     </div>
      
      </motion.div>
  
      {/* Title + Price */}
      <div className="mb-4">
        
        <h3 className="text-xl font-semibold"><>{title}</></h3>
        <p className="text-accent font-medium">{price}</p>
      </div>

      {/* Features List with Animation */}
      <motion.ul
        className="space-y-2 text-sm mb-6 text-white/90"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {features.map((feature, i) => (
          <motion.li
            key={i}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 8 },
            }}
            className="flex gap-2 items-start transition-all duration-300 transform opacity-70 translate-x-0 group-hover:translate-x-2 group-hover:opacity-100"
          >
            <span className="text-primary">✔</span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      {/* Button with Shine Effect */}
      <Button className="w-full bg-primary text-white hover:bg-primary/90 relative overflow-hidden group">
        <span className="relative z-10">Start Now</span>
        <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-[1000ms] ease-out" />
      </Button>
    </motion.div>
  );
}
