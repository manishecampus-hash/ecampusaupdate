import React from "react";
import { BriefcaseBusiness } from "lucide-react";

const careerRoles = [
  "Business Development Executive",
  "Marketing Associate",
  "Human Resource Generalist",
  "Operations Management Trainee",
  "Financial Analyst Trainee",
  "Assistant Brand Manager",
];

export default function BbaCareers() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
            Career <span className="text-red-500">Opportunities</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careerRoles.map((role) => (
            <div
              key={role}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <BriefcaseBusiness className="h-5 w-5 text-red-500" />
              <span className="font-black text-gray-900">{role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
