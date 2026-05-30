"use client";

import React from "react";
import { Handshake } from "lucide-react";

export default function HeroStatsSection() {
  const partners = [
    { name: "ARM", src: "/banner-press/partner2.webp" },
    { name: "BMW", src: "/banner-press/partner7.webp" },
    { name: "Dell", src: "/banner-press/partner1.webp" },
    { name: "Google", src: "/banner-press/partner8.webp" },
    { name: "JP Morgan", src: "/banner-press/partner3.webp" },
    { name: "Klinikum", src: "/banner-press/JPLogo.png" },
    { name: "Nvidia", src: "/banner-press/partner5.webp" },
    { name: "TikTok", src: "/banner-press/partner6.webp" },
  ];

  const doublePartners = [...partners, ...partners];

  return (
    <section className="bg-white border-y border-slate-100 py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/60 px-3 py-1 text-xs font-bold text-slate-900 uppercase tracking-wider">
          <Handshake className="h-3.5 w-3.5 text-red-500" />
          Our Elite Hiring Network
        </span>
        <h2 className="mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl md:text-4xl">
          Top Corporate Recruitment &{" "}
          <span className="text-red-500">Placement Partners</span>
        </h2>
      </div>

      <div className="relative w-full flex items-center overflow-hidden py-4 select-none">
        <div className="pointer-events-none absolute left-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        {/* Increased gap from gap-12 to gap-16 to provide breathing room for larger boxes */}
        <div className="flex shrink-0 items-center justify-start gap-16 pr-16 animate-marquee whitespace-nowrap">
          {doublePartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center w-[160px] h-[60px] shrink-0 transition-all duration-300 transform hover:scale-110 border-2 border-black rounded-lg p-2"
            >
              <img
                src={partner.src}
                alt={`${partner.name} Logo`}
                className="max-w-full max-h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
