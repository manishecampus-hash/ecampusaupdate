"use client";

import {
  Bot,
  Sparkles,
  GraduationCap,
  Target,
  Wallet,
  Laptop,
  BookOpen,
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
      setResult("### Connection Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="ai-program-section">
      <style>{`
        .ai-program-section {
          position: relative;
          overflow: hidden;
          padding: 70px 20px 90px;
          background:
            radial-gradient(circle at top left, rgba(239, 68, 68, 0.08), transparent 28%),
            radial-gradient(circle at bottom right, rgba(248, 113, 113, 0.08), transparent 30%),
            linear-gradient(to bottom, #ffffff, #f8fafc);
        }

        .section-header {
          position: relative;
          z-index: 2;
          text-align: center;
          margin-bottom: 38px;
        }

        .section-title {
          font-size: clamp(34px, 5vw, 56px);
          line-height: 1.1;
          font-weight: 900;
          color: #0f172a;
          margin-top: 14px;
          letter-spacing: -0.04em;
        }

        .section-title span {
          background: linear-gradient(to right, #ef4444, #dc2626);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-description {
          max-width: 700px;
          margin: 16px auto 0;
          font-size: 16px;
          line-height: 1.7;
          color: #64748b;
        }

        .finder-card {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 30px;
          border-radius: 28px;
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.7);
          box-shadow:
            0 20px 60px rgba(15, 23, 42, 0.08),
            0 6px 20px rgba(239, 68, 68, 0.06);
        }

        .top-highlight {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
          padding-bottom: 22px;
          border-bottom: 1px solid #e5e7eb;
        }

        .highlight-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .highlight-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: linear-gradient(to bottom right, #ef4444, #dc2626);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 10px 30px rgba(239, 68, 68, 0.25);
        }

        .highlight-title {
          font-size: 18px;
          font-weight: 800;
          color: #111827;
        }

        .highlight-subtitle {
          margin-top: 3px;
          font-size: 13px;
          color: #6b7280;
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          font-size: 12px;
          font-weight: 700;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #dc2626;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 700;
          color: #334155;
        }

        .form-select {
          width: 100%;
          height: 52px;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 0 16px;
          font-size: 14px;
          font-weight: 500;
          color: #111827;
          background: rgba(255,255,255,0.95);
          outline: none;
          transition: all 0.25s ease;
        }

        .form-select:hover {
          border-color: #cbd5e1;
        }

        .form-select:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
        }

        .form-select.error {
          border-color: #dc2626;
          box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.08);
        }

        .error-msg {
          font-size: 11px;
          font-weight: 600;
          color: #dc2626;
        }

        .button-wrap {
          display: flex;
          justify-content: center;
          margin-top: 4px;
        }

        .ask-ai-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-width: 170px;
          height: 48px;
          padding: 0 20px;
          border: none;
          border-radius: 999px;
          background: linear-gradient(to right, #ef4444, #dc2626);
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow:
            0 14px 30px rgba(239, 68, 68, 0.24),
            inset 0 1px 0 rgba(255,255,255,0.25);
        }

        .ask-ai-btn svg {
          width: 16px;
          height: 16px;
        }

        .ask-ai-btn:hover {
          transform: translateY(-2px);
        }

        .ask-ai-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .ai-response-card {
          margin-top: 30px;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          background: white;
          box-shadow:
            0 16px 40px rgba(15, 23, 42, 0.06),
            0 6px 14px rgba(0,0,0,0.04);
        }

        .ai-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: linear-gradient(to right, #fff5f5, #ffffff);
          border-bottom: 1px solid #f1f5f9;
        }

        .ai-title-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ai-avatar {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(to bottom right, #ef4444, #dc2626);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .ai-title {
          font-size: 15px;
          font-weight: 800;
          color: #111827;
        }

        .ai-subtitle {
          font-size: 12px;
          color: #64748b;
        }

        .close-btn {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          background: white;
          color: #64748b;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: #fef2f2;
          color: #dc2626;
          border-color: #fecaca;
        }

        .ai-content {
          padding: 24px;
          line-height: 1.8;
          color: #475569;
          font-size: 14px;
        }

        .ai-content h1,
        .ai-content h2,
        .ai-content h3 {
          color: #0f172a;
          margin-bottom: 12px;
          font-weight: 800;
        }

        .ai-content p {
          margin-bottom: 14px;
        }

        .ai-content ul,
        .ai-content ol {
          padding-left: 20px;
          margin-bottom: 16px;
        }

        .ai-content li {
          margin-bottom: 6px;
        }

        @media (max-width: 1100px) {
          .form-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .top-highlight {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .ai-program-section {
            padding: 56px 16px 70px;
          }

          .finder-card {
            padding: 20px;
            border-radius: 22px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 36px;
          }

          .section-description {
            font-size: 15px;
          }

          .ask-ai-btn {
            width: 100%;
            height: 46px;
          }

          .ai-content {
            padding: 20px;
          }
        }
      `}</style>

      <div className="section-header">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/60 px-3 py-1 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <Bot className="h-3.5 w-3.5 text-red-500" />
          AI Powered Guidance
        </span>

        <h2 className="section-title">Not Sure? Ask AI</h2>

        <p className="section-description">
          Get personalized course and career recommendations based on your
          qualification, budget, and goals.
        </p>
      </div>

      <div className="finder-card">
        <div className="top-highlight">
          <div className="highlight-left">
            <div className="highlight-icon">
              <Sparkles className="h-6 w-6" />
            </div>

            <div>
              <h3 className="highlight-title">Smart AI Career Match</h3>

              <p className="highlight-subtitle">
                Personalized degree & career recommendations
              </p>
            </div>
          </div>

          <div className="live-badge">
            <span className="pulse-dot"></span>
            AI Recommendations Live
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              <GraduationCap className="h-4 w-4 text-red-500" />
              Qualification
            </label>

            <select
              className={`form-select ${errors.qualification ? "error" : ""}`}
              value={form.qualification}
              onChange={(e) => handleChange("qualification", e.target.value)}
            >
              {qualificationOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            {errors.qualification && (
              <span className="error-msg">{errors.qualification}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">
              <BookOpen className="h-4 w-4 text-red-500" />
              Course
            </label>

            <select
              className={`form-select ${errors.course ? "error" : ""}`}
              value={form.course}
              onChange={(e) => handleChange("course", e.target.value)}
            >
              <option value="Select">Select Course</option>

              {programMapping[form.qualification]?.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {errors.course && (
              <span className="error-msg">{errors.course}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">
              <Wallet className="h-4 w-4 text-red-500" />
              Budget
            </label>

            <select
              className={`form-select ${errors.budget ? "error" : ""}`}
              value={form.budget}
              onChange={(e) => handleChange("budget", e.target.value)}
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            {errors.budget && (
              <span className="error-msg">{errors.budget}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">
              <Laptop className="h-4 w-4 text-red-500" />
              Study Mode
            </label>

            <select
              className={`form-select ${errors.studyMode ? "error" : ""}`}
              value={form.studyMode}
              onChange={(e) => handleChange("studyMode", e.target.value)}
            >
              {studyModeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            {errors.studyMode && (
              <span className="error-msg">{errors.studyMode}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">
              <Target className="h-4 w-4 text-red-500" />
              Career Goal
            </label>

            <select
              className={`form-select ${errors.careerGoal ? "error" : ""}`}
              value={form.careerGoal}
              onChange={(e) => handleChange("careerGoal", e.target.value)}
            >
              {careerGoalOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            {errors.careerGoal && (
              <span className="error-msg">{errors.careerGoal}</span>
            )}
          </div>
        </div>

        <div className="button-wrap">
          <button
            className="ask-ai-btn"
            onClick={handleAskAI}
            disabled={loading}
          >
            <Sparkles className="h-4 w-4" />

            {loading ? "Analyzing..." : "Ask AI Advisor"}
          </button>
        </div>

        {displayedText && (
          <div className="ai-response-card">
            <div className="ai-header">
              <div className="ai-title-wrap">
                <div className="ai-avatar">
                  <Bot className="h-5 w-5" />
                </div>

                <div>
                  <div className="ai-title">AI Career Advisor</div>

                  <div className="ai-subtitle">
                    Personalized recommendations generated instantly
                  </div>
                </div>
              </div>

              <button
                className="close-btn"
                onClick={() => {
                  setResult(null);
                  setDisplayedText("");
                }}
              >
                ×
              </button>
            </div>

            <div className="ai-content">
              <ReactMarkdown>{displayedText}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
