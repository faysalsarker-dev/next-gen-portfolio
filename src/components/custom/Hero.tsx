"use client";

import { Suspense, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AuroraText } from "../magicui/aurora-text";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import gsap from "gsap";

import dynamic from 'next/dynamic';
import { Cover } from "../ui/cover";
import { arcData, globeConfig } from "@/lib/Items";



const World = dynamic(() => import('./World'), {
  ssr: false,

});






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
          Level Up Your
          <AuroraText className="ml-2"> Business</AuroraText>
          <br />
          with
        



      <Cover>Lightning-Fast</Cover>, Custom {"{"}
        <Typewriter
          words={["Websites", "Automation", "Apps", "AI Tools", "SEO"]}
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
       {/* <Suspense fallback={<div>Loading...</div>}>
         <World globeConfig={globeConfig}  data={arcData} />
       </Suspense> */}

<Suspense fallback={<div className="text-center">Loading globe...</div>}>
      
          
                <World globeConfig={globeConfig}  data={arcData} />

            
         
       </Suspense>


        </div>




 
      </div>



    </section>
  );
}