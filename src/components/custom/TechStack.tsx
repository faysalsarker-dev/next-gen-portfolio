"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const techStack = [
  { name: "React.js", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Express.js", icon: "/icons/express.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Redux", icon: "/icons/redux.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Prisma", icon: "/icons/prisma.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "AWS", icon: "/icons/aws.svg" },
  { name: "WordPress", icon: "/icons/wordpress.svg" },
  { name: "Google Analytics", icon: "/icons/ga.svg" },
];

export default function TechStack() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(ref.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 sm:px-10 bg-black/90 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">🧠 Our Tech Stack</h2>
        <p className="text-white/70 mb-10">
          We use modern, industry-standard technologies to build scalable and powerful solutions.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={48}
                height={48}
                className="mb-3"
              />
              <span className="text-sm text-white/80">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
