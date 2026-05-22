import React from "react";
import { ShieldCheck, Sparkles } from "lucide-react";

const points = [
  "UGC-entitled online degree equivalent to campus mode",
  "Designed for leadership, management, marketing, and HR careers",
  "Flexible learning schedule for students and working professionals",
  "Digital study material, recorded lectures, and academic support",
];

export default function BbaOverview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-red-600">
            <Sparkles className="h-4 w-4" />
            Program Overview
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
            Why Choose <span className="text-red-500">Online BBA?</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            This BBA program is ideal for learners who want a strong, practical
            foundation in corporate administration, strategic management, team
            leadership, marketing strategies, and entrepreneurial growth.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <ShieldCheck className="mb-3 h-5 w-5 text-red-500" />
              <p className="text-sm font-bold leading-relaxed text-gray-800">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
