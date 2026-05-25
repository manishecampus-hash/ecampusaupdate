"use client";

import { Handshake } from "lucide-react";
import React from "react";

const faqs = [
  {
    question: "Is an online degree or certification valid?",
    answer:
      "Yes, any UGC-entitled or globally accredited online degree is completely valid and holds equivalent academic value to a regular on-campus program as per standard university regulations.",
  },
  {
    question: "Who is eligible to apply for these programs?",
    answer:
      "Eligibility criteria vary by course. Generally, undergraduate programs require a 10+2 passing certificate, while postgraduate or executive diplomas require a valid bachelor's degree from a recognized institution.",
  },
  {
    question: "Can working professionals easily balance these courses?",
    answer:
      "Absolutely. The online curriculum is tailored for working professionals, corporate executives, and freshers, providing self-paced learning dashboards and flexible weekend schedules.",
  },
  {
    question: "What is the typical duration of the online programs?",
    answer:
      "Undergraduate degrees generally span 3 years (6 semesters), postgraduate degrees take 2 years (4 semesters), and specialized professional certifications range from 3 to 12 months.",
  },
  {
    question: "How are academic examinations conducted?",
    answer:
      "Most universities utilize online proctored examination setups, allowing you to take tests securely from home. A few courses may offer optional center-based evaluations depending on university guidelines.",
  },
  {
    question: "What career support or services do learners receive?",
    answer:
      "Learners gain access to placement assistance modules, dedicated resume-building workshops, industry mentorship programs, mock interviews, and virtual career fairs with hiring partners.",
  },
  {
    question:
      "Can I pursue regular higher education after completing an online course?",
    answer:
      "Yes, since the degrees are fully recognized by statutory regulatory bodies, you can seamlessly apply for further on-campus programs, global universities, or government sector job examinations.",
  },
  {
    question: "What kind of study materials and learning support are provided?",
    answer:
      "You receive full access to a state-of-the-art Learning Management System (LMS) containing recorded video lectures, live interactive doubt-solving sessions, e-books, and discussion forums.",
  },
];

export default function FAQ() {
  return (
    // pb-24 aur pb-32 lagane se niche wale section se gap badh jayega
    <section className="w-full bg-white px-4 pt-12 pb-24 sm:px-6 lg:pb-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-60 border border-slate-200/60 px-3 py-1 text-xs font-bold text-slate-900 uppercase tracking-wider">
            <Handshake className="h-3.5 w-3.5 text-red-500" />
            FAQ
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl md:text-4xl">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>
        </div>

        {/* FAQ Grid Cards */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.12)]"
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
