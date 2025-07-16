"use client";

import Image from "next/image";
import { useRef } from "react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

interface ProjectCardProps {
  title: string;
  tag: string;
  image: string;
}

export function ProjectCard({ title, tag, image }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-md transition-all hover:scale-[1.04] hover:shadow-2xl"
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-60 object-cover rounded-t-3xl"
      />

      <div className="p-6 space-y-2">
        <AnimatedShinyText
          className="text-xl font-bold text-white"
        //   shimmerColor="primary"
        >
          {title}
        </AnimatedShinyText>
        <p className="text-white/60">{tag}</p>
      </div>

      {/* Glowing border overlay */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-xl pointer-events-none" />
    </div>
  );
}
