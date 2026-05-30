import { Section } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";

const specializations = [
  "Business Administration",
  "Strategic Management",
  "Finance & Accounting",
  "Marketing Management",
  "Human Resource Management",
  "Operations & Supply Chain",
  "International Business",
  "Entrepreneurship & Innovation",
];

export default function DoctorateSpecializations() {
  return (
    <Section>
      <div className="mb-8 text-center sm:mb-12">
        <span className="mb-3 inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 sm:mb-4">
          Specializations
        </span>
        <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          Choose Your Specialization
        </h2>
        <p className="mx-auto max-w-2xl text-base text-gray-600">
          Tailor your DBA journey with a specialization that matches your career
          goals
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {specializations.map((spec) => (
          <div
            key={spec}
            className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:border-red-200 hover:shadow-md transition"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 text-red-500" />
            <span className="font-semibold text-gray-800">{spec}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
