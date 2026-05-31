"use client";

import { BookOpen, Globe, Users, TrendingUp, Handshake } from "lucide-react";

type CourseData = {
  title: string;
  description: string;
};

export default function DoctorateOverview({ course }: { course: CourseData }) {
  const highlights = [
    {
      icon: BookOpen,
      label: "Research-Based Learning",
      desc: "Deep academic and industry research focus",
    },
    {
      icon: Globe,
      label: "Global Recognition",
      desc: "Internationally accredited doctorate degree",
    },
    {
      icon: Users,
      label: "Expert Faculty",
      desc: "Learn from world-class professors and practitioners",
    },
    {
      icon: TrendingUp,
      label: "Career Growth",
      desc: "Advance to C-suite and leadership roles",
    },
  ];

  return (
    <section
      style={{
        background:
          "radial-gradient(circle at top right, rgba(255, 59, 79, 0.12), transparent 35%), #05070d",
      }}
      className="relative w-full px-4 py-10 text-slate-100 sm:px-6"
    >
      {/* Section Header */}
      <div className="mx-auto mb-10 max-w-7xl text-center px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/60 px-3 py-1 text-xs font-bold text-slate-900 uppercase tracking-wider">
          <Handshake className="h-3.5 w-3.5 text-red-500" />
          Course Overview
        </span>
        <h2 className="mt-2 text-2xl font-extrabold text-white tracking-tight sm:text-3xl md:text-4xl">
          About {course.title.replace(/University$/, "")}
          <span className="text-red-500"> University</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
          {course.description}
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="relative z-10 mx-auto max-w-7xl grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-[#111827] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.32)] transition hover:border-red-500/40"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-white text-sm">{item.label}</h3>
            <p className="mt-1 text-sm text-slate-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
