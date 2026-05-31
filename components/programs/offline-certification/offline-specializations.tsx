import { Section } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";

const specializations = [
  "Digital Marketing Strategy",
  "AI Tools & Automation",
  "SEO & Content Marketing",
  "Social Media Marketing",
  "Ecommerce Management",
  "Performance Marketing",
  "Email & WhatsApp Marketing",
  "Analytics & Reporting",
];

export default function OfflineSpecializations() {
  return (
    <Section>
      <div className="mb-8 text-center sm:mb-12">
        <span className="mb-3 inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 sm:mb-4">
          Specializations
        </span>
        <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          What You Will Learn
        </h2>
        <p className="mx-auto max-w-2xl text-base text-gray-600">
          Industry-relevant skills that make you job-ready from day one
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
