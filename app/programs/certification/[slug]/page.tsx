import { Header } from "@/components/ui/header-3";
import { Footer } from "@/components/footer";

import CertificationHero from "@/components/programs/certification/certification-hero";
import CertificationOverview from "@/components/programs/certification/certification-overview";
import CertificationHighlights from "@/components/programs/certification/certification-highlights";
import CertificationUniversity from "@/components/programs/certification/certification-university";
import CertificationCurriculum from "@/components/programs/certification/certification-curriculum";
import CertificationEligibility from "@/components/programs/certification/certification-eligibility";
import CertificationCareer from "@/components/programs/certification/certification-career";
import CertificationFAQ from "@/components/programs/certification/certification-faq";
import CertificationSubHeader from "@/components/programs/certification/certification-sub-header";

export default function CertificationPage() {
  return (
    <>
      <Header />

      <CertificationSubHeader />

      <main className="bg-white">
        {/* Hero */}
        <CertificationHero />

        {/* Overview */}
        <div id="program-overview">
          <CertificationOverview />
        </div>

        {/* Highlights */}
        <div id="key-highlights">
          <CertificationHighlights />
        </div>

        {/* University */}
        <div id="university-section">
          <CertificationUniversity />
        </div>

        {/* Curriculum */}
        <div id="subject-syllabus">
          <CertificationCurriculum />
        </div>

        {/* Eligibility */}
        <div id="eligibility-duration">
          <CertificationEligibility />
        </div>

        {/* Career */}
        <div id="career-scope">
          <CertificationCareer />
        </div>

        {/* FAQ */}
        <div id="faqs">
          <CertificationFAQ />
        </div>
      </main>

      <Footer />
    </>
  );
}
