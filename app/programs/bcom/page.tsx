import { Footer } from "@/components/footer";
import BComCareers from "@/components/programs/bcom/bcom-careers";
import BComCTA from "@/components/programs/bcom/bcom-cta";
import BComCurriculum from "@/components/programs/bcom/bcom-curriculum";
import BComEligibilityFees from "@/components/programs/bcom/bcom-eligibility-fees";
import BComFAQ from "@/components/programs/bcom/bcom-faq";
import BComHero from "@/components/programs/bcom/bcom-hero";
import BComOverview from "@/components/programs/bcom/bcom-overview";
import UniversitySection from "@/components/programs/bcom/university-section";
import { Header } from "@/components/ui/header-3";

export default function BComPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <BComHero />
        <BComOverview />
        <UniversitySection />
        <BComCurriculum />
        <BComEligibilityFees />
        <BComCareers />
        <BComFAQ />
        <BComCTA />
      </main>
      <Footer />
    </>
  );
}
