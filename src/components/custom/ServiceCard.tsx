'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShineBorder } from "../magicui/shine-border";


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
 

      {/* Shine border */}
      <ShineBorder duration={8} className="group-hover:inline-block hidden" />

      {/* Hover glow border shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-lg group-hover:shadow-[0_0_10px_#00f6ff,0_0_20px_#ff00f7,0_0_30px_#00ff94] transition-all duration-500 z-[-1]" />

      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 h-[5px] w-[80%] -translate-x-1/2 rounded-full bg-primary blur-[10px] shadow-[0_0_15px_theme(colors.primary)]" />

      {/* Gradient background on hover */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl pointer-events-none bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-xl" />

      {/* Icon */}
      <motion.div
        whileHover={{ y: -6, rotate: 5 }}
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="flex justify-start"
      >
        <div className="relative rounded-lg my-1">
          <BorderBeam borderWidth={1.5} />
          <Image
            src={icon || '/atom.png'}
            alt={title}
            width={50}
            height={50}
            className=" border bg-[#15101E] border-primary rounded-lg p-2 group-hover:shadow-[0_0_14px_#782EFA] transition-all"
          />
        </div>
      </motion.div>

      {/* Title and Price */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        {price && <p className="text-accent font-medium">{price}</p>}
      </div>

      {/* Feature List */}
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
            className="flex gap-2 items-start opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
          >
            <span className="text-primary">✔</span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      {/* CTA Button */}
      <Button className="w-full bg-primary text-white hover:bg-primary/90 relative overflow-hidden group group-hover:shadow-[0_0_14px_#782EFA]">
        <span className="relative z-10 group-hover:text-shadow-[0_0_10px_#ffffff]">Start Now</span>
        <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-[1000ms] ease-out" />
      </Button>
    </motion.div>
  );
}

