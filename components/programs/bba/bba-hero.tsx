"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  CreditCard,
  Download,
  IndianRupee,
  Star,
} from "lucide-react";

const highlights = [
  { label: "Duration", value: "3 Years", icon: Clock },
  { label: "Total Fees", value: "INR 99,000", icon: IndianRupee },
  { label: "EMI Starts", value: "INR 2,750/mo", icon: CreditCard },
  { label: "Mode", value: "100% Online", icon: BookOpen },
];

export default function BbaHero() {
  const [seatsLeft, setSeatsLeft] = useState(18);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeatsLeft((prev) => (prev > 5 ? prev - 1 : prev));
    }, 45000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50 pt-12 pb-14 lg:pt-14 lg:pb-16">
      <div className="absolute inset-0 opacity-[0.03] [mask-image:linear-gradient(to_bottom,white,transparent)]">
        <svg className="h-full w-full" fill="none" viewBox="0 0 400 400">
          <defs>
            <pattern
              id="bba-grid"
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
          <rect width="100%" height="100%" fill="url(#bba-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-700 ring-1 ring-amber-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              ONLY {seatsLeft} SEATS LEFT FOR JUNE 2026 BATCH
            </div>

            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-slate-500 transition hover:text-red-500"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Courses
            </Link>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-bold text-red-600">
              <Award className="h-4 w-4" />
              Undergraduate Program
            </div>

            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Online BBA in{" "}
              <span className="text-red-500">Business Management</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Master essential leadership skills, strategic thinking, marketing,
              and human resource management through a highly flexible,
              career-focused online degree program.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="#apply"
                className="inline-flex items-center gap-2 rounded-full bg-red-500 px-8 py-3 text-sm font-black text-white shadow-lg shadow-red-100 transition hover:bg-red-600"
              >
                Apply Now
                <ChevronRight className="h-4 w-4" />
              </Link>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-50"
              >
                <Download className="h-4 w-4" />
                Brochure
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop&q=80"
                alt="Online BBA Business Management Students"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-4 z-20 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-100 p-2 text-green-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Admission Status
                  </p>
                  <p className="text-sm font-black text-gray-900">
                    Open for 2026
                  </p>
                </div>
              </div>
            </div>

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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <Icon className="mb-3 h-5 w-5 text-red-500" />
                <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-black text-gray-900">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
