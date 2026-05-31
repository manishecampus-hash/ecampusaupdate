import { Section } from "@/components/ui/section";
import { BookOpen, Users, TrendingUp, MapPin } from "lucide-react";

type CourseData = {
  title: string;
  description: string;
};

export default function OfflineOverview({ course }: { course: CourseData }) {
  const highlights = [
    {
      icon: BookOpen,
      label: "Hands-On Learning",
      desc: "Practical classroom sessions with real projects",
    },
    {
      icon: MapPin,
      label: "Offline Classes",
      desc: "Face-to-face learning at our centers",
    },
    {
      icon: Users,
      label: "Expert Trainers",
      desc: "Learn from industry professionals",
    },
    {
      icon: TrendingUp,
      label: "Career Growth",
      desc: "Job-ready skills for the modern industry",
    },
  ];

  return (
    <Section>
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
