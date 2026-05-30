"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is a DBA program?",
    a: "A Doctor of Business Administration (DBA) is a professional doctorate focused on applying research to real-world business challenges, unlike a PhD which is more academic.",
  },
  {
    q: "Is the DBA program 100% online?",
    a: "Yes, the program is fully online and designed for working professionals, allowing you to study at your own pace.",
  },
  {
    q: "What is the duration of the DBA program?",
    a: "The DBA program is 3 years in duration, structured to balance academic rigor with professional commitments.",
  },
  {
    q: "What are the eligibility criteria?",
    a: "Candidates must have a graduation degree with a minimum of 50% marks from a recognized university.",
  },
  {
    q: "Is EMI available for the fees?",
    a: "Yes, flexible EMI options are available to make the program accessible for all eligible candidates.",
  },
  {
    q: "Is the degree globally recognized?",
    a: "Yes, the DBA degree is internationally accredited and recognized by employers and institutions worldwide.",
  },
];

export default function DoctorateFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section>
      <div className="mb-8 text-center sm:mb-12">
        <span className="mb-3 inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 sm:mb-4">
          FAQs
        </span>
        <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between p-6 text-left font-semibold text-gray-900 hover:bg-slate-50 transition"
            >
              {faq.q}
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <div className="border-t border-slate-100 px-6 py-4 text-gray-600">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
