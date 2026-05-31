"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Award, CheckCircle2, ChevronLeft } from "lucide-react";

type CourseData = {
  title: string;
  duration: string;
  description: string;
  fees: string;
  eligibility: string;
  imageSrc?: string;
};

export default function OfflineHero({ course }: { course: CourseData }) {
  const [seatsLeft, setSeatsLeft] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeatsLeft((prev) => (prev > 3 ? prev - 1 : prev));
    }, 45000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50 pt-12 pb-14 lg:pt-14 lg:pb-16">
      {/* Background SVG grid */}
      <div className="absolute inset-0 opacity-[0.03] [mask-image:linear-gradient(to_bottom,white,transparent)]">
        <svg className="h-full w-full" fill="none" viewBox="0 0 400 400">
          <defs>
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
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* Urgency badge */}
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-700 ring-1 ring-amber-200 animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
              </span>
              ONLY {seatsLeft} SEATS LEFT FOR JUNE 2026 BATCH
            </div>

            {/* Back to home */}
            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-slate-500 transition-colors hover:text-red-500"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>

            {/* Badge */}
            <div className="mt-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-bold text-red-600">
                <Award className="h-4 w-4" />
                OFFLINE CERTIFICATION
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-4 text-4xl font-bold text-gray-900 leading-tight sm:text-5xl lg:text-6xl">
              {course.title}
            </h1>

            {/* Duration */}
            <p className="mt-2 text-base font-semibold text-red-500">
              Duration: {course.duration}
            </p>

            {/* Description */}
            <p className="mt-4 max-w-xl text-base text-gray-600 sm:text-xl">
              {course.description}
            </p>

            {/* CTA Buttons */}
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

          {/* RIGHT — image if available, else stats card */}
          <div className="relative">
            {course.imageSrc ? (
              // Image version — when imageSrc is provided in data
              <>
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200">
                  <img
                    src={course.imageSrc}
                    alt={course.title}
                    className="h-[400px] w-full object-cover"
                  />
                </div>

                {/* Floating badge over image */}
                <div className="absolute -bottom-5 -left-5 z-20 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-green-100 p-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Current Status
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        Admissions Open
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Stats card version — when no image
              <>
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200 bg-white p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-2xl bg-red-50 p-5 text-center">
                      <p className="text-3xl font-bold text-red-600">
                        {course.duration}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        Duration
                      </p>
                    </div>
                    <div className="rounded-2xl bg-green-50 p-5 text-center">
                      <p className="text-3xl font-bold text-green-600">
                        Offline
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        Classroom Learning
                      </p>
                    </div>
                    <div className="rounded-2xl bg-blue-50 p-5 text-center">
                      <p className="text-3xl font-bold text-blue-600">Live</p>
                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        Sessions
                      </p>
                    </div>
                    <div className="rounded-2xl bg-amber-50 p-5 text-center">
                      <p className="text-3xl font-bold text-amber-600">EMI</p>
                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        Available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 z-20 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-green-100 p-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Current Status
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        Admissions Open
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
