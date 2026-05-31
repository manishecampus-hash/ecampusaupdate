"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Award, ChevronLeft, Star } from "lucide-react";

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
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeatsLeft((prev) => (prev > 3 ? prev - 1 : prev));
    }, 45000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50 pt-12 pb-14 lg:pt-14 lg:pb-16">
      {/* Background Grid */}
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

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-slate-500 transition-colors hover:text-red-500"
            >
              <ChevronLeft className="mr-1 h-4 w-4" /> Back to Home
            </Link>

            <div className="mt-3 space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-bold text-red-600">
                <Award className="h-4 w-4" /> DOCTORATE — DBA Program
              </span>

              <div className="flex w-fit items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-700 ring-1 ring-amber-200">
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

          {/* RIGHT: VIDEO IMAGE CARD */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <img
                src={course.image || "/doctorate/birchwood.png"}
                alt={course.title}
                className="h-[420px] w-full object-cover"
              />
              {/* Play button overlay */}
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/35 transition hover:bg-black/45"
              >
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/95 shadow-2xl transition hover:scale-105">
                  <span className="ml-1 border-y-[13px] border-l-[22px] border-r-0 border-y-transparent border-l-red-500" />
                </div>
              </button>
              {/* Video Label */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white/90 px-3.5 py-2 shadow-md backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="text-xs font-bold text-slate-800">
                  Watch Program Overview
                </span>
              </div>
            </div>

            {/* Rating badge */}
            <div className="absolute -right-4 top-6 z-20 hidden rounded-2xl bg-white/90 p-4 shadow-xl ring-1 ring-slate-100 backdrop-blur lg:block">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Learner Rating
                  </p>
                  <p className="text-sm font-black text-gray-900">4.7/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/80"
              onClick={() => setIsVideoOpen(false)}
            >
              ✕
            </button>
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              className="h-full w-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
