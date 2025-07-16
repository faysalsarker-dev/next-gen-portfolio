"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Eye,
  Target,
  Palette,
  Code,
  Rocket,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

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
    description: "Build lightning-fast solutions with cutting-edge tech.",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Launch Perfect",
    icon: Rocket,
    description: "Deploy flawlessly with rigorous testing and optimization.",
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
  const pathRefs = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    pathRefs.current.forEach((path, i) => {
      gsap.set(path, {
        strokeDasharray: 300,
        strokeDashoffset: 300,
        opacity: 0,
      });

      gsap.to(path, {
        scrollTrigger: {
          trigger: path,
          start: "top center+=200",
        },
        strokeDashoffset: 0,
        opacity: 1,
        duration: 1.6,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-background">
      <div className="text-center mb-24 px-4">
        <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 rounded-full bg-white/10 border border-white/10 backdrop-blur-lg animate-pulse">
          <CheckCircle className="w-5 h-5 text-primary" />
          <span className="text-sm text-white/90 font-medium tracking-wider">
            OUR INNOVATION PROCESS
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-accent mb-6 leading-tight">
          The Future of <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
            Digital Creation
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-white/70">
          A revolutionary approach to digital product development that blends
          art with technology
        </p>
      </div>

      {/* SVG curved paths */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 w-[1400px] h-[2000px] z-0 pointer-events-none"
        viewBox="0 0 1400 2000"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {steps.slice(1).map((_, i) => {
          const isEven = i % 2 === 0;
          const startX = isEven ? 500 : 900;
          const endX = isEven ? 900 : 500;
          const y1 = i * 260 + 120;
          const y2 = (i + 1) * 260 + 50;
          const midY = (y1 + y2) / 2;

          return (
            <path
              key={i}
              ref={(el) => el && (pathRefs.current[i] = el)}
              d={`M${startX},${y1} C${startX},${midY} ${endX},${midY} ${endX},${y2}`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 8"
              className="opacity-70"
            />
          );
        })}
      </svg>

      {/* Cards */}
      <div className="relative z-10 flex flex-col items-center gap-32 max-w-6xl mx-auto px-6">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className={`relative max-w-xl w-full px-6 py-8 rounded-3xl border border-white/10 bg-card shadow-xl ${
                isEven ? "self-start" : "self-end"
              }`}
            >
              <div
                className={`absolute -top-4 ${
                  isEven ? "-left-4" : "-right-4"
                } w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color} text-white text-sm font-semibold shadow-lg`}
              >
                {i + 1}
              </div>
              <div
                className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r ${step.color} shadow-md`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
