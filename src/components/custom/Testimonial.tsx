"use client";

import { useRef } from "react";
import { Marquee } from "@/components/magicui/marquee";
import TestimonialCard from "./TestimonialCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitText from "../magicui/SplitText";
import { reviews } from "@/lib/Items";



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Testimonial = () => {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const marqueeRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        once: true,
      },
    });

    tl.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "<+0.3"
      )
      .fromTo(
        marqueeRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        "<+0.2"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden py-24"
    >
      {/* Headline with SplitText */}
      <SplitText
        text="Loved by clients worldwide"
        className="text-center text-white text-4xl sm:text-5xl font-bold mb-4 leading-tight drop-shadow-md"
       splitType="words, chars"
delay={80}
duration={0.6}
        ease="power3.out"
       
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="text-white/60 text-center mb-6 text-sm sm:text-base max-w-xl"
      >
        See what clients are saying about our services and how we’ve transformed
        their brands with our unique design approach.
      </p>

      {/* Testimonial Marquee Cards */}
      <div
        ref={marqueeRef}
        className="relative w-full mt-10"
      >
        {/* Gradient Fade Sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="px-2 overflow-hidden w-full space-y-4">
          <Marquee className="[--duration:20s]">
            {firstRow.map((review, idx) => (
              <TestimonialCard key={idx} {...review} />
            ))}
          </Marquee>

          <Marquee reverse className="[--duration:24s]">
            {secondRow.map((review, idx) => (
              <TestimonialCard key={idx} {...review} />
            ))}
          </Marquee>


          <Marquee  className="[--duration:24s]">
            {secondRow.map((review, idx) => (
              <TestimonialCard key={idx} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
