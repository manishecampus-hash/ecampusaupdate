"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  IndianRupee,
  Star,
  Gift,
  Handshake,
} from "lucide-react";

type CourseTab =
  | "free"
  | "all"
  | "pg"
  | "ug"
  | "specializations"
  | "certifications";

interface ProgramCardProps {
  id: string;
  tab: CourseTab;
  category: string;
  ribbon: string;
  title: string;
  image: string;
  duration: string;
  fees: string;
  slug: string;
  partner?: string;
  isFree?: boolean;
}

const courseTabs: { id: CourseTab; label: string }[] = [
  { id: "free", label: "Free Courses" },
  { id: "all", label: "All Courses" },
  { id: "pg", label: "PG Courses" },
  { id: "ug", label: "UG Courses" },
  { id: "specializations", label: "Specializations" },
  { id: "certifications", label: "Certifications" },
];

const programsData: ProgramCardProps[] = [
  {
    id: "free-ai-basics",
    tab: "free",
    category: "Technology",
    ribbon: "100% FREE",
    title: "Introduction to AI & Prompt Engineering Masterclass",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=900&auto=format&fit=crop&q=80",
    duration: "4 hours",
    fees: "FREE",
    slug: "#",
    partner: "Ecampus Tech",
    isFree: true,
  },
  {
    id: "free-mgmt-foundations",
    tab: "free",
    category: "Management",
    ribbon: "FREE Course",
    title: "Foundations of Digital Marketing & Business Analytics",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
    duration: "6 hours",
    fees: "FREE",
    slug: "#",
    isFree: true,
  },
  {
    id: "mba-healthcare",
    tab: "pg",
    category: "Management",
    ribbon: "Trending",
    title: "MBA in Hospital and Healthcare Management",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop&q=80",
    duration: "24 months",
    fees: "INR 3,29,000",
    slug: "#",
    partner: "Medvarsity",
  },
  {
    id: "bca-fintech-ai",
    tab: "ug",
    category: "Technology",
    ribbon: "Trending",
    title: "BCA with specialization in Financial Technology and AI",
    image:
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=900&auto=format&fit=crop&q=80",
    duration: "36 months",
    fees: "INR 2,75,000",
    slug: "#",
    partner: "Paytm",
  },
  {
    id: "mca-fintech-ai",
    tab: "pg",
    category: "Technology",
    ribbon: "Trending",
    title: "MCA with specialization in Financial Technology and AI",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=900&auto=format&fit=crop&q=80",
    duration: "24 months",
    fees: "INR 2,75,000",
    slug: "#",
    partner: "Paytm",
  },
  {
    id: "mba-dual",
    tab: "pg",
    category: "Management",
    ribbon: "QS Ranked",
    title: "MBA with Dual Specialization",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&auto=format&fit=crop&q=80",
    duration: "24 months",
    fees: "INR 3,29,000",
    slug: "#",
  },
];

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState<CourseTab>("free");

  const filteredPrograms = useMemo(() => {
    return programsData.filter((program) => {
      return activeTab === "all" || program.tab === activeTab;
    });
  }, [activeTab]);

  return (
    <section
      style={{
        padding: "80px 16px",
        background:
          "radial-gradient(circle at top left, rgba(232, 25, 44, 0.18), transparent 34%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.12), transparent 36%), #05070d",
        color: "#f8fafc",
        overflow: "hidden",
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Upper Title Section - Sync with Marquee Theme Headers */}
        <div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-60 border border-slate-200/60 px-3 py-1 text-xs font-bold text-white-900 uppercase tracking-wider">
              <Handshake className="h-3.5 w-3.5 text-red-500" />
              Courses
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-white-900 tracking-tight sm:text-3xl md:text-4xl">
              Get started with a free{" "}
              <span className="text-red-500">course</span>
            </h2>
          </div>
        </div>

        {/* Dynamic Category Navigation Tabs */}
        <div className="mb-10 flex flex-wrap gap-5 sm:gap-8 border-b border-white/5 pb-2">
          {courseTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isFreeTab = tab.id === "free";

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm sm:text-base font-bold pb-3 transition relative flex items-center gap-1.5 outline-none ${
                  isActive
                    ? "text-[#ff3b4f]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {isFreeTab && <Gift className="h-4 w-4 text-[#ff3b4f]" />}
                {tab.label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff3b4f] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Carousel Grid Area */}
        <div className="relative">
          {/* Nav Controls Left */}
          <button
            type="button"
            className="absolute -left-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#111827] text-[#ff3b4f] shadow-2xl transition hover:bg-slate-800 lg:flex"
            aria-label="Previous programs"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPrograms.map((program) => (
              <article
                key={program.id}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827] p-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1 hover:border-red-500/40 flex flex-col justify-between group"
              >
                <div>
                  {/* Badge Ribbon - Red Accent Tone */}
                  <div className="absolute left-5 top-0 z-20">
                    <div className="relative bg-[#ff3b4f] px-5 py-1 text-[11px] font-black text-white shadow-sm tracking-wide rounded-b-sm">
                      {program.ribbon}
                    </div>
                  </div>

                  {/* Program Cover Display */}
                  <div className="relative h-44 overflow-hidden rounded-xl border border-white/5 bg-slate-900">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {program.partner && (
                      <div className="absolute bottom-0 right-0 rounded-tl-xl bg-[#05070d]/90 backdrop-blur-sm px-3 py-1.5 border-l border-t border-white/5">
                        <p className="text-[8px] font-medium text-slate-400 uppercase tracking-wider">
                          Collaboration
                        </p>
                        <p className="text-[11px] font-black text-[#ff3b4f]">
                          {program.partner}
                        </p>
                      </div>
                    )}

                    <div className="absolute left-3 top-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#05070d]/80 backdrop-blur-sm text-yellow-400 shadow">
                      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>

                  {/* Card Content Data */}
                  <div className="pt-4 px-1">
                    <h3 className="line-clamp-2 text-base font-black leading-snug text-white tracking-tight min-h-[46px]">
                      {program.title}
                    </h3>

                    {/* Meta Parameters Block */}
                    <div className="mt-4 flex items-center justify-between text-xs font-bold text-slate-400 border-t border-white/5 pt-3.5">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-[#ff3b4f]" />
                        {program.duration}
                      </div>

                      <div className="flex items-center gap-1">
                        {!program.isFree && (
                          <IndianRupee className="h-3.5 w-3.5 text-[#ff3b4f]" />
                        )}
                        <span className="text-white font-black">
                          {program.isFree
                            ? "FREE"
                            : program.fees.replace("INR ", "")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Trigger Action CTA Button */}
                <div className="pt-4 px-1">
                  <Link
                    href={program.slug}
                    className="flex w-full items-center justify-center rounded-xl bg-[#ff3b4f] px-4 py-2.5 text-xs font-black text-white transition duration-200 hover:bg-red-600 shadow-md shadow-red-950/20"
                  >
                    {program.isFree ? "Start Learning" : "Get Brochure"}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Nav Controls Right */}
          <button
            type="button"
            className="absolute -right-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#111827] text-[#ff3b4f] shadow-2xl transition hover:bg-slate-800 lg:flex"
            aria-label="Next programs"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Empty Fallback State */}
        {filteredPrograms.length === 0 && (
          <div className="mt-10 rounded-xl border border-dashed border-white/10 bg-[#111827]/40 py-12 text-center">
            <p className="font-bold text-slate-400 text-sm">
              No active programs found under this specific course timeline.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
