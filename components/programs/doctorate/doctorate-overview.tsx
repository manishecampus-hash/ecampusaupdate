import { Section } from "@/components/ui/section";
import { BookOpen, Globe, Users, TrendingUp } from "lucide-react";

type CourseData = {
  title: string;
  description: string;
};

export default function DoctorateOverview({ course }: { course: CourseData }) {
  const highlights = [
    {
      icon: BookOpen,
      label: "Research-Based Learning",
      desc: "Deep academic and industry research focus",
    },
    {
      icon: Globe,
      label: "Global Recognition",
      desc: "Internationally accredited doctorate degree",
    },
    {
      icon: Users,
      label: "Expert Faculty",
      desc: "Learn from world-class professors and practitioners",
    },
    {
      icon: TrendingUp,
      label: "Career Growth",
      desc: "Advance to C-suite and leadership roles",
    },
  ];

  return (
    <Section>
      {/* Heading */}
      <div className="mb-8 text-center sm:mb-12">
        <span className="mb-3 inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 sm:mb-4">
          Course Overview
        </span>
        <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          About {course.title}
        </h2>
        <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-xl">
          {course.description}
        </p>
      </div>

      {/* Highlights grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-500">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-gray-900">{item.label}</h3>
            <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
