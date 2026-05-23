"use client";

import React from "react";

const faqs = [
  {
    question: "Is the online B.Sc degree valid?",
    answer:
      "Yes, a UGC-entitled online B.Sc degree is completely valid and equivalent to a regular physical campus degree as per applicable university regulations.",
  },
  {
    question: "Who can apply for this program?",
    answer:
      "Students who have completed 10+2 or equivalent qualifications with a science background from a recognized educational board are eligible to apply.",
  },
  {
    question: "Can working professionals pursue this course?",
    answer:
      "Yes, the online structure is highly flexible and structured for tech professionals, lab assistants, working adults, and freshers who want to learn without pausing their jobs.",
  },
  {
    question: "What is the duration of an online B.Sc program?",
    answer:
      "Most online B.Sc programs take 3 years to complete, split into 6 academic semesters. Some universities provide extra completion timelines depending on their policies.",
  },
  {
    question: "What subjects are covered in online B.Sc?",
    answer:
      "The program typically covers calculus, programming logic, data structures, linear algebra, mechanics, database engines, statistics, and computational modeling systems.",
  },
  {
    question: "What career options are available after online B.Sc?",
    answer:
      "Graduates can look for professional opportunities in data analytics, research labs, technical consulting, database operations, systems analysis, and statistical processing.",
  },
  {
    question: "Can I pursue an M.Sc, MCA, or MBA after an online B.Sc?",
    answer:
      "Yes, after graduating with a recognized online B.Sc degree, you can enroll in advanced postgraduate degrees and professional certifications including M.Sc, MCA, MBA, or specialized research paths.",
  },
  {
    question: "Are online exams conducted for this program?",
    answer:
      "Many universities manage evaluations using online proctored examination frameworks, whereas others use center-based variants. The layout depends completely on your chosen university.",
  },
];

export default function BscFAQ() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Clear answers about online B.Sc validity, eligibility, subjects,
            exams, duration, and career options.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_6px_18px_rgba(15,23,42,0.14)]"
            >
              <h3 className="text-[18px] font-black leading-[1.3] tracking-[-0.3px] text-slate-950">
                {faq.question}
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
