"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const universities = [
  {
    name: "Amity University Online",
    title: "Online B.Com From Amity University Online",
    rating: "4.7/5",
    approvals: "UGC-DEB, AICTE, NIRF, WES, QS World University Rankings, DEC",
    fee: "₹ 1,15,000",
    logo: "/universities/amity.png",
  },
  {
    name: "GLA University Online",
    title: "Online B.Com From GLA University Online",
    rating: "4.4/5",
    approvals: "UGC, AICTE, AIU, NAAC A+, NIRF, QS World University Rankings",
    fee: "₹ 71,300",
    logo: "/universities/gla.png",
  },
  {
    name: "NMIMS Online",
    title: "Online B.Com From NMIMS Online",
    rating: "4.7/5",
    approvals: "NAAC A++",
    fee: "₹ 1,08,000",
    logo: "/universities/nmims.png",
  },
  {
    name: "Manipal University Online",
    title: "Online B.Com From Manipal University Online",
    rating: "4.7/5",
    approvals:
      "UGC, AICTE, NIRF, WES, NAAC A++, NBA, QS World University Rankings",
    fee: "₹ 89,000",
    logo: "/universities/manipal.png",
  },
  {
    name: "Shoolini University Online",
    title: "Online B.Com From Shoolini University Online",
    rating: "4.7/5",
    approvals: "UGC, NIRF, NAAC, ISO",
    fee: "₹ 75,000",
    logo: "/universities/shoolini.png",
  },
  {
    name: "Sikkim Manipal University Online",
    title: "Online B.Com From Sikkim Manipal University Online",
    rating: "4.8/5",
    approvals: "UGC-DEB, NIRF, NAAC A+",
    fee: "₹ 75,000",
    logo: "/universities/smu.png",
  },
];

function InfoRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-[11px] leading-5 text-slate-600">
      <Star
        size={14}
        className="mt-0.5 shrink-0 text-red-500"
        fill="currentColor"
        strokeWidth={1.8}
      />
      <span>{children}</span>
    </div>
  );
}

export default function UniversitySection() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-5 text-lg font-extrabold text-slate-950 sm:text-xl">
          <span className="text-red-500">Online B.Com</span> programs from top
          Universities
        </h2>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((university) => (
            <article
              key={university.name}
              className="flex min-h-[330px] flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_6px_18px_rgba(15,23,42,0.14)] transition-all duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_12px_28px_rgba(15,23,42,0.18)]"
            >
              <div className="flex h-16 items-center justify-center">
                <Image
                  src={university.logo}
                  alt={university.name}
                  width={170}
                  height={64}
                  className="max-h-14 w-auto object-contain"
                />
              </div>

              <div className="mt-3 rounded-full bg-red-50 px-3 py-2 text-center text-xs font-bold text-red-500">
                {university.name}
              </div>

              <div className="mt-3 inline-flex w-fit items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2 py-1 text-[11px] font-semibold text-red-500">
                <span className="text-yellow-400">★</span>
                Top Rated
              </div>

              <h3 className="mt-4 min-h-[38px] text-[13px] font-extrabold leading-5 text-slate-950">
                {university.title}
              </h3>

              <div className="mt-4 flex flex-1 flex-col gap-2">
                <InfoRow>{university.rating}</InfoRow>
                <InfoRow>{university.approvals}</InfoRow>
                <InfoRow>{university.fee}</InfoRow>
              </div>

              <button className="mt-5 h-9 rounded-md bg-red-500 text-xs font-bold text-white transition-colors hover:bg-red-600">
                Compare
              </button>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="rounded-md bg-red-50 px-4 py-2 text-xs font-bold text-red-500 transition-colors hover:bg-red-100">
            View 2 More →
          </button>
        </div>
      </div>
    </section>
  );
}
