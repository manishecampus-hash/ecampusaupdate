"use client";

import { pressArticles } from "@/data/press-section";
import { Newspaper } from "lucide-react";

const articles = [...pressArticles, ...pressArticles];

export function PressSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/60 px-3 py-1 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <Newspaper className="h-3.5 w-3.5 text-red-500" />
            Featured in
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Top Media Houses
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our journey and impact, as shared by the nation&apos;s most
            respected voices.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y border-red-100">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-white to-transparent" />

          <div
            className="flex w-max"
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
                className="group flex flex-col bg-white hover:bg-red-50/40 transition-all duration-300 border-r border-red-100 px-5 py-6 w-[280px] sm:w-[310px] lg:w-[330px] flex-shrink-0"
                style={{ textDecoration: "none" }}
              >
                {/* Article Image */}
                <div className="w-full h-48 sm:h-52 lg:h-56 rounded-xl overflow-hidden bg-gray-100 mb-5">
                  <img
                    src={article.image}
                    alt={article.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/600x400/f8fafc/e2e8f0?text=News";
                    }}
                  />
                </div>

                {/* Headline */}
                <p className="text-sm sm:text-[15px] leading-6 text-gray-800 font-medium min-h-[72px]">
                  {article.headline}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 mt-auto pt-5">
                  <span className="text-sm font-semibold text-red-600 group-hover:text-red-700">
                    Read More
                  </span>

                  <div className="relative flex items-center transition-transform duration-200 group-hover:translate-x-1">
                    <span className="w-5 h-[1.5px] bg-red-600" />
                    <span
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "4px solid transparent",
                        borderBottom: "4px solid transparent",
                        borderLeft: "6px solid #dc2626",
                      }}
                    />
                  </div>
                </div>
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
