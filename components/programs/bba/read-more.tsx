"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";

const benefits = [
  "Industry-focused management degree with flexible online learning",
  "Learn leadership, marketing, operations, and business management skills",
  "Designed for students, freshers, entrepreneurs, and professionals",
  "Strong foundation for MBA, corporate careers, and startup opportunities",
];

export default function BbaReadMore() {
  const [open, setOpen] = useState(false);

  return (
    <section className="border-b border-slate-100 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Benefits of Choosing an Online BBA{" "}
              <span className="text-red-500">Program?</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Gain practical business and management knowledge through a
              flexible online BBA program focused on leadership, marketing,
              operations, finance, and industry-relevant corporate skills.
            </p>
          </div>

          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-red-200 hover:bg-red-50/40"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />

                  <p className="text-sm font-semibold leading-6 text-gray-800">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {open && (
              <div className="mt-5 space-y-4 border-l-2 border-red-200 pl-5 text-sm leading-7 text-gray-700 sm:text-base">
                <p>
                  Online BBA programs provide the flexibility to study from
                  anywhere while offering access to digital lectures,
                  assignments, case studies, and academic support throughout the
                  program.
                </p>

                <p>
                  The program helps learners build practical management skills
                  in leadership, marketing, business operations, finance, and
                  strategic decision-making while preparing for corporate
                  careers and higher education opportunities.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-xs font-bold text-white shadow-sm shadow-red-200 transition hover:bg-red-600"
            >
              {open ? "Show Less" : "Read More"}

              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
