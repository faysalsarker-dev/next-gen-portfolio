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
      "group relative p-5 sm:p-6 md:p-7 rounded-3xl backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-[1.03]",
      "min-w-[300px] sm:min-w-[360px] max-w-sm mx-4"
    )}
  >
      <BorderBeam className="group-hover:inline-block hidden" />

    <div className="flex items-center gap-4 mb-4">
      <Image
        src={img}
        alt={name}
        width={48}
        height={48}
        className="rounded-full border border-white/20"
      />
      <div>
        <h4 className="font-semibold text-white">{name}</h4>
        <p className="text-xs text-white/50">{username}</p>
      </div>
    </div>

    <div className="flex items-center gap-1 text-yellow-400 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400" />
      ))}
    </div>

    <p className="text-sm text-white/80 leading-relaxed">{body}</p>

    <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-md transition duration-500 z-[-1]" />
  </div>
);

export default TestimonialCard;
