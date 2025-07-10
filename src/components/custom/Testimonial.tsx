"use client";

import { useEffect, useRef } from "react";
import { Marquee } from "@/components/magicui/marquee";
import { AvatarCircles } from "../magicui/avatar-circles";
import TestimonialCard from "./TestimonialCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const avatars = [
  { imageUrl: "https://avatars.githubusercontent.com/u/16860528", profileUrl: "https://github.com/dillionverma" },
  { imageUrl: "https://avatars.githubusercontent.com/u/20110627", profileUrl: "https://github.com/tomonarifeehan" },
  { imageUrl: "https://avatars.githubusercontent.com/u/106103625", profileUrl: "https://github.com/BankkRoll" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59228569", profileUrl: "https://github.com/safethecode" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59442788", profileUrl: "https://github.com/sanjay-mali" },
  { imageUrl: "https://avatars.githubusercontent.com/u/89768406", profileUrl: "https://github.com/itsarghyadas" },
];

const reviews = [
  { name: "Jack Dawson", username: "@jackdawson", body: "The design and experience are simply next-level!", img: "https://avatar.vercel.sh/jack" },
  { name: "Jill Wayne", username: "@jillwayne", body: "Speechless. Beautiful and professional!", img: "https://avatar.vercel.sh/jill" },
  { name: "John Smith", username: "@johnsmith", body: "Transformed my brand's identity. Elegant and powerful!", img: "https://avatar.vercel.sh/john" },
  { name: "Jane Carter", username: "@janecarter", body: "Polished and magical. You nailed the vibe!", img: "https://avatar.vercel.sh/jane" },
  { name: "Jenny Doe", username: "@jennydoe", body: "Best crafted service I've used!", img: "https://avatar.vercel.sh/jenny" },
  { name: "James Bond", username: "@james007", body: "Top-tier studio quality. Insanely good!", img: "https://avatar.vercel.sh/james" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Testimonial = () => {
  const containerRef = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden py-24 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-background/70 to-black"
    >
      <h2 className="text-center text-white text-4xl sm:text-5xl font-bold mb-4 leading-tight">
        What Our Clients Say
      </h2>
      <p className="text-white/60 text-center mb-4 text-sm sm:text-base">
        Real feedback. Real impact. Join 100+ happy customers.
      </p>
      <div className="text-center text-pink-500 font-semibold text-lg mb-10 animate-pulse">
        🎉 Want to be one of our lucky clients? Join us today!
      </div>

      <div className="mb-16">
        <AvatarCircles numPeople={99} avatarUrls={avatars} />
      </div>

      <Marquee pauseOnHover className="[--duration:20s] mb-8" >
        {firstRow.map((review, idx) => (
          <TestimonialCard key={idx} {...review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:24s]">
        {secondRow.map((review, idx) => (
          <TestimonialCard key={idx} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
};

export default Testimonial;
