import React from "react";

const curriculum = [
  {
    title: "Principles of Management",
    description:
      "Understand foundational management theories, planning techniques, decision-making, and organizational design.",
  },
  {
    title: "Business Economics",
    description:
      "Analyze market structures, demand forecasting, pricing strategies, and macroeconomic factors impacting corporate operations.",
  },
  {
    title: "Marketing Management",
    description:
      "Explore consumer behavior, product positioning, digital marketing channels, and strategic brand management.",
  },
  {
    title: "Human Resource Management",
    description:
      "Learn talent acquisition, performance appraisal, employee engagement, compensation design, and labor laws.",
  },
  {
    title: "Organizational Behavior",
    description:
      "Study group dynamics, workplace psychology, corporate culture, motivation models, and conflict resolution tactics.",
  },
  {
    title: "Business Analytics",
    description:
      "Master data-driven decision-making, statistical modeling, operational forecasting, and executive reporting metrics.",
  },
  {
    title: "Financial Management",
    description:
      "Learn corporate capital budgeting, working capital optimization, asset funding choices, and financial planning frameworks.",
  },
  {
    title: "Strategic Management",
    description:
      "Develop competitive landscapes, SWOT analyses, long-term portfolio strategies, and enterprise execution plans.",
  },
];

export default function BbaCurriculum() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-3 inline-flex rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-red-500">
            BBA Program
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
            Program <span className="text-red-500">Curriculum</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Explore the core subjects covered throughout your online BBA
            journey, meticulously engineered to build robust leadership and
            business fundamentals.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {curriculum.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-red-50 transition group-hover:bg-red-100" />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-sm font-black text-red-500 transition group-hover:bg-red-500 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-black leading-snug text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-red-500 transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
