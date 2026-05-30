import { Section } from "@/components/ui/section";
import { XCircle, ShieldCheck } from "lucide-react";

export default function DoctoratePhDvsDBA() {
  return (
    <Section>
      <div className="mb-8 text-center sm:mb-12">
        <span className="mb-3 inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 sm:mb-4">
          Comparison
        </span>
        <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          PhD vs DBA
        </h2>
        <p className="mx-auto max-w-2xl text-base text-gray-600">
          Understand the difference and choose the right path for your career
        </p>
      </div>

      <div className="grid overflow-hidden rounded-3xl border border-slate-200 md:grid-cols-2">
        {/* PhD — left gray */}
        <div className="bg-slate-50 p-8">
          <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-slate-400">
            <XCircle className="h-5 w-5" />
            PhD (Doctor of Philosophy)
          </h3>
          <ul className="space-y-3 text-base text-gray-600">
            <li>✕ Academic/research focused</li>
            <li>✕ Suited for teaching careers</li>
            <li>✕ Longer duration (4-6 years)</li>
            <li>✕ Limited industry application</li>
            <li>✕ Full-time commitment required</li>
            <li>✕ Theory-heavy curriculum</li>
          </ul>
        </div>

        {/* DBA — right red */}
        <div className="bg-red-500 p-8 text-white">
          <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">
            <ShieldCheck className="h-5 w-5" />
            DBA (Doctor of Business Administration)
          </h3>
          <ul className="space-y-3 text-base font-semibold">
            <li>✓ Industry & business focused</li>
            <li>✓ Suited for executive careers</li>
            <li>✓ Shorter duration (3 Years)</li>
            <li>✓ Direct industry application</li>
            <li>✓ Flexible online learning</li>
            <li>✓ Practical case-study curriculum</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
