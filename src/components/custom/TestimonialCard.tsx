"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

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
      "group relative p-6 rounded-[var(--radius)] border border-white/10 shadow-glow backdrop-blur-lg overflow-hidden max-w-[300px]",
 
    )}
  >
    
 

    <p className="text-[var(--color-text-main)]/80 italic leading-relaxed text-base">
      “{body}”
    </p>
    
       <div className="flex items-center gap-4 mt-8">
      <Image
        src={img}
        alt={name}
        width={48}
        height={48}
        className="rounded-full border border-white/20 shadow-md"
      />
      <div>
        <h4 className="text-lg font-semibold text-[var(--color-text-main)]">
          {name}
        </h4>
        <p className="text-xs text-[var(--color-text-muted)]">{username}</p>
      </div>
    </div>

  </div>
);

export default TestimonialCard;
