import { BarChart3, Users, Award, Globe } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "150K+",
      label: "Active Students",
      description: "Learning and growing worldwide",
    },
    {
      icon: Globe,
      value: "180+",
      label: "Countries Reached",
      description: "Global community of learners",
    },
    {
      icon: Award,
      value: "95%",
      label: "Satisfaction Rate",
      description: "Student-rated quality education",
    },
    {
      icon: BarChart3,
      value: "$89K",
      label: "Avg Salary Increase",
      description: "Post-graduation outcomes",
    },
  ];

  return (
    <section className="bg-[#05070d] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_22px_60px_rgba(232,25,44,0.18)]"
              >
                <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 ring-1 ring-red-100">
                  <Icon className="h-8 w-8 text-red-600" />
                </div>

                <div className="mb-1 text-4xl font-bold text-gray-900">
                  {stat.value}
                </div>

                <div className="mb-1 text-lg font-semibold text-gray-900">
                  {stat.label}
                </div>

                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
