import React from "react";

const curriculum = [
  {
    title: "Calculus & Linear Algebra",
    description:
      "Master differential and integral calculus, vector spaces, matrix transformations, and systems of linear equations essential for advanced scientific modeling.",
  },
  {
    title: "Probability & Statistics",
    description:
      "Explore discrete and continuous probability distributions, estimation theory, hypothesis testing, regression analysis, and data-driven inference models.",
  },
  {
    title: "Programming & Data Structures",
    description:
      "Develop problem-solving skills using structured programming paradigms. Implement memory management, linked lists, stacks, queues, and tree architectures.",
  },
  {
    title: "Database Management Systems",
    description:
      "Design relational databases using normalization principles. Author structured query language (SQL) commands, index parameters, and transact ACID compliance.",
  },
  {
    title: "Classical & Quantum Mechanics",
    description:
      "Analyze Newtonian physics systems, rotational dynamics, wave mechanics, and fundamental structural introductions to state wave functions.",
  },
  {
    title: "Discrete Mathematics",
    description:
      "Examine set theory, mathematical logic, combinatorics, graph algorithms, and boolean algebra foundational to computing logic networks.",
  },
  {
    title: "Research Methodology",
    description:
      "Learn systematic scientific inquiry, quantitative research frameworks, experimental control design, and technical data interpretation standards.",
  },
  {
    title: "Data Analytics & Modelling",
    description:
      "Utilize computational packages to visualize complex datasets, build numerical simulations, and evaluate experimental scientific variations.",
  },
];

export default function BscCurriculum() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-3 inline-flex rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-red-500">
            B.Sc Program
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
            Program <span className="text-red-500">Curriculum</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Explore the core analytical, mathematical, and laboratory
            disciplines covered throughout your three-year online scientific
            degree track.
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
