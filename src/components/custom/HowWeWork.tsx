"use client";
import { useRef } from "react";
import {
  Eye,
  Target,
  Palette,
  Code,
  Rocket,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    title: "Vision Discovery",
    icon: Eye,
    description:
      "We dive deep into your goals and transform ideas into digital strategy.",
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/20",
  },
  {
    title: "Strategic Blueprint",
    icon: Target,
    description:
      "Architect scalable solutions that grow with your business ambitions.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/20",
  },
  {
    title: "Design Excellence",
    icon: Palette,
    description:
      "Craft stunning interfaces that captivate and convert your audience.",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-500/20",
  },
  {
    title: "Development Magic",
    icon: Code,
    description: "Build lightning-fast solutions with cutting-edge tech.",
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-500/20",
  },
  {
    title: "Launch Perfect",
    icon: Rocket,
    description:
      "Deploy flawlessly with rigorous testing and optimization.",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-500/20",
  },
  {
    title: "Growth Accelerate",
    icon: TrendingUp,
    description:
      "Scale your success with ongoing optimization and support.",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-500/20",
  },
];

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-20 bg-[#0c0c1d] relative">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-6 py-2 mb-4 rounded-full bg-white/10 border border-white/10">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
          <span className="text-sm text-white/90 font-medium">Our Process</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200">
          How We Create <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Digital Magic
          </span>
        </h2>
      </div>

      <div className="flex flex-col gap-32 relative max-w-4xl mx-auto">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              className={`relative z-10 group ${
                isEven ? "self-start connector-curve-left" : "self-end connector-curve-right"
              }`}
            >
              {/* Card */}
              <div
                className={`relative max-w-sm p-6 rounded-xl border border-white/10 backdrop-blur-lg shadow-2xl transition-all 
                bg-white/5 hover:bg-white/10 text-white connector-line ${
                  isEven ? "ml-8" : "mr-8 text-right"
                }`}
              >
                {/* Step badge */}
                <div
                  className={`absolute -top-4 ${
                    isEven ? "-left-4" : "-right-4"
                  } w-8 h-8 text-xs font-bold rounded-full text-white flex items-center justify-center bg-gradient-to-r ${step.color}`}
                >
                  {i + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-10 h-10 mb-4 rounded-lg flex items-center justify-center bg-gradient-to-r ${step.color} ${
                    isEven ? "" : "ml-auto"
                  }`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
