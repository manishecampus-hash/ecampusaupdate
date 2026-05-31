"use client";

import { Handshake } from "lucide-react";

const feeOptions = [
  {
    icon: "🏦",
    title: "Partner Bank EMI",
    desc: "HDFC, ICICI, Axis Bank - easy EMI with quick approval",
  },
  {
    icon: "📱",
    title: "NBFC & Fintech",
    desc: "Flexible financing via PaySense, KreditBee, EarlySalary up to 36 months",
  },
  {
    icon: "🏢",
    title: "Corporate Sponsorship",
    desc: "Company-sponsored DBA funding with invoice support",
  },
  {
    icon: "🎓",
    title: "Scholarship Available",
    desc: "Merit & research-based scholarships up to ₹50,000 available",
  },
];

export default function DoctorateEligibilityFees() {
  return (
    <section
      style={{
        background:
          "radial-gradient(circle at top right, rgba(255, 59, 79, 0.12), transparent 35%), #05070d",
      }}
      className="relative w-full px-4 py-12 text-slate-100 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-900">
            <Handshake className="h-3.5 w-3.5 text-red-500" />
            Doctorate — DBA Program
          </span>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            Program Fee & <span className="text-red-500">Financing</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            Flexible funding options designed for senior professionals and
            executives.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-xl sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Total Program Fee
              </div>

              <div className="mb-2 text-4xl font-extrabold text-red-500 sm:text-5xl">
                ₹3,50,000
              </div>

              <div className="mb-6 text-sm text-slate-400 sm:text-base">
                3-Year Online DBA - Batch June 2026
              </div>

              <div className="mb-5 rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
                <div className="mb-1 text-sm font-bold text-red-400">
                  💳 No-Cost EMI
                </div>

                <div className="text-sm leading-6 text-slate-300 sm:text-base">
                  Starting from{" "}
                  <span className="font-bold text-white">₹12,000/month</span> —
                  flexible tenure up to 36 months
                </div>
              </div>

              <button className="w-full rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 sm:text-base">
                Apply & Secure Seat
              </button>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-4">
            {feeOptions.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-lg transition-all duration-300 hover:border-red-500/30"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-2xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="mb-1 text-base font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-300 sm:text-[15px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
