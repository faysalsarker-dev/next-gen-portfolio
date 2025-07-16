"use client";

import { useRef } from "react";
import { Marquee } from "@/components/magicui/marquee";
import TestimonialCard from "./TestimonialCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";



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
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(containerRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });

    gsap.from(titleRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
      },
    });

    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      delay: 0.4,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 90%",
      },
    });

    gsap.from(ctaRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden py-24 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-background/80 to-black"
    >
      {/* Animated Title */}
      <h2
        ref={titleRef}
        className="text-center text-white text-4xl sm:text-5xl font-bold mb-4 leading-tight drop-shadow-md"
      >
        What Our Clients Say
      </h2>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="text-white/60 text-center mb-4 text-sm sm:text-base max-w-xl"
      >
        Real feedback. Real impact. <span className="text-white">Join 100+ happy clients</span> growing their brand with us.
      </p>

      {/* Motivational CTA */}
      <div
        ref={ctaRef}
        className="text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-extrabold text-xl sm:text-2xl mb-12 animate-pulse"
      >
        🚀 Want to be one of our lucky clients?<br className="sm:hidden" />
        <span className="underline underline-offset-4 decoration-pink-400/50">Let’s build your dream together!</span>
      </div>

      {/* Avatar Circles */}
      <div className="mb-16">
        {/* <AvatarShowcase/> */}
        {/* <AvatarCircles numPeople={99} avatarUrls={avatars} /> */}
      </div>

      {/* Testimonial Marquees */}
      <div className="px-2 overflow-hidden relative w-full">
        <Marquee pauseOnHover className="[--duration:20s] mb-4">
          {firstRow.map((review, idx) => (
            <TestimonialCard key={idx} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:24s]">
          {secondRow.map((review, idx) => (
            <TestimonialCard key={idx} {...review} />
          ))}
        </Marquee>

        {/* Side gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </div>
  );
};

export default Testimonial;
