"use client";

import { GraduationCap, Handshake } from "lucide-react";
import { Section } from "./../../ui/section";

const eligibilityData = [
  {
    title: "Academic Qualification",
    desc: "Applicants must possess a Bachelor’s or Master’s degree from a recognized university with a minimum of 50% aggregate marks or equivalent academic standing.",
  },
  {
    title: "Professional Experience",
    desc: "A minimum of 3–5 years of relevant professional work experience is strongly recommended to ensure candidates can effectively connect academic research with practical business challenges.",
  },
  {
    title: "Leadership & Industry Exposure",
    desc: "This program is best suited for senior professionals, entrepreneurs, consultants, managers, and executives aiming to enhance their strategic leadership and decision-making capabilities.",
  },
  {
    title: "Research Aptitude",
    desc: "Candidates should demonstrate analytical thinking, problem-solving ability, and a strong interest in applied business research focused on innovation and organizational transformation.",
  },
  {
    title: "Statement of Purpose",
    desc: "Applicants may be required to submit a clear statement outlining their academic goals, professional aspirations, and reasons for pursuing a Doctorate in Business Administration.",
  },
  {
    title: "Commitment to Learning",
    desc: "Since the program is academically intensive, applicants should be prepared to dedicate consistent time toward coursework, research activities, and dissertation development.",
  },
];

export default function DoctorateEligibility() {
  return (
    <Section className="w-full bg-slate-950 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            <Handshake className="h-3.5 w-3.5 text-red-500" />
            Eligibility
          </span>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            Doctorate Program <span className="text-red-500">Eligibility</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-300">
            Review the admission requirements designed for ambitious
            professionals who seek advanced academic excellence and leadership
            growth through a globally relevant doctorate program.
          </p>
        </div>

        {/* Number Wise Content */}
        <div className="mx-auto max-w-5xl space-y-8">
          {eligibilityData.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 border-b border-slate-800 pb-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white">
                {index + 1}
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-base leading-8 text-slate-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-14 ">
          <div className="mb-4 flex justify-center">
            <GraduationCap className="h-10 w-10 text-red-500" />
          </div>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            The Doctorate program is designed for visionary professionals ready
            to transform their expertise into impactful leadership, strategic
            innovation, and globally recognized academic achievement.
          </p>
        </div>
      </div>
    </Section>
  );
}
