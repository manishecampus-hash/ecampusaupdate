"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function SlideUpCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Iska matlab hai jab user page ke bilkul end ke paas pahunche
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      setIsVisible(bottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // 'fixed' hata kar niche adjust karne ke liye bottom-0 use kiya hai
    <div
      className={`fixed bottom-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      {/* Container jo footer ke style se match kare */}
      <div className="bg-slate-900 border-t border-slate-700 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.3)]">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
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
