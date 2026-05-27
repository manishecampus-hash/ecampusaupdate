"use client";

import { pressArticles } from "@/data/press-section";
import { Handshake } from "lucide-react";

const articles = [...pressArticles, ...pressArticles];

export function MediaSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/60 px-3 py-1 text-xs font-bold text-slate-900 uppercase tracking-wider">
            <Handshake className="h-3.5 w-3.5 text-red-500" />
            Featured in
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl md:text-4xl">
            Top Media <span className="text-red-500">Houses</span>
          </h2>
        </div>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden py-5">
          {/* Fading gradients at the edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-white to-transparent" />

          <div
            className="flex w-max items-center gap-10 sm:gap-14" // Tightened gap for balanced spacing
            style={{ animation: "marquee 38s linear infinite" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
          >
            {articles.map((article, i) => (
              <a
                key={i}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
              >
                {/* Increased height to make logos larger and more visible */}
                <img
                  src={article.image}
                  alt={article.name}
                  className="h-20 sm:h-24 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/400x200/f8fafc/e2e8f0?text=Logo";
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
