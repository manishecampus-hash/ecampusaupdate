"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jab scroll bottom se thoda upar ho, tab dikhayein
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.offsetHeight - 300;
      setIsVisible(scrollPosition >= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-50 transition-transform duration-700 ease-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-slate-900 px-6 py-4 shadow-2xl border-t border-slate-700">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <h2 className="text-sm font-medium text-white sm:text-base">
            Ready to upgrade your career?
          </h2>

          <button className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-red-500 active:scale-95">
            <span>Apply Now</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
