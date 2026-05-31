import { Section } from "@/components/ui/section";
import { XCircle, ShieldCheck } from "lucide-react";

export default function OfflineComparison() {
  return (
    <Section>
      <div className="mb-8 text-center sm:mb-12">
        <span className="mb-3 inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 sm:mb-4">
          Comparison
        </span>
        <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          Online vs Offline Learning
        </h2>
        <p className="mx-auto max-w-2xl text-base text-gray-600">
          Why offline classroom learning gives you an edge
        </p>
      </div>

      <div className="grid overflow-hidden rounded-3xl border border-slate-200 md:grid-cols-2">
        {/* Online — left gray */}
        <div className="bg-slate-50 p-8">
          <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-slate-400">
            <XCircle className="h-5 w-5" />
            Online Only Courses
          </h3>
          <ul className="space-y-3 text-base text-gray-600">
            <li>✕ No face-to-face interaction</li>
            <li>✕ Self-paced — easy to lose focus</li>
            <li>✕ Limited networking opportunities</li>
            <li>✕ No real-time doubt solving</li>
            <li>✕ Generic course content</li>
            <li>✕ Low industry exposure</li>
          </ul>
        </div>

        {/* Offline — right red */}
        <div className="bg-red-500 p-8 text-white">
          <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">
            <ShieldCheck className="h-5 w-5" />
            eCampus Offline Advantage
          </h3>
          <ul className="space-y-3 text-base font-semibold">
            <li>✓ Direct trainer interaction</li>
            <li>✓ Structured classroom sessions</li>
            <li>✓ Strong peer networking</li>
            <li>✓ Instant doubt resolution</li>
            <li>✓ Industry-tailored curriculum</li>
            <li>✓ Hands-on live projects</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
