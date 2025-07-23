"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function GetInTouch() {
  const containerRef = useRef(null);
  const { register, handleSubmit, reset } = useForm();

  useGSAP(() => {
    const elems = containerRef.current?.querySelectorAll(".fade-slide");
    if (elems) {
      gsap.fromTo(
        elems,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, { scope: containerRef });

  const onSubmit = (data) => {
    console.log("Message sent:", data);
    reset();
  };

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-6 md:px-20 bg-[var(--color-surface-2)] text-[var(--color-text-main)] overflow-hidden rounded-3xl max-w-7xl mx-auto"
    >
      {/* Gradient Glow Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-[var(--color-primary)] opacity-30 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[var(--color-accent)] opacity-20 blur-[80px]"
      />

      {/* Main Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left Content Card */}
        <Card className="fade-slide bg-[var(--color-surface-1)] border border-[var(--color-primary)] rounded-2xl shadow-xl p-8 relative">
          <CardContent>
            <Badge className="mb-4 bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">
              Free Consultation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Let’s Build Something Great Together
            </h2>
            <p className="mb-6 text-[var(--color-text-muted)] leading-relaxed">
              Share your project idea and we’ll help you turn it into a real product with strategy and expertise.
            </p>
            <div className="flex items-center gap-3 bg-[var(--color-surface-2)] rounded-lg p-4 w-fit shadow-md border border-[var(--color-primary)]">
              <FaWhatsapp className="text-[var(--color-accent)] text-2xl" />
              <span className="font-medium text-[var(--color-text-main)]">
                +8801234567890
              </span>
            </div>

            {/* Floating Label or Badge */}
            <div className="absolute top-4 right-4 px-4 py-1 text-[var(--color-primary)] font-semibold bg-[var(--color-primary)]/20 rounded-full shadow-glow animate-pulse">
              Available Now
            </div>
          </CardContent>
        </Card>

        {/* Right Contact Form */}
        <Card className="fade-slide bg-[var(--color-surface-1)] border border-[var(--color-primary)] rounded-2xl shadow-xl p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
            noValidate
          >
            <Input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              required
              className="bg-[var(--color-surface-2)] border-[var(--color-primary)] text-[var(--color-text-main)]"
            />
            <Input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              required
              className="bg-[var(--color-surface-2)] border-[var(--color-primary)] text-[var(--color-text-main)]"
            />
            <Input
              {...register("phone")}
              type="tel"
              placeholder="Phone / WhatsApp (optional)"
              className="bg-[var(--color-surface-2)] border-[var(--color-primary)] text-[var(--color-text-main)]"
            />
            <Textarea
              {...register("message")}
              placeholder="Write your message here..."
              rows={4}
              required
              className="bg-[var(--color-surface-2)] border-[var(--color-primary)] text-[var(--color-text-main)]"
            />
            <Button
              type="submit"
              className="bg-[var(--color-primary)] text-white hover:brightness-110 transition"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>

      {/* Floating Image (Optional Glow/Badge/Image) */}
      <Image
        src="/float-badge.png" // 🟢 Replace with your own image
        alt="Floating Badge"
        width={80}
        height={80}
        className="absolute bottom-8 right-8 animate-bounce"
      />
    </section>
  );
}
