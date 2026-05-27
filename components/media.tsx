"use client";

import { pressArticles } from "@/data/press-section";
import { Handshake } from "lucide-react";
import { Section } from "./ui/section";

const articles = [...pressArticles, ...pressArticles];

export function MediaSection() {
  return (
    <Section className="overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 pt-4 sm:pt-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-black px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
            <Handshake className="h-3.5 w-3.5 text-red-500" />
            Featured in
          </span>

          <h2 className="mt-2 text-2xl font-extrabold text-white tracking-tight sm:text-3xl md:text-4xl">
            Top Media <span className="text-red-500">Houses</span>
          </h2>
        </div>

        <div className="relative w-full flex items-start overflow-hidden py-4 select-none mb-2">
          <div className="flex shrink-0 items-start justify-start gap-12 pr-12 animate-marquee">
            {articles.map((article, i) => (
              <a
                key={`${article.name}-${i}`}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-[280px] sm:w-[310px] lg:w-[330px] shrink-0 flex-col rounded-xl bg-black border border-zinc-900 p-3 transition-all duration-300 hover:border-red-500"
              >
                <div className="mb-3 h-48 w-full overflow-hidden rounded-xl bg-black sm:h-52 lg:h-56">
                  <img
                    src={article.image}
                    alt={article.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/600x400/000000/ffffff?text=News";
                    }}
                  />
                </div>

                <p className="text-sm sm:text-[15px] leading-6 text-gray-300 font-medium">
                  {article.headline}
                </p>

                <div className="flex items-center gap-2 pt-3">
                  <span className="text-sm font-semibold text-red-500 group-hover:text-red-400">
                    Read More →
                  </span>
                </div>
              </a>
            ))}
          </div>
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
          animation: marquee 38s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </Section>
  );
}
