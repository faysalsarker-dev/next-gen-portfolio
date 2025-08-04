'use client';

import { cn } from '@/lib/utils';
import { ServiceCard } from './ServiceCard';
import { services } from '@/lib/Items';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextAnimate } from '../magicui/text-animate';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const bg = backgroundRef.current;
    const subheading = subheadingRef.current;
    if (!bg) return;

    // Animate grid background
    gsap.to(bg, {
      backgroundPosition: '+=40px +=40px',
      duration: 25,
      ease: 'linear',
      repeat: -1,
    });

    gsap.to(bg, {
      opacity: 0.12,
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    // Pulse grid color between accent and primary
    const accent = [61, 242, 179];
    const primary = [120, 46, 250];
    const pulseObj = { t: 0 };

    gsap.to(pulseObj, {
      t: 1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      onUpdate: () => {
        const mix = gsap.utils.interpolate(accent, primary, pulseObj.t);
        const color = `rgb(${mix.map(Math.round).join(',')})`;
        document.documentElement.style.setProperty('--color-grid', color);
      },
    });
if (!subheading) return;
    // Subheading animation
    if (subheading) {
      gsap.from(subheading, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subheading,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Service cards animation
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative z-10 px-4 py-24 bg-background text-white overflow-hidden"
    >
      {/* Grid background with animated color and movement */}
      <div
        ref={backgroundRef}
        className={cn(
          'absolute inset-0 z-0 pointer-events-none',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,var(--color-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid)_1px,transparent_1px)]',
          'opacity-[0.08] transition-all duration-300 ease-in-out'
        )}
        style={{ willChange: 'transform, opacity, filter' }}
      />

      {/* Heading Section */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <div className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className="text-shadow-[0_0_10px_#ffffff]"
          >
            Explore Our Services
          </TextAnimate>
        </div>
        <p
          ref={subheadingRef}
          className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          <TextAnimate
            animation="slideUp"
            by="word"
            className="text-muted-foreground"
          >
            Get expert-crafted solutions tailored to your goals. Backed by real
            experience and a commitment to quality, we help you achieve the
            results you deserve — with zero guesswork.
          </TextAnimate>
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className="will-change-transform"
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
