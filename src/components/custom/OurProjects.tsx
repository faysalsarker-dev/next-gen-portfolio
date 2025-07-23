"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Marquee } from "@/components/magicui/marquee";
import { ProjectCard } from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Modern Agency Website",
    tag: "Next.js · Tailwind · GSAP",
    image: "/projects/agency.jpg",
  },
  {
    title: "Clothing E‑Commerce",
    tag: "React · Stripe · MongoDB",
    image: "/projects/ecommerce.jpg",
  },
  {
    title: "Pet Adoption Platform",
    tag: "MERN Stack · Firebase Auth",
    image: "/projects/pet.jpg",
  },
  {
    title: "Personal Portfolio",
    tag: "Next.js · Shadcn UI",
    image: "/projects/portfolio.jpg",
  },
];

export default function OurProjects() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray(".scroll-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: i * 0.1,
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-4 md:px-12 bg-gradient-to-br from-[#0D0914] to-[#15101E] text-white overflow-hidden"
    >
      {/* Ambient Lighting Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/2 w-[700px] h-[700px] bg-purple-500/30 rounded-full blur-[200px] -translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Our Projects
        </h2>

        <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
          Explore our favorite creations—built to impress, engineered to perform.
        </p>

        {/* Slider marquee */}
        <Marquee pauseOnHover className="[--duration:30s] mb-24">
          {projects.map((p, i) => (
            <div key={i} className="inline-block px-3">
              <ProjectCard {...p} />
            </div>
          ))}
        </Marquee>

        {/* Scroll reveal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={i}
              className="scroll-card rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:scale-[1.03] transition-transform duration-500"
            >
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
