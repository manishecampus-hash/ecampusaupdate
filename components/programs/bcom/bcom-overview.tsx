import React from "react";
import {
  Handshake,
  Target,
  Building2,
  Receipt,
  TrendingUp,
  Globe,
} from "lucide-react";

const points = [
  "UGC-entitled online degree equivalent to campus mode",
  "Designed for accounting, finance, taxation, and business careers",
  "Flexible learning schedule for students and working professionals",
  "Digital study material, recorded lectures, and academic support",
];

const specializations = [
  {
    icon: Target,
    title: "Accounting & Finance",
    desc: "Expertise in financial accounting, auditing, taxation, and corporate finance.",
    roles:
      "Accountant, Financial Analyst, Auditor, Tax Consultant, Accounts Executive, Finance Officer",
  },
  {
    icon: Building2,
    title: "Banking & Insurance",
    desc: "Focuses on banking operations, insurance laws, risk management, and financial services.",
    roles:
      "Bank Officer, Insurance Advisor, Relationship Manager, Credit Analyst, Risk Analyst",
  },
  {
    icon: Receipt,
    title: "Taxation",
    desc: "In-depth knowledge of direct and indirect taxes, GST, compliance, and tax planning.",
    roles:
      "Tax Consultant, GST Executive, Income Tax Advisor, Compliance Officer, Accounts Executive",
  },
  {
    icon: TrendingUp,
    title: "Financial Markets",
    desc: "Covers stock markets, mutual funds, portfolio management, and investment analysis.",
    roles:
      "Investment Analyst, Equity Dealer, Portfolio Manager, Wealth Advisor, Stock Market Analyst",
  },
  {
    icon: Globe,
    title: "International Business",
    desc: "Focuses on global trade, export-import management, foreign exchange, and marketing.",
    roles:
      "Export Manager, International Business Executive, Trade Analyst, Global Sales Manager",
  },
];

export default function BComOverview() {
  return (
    <section
      style={{
        background:
          "radial-gradient(circle at top right, rgba(255, 59, 79, 0.12), transparent 35%), #05070d",
      }}
      className="relative w-full px-4 py-16 text-slate-100 sm:px-6"
    >
      {/* Header Section */}
      <div className="mx-auto mb-16 max-w-7xl text-center px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/60 px-3 py-1 text-xs font-bold text-slate-900 uppercase tracking-wider">
          <Handshake className="h-3.5 w-3.5 text-red-500" />
          Program Overview
        </span>

        <h2 className="mt-4 text-2xl font-bold text-white tracking-tight sm:text-3xl md:text-4xl">
          Online B.Com Degree Courses{" "}
          <span className="text-red-500">Overview</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300">
          The Online B.Com (Bachelor of Commerce) is a flexible undergraduate
          degree that helps students gain practical knowledge in accounting,
          finance, taxation, and business fundamentals through online learning.
          It is ideal for students and working professionals seeking a
          recognized, career-oriented commerce degree.
        </p>

        <div className="mt-8 flex flex-col items-center gap-2 text-sm font-semibold text-slate-400">
          <p>
            • Builds job-ready skills for careers in banking, accounting,
            finance, and corporate sectors
          </p>
          <p>
            • Offers flexible learning with online classes, digital study
            material, and assessments
          </p>
        </div>
      </div>

      {/* Highlights Grid with Hover Interaction */}
      <div className="relative z-10 mx-auto max-w-7xl rounded-3xl border border-white/10 bg-[#111827] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.32)] sm:p-8 mb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((item, index) => (
            <div
              key={item}
              className="group rounded-2xl border border-white/10 bg-[#05070d] p-5 shadow-sm transition-all duration-300 hover:border-red-500/50 hover:-translate-y-1"
            >
              <span className="mb-4 block text-5xl font-black leading-none text-red-500 group-hover:scale-110 transition-transform origin-left">
                {index + 1}
              </span>
              <p className="text-sm font-bold leading-relaxed text-slate-300 group-hover:text-white transition-colors">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Specializations Section with Readability Improvements */}
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          Top Online B.Com Specializations in India
        </h3>

        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Online B.Com programs offer in-demand specializations aligned with
          technology trends, focusing on technical skills and practical
          knowledge for IT careers.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specializations.map((spec) => (
            <div
              key={spec.title}
              className="rounded-2xl border border-white/10 bg-[#111827] p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col"
            >
              <spec.icon className="h-8 w-8 text-red-500 mb-4 transition-transform group-hover:scale-110" />
              <h4 className="text-lg font-bold text-white mb-2">
                {spec.title}
              </h4>
              <p className="text-sm text-slate-400 mb-4 flex-grow">
                {spec.desc}
              </p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-bold text-slate-300">Roles:</span>{" "}
                  <span className="text-slate-400">{spec.roles}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
