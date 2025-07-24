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

import dynamic from 'next/dynamic';

const World = dynamic(() => import('./World'), {
  ssr: false,
});

const globeConfig = {
    pointSize: 3,
  
    // atmosphereColor: "#ffffff",
    atmosphereColor: "#782EFA",
    showAtmosphere: true,
    atmosphereAltitude: 0.2,
    // polygonColor: "rgba(255,255,255,0.7)",
    polygonColor: "#782EFA",
    globeColor: "#15101E",
    // globeColor: "#782EFA",
    emissive: "#1B1427",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 6,
  };

  const arcData = [
    {
      startLat: 40.7128,
      startLng: -74.006,
      endLat: 51.5074,
      endLng: -0.1278,
      color: "#3DF2B3", // secondary
      arcAlt: 0.25,
      order: 1,
    },
    {
      startLat: 35.6895,
      startLng: 139.6917,
      endLat: -33.8688,
      endLng: 151.2093,
      color: "#3DF2B3", // secondary
      arcAlt: 0.25,
      order: 2,
    },
    {
      startLat: 29.6139,
      startLng: 77.209,
      endLat: 37.7749,
      endLng: -122.4194,
      color: "#3DF2B3", // secondary
      arcAlt: 0.25,
      order: 3,
    },
    {
      startLat: 65.6895,
      startLng: 139.6917,
      endLat: -33.8688,
      endLng: 151.2093,
      color: "#F622C2", // secondary
      arcAlt: 0.25,
      order: 2,
    },
    {
      startLat: 88.6139,
      startLng: 77.209,
      endLat: 37.7749,
      endLng: -122.4194,
      color: "#F622C2", // secondary
      arcAlt: 0.25,
      order: 3,
    },
    {
      startLat: 95.6895,
      startLng: 139.6917,
      endLat: -33.8688,
      endLng: 151.2093,
      color: "#F622C2", // secondary
      arcAlt: 0.25,
      order: 2,
    },
    {
      startLat: 38.6139,
      startLng: 77.209,
      endLat: 37.7749,
      endLng: -122.4194,
      color: "#3DF2B3", // secondary
      arcAlt: 0.25,
      order: 3,
    },
  ];





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

        <div className="-mt-24 absolute left-1/2 -translate-x-1/2 z-0 w-full  h-[600px]">
       <World globeConfig={globeConfig}  data={arcData} />
        </div>
      </div>
    </section>
  );
}
