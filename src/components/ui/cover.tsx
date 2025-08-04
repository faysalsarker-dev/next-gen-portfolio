"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Cover = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [beamPositions, setBeamPositions] = useState<number[]>([]);

  useEffect(() => {
    if (ref.current) {
      setContainerWidth(ref.current.clientWidth);
      const height = ref.current.clientHeight;
      const beamCount = Math.floor(height / 10);
      const positions = Array.from({ length: beamCount }, (_, i) => (i + 1) * (height / (beamCount + 1)));
      setBeamPositions(positions);
    }
  }, []);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
      className={cn(
        "relative group/cover inline-block px-2 py-2 overflow-hidden transition duration-200",
        className
      )}
    >
      {beamPositions.map((position, index) => (
        <Beam
          key={index}
          hovered={hovered}
          duration={Math.random() * 2 + 1}
          delay={Math.random() * 2 + 1}
          width={containerWidth}
          style={{ top: `${position}px` }}
        />
      ))}
<motion.span
  key={String(hovered)}
  initial={{ filter: "none", scale: 1, opacity: 1 }}
  animate={{
    filter: hovered
      ? "brightness(1.5) drop-shadow(0 0 6px #782EFA)"
      : "none",
    scale: hovered ? 1.05 : 1,
  }}
  transition={{
    duration: 0.3,
    repeat: hovered ? Infinity : 0,
    repeatType: "reverse",
  }}
  className={cn(
    "relative z-20 transition-all duration-300 ease-in-out",
    "font-extrabold italic text-transparent bg-clip-text",
    "bg-gradient-to-r from-[#782EFA] via-[#2CD3E1] to-[#F622C2]"
  )}
>
  {children}

  {/* ⚡ Lightning shimmer overlay */}
  {hovered && (
    <motion.span
      className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60 mix-blend-screen"
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  )}
</motion.span>


    </span>
  );
};

export const Beam = ({
  className,
  delay,
  duration,
  hovered,
  width = 600,
  ...svgProps
}: {
  className?: string;
  delay?: number;
  duration?: number;
  hovered?: boolean;
  width?: number;
} & React.ComponentProps<typeof motion.svg>) => {
  const id = useId();

  return (
    <motion.svg
      width={width ?? "600"}
      height="1"
      viewBox={`0 0 ${width ?? "600"} 1`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute inset-x-0 w-full", className)}
      {...svgProps}
    >
      <motion.path
        d={`M0 0.5H${width ?? "600"}`}
        stroke={`url(#svgGradient-${id})`}
      />

      <defs>
        <motion.linearGradient
          id={`svgGradient-${id}`}
          key={String(hovered)}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: "0%",
            x2: hovered ? "-10%" : "-5%",
            y1: 0,
            y2: 0,
          }}
          animate={{
            x1: "110%",
            x2: hovered ? "100%" : "105%",
            y1: 0,
            y2: 0,
          }}
          transition={{
            duration: hovered ? 0.5 : duration ?? 2,
            ease: "linear",
            repeat: Infinity,
            delay: hovered ? Math.random() * (1 - 0.2) + 0.2 : 0,
            repeatDelay: hovered ? Math.random() * (2 - 1) + 1 : delay ?? 1,
          }}
        >
          <stop stopColor="#2EB9DF" stopOpacity="0" />
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

