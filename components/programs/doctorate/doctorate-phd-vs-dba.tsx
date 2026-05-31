"use client";

import { GraduationCap, BriefcaseBusiness, Handshake } from "lucide-react";

export default function DoctoratePhDvsDBA() {
  const tableData = [
    {
      aspect: "Focus",
      phd: "Theoretical and academic research",
      dba: "Practical, real-world business solutions",
    },
    {
      aspect: "Ideal For",
      phd: "Academicians and researchers",
      dba: "Working professionals and business leaders",
    },
    {
      aspect: "Research Type",
      phd: "Original theoretical research",
      dba: "Applied business research and case studies",
    },
    {
      aspect: "Career Outcome",
      phd: "Professors, researchers, scholars",
      dba: "Executive roles, consultants, entrepreneurs",
    },
    {
      aspect: "Duration",
      phd: "4–6 years (mostly full-time)",
      dba: "2–3 years (often online/flexible)",
    },
    {
      aspect: "Work Experience",
      phd: "Not required",
      dba: "Typically 5+ years required",
    },
  ];

  return (
    <section className="bg-white border-y border-slate-100 py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/60 px-3 py-1 text-xs font-bold text-slate-900 uppercase tracking-wider">
          <Handshake className="h-3.5 w-3.5 text-red-500" />
          Comparison
        </span>

        <h2 className="mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl md:text-4xl">
          PhD vs DBA: Understanding the{" "}
          <span className="text-red-500">Difference</span>
        </h2>
      </div>

      <div className="mx-2 sm:mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <table className="w-full text-center text-[10px] sm:text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-900 border-b border-slate-200 align-middle">
              <th className="w-[18%] px-2 sm:px-6 py-4 font-bold uppercase tracking-wider text-[9px] sm:text-sm text-center align-middle">
                Aspect
              </th>

              <th className="w-[32%] px-2 sm:px-6 py-4 font-bold uppercase tracking-wider align-middle">
                <div className="flex flex-row items-center justify-center gap-1 sm:gap-2 text-center">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 shrink-0" />
                  <span className="text-[8px] sm:text-xs md:text-sm leading-tight break-words">
                    PhD in Management
                  </span>
                </div>
              </th>

              <th className="w-[50%] px-2 sm:px-6 py-4 font-bold uppercase tracking-wider align-middle">
                <div className="flex flex-row items-center justify-center gap-1 sm:gap-2 text-center">
                  <BriefcaseBusiness className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 shrink-0" />
                  <span className="text-[8px] sm:text-xs md:text-sm leading-tight break-words">
                    Doctor of Business Administration
                  </span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {tableData.map((row, idx) => (
              <tr key={idx} className="transition hover:bg-slate-50">
                <td className="px-2 sm:px-6 py-4 font-bold text-slate-900 text-center align-middle">
                  {row.aspect}
                </td>

                <td className="px-2 sm:px-6 py-4 text-slate-600 leading-tight text-center align-middle">
                  {row.phd}
                </td>

                <td className="px-2 sm:px-6 py-4 text-slate-600 leading-tight text-center align-middle">
                  {row.dba}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
