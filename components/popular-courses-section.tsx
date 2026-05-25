"use client";

import React from "react";
import { OfferCarousel } from "@/components/ui/offer-carousel";
import { popularCourses } from "@/data/popular-courses";
import { Handshake } from "lucide-react";

export function PopularCoursesSection() {
  return (
    <section
      id="popular-courses"
      className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Unified Center Header with Standard Preview Typography */}
        <div className="mx-auto text-center mb-8 border-b border-slate-100 pb-6 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-60 border border-slate-200/60 px-3 py-1 text-xs font-bold text-slate-900 uppercase tracking-wider">
            <Handshake className="h-3.5 w-3.5 text-red-500" />
            Trending Courses
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl md:text-4xl">
            Top Popular &{" "}
            <span className="text-red-500">Placement Courses</span>
          </h2>
        </div>

        {/* Dynamic Carousel Component */}
        <div className="w-full">
          <OfferCarousel offers={popularCourses} />
        </div>
      </div>
    </section>
  );
}
