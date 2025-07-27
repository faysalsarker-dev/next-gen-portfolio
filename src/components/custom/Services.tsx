'use client';


import { cn } from '@/lib/utils';
import { ServiceCard } from './ServiceCard';
import { services } from '@/lib/Items';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

import { motion } from 'framer-motion';


export default function Services() {


  const headingWords = 'Explore Our Services';
  const subheadingText =
    "Get expert-crafted solutions tailored to your goals. Backed by real experience and a commitment to quality, we help you achieve the results you deserve — with zero guesswork.";

  return (
    <section
      className="relative z-10 px-4 py-24 bg-background text-white overflow-hidden"

    >
      {/* Dot Background */}
      <div
        className={cn(
          'absolute inset-0 z-0 pointer-events-none opacity-8',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,var(--color-accent)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-accent)_1px,transparent_1px)]'
        )}
      />

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <motion.div
         
          className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          <TextGenerateEffect
            words={headingWords}
            
            className="text-center text-muted-foreground font-normal"
          />
        </motion.div>
        <p
        
          className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          {subheadingText}
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
          
          >
            <ServiceCard
              idx={idx}
              title={service.title}
              icon={service.icon}
              price={service.price}
              features={service.features}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
