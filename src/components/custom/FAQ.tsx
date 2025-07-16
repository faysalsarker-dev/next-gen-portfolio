"use client";

import {  useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bot, Clock, MessageSquareText, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const benefitItems = [
    {
      icon: <Zap className="text-primary mt-1" />,
      title: "Instant Answers",
      desc: "Get accurate responses without the wait time.",
    },
    {
      icon: <Bot className="text-accent mt-1" />,
      title: "AI-Powered Brain",
      desc: "Understands your needs and replies intelligently.",
    },
    {
      icon: <Clock className="text-secondary mt-1" />,
      title: "Always Online",
      desc: "Available 24/7 to support your queries anytime.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefitItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    benefitRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-surface-2 to-background px-6 py-20 flex items-center justify-center">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-stretch">
        {/* Left Card */}
        <Card className="bg-card border border-border rounded-3xl shadow-2xl flex flex-col justify-between">
          <CardContent className="p-8 space-y-6 relative overflow-hidden">
            {/* Background shimmer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-surface-1/10 to-secondary/10 rounded-3xl animate-pulse opacity-10" />
            <div className="flex items-center gap-3 relative z-10">
              <Zap className="text-primary" />
              <h2 className="text-white text-3xl font-bold">Future of Support</h2>
            </div>
            <p className="text-sm text-muted-foreground relative z-10">
              Say goodbye to traditional FAQs — experience real-time, intelligent assistance.
            </p>

            {/* Features list */}
            <div className="space-y-6 relative z-10">
              {benefitItems.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => { benefitRefs.current[i] = el; }}
                  className={`flex items-start transition-all gap-4 px-4 py-3 rounded-xl ease-in duration-300 ${
                    activeIndex === i
                      ? "bg-primary/20 backdrop-blur-lg shadow-lg border border-primary/30"
                      : "bg-muted/10 hover:bg-muted/20"
                  }`}
                >
                  {item.icon}
                  <div>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Card */}
        <Card className="bg-card border border-border rounded-3xl shadow-2xl flex flex-col justify-between">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center gap-3">
              <MessageSquareText className="text-primary" />
              <h2 className="text-white text-3xl font-bold">Ask Our AI Assistant</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Curious about how we work? Try asking any common question below.
            </p>

            <div className="space-y-4 text-sm">
              {[
                "What makes your service different?",
                "Do you offer ongoing support?",
                "How soon can you deliver?",
              ].map((q, i) => (
                <div
                  key={i}
                  className="bg-muted/10 hover:bg-muted/20 px-5 py-3 rounded-xl cursor-pointer border border-transparent hover:border-border text-white transition-all duration-300"
                >
                  {q}
                </div>
              ))}
            </div>

            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white py-5 text-base font-semibold shadow-xl">
              🚀 Ask Our AI Now
            </Button>

        
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
