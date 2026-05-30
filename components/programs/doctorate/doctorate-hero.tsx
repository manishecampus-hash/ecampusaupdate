"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Award, ChevronLeft } from "lucide-react";

type CourseData = {
  title: string;
  duration: string;
  description: string;
  fees: string;
  eligibility: string;
  image: string;
};

export default function DoctorateHero({ course }: { course: CourseData }) {
  const [seatsLeft, setSeatsLeft] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeatsLeft((prev) => (prev > 3 ? prev - 1 : prev));
    }, 45000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50 pt-12 pb-14 lg:pt-14 lg:pb-16">
      {/* background grid */}
      <div className="absolute inset-0 opacity-[0.03] [mask-image:linear-gradient(to_bottom,white,transparent)]">
        <svg className="h-full w-full" fill="none" viewBox="0 0 400 400">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 40L40 40M40 0L40 40"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-slate-500 transition-colors hover:text-red-500"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>

            {/* BADGES */}
            <div className="mt-3 space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-bold text-red-600">
                <Award className="h-4 w-4" />
                DOCTORATE — DBA Program
              </span>

              <div className="flex w-fit items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-700 ring-1 ring-amber-200 animate-pulse">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
                </span>
                ONLY {seatsLeft} SEATS LEFT FOR JUNE 2026 BATCH
              </div>
            </div>

            <h1 className="mt-4 text-4xl font-bold text-gray-900 leading-tight sm:text-5xl lg:text-6xl">
              Birchwood{" "}
              <span className="text-red-500 font-bold">University</span>
            </h1>

            <p className="mt-4 max-w-xl text-base text-gray-600 sm:text-xl">
              {course.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#apply"
                className="flex items-center gap-2 rounded-full bg-red-500 px-8 py-3 font-bold text-white shadow-lg shadow-red-200 transition hover:scale-105 hover:bg-red-600 active:scale-95"
              >
                Apply Now
              </Link>

              <button className="rounded-full border border-slate-200 bg-white px-8 py-3 font-bold text-slate-700 transition hover:bg-slate-50">
                Download Brochure
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={course.image || "/doctorate/birchwood.png"}
                alt={course.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
