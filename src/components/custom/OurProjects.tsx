"use client";

import { useEffect, useRef } from "react";
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
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 1,
        ease: "expo.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 px-4 md:px-12 bg-gradient-to-b from-background/70 to-black text-white relative overflow-hidden"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
        Our Projects
      </h2>

      <p className="text-center text-white/60 mb-10 max-w-3xl mx-auto">
        Explore a few of our favorite works—each crafted with precision, innovation, and flair.
      </p>

      {/* Marquee with project cards */}
      <Marquee pauseOnHover className="[--duration:30s] mb-12">
        {projects.map((p, i) => (
          <div key={i} className="project-card inline-block px-2">
            <ProjectCard {...p} />
          </div>
        ))}
      </Marquee>

      {/* Grid fallback for non-scrolling view */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <ProjectCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}
