// Updated Hero Section with icons positioned exactly like the reference image and animated using GSAP
"use client";

import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AuroraText } from "../magicui/aurora-text";
import ThunderText from "./ThunderText";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const iconRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    iconRefs.current.forEach((icon, index) => {
      gsap.to(icon, {
        y: "+=10",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.2,
      });
    });
  }, []);

  return (
    <section className="flex bg-background relative items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center overflow-hidden">
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-glass-deep text-base transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span className="text-accent">✨ Take A Next Step</span>
            </AnimatedShinyText>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
          Grow Your 
          <AuroraText className="ml-2"> Business</AuroraText>
          <br />
          with
          <ThunderText className="ml-2">Lightning-Fast</ThunderText>, Custom <br />
          {"{"}
          <Typewriter
            words={["Websites", "Automation", "Applications", "Solutions", "Designs"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
          {"}"}
        </h1>

        {/* Icons positioned like reference image */}
        <Image
          ref={(el) => { iconRefs.current[0] = el; }}
          src="/sheild.png"
          alt="icon"
          width={70}
          height={70}
          className="absolute top-[15%] left-[10%] blur-[2px] z-0"
        />
        <Image
          ref={(el) => { iconRefs.current[1] = el; }}
          src="/lightbulb.png"
          alt="icon"
          width={60}
          height={60}
          className="absolute top-[40%] left-[5%] blur-[2px] z-0"
        />
        <Image
          ref={(el) => { iconRefs.current[2] = el; }}
          src="/atom.png"
          alt="icon"
          width={60}
          height={60}
          className="absolute bottom-[10%] left-[15%] blur-[2px] z-0"
        />

        <Image
          ref={(el) => { iconRefs.current[3] = el; }}
          src="/lightning.png"
          alt="icon"
          width={80}
          height={80}
          className="absolute top-[15%] right-[10%] blur-[2px] z-0"
        />
        <Image
          ref={(el) => { iconRefs.current[4] = el; }}
          src="/ai.png"
          alt="icon"
          width={60}
          height={60}
          className="absolute top-[40%] right-[5%] blur-[2px] z-0"
        />
        <Image
          ref={(el) => { iconRefs.current[5] = el; }}
          src="/shutdown.png"
          alt="icon"
          width={60}
          height={60}
          className="absolute bottom-[10%] right-[15%] blur-[2px] z-0"
        />

        <div className="-mt-20 absolute left-1/2 -translate-x-1/2 z-50 w-full">
        </div>
      </div>
    </section>
  );
}
