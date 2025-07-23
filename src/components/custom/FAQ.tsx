"use client";

import { useEffect, useRef, useState } from "react";
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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    benefitRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          delay: i * 0.3,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    });

    gsap.from(".faq-title", {
      opacity: 0,
      y: -40,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".faq-title",
        start: "top 95%",
      },
    });
  }, []);

  return (
    <section className="min-h-screen px-6 py-24 bg-background text-foreground relative overflow-hidden">
      {/* Shimmering Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-[--color-primary]/10 before:via-[--color-secondary]/10 before:to-[--color-accent]/10 before:blur-3xl before:opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left: Feature Cards */}
        <Card className="relative border border-border bg-card shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-8 space-y-8 relative z-10">
            <div className="faq-title flex items-center gap-3">
              <Zap className="text-primary" />
              <h2 className="text-3xl font-bold tracking-wide">
                Future of Support
              </h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Say goodbye to traditional FAQs  experience real-time, intelligent assistance.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {benefitItems.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => { benefitRefs.current[i] = el; }}
                  className={`group flex items-start gap-4 p-4 rounded-xl border transition-all duration-500 backdrop-blur-md ${
                    activeIndex === i
                      ? "bg-primary/20 border-primary/40 shadow-[var(--shadow-glow)]"
                      : "bg-muted/10 hover:bg-muted/20 hover:shadow-[var(--shadow-hover)]"
                  }`}
                >
                  {item.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Glowing Border Effect */}
          <div className="absolute inset-0 rounded-2xl border border-primary/10 pointer-events-none animate-pulse opacity-10" />
        </Card>

        {/* Right: Chat UI */}
      {/* Right: AI Chat Interface */}
<Card className="relative border border-accent/30 bg-popover shadow-xl rounded-2xl overflow-hidden flex flex-col chat-glow">
  <CardContent className="relative z-10 p-8 flex flex-col h-full space-y-6">
    {/* Header */}
    <div className="flex items-center gap-3 faq-title">
      <MessageSquareText className="text-tertiary" />
      <h2 className="text-3xl font-bold text-foreground">Ask Our AI Assistant</h2>
    </div>
    <p className="text-sm text-muted-foreground">
      Forget static FAQs  just ask me anything live.
    </p>

    {/* Message bubbles */}
    <div className="flex-1 overflow-y-auto space-y-4">
      <div className="bg-[--color-surface-1] px-5 py-3 w-fit rounded-xl text-white shadow-md animate-pulse border border-primary/30">
        👋 Hey! I'm here to help — what do you want to know?
      </div>
    </div>

    {/* Input area */}
    <div className="flex items-center gap-2 relative group">
      <input
        type="text"
        placeholder="Ask your AI assistant..."
        className="flex-1 bg-background/80 border border-muted rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground shadow-[inset_0_0_20px_#782EFA30] backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
      />
      <Button className="bg-gradient-to-r from-primary to-accent text-white px-5 py-2 rounded-xl shadow-md hover:opacity-90">
        Send
      </Button>
    </div>
  </CardContent>

  {/* LAYERED CYBER GLOW EFFECTS */}
  <div className="pointer-events-none absolute inset-0 before:absolute before:inset-0 before:rounded-2xl before:blur-[100px] before:bg-[radial-gradient(ellipse_at_center,var(--color-accent)_0%,transparent_70%)] before:opacity-20 after:absolute after:inset-0 after:rounded-2xl after:blur-[60px] after:bg-gradient-to-tr after:from-primary/10 after:via-tertiary/10 after:to-secondary/10 after:opacity-30" />
</Card>

      </div>
    </section>
  );
}
