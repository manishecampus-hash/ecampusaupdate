import { Section } from "@/components/ui/section";
import {
  Briefcase,
  Target,
  Landmark,
  Megaphone,
  Users,
  Settings,
  Globe,
  Lightbulb,
  Handshake,
} from "lucide-react";

const specializations = [
  {
    title: "Business Administration",
    desc: "Build advanced expertise in organizational leadership and business transformation.",
    icon: Briefcase,
  },
  {
    title: "Strategic Management",
    desc: "Master high-level decision-making and long-term competitive strategy.",
    icon: Target,
  },
  {
    title: "Finance & Accounting",
    desc: "Develop research-driven insights into corporate finance and financial systems.",
    icon: Landmark,
  },
  {
    title: "Marketing Management",
    desc: "Explore consumer behavior, digital strategy, and market growth frameworks.",
    icon: Megaphone,
  },
  {
    title: "Human Resource Management",
    desc: "Lead workforce innovation, talent development, and organizational performance.",
    icon: Users,
  },
  {
    title: "Operations & Supply Chain",
    desc: "Optimize operational excellence and supply chain efficiency through research.",
    icon: Settings,
  },
  {
    title: "International Business",
    desc: "Gain expertise in global trade, cross-border strategy, and international markets.",
    icon: Globe,
  },
  {
    title: "Entrepreneurship & Innovation",
    desc: "Drive innovation-led business growth and entrepreneurial research excellence.",
    icon: Lightbulb,
  },
];

export default function DoctorateSpecializations() {
  return (
    <Section className="bg-white border-y border-slate-100 !py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/60 px-3 py-1 text-xs font-bold text-slate-900 uppercase tracking-wider">
            <Handshake className="h-3.5 w-3.5 text-red-500" />
            Specializations
          </span>

          <h2 className="mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl md:text-4xl">
            Choose Your <span className="text-red-500">Specialization</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
            Personalize your DBA journey with industry-relevant specializations
            designed to align with your professional goals and leadership
            aspirations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specializations.map((spec) => {
            const Icon = spec.icon;

            return (
              <div
                key={spec.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
                  <Icon className="h-6 w-6 text-red-500" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {spec.title}
                </h3>

                <p className="text-sm leading-6 text-gray-600">{spec.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
