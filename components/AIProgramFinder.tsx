"use client";

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
      }, 10);

      return () => clearInterval(interval);
    }
  }, [result]);

  const validate = () => {
    const newErrors: any = {};

    if (form.qualification === "Select") newErrors.qualification = "Required";
    if (
      form.course === "Select" ||
      form.course === "Select Qualification First"
    ) {
      newErrors.course = "Required";
    }
    if (form.budget === "Select") newErrors.budget = "Required";
    if (form.studyMode === "Select") newErrors.studyMode = "Required";
    if (form.careerGoal === "Select") newErrors.careerGoal = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "qualification" ? { course: "Select" } : {}),
    }));

    setErrors((prev: any) => ({ ...prev, [field]: undefined }));
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
          headers: { "Content-Type": "application/json" },
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
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=DM+Sans:wght@400;500;700&display=swap');

        .ai-program-section {
          font-family: 'DM Sans', sans-serif;
          padding: 72px 20px;
          text-align: center;
          background:
            radial-gradient(circle at top left, rgba(232, 25, 44, 0.18), transparent 34%),
            radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.12), transparent 36%),
            #05070d;
          color: #f8fafc;
        }

        .finder-card {
          max-width: 960px;
          margin: 0 auto;
          padding: 40px;
          border-radius: 28px;
          background: rgba(12, 16, 27, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow:
            0 24px 80px rgba(0, 0, 0, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(18px);
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 28px;
        }

        @media (max-width: 900px) {
          .form-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 540px) {
          .ai-program-section {
            padding: 56px 14px;
          }

          .finder-card {
            padding: 24px;
            border-radius: 24px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          text-align: left;
          gap: 7px;
        }

        .form-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: #cbd5e1;
        }

        .form-select {
          width: 100%;
          border: 1px solid rgba(148, 163, 184, 0.28);
          border-radius: 14px;
          padding: 12px 13px;
          font-size: 0.92rem;
          color: #f8fafc;
          background: #101522;
          outline: none;
          transition:
            border-color 160ms ease,
            box-shadow 160ms ease,
            background 160ms ease;
        }

        .form-select:hover {
          border-color: rgba(248, 113, 113, 0.52);
          background: #121827;
        }

        .form-select:focus {
          border-color: #E8192C;
          box-shadow: 0 0 0 4px rgba(232, 25, 44, 0.16);
        }

        .form-select.error {
          border-color: #E8192C;
          box-shadow: 0 0 0 4px rgba(232, 25, 44, 0.12);
        }

        .form-select option {
          color: #0f172a;
          background: #ffffff;
        }

        .error-msg {
          font-size: 0.72rem;
          color: #fb7185;
        }

        .ask-ai-btn {
          min-width: 160px;
          background: linear-gradient(135deg, #E8192C, #ff4d5f);
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 14px 40px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 14px 36px rgba(232, 25, 44, 0.32);
          transition:
            transform 160ms ease,
            box-shadow 160ms ease,
            opacity 160ms ease;
        }

        .ask-ai-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 18px 44px rgba(232, 25, 44, 0.42);
        }

        .ask-ai-btn:disabled {
          cursor: not-allowed;
          opacity: 0.72;
          transform: none;
        }

        .ai-response-card {
          margin-top: 40px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          text-align: left;
          overflow: hidden;
          position: relative;
          background: #0b1020;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.36);
        }

        .ai-header {
          background: linear-gradient(135deg, #111827, #1f2937);
          color: white;
          padding: 14px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          font-weight: 800;
          letter-spacing: 0.03em;
          font-size: 0.78rem;
        }

        .close-btn {
          width: 32px;
          height: 32px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
        }

        .close-btn:hover {
          background: rgba(232, 25, 44, 0.22);
          border-color: rgba(232, 25, 44, 0.5);
        }

        .ai-content {
          padding: 30px;
          line-height: 1.8;
          background: #0b1020;
          color: #dbeafe;
        }

        .ai-content h1,
        .ai-content h2,
        .ai-content h3 {
          color: #ffffff;
          margin: 0 0 12px;
        }

        .ai-content p {
          margin: 0 0 14px;
        }

        .ai-content strong {
          color: #ffffff;
        }

        .ai-content ul,
        .ai-content ol {
          padding-left: 22px;
          margin: 0 0 16px;
        }

        .ai-content a {
          color: #fb7185;
        }
      `}</style>

      <h2 className="mb-3 text-3xl font-bold text-white-990 text-balance sm:mb-4 sm:text-4xl lg:text-5xl">
        Not Sure? <span style={{ color: "#ff3b4f" }}>Ask AI</span>
      </h2>

      <div className="finder-card">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Qualification</label>
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
            <label className="form-label">Course</label>
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
            <label className="form-label">Budget</label>
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
            <label className="form-label">Study Mode</label>
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
            <label className="form-label">Career Goal</label>
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

        <button className="ask-ai-btn" onClick={handleAskAI} disabled={loading}>
          {loading ? "Analyzing..." : "Ask AI"}
        </button>

        {displayedText && (
          <div className="ai-response-card">
            <div className="ai-header">
              <span>AI Career Advisor</span>
              <button
                className="close-btn"
                onClick={() => {
                  setResult(null);
                  setDisplayedText("");
                }}
                aria-label="Close AI response"
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
