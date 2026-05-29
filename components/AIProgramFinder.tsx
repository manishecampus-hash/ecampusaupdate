"use client";

import {
  Bot,
  Sparkles,
  GraduationCap,
  Target,
  Wallet,
  Laptop,
  BookOpen,
  Handshake,
} from "lucide-react";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const qualificationOptions = ["Select", "12th Pass", "Diploma", "Graduate"];

const programMapping: Record<string, string[]> = {
  Select: ["Select Qualification First"],
  "12th Pass": ["BBA", "BCA", "B.Com", "BA"],
  Diploma: ["B.Tech Lateral Entry", "M.Tech Flexible Timing"],
  Graduate: ["MBA", "M.Com", "M.Sc", "MA", "MCA"],
};

const budgetOptions = [
  "Select",
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,00,000",
  "Above ₹2,00,000",
];

const studyModeOptions = ["Select", "Online", "Offline", "Hybrid"];

const careerGoalOptions = ["Select", "Job Switch", "Promotion", "Career Start"];

export default function AIProgramFinder() {
  const [form, setForm] = useState({
    qualification: "Select",
    course: "Select",
    budget: "Select",
    studyMode: "Select",
    careerGoal: "Select",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (result) {
      setDisplayedText("");

      let index = 0;

      const interval = setInterval(() => {
        if (index < result.length) {
          setDisplayedText((prev) => prev + result.charAt(index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 8);

      return () => clearInterval(interval);
    }
  }, [result]);

  const validate = () => {
    const newErrors: any = {};

    if (form.qualification === "Select") {
      newErrors.qualification = "Required";
    }

    if (
      form.course === "Select" ||
      form.course === "Select Qualification First"
    ) {
      newErrors.course = "Required";
    }

    if (form.budget === "Select") {
      newErrors.budget = "Required";
    }

    if (form.studyMode === "Select") {
      newErrors.studyMode = "Required";
    }

    if (form.careerGoal === "Select") {
      newErrors.careerGoal = "Required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "qualification" ? { course: "Select" } : {}),
    }));

    setErrors((prev: any) => ({
      ...prev,
      [field]: undefined,
    }));
  };

  const handleAskAI = async () => {
    if (!validate()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        "http://localhost:5009/api/ai-program-finder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            name: "User",
            email: "u@ex.com",
            phone: "0",
          }),
        },
      );

      const data = await response.json();

      if (data.success) {
        setResult(data.aiRecommendation);
      }
    } catch (err) {
      setResult("### Connection Error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        background:
          "radial-gradient(circle at top right, rgba(255, 59, 79, 0.12), transparent 35%), #05070d",
      }}
      className="relative w-full px-4 py-10 text-slate-100 sm:px-6"
    >
      {/* Section Header */}
      <div className="mx-auto mb-10 max-w-7xl text-center px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/60 px-3 py-1 text-xs font-bold text-slate-900 uppercase tracking-wider">
          <Handshake className="h-3.5 w-3.5 text-red-500" />
          AI Powered Guidance
        </span>
        <h2 className="mt-2 text-2xl font-extrabold text-white-900 tracking-tight sm:text-3xl md:text-4xl">
          Not Sure? Ask <span className="text-red-500">AI</span>
        </h2>
      </div>

      {/* Main Finder Card */}
      <div className="relative z-10 mx-auto max-w-7xl rounded-3xl border border-white/10 bg-[#111827] p-6 sm:p-8 shadow-[0_18px_50px_rgba(0,0,0,0.32)]">
        {/* Top Highlight Badge Row */}

        {/* Form Selection Grid */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {/* Qualification */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
              <GraduationCap className="h-4 w-4 text-[#ff3b4f]" />
              Qualification
            </label>
            <select
              className={`h-13 w-full rounded-2xl border bg-[#05070d] px-4 text-sm font-semibold text-slate-100 outline-none transition cursor-pointer hover:border-red-500/40 focus:border-[#ff3b4f] focus:ring-4 focus:ring-red-500/20 ${
                errors.qualification
                  ? "border-[#ff3b4f] ring-4 ring-red-500/15"
                  : "border-white/10"
              }`}
              value={form.qualification}
              onChange={(e) => handleChange("qualification", e.target.value)}
            >
              {qualificationOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#111827]">
                  {opt}
                </option>
              ))}
            </select>
            {errors.qualification && (
              <span className="text-[11px] font-bold text-red-400">
                {errors.qualification}
              </span>
            )}
          </div>

          {/* Course */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
              <BookOpen className="h-4 w-4 text-[#ff3b4f]" />
              Course
            </label>
            <select
              className={`h-13 w-full rounded-2xl border bg-[#05070d] px-4 text-sm font-semibold text-slate-100 outline-none transition cursor-pointer hover:border-red-500/40 focus:border-[#ff3b4f] focus:ring-4 focus:ring-red-500/20 ${
                errors.course
                  ? "border-[#ff3b4f] ring-4 ring-red-500/15"
                  : "border-white/10"
              }`}
              value={form.course}
              onChange={(e) => handleChange("course", e.target.value)}
            >
              <option value="Select" className="bg-[#111827]">
                Select Course
              </option>
              {programMapping[form.qualification]?.map((c) => (
                <option key={c} value={c} className="bg-[#111827]">
                  {c}
                </option>
              ))}
            </select>
            {errors.course && (
              <span className="text-[11px] font-bold text-red-400">
                {errors.course}
              </span>
            )}
          </div>

          {/* Budget */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
              <Wallet className="h-4 w-4 text-[#ff3b4f]" />
              Budget
            </label>
            <select
              className={`h-13 w-full rounded-2xl border bg-[#05070d] px-4 text-sm font-semibold text-slate-100 outline-none transition cursor-pointer hover:border-red-500/40 focus:border-[#ff3b4f] focus:ring-4 focus:ring-red-500/20 ${
                errors.budget
                  ? "border-[#ff3b4f] ring-4 ring-red-500/15"
                  : "border-white/10"
              }`}
              value={form.budget}
              onChange={(e) => handleChange("budget", e.target.value)}
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#111827]">
                  {opt}
                </option>
              ))}
            </select>
            {errors.budget && (
              <span className="text-[11px] font-bold text-red-400">
                {errors.budget}
              </span>
            )}
          </div>

          {/* Study Mode */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
              <Laptop className="h-4 w-4 text-[#ff3b4f]" />
              Study Mode
            </label>
            <select
              className={`h-13 w-full rounded-2xl border bg-[#05070d] px-4 text-sm font-semibold text-slate-100 outline-none transition cursor-pointer hover:border-red-500/40 focus:border-[#ff3b4f] focus:ring-4 focus:ring-red-500/20 ${
                errors.studyMode
                  ? "border-[#ff3b4f] ring-4 ring-red-500/15"
                  : "border-white/10"
              }`}
              value={form.studyMode}
              onChange={(e) => handleChange("studyMode", e.target.value)}
            >
              {studyModeOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#111827]">
                  {opt}
                </option>
              ))}
            </select>
            {errors.studyMode && (
              <span className="text-[11px] font-bold text-red-400">
                {errors.studyMode}
              </span>
            )}
          </div>

          {/* Career Goal */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
              <Target className="h-4 w-4 text-[#ff3b4f]" />
              Career Goal
            </label>
            <select
              className={`h-13 w-full rounded-2xl border bg-[#05070d] px-4 text-sm font-semibold text-slate-100 outline-none transition cursor-pointer hover:border-red-500/40 focus:border-[#ff3b4f] focus:ring-4 focus:ring-red-500/20 ${
                errors.careerGoal
                  ? "border-[#ff3b4f] ring-4 ring-red-500/15"
                  : "border-white/10"
              }`}
              value={form.careerGoal}
              onChange={(e) => handleChange("careerGoal", e.target.value)}
            >
              {careerGoalOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#111827]">
                  {opt}
                </option>
              ))}
            </select>
            {errors.careerGoal && (
              <span className="text-[11px] font-bold text-red-400">
                {errors.careerGoal}
              </span>
            )}
          </div>
        </div>

        {/* Action Button Wrapper */}
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={handleAskAI}
            disabled={loading}
            className="inline-flex h-12 min-w-[190px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff3b4f] to-[#e02438] px-7 text-sm font-black text-white shadow-lg shadow-red-500/20 outline-none transition hover:-translate-y-0.5 hover:shadow-red-500/35 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            <Sparkles className="h-4 w-4" />
            {loading ? "Analyzing..." : "Ask AI Advisor"}
          </button>
        </div>

        {/* Streaming Response Content Output */}
        {displayedText && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#05070d] shadow-2xl">
            {/* Header Area */}
            <div className="flex items-center justify-between border-b border-white/5 bg-gradient-to-r from-red-500/10 to-transparent p-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff3b4f] to-[#cc1f31] text-white">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-black text-white">
                    AI Career Advisor
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Personalized recommendations generated instantly
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setResult(null);
                  setDisplayedText("");
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-transparent text-lg text-slate-400 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
              >
                &times;
              </button>
            </div>

            {/* Markdown Render Wrapper */}
            <div className="prose prose-invert max-w-none p-5 sm:p-6 text-sm leading-relaxed text-slate-300 text-left format-markdown">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-xl font-extrabold text-white mt-4 mb-2"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="text-lg font-bold text-white mt-4 mb-2"
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="text-base font-bold text-white mt-3 mb-1"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="mb-3 text-slate-300" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul
                      className="list-disc pl-5 mb-4 space-y-1 text-slate-300"
                      {...props}
                    />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="list-decimal pl-5 mb-4 space-y-1 text-slate-300"
                      {...props}
                    />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="pl-1" {...props} />
                  ),
                }}
              >
                {displayedText}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
