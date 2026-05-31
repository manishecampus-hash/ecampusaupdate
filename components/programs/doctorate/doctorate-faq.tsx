"use client";

import { Handshake, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Section } from "./../.././ui/section";

const faqs = [
  {
    question: "What is a DBA program?",
    answer:
      "A Doctor of Business Administration (DBA) is a professional doctorate focused on applying research to real-world business challenges, unlike a PhD which is more academic.",
  },
  {
    question: "Is the DBA program 100% online?",
    answer:
      "Yes, the program is fully online and designed for working professionals, allowing you to study at your own pace.",
  },
  {
    question: "What is the duration of the DBA program?",
    answer:
      "The DBA program is 3 years in duration, structured to balance academic rigor with professional commitments.",
  },
  {
    question: "What are the eligibility criteria?",
    answer:
      "Candidates must have a graduation degree with a minimum of 50% marks from a recognized university.",
  },
  {
    question: "Is EMI available for the fees?",
    answer:
      "Yes, flexible EMI options are available to make the program accessible for all eligible candidates.",
  },
  {
    question: "Is the degree globally recognized?",
    answer:
      "Yes, the DBA degree is internationally accredited and recognized by employers and institutions worldwide.",
  },
];

export default function DoctorateFAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    faqs.map((_, index) => index),
  );

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <Section className="w-full bg-white px-4 pt-12 pb-24 sm:px-6 lg:pb-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/60 px-3 py-1 text-xs font-bold text-slate-900 uppercase tracking-wider">
            <Handshake className="h-3.5 w-3.5 text-red-500" />
            FAQ
          </span>

          <h2 className="mt-3 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl md:text-4xl">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.12)]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <h3 className="text-[18px] font-semibold leading-[1.3] tracking-[-0.3px] text-slate-950 pr-4">
                    {faq.question}
                  </h3>

                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 ${
                      isOpen ? "rotate-180 bg-red-50" : ""
                    }`}
                  >
                    <ChevronDown className="h-5 w-5 text-red-500" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14px] leading-6 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
