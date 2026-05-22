"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the online B.Com degree valid?",
    answer:
      "Yes, a UGC-entitled online B.Com degree is valid and equivalent to a regular degree as per applicable university guidelines.",
  },
  {
    question: "Who can apply for this program?",
    answer:
      "Students who have completed 10+2 or equivalent qualification from a recognized board can apply for an online B.Com program.",
  },
  {
    question: "Can working professionals pursue this course?",
    answer:
      "Yes, the online format is flexible and suitable for students, freshers, entrepreneurs, and working professionals who want to study without leaving their current routine.",
  },
  {
    question: "What is the duration of an online B.Com program?",
    answer:
      "Most online B.Com programs are completed in 3 years, divided into 6 semesters. Some universities may provide extended duration as per their academic policy.",
  },
  {
    question: "What subjects are covered in online B.Com?",
    answer:
      "The program usually covers financial accounting, business law, economics, taxation, auditing, corporate accounting, cost accounting, management, and banking-related subjects.",
  },
  {
    question: "What career options are available after online B.Com?",
    answer:
      "Graduates can explore roles in accounting, finance, banking, taxation, auditing, business operations, insurance, and corporate administration.",
  },
  {
    question: "Can I pursue CA, CS, CMA, or MBA after online B.Com?",
    answer:
      "Yes, after completing a valid online B.Com degree, learners can pursue higher education and professional programs such as MBA, CA, CS, CMA, M.Com, or other eligible postgraduate courses.",
  },
  {
    question: "Are online exams conducted for this program?",
    answer:
      "Many universities conduct online proctored examinations, while some may follow hybrid or center-based exam models. The exact exam format depends on the university.",
  },
];

function TypeAnswer({ text, active }: { text: string; active: boolean }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!active) {
      setDisplayedText("");
      return;
    }

    setDisplayedText("");
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 12);

    return () => clearInterval(interval);
  }, [text, active]);

  if (!active) return null;

  return (
    <p className="mt-3 text-[13px] leading-6 text-slate-600">
      {displayedText}
      {displayedText.length < text.length && (
        <span className="ml-0.5 inline-block h-4 w-1 animate-pulse rounded-full bg-red-500 align-middle" />
      )}
    </p>
  );
}

export default function BComFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 text-center">
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Clear answers about online B.Com validity, eligibility, subjects,
            exams, duration, and career options.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border bg-white p-5 shadow-[0_6px_18px_rgba(15,23,42,0.14)] transition-all duration-200 ${
                  isOpen
                    ? "border-red-200"
                    : "border-slate-200 hover:border-red-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <h3 className="flex-1 text-[18px] font-black leading-[1.3] tracking-[-0.3px] text-slate-950">
                    {faq.question}
                  </h3>

                  <span
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" strokeWidth={2.4} />
                  </span>
                </button>

                <TypeAnswer text={faq.answer} active={isOpen} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
