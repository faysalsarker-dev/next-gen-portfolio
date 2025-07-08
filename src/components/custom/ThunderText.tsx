"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";

interface ThunderTextProps {
  children: React.ReactNode;
  className?: string;
}



const ThunderText = ({ children, className }: ThunderTextProps) => {
  const flashRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
  

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    tl.set(flashRef.current, { opacity: 0 })
      .to(flashRef.current, {
        opacity: 0.8,
        duration: 0.1,
        ease: "power4.out",
    
      })
      .to(flashRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power4.inOut",
      })
      .fromTo(
        textRef.current,
        { scale: 0.96 },
        {
          scale: 1,
          duration: 0.3,
          ease: "elastic.out(1, 0.4)",
        },
        "-=0.2"
      );
  }, []);

  return (
    <div className={clsx("relative inline-block", className)}>
      {/* White Flash */}
      <div
        ref={flashRef}
        className="absolute inset-0 bg-white/70 opacity-0 z-10 pointer-events-none rounded"
      />

  

      {/* Gradient Text */}
      <div
        ref={textRef}
        className="relative z-20 font-bold italic lightning-text text-4xl"
      >
        {children}
      </div>
    </div>
  );
};

export default ThunderText;
