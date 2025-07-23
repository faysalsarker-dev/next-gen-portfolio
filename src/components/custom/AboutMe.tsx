'use client';
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Clip-path points for the image (hexagonal shape)
  const clipPathPoints = [
    [20, 0], [80, 0], [100, 50], 
    [80, 100], [20, 100], [0, 50]
  ].map(([x, y]) => `${x}% ${y}%`).join(',');

  // Mouse move handler for parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  useEffect(() => {
    // Initial animations
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%"
      }
    });

    gsap.from(imageContainerRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%"
      }
    });

    gsap.from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%"
      }
    });

    // Dynamic line connections
    const stats = statsRef.current?.children;
    if (stats) {
      Array.from(stats).forEach((stat, index) => {
        const line = document.createElement('div');
        line.className = 'absolute h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]';
        line.style.transformOrigin = 'left center';
        stat.appendChild(line);

        gsap.to(line, {
          scaleX: 1,
          duration: 1.5,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: stat,
            start: "top 80%"
          }
        });
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Parallax effect for image
  useEffect(() => {
    if (imageContainerRef.current) {
      const moveX = gsap.quickTo(imageContainerRef.current, "x", {
        duration: 0.8,
        ease: "power3.out"
      });
      const moveY = gsap.quickTo(imageContainerRef.current, "y", {
        duration: 0.8,
        ease: "power3.out"
      });

      const xTo = (mousePosition.x / window.innerWidth - 0.5) * 30;
      const yTo = (mousePosition.y / window.innerHeight - 0.5) * 30;
      
      moveX(xTo);
      moveY(yTo);
    }
  }, [mousePosition]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative w-full min-h-screen flex items-center justify-center",
        "bg-[var(--color-bg-base)] text-[var(--color-text-main)]",
        "overflow-hidden"
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 py-20">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center space-y-10 z-10">
          {/* Title with animated underline */}
          <div className="overflow-hidden">
            <h2 
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
            >
              About Me
            </h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mt-2 origin-left"
            />
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
              Im a <span className="text-[var(--color-accent)] font-bold">visionary developer</span> crafting immersive digital experiences at the intersection of technology and art.
            </p>

            <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
              Specializing in <span className="text-[var(--color-primary)] font-bold">React ecosystems</span>, <span className="text-[var(--color-tertiary)] font-bold">advanced animations</span>, and <span className="text-[var(--color-secondary)] font-bold">interactive design</span> to create next-generation web applications.
            </p>

            {/* Interactive Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: "5+", label: "Years", color: "primary" },
                { value: "42+", label: "Projects", color: "secondary" },
                { value: "∞", label: "Creativity", color: "accent" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={cn(
                    "relative p-4 rounded-lg border cursor-pointer",
                    "bg-[var(--color-surface-1)] border-[var(--color-surface-2)]",
                    "transition-all duration-300 hover:border-[var(--color-primary)]",
                    "overflow-hidden group"
                  )}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <AnimatePresence>
                    {hoveredStat === index && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={cn(
                          "absolute inset-0 -z-10",
                          stat.color === "primary" && "bg-[var(--color-primary)]/10",
                          stat.color === "secondary" && "bg-[var(--color-secondary)]/10",
                          stat.color === "accent" && "bg-[var(--color-accent)]/10"
                        )}
                      />
                    )}
                  </AnimatePresence>
                  <div className={cn(
                    "text-3xl font-bold mb-1",
                    stat.color === "primary" && "text-[var(--color-primary)]",
                    stat.color === "secondary" && "text-[var(--color-secondary)]",
                    stat.color === "accent" && "text-[var(--color-accent)]"
                  )}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative flex items-center justify-center">
          {/* Hexagonal Image Container */}
          <motion.div
            ref={imageContainerRef}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              scale: isImageHovered ? 1.02 : 1
            }}
            transition={{ duration: 0.5 }}
            className={cn(
              "relative w-full max-w-md aspect-square",
              "flex items-center justify-center",
              "cursor-pointer"
            )}
            style={{
              clipPath: `polygon(${clipPathPoints})`
            }}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            {/* Image with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)/30] to-[var(--color-secondary)/30]">
              {/* Replace with your actual image */}
              <div className="absolute inset-0 bg-[var(--color-surface-1)] flex items-center justify-center">
                <span className="text-[var(--color-text-muted)]">Your Image Here</span>
              </div>
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 border-2 border-transparent">
              <motion.div 
                animate={{
                  backgroundPosition: isImageHovered ? '100% 50%' : '0% 50%'
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-transparent"
                style={{
                  background: `linear-gradient(
                    90deg,
                    var(--color-primary) 0%,
                    var(--color-secondary) 50%,
                    var(--color-accent) 100%
                  )`,
                  backgroundSize: '200% 100%',
                  mask: `polygon(${clipPathPoints}) content-box`,
                  WebkitMask: `polygon(${clipPathPoints}) content-box`
                }}
              />
            </div>

            {/* Floating tech badges */}
            {[
              { tech: "React", x: 20, y: 15, color: "var(--color-tertiary)" },
              { tech: "GSAP", x: 80, y: 25, color: "var(--color-primary)" },
              { tech: "Next", x: 15, y: 70, color: "var(--color-secondary)" },
              { tech: "TS", x: 75, y: 75, color: "var(--color-accent)" }
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  x: isImageHovered ? badge.x - 2 : badge.x,
                  scale: isImageHovered ? 1.1 : 1
                }}
                transition={{ 
                  delay: 0.3 + i * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="absolute px-3 py-1 rounded-full text-xs font-mono font-bold shadow-lg"
                style={{
                  left: `${badge.x}%`,
                  top: `${badge.y}%`,
                  backgroundColor: badge.color,
                  color: "var(--color-text-main)"
                }}
              >
                {badge.tech}
              </motion.div>
            ))}
          </motion.div>

          {/* Floating connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {[1, 2, 3].map((line) => (
              <motion.path
                key={line}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 1.5,
                  delay: 0.5 + line * 0.2,
                  ease: "easeInOut"
                }}
                d={`
                  M ${20 + line * 15} 0
                  C ${40 + line * 10} ${50 + line * 10}, 
                  ${60 + line * 5} ${70 - line * 5}, 
                  100 ${80 - line * 15}
                `}
                stroke={`url(#lineGradient${line})`}
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 3"
              />
            ))}
            <defs>
              <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-primary)" />
                <stop offset="100%" stopColor="var(--color-secondary)" />
              </linearGradient>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-secondary)" />
                <stop offset="100%" stopColor="var(--color-accent)" />
              </linearGradient>
              <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-accent)" />
                <stop offset="100%" stopColor="var(--color-tertiary)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute -bottom-1/3 -left-1/4 w-[800px] h-[800px] rounded-full bg-[var(--color-primary)] opacity-5 blur-3xl"></div>
      <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-secondary)] opacity-5 blur-3xl"></div>
      
      {/* Interactive particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0
            }}
            animate={{ 
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: [0, 0.3, 0],
            }}
            transition={{ 
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: i % 3 === 0 
                ? "var(--color-primary)" 
                : i % 3 === 1 
                  ? "var(--color-secondary)" 
                  : "var(--color-accent)"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;