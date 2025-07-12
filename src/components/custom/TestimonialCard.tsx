"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BorderBeam } from "../magicui/border-beam";

const TestimonialCard = ({
  name,
  username,
  body,
  img,
}: {
  name: string;
  username: string;
  body: string;
  img: string;
}) => (
  <div
    className={cn(
      "group relative p-5 sm:p-6 md:p-7 rounded-3xl border border-white/10 shadow-xl backdrop-blur-xl overflow-hidden",
      "bg-white/5 hover:bg-white/10 transition-all duration-500 ease-in-out",
      "hover:scale-[1.03] transform min-w-[300px] sm:min-w-[360px] max-w-sm mx-2",
      "before:absolute before:inset-0 before:rounded-3xl before:z-[-1] before:bg-gradient-to-br before:from-purple-500/10 before:via-pink-500/10 before:to-blue-500/10 before:opacity-0 group-hover:before:opacity-100 before:blur-lg before:transition-all before:duration-700"
    )}
  >
    {/* Magic Beam on Hover */}
    <BorderBeam className="group-hover:inline-block hidden" />

    {/* Floating animation */}
    <div className="absolute -top-1 -left-1 w-24 h-24 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse z-[-1]" />
    <div className="absolute bottom-0 right-0 w-16 h-16 bg-pink-500/10 rounded-full blur-xl animate-bounce-slow z-[-1]" />

    {/* User Info */}
    <div className="flex items-center gap-4 mb-4">
      <Image
        src={img}
        alt={name}
        width={48}
        height={48}
        className="rounded-full border border-white/20 shadow-md"
      />
      <div>
        <h4 className="font-semibold text-white">{name}</h4>
        <p className="text-xs text-white/50">{username}</p>
      </div>
    </div>

    {/* Star Rating */}
    <div className="flex items-center gap-1 text-yellow-400 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 drop-shadow-sm" />
      ))}
    </div>

    {/* Testimonial Text */}
    <p className="text-sm text-white/80 leading-relaxed italic">
      “{body}”
    </p>
  </div>
);

export default TestimonialCard;
