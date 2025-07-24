

"use client";
import React, { useEffect, useRef } from "react";
import { MessageSquareText, SendHorizonal } from "lucide-react";
import gsap from "gsap";

const ContactSection = () => {
  const msgBoxRef = useRef(null);
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const btnRef = useRef(null);
  const flyIconRef = useRef(null);

  useEffect(() => {
    // GSAP Light Sweep Animation on Consultation Box
    const tl = gsap.timeline({ repeat: -1, delay: 1 });
    tl.fromTo(
      msgBoxRef.current,
      {
        boxShadow: "0 0 0px var(--color-primary)",
      },
      {
        boxShadow: "0 0 20px var(--color-primary)",
        duration: 1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      }
    );
  }, []);

  const handleConsultClick = () => {
    nameRef.current?.focus();
    formRef.current?.scrollIntoView({ behavior: "smooth" });
    gsap.fromTo(
      formRef.current,
      { borderColor: "var(--color-surface-2)" },
      {
        borderColor: "var(--color-primary)",
        duration: 0.6,
        repeat: 1,
        yoyo: true,
        ease: "power2.out",
      }
    );
  };

  const handleSendClick = () => {
    if (flyIconRef.current) {
      gsap.fromTo(
        flyIconRef.current,
        {
          opacity: 0,
          x: 0,
          y: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 80,
          y: -40,
          scale: 1.2,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  };

  return (
    <section className="w-full py-20 bg-[--color-bg-base] text-[--color-text-main] px-4 md:px-10 relative overflow-hidden p-8">





            <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-[var(--color-primary)] opacity-30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[300px] h-[300px] bg-[var(--color-accent)] opacity-20 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Bring Your Project Ideas to Life with{" "}
            <span className="text-[--color-primary]">Expert Development</span>
          </h2>
          <p className="text-[--color-text-muted] text-lg">
            Have a project idea you’re excited about? Let’s turn it into reality
            with a clear vision, roadmap, and technical support tailored to your
            goals.
          </p>

          <div
            ref={msgBoxRef}
            onClick={handleConsultClick}
            className="flex items-center gap-4 bg-[--color-surface-2] px-4 py-3 rounded-xl backdrop-blur-md border border-[--color-primary] cursor-pointer "
          >
            <MessageSquareText className="text-[--color-primary] w-6 h-6 animate-pulse" />
            <span className="text-sm font-medium text-[--color-text-muted]">
              Get a free consultation — no strings attached
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-6">
            {["Project Assessment", "Development Planning", "Implementation Strategy"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-popover border border-primary text-[--color-primary] px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right Side: Form */}
        <div
          ref={formRef}
        
          className="bg-white/10 backdrop-blur-md border border-white/20  rounded-xl p-6 md:p-8 shadow-lg space-y-6"

        >
          <form className="space-y-4">
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-lg bg-[--color-surface-2] border border-[--color-surface-2] text-[--color-text-main] focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-[--color-surface-2] border border-[--color-surface-2] text-[--color-text-main] focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="WhatsApp (Optional)"
              className="w-full px-4 py-3 rounded-lg bg-[--color-surface-2] border border-[--color-surface-2] text-[--color-text-main] focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your message"
              rows="4"
              className="w-full px-4 py-3 rounded-2xl bg-[--color-surface-2] border border-[--color-surface-2] text-[--color-text-main] focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>

            <button
              type="button"
              ref={btnRef}
              onClick={handleSendClick}
              className="relative overflow-hidden bg-[--color-primary] hover:bg-opacity-90 transition-all text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2"
            >
              Send Message
              <SendHorizonal className="w-5 h-5" />
              <span
                ref={flyIconRef}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <SendHorizonal className="text-white w-6 h-6" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
