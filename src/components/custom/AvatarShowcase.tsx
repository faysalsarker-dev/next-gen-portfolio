"use client";

import {  useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const avatars = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/women/8.jpg",
  "https://randomuser.me/api/portraits/men/9.jpg",
  "https://randomuser.me/api/portraits/men/10.jpg",
];



const AvatarShowcase = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full py-20 px-4 sm:px-8 md:px-12 flex flex-col items-center "
    >
      {/* Heading */}
      <h3 className="text-center text-white/90 text-xl sm:text-2xl font-medium mb-6">
        Trusted, followed and loved by over{" "}
        <span className="font-semibold text-white">82,000+ people</span> in{" "}
        <span className="font-semibold text-white">150+ countries</span>
      </h3>

      {/* Avatars */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
        {avatars.map((src, idx) => (
          <div
            key={idx}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/10 bg-gradient-to-br from-pink-500/20 to-blue-500/20 p-0.5 hover:scale-105 transition"
          >
            <Image
              src={src}
              alt={`Avatar ${idx}`}
              className="w-full h-full object-cover rounded-full border border-white/20"
            />
          </div>
        ))}
      </div>

   
    </div>
  );
};

export default AvatarShowcase;
