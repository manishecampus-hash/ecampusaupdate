"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is an online BBA degree valid for government and private jobs?",
    answer:
      "Yes, an online BBA degree from a UGC-entitled university holds the exact same academic validity and corporate recognition as a regular, on-campus undergraduate degree.",
  },
  {
    question: "Who is eligible to apply for the Online BBA program?",
    answer:
      "Any student who has successfully passed their 10+2 higher secondary examination or equivalent qualification from a recognized educational board can apply.",
  },
  {
    question: "Can working professionals manage this business degree?",
    answer:
      "Absolutely. The program features asynchronous online delivery, meaning you can access recorded masterclasses, assignments, and digital study portals completely at your own pace without quitting your job.",
  },
  {
    question: "What is the standard duration of the online BBA?",
    answer:
      "The program is structured over 3 years, split into 6 semesters. Depending on university guidelines, you may get a flexible extended timeline to clear your credits if needed.",
  },
  {
    question: "What core subjects are taught in the online BBA curriculum?",
    answer:
      "The curriculum covers marketing strategies, human resource management, organizational behavior, business analytics, corporate finance, strategic planning, supply chain operations, and entrepreneurship.",
  },
  {
    question: "What corporate career options open up after graduation?",
    answer:
      "Graduates can secure paths in business development, brand management, digital marketing, HR analytics, operations management, corporate consulting, or launch their own startups.",
  },
  {
    question:
      "Can I pursue an executive or regular MBA after completing this online BBA?",
    answer:
      "Yes. Once you earn your valid online BBA degree, you are fully qualified to take competitive exams like CAT, MAT, or GMAT and pursue an MBA, PGDM, or other global master's programs.",
  },
  {
    question: "How are examinations conducted in the online model?",
    answer:
      "Most partner institutions offer online proctored examinations that you can complete securely from your home using a laptop and a stable webcam connection.",
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
    <p className="mt-4 text-base leading-7 text-slate-600">
      {displayedText}

      {displayedText.length < text.length && (
        <span className="ml-1 inline-block h-5 w-1 animate-pulse rounded-full bg-red-500 align-middle" />
      )}
    </p>
  );
}

export function BbaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Clear answers about online BBA validity, eligibility, examinations,
            and career opportunities.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-3xl border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.12)] transition-all duration-300 ${
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
