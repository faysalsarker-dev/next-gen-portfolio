"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  Eye,
  Target,
  Palette,
  Code,
  Rocket,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Vision Discovery",
    icon: Eye,
    description:
      "We dive deep into your goals and transform ideas into digital strategy.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Strategic Blueprint",
    icon: Target,
    description:
      "Architect scalable solutions that grow with your business ambitions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Design Excellence",
    icon: Palette,
    description:
      "Craft stunning interfaces that captivate and convert your audience.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Development Magic",
    icon: Code,
    description:
      "Build lightning-fast solutions with cutting-edge tech.",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Launch Perfect",
    icon: Rocket,
    description:
      "Deploy flawlessly with rigorous testing and optimization.",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Growth Accelerate",
    icon: TrendingUp,
    description:
      "Scale your success with ongoing optimization and support.",
    color: "from-pink-500 to-rose-500",
  },
];

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pathsRef = useRef<(SVGPathElement | null)[]>([]);
  const [pathDs, setPathDs] = useState<string[]>([]);

  // Calculate paths after layout
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    
    const calculatePaths = () => {
      const box = containerRef.current!.getBoundingClientRect();
      const ds: string[] = [];

      cardsRef.current.slice(0, -1).forEach((card, i) => {
        if (!card || !cardsRef.current[i + 1]) return;
        
        const a = card.getBoundingClientRect();
        const b = cardsRef.current[i + 1]!.getBoundingClientRect();
        const isEven = i % 2 === 0;

        const startX = isEven ? a.right - box.left : a.left - box.left;
        const endX = isEven ? b.left - box.left : b.right - box.left;
        const startY = a.top + a.height / 2 - box.top;
        const endY = b.top + b.height / 2 - box.top;

        const cornerX = isEven
          ? startX + Math.abs(endX - startX) * 0.2
          : startX - Math.abs(startX - endX) * 0.2;

        // Create a smoother curve
        const controlY = startY + (endY - startY) * 0.5;
        ds.push(
          `M${startX},${startY} C${cornerX},${startY} ${cornerX},${controlY} ${cornerX},${endY} L${endX},${endY}`
        );
      });

      setPathDs(ds);
    };

    // Initial calculation
    calculatePaths();

    // Recalculate on resize
    const resizeObserver = new ResizeObserver(calculatePaths);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  // Card animations
  useLayoutEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      
      const isEven = i % 2 === 0;
      const delay = i * 0.15;
      
      // Reset initial state
      gsap.set(card, {
        opacity: 0,
        y: 50,
        x: isEven ? -100 : 100,
        rotation: isEven ? -5 : 5,
      });

      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        }
      });

      tl.to(card, {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.8,
        delay,
        ease: "back.out(1.7)",
      }).to(
        card,
        {
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          duration: 0.4,
        },
        delay
      );
    });

    // Copy the ref value for cleanup
    const cardsSnapshot = [...cardsRef.current];

    return () => {
      cardsSnapshot.forEach(card => {
        if (card) ScrollTrigger.getById(card.id)?.kill();
      });
    };
  }, []);

  // Path animations
  useLayoutEffect(() => {
    pathDs.forEach((_, i) => {
      const path = pathsRef.current[i];
      if (!path) return;
      
      const len = path.getTotalLength();
      
      gsap.set(path, {
        strokeDasharray: len,
        strokeDashoffset: len,
        opacity: 0,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[i + 1] || containerRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      });
    });

    // Copy the ref value for cleanup
    const pathsSnapshot = [...pathsRef.current];

    return () => {
      pathsSnapshot.forEach(path => {
        if (path) ScrollTrigger.getById(path.id)?.kill();
      });
    };
  }, [pathDs]);

  // Snap scrolling
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const snapValue = 1 / (steps.length - 1);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${containerRef.current?.scrollHeight || 0}`,
        scrub: 0.5,
        pin: true,
        snap: {
          snapTo: snapValue,
          duration: { min: 0.3, max: 0.6 },
          ease: "power2.inOut",
        },
      },
    });

    // Store the ScrollTrigger instance
    const scrollTriggerInstance = tl.scrollTrigger;

    return () => {
      scrollTriggerInstance?.kill();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps.length]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-32 bg-background"
    >
      {/* Heading */}
      <div className="text-center mb-24 px-4">
        <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 rounded-full bg-surface-2 border border-white/10 backdrop-blur-lg animate-pulse">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <span className="text-sm text-white/90 font-medium tracking-wider">
            OUR INNOVATION PROCESS
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          The Future of <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Digital Creation
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          A revolutionary approach to digital product development that blends art with technology.
        </p>
      </div>

      {/* SVG Connectors */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#782EFA" />
            <stop offset="50%" stopColor="#D926A9" />
            <stop offset="100%" stopColor="#F622C2" />
          </linearGradient>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {pathDs.map((d, i) => (
          <path
            key={i}
            ref={(el) => { pathsRef.current[i] = el; }}
            d={d}
            stroke="url(#glowGradient)"
            fill="none"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            className="opacity-80"
          />
        ))}
      </svg>

      {/* Step Cards */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-32 px-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`relative max-w-lg w-full md:w-[500px] p-8 rounded-3xl bg-surface-1 border border-white/10 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:border-white/20 ${
                isEven ? "self-start md:ml-10" : "self-end md:mr-10"
              }`}
            >
              <div
                className={`absolute -top-4 ${
                  isEven ? "-left-4" : "-right-4"
                } w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color} text-white font-bold text-sm shadow-lg`}
              >
                {i + 1}
              </div>
              <div
                className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r ${step.color} shadow-lg transition-transform hover:scale-110`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}