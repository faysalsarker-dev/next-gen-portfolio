// components/AnimatedHeadline.tsx
'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeadlineProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current && containerRef.current) {
        gsap.fromTo(
          titleRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1.15, // final scale
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: '+=200',
              scrub: true,
              pin: titleRef.current,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="section-container">
      <h2 ref={titleRef} className={cn('section-title text-3xl font-bold', className)}>
        {children}
      </h2>
    </div>
  );
};

export default AnimatedHeadline;
