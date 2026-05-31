"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, Handshake } from "lucide-react";
import { Section } from "./section";

export default function EcampusCta() {
  return (
    <Section>
      <style>{`
        @keyframes floatGlow {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(18px, -16px, 0) scale(1.08); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-120%) rotate(12deg); }
          100% { transform: translateX(220%) rotate(12deg); }
        }

        @keyframes softLift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes pulseRing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.28); }
          50% { box-shadow: 0 0 0 10px rgba(220, 38, 38, 0); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-[32px] border border-red-100 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(220,38,38,0.16)] sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_32%)]" />

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-200/60 blur-3xl [animation:floatGlow_7s_ease-in-out_infinite]" />
          <div className="absolute -bottom-28 left-24 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl [animation:floatGlow_8s_ease-in-out_infinite_reverse]" />

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100 [animation:shimmer_2.8s_ease-in-out_infinite]" />

          <div className="relative grid gap-8 rounded-[24px] border border-white/70 bg-white/75 p-6 backdrop-blur-xl sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-60 border border-slate-200/60 px-3 py-1 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <Handshake className="h-3.5 w-3.5 text-red-500" />
                Admissions Open 2026
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl md:text-4xl">
                Ready to Upgrade Your{" "}
                <span className="text-red-500">Career?</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Join top online and executive programs designed for working
                professionals, ambitious managers, and future business leaders.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Flexible learning",
                  "Top universities",
                  "Career-focused",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:bg-red-50 hover:text-red-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <button className="group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-[0_16px_36px_rgba(220,38,38,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_20px_44px_rgba(220,38,38,0.36)] [animation:pulseRing_2.8s_ease-in-out_infinite]">
                <span className="absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/30 transition-transform duration-700 group-hover/btn:translate-x-56" />
                <span className="relative">Apply Now</span>
                <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>

              <p className="text-center text-sm font-medium text-slate-500">
                Limited seats available
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
