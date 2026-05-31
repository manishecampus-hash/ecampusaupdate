import { Section } from "@/components/ui/section";
import { CheckCircle2, Clock, IndianRupee } from "lucide-react";

// Fix: all fields optional with fallback
type CourseData = {
  duration?: string;
  fees?: string;
  eligibility?: string;
};

export default function OfflineEligibilityFees({
  course,
}: {
  course: CourseData;
}) {
  return (
    <Section>
      <div className="mb-8 text-center sm:mb-12">
        <span className="mb-3 inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 sm:mb-4">
          Eligibility & Fees
        </span>
        <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          Course Fee & Eligibility
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Duration */}
        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-500">
            <Clock className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Duration</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">
            {course?.duration ?? "N/A"}
          </p>
          <p className="mt-1 text-sm text-gray-500">Full Program</p>
        </div>

        {/* Fees */}
        <div className="rounded-2xl border-2 border-red-500 bg-red-50/30 p-8 shadow-lg text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-500">
            <IndianRupee className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Program Fees</h3>
          <p className="mt-2 text-3xl font-bold text-red-600">
            {course?.fees ?? "N/A"}
          </p>
          <p className="mt-1 text-sm text-gray-500">EMI Options Available</p>
        </div>

        {/* Eligibility */}
        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-500">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Eligibility</h3>
          <p className="mt-2 text-base font-semibold text-green-600">
            {course?.eligibility ?? "N/A"}
          </p>
          <p className="mt-1 text-sm text-gray-500">Minimum Requirement</p>
        </div>
      </div>
    </Section>
  );
}
