import { Footer } from "@/components/footer";
import BscHero from "@/components/programs/bsc/bsc-hero";
import BscOverview from "@/components/programs/bsc/bsc-overview";
import ReadMore from "@/components/programs/bsc/read-more";
import BscCurriculum from "@/components/programs/bsc/bsc-curriculum";
import UniversitySection from "@/components/programs/bsc/university-section";
import { Header } from "@/components/ui/header-3";
import BscFeeSection from "@/components/programs/bsc/bcom-eligibility-fees";
import BscCareers from "@/components/programs/bsc/bsc-careers";
import TestimonialsSection from "@/components/programs/bsc/testimonials-section";
import BscFAQ from "@/components/programs/bsc/bsc-faq";

export default function BscPage() {
  return (
    <>
      <Header />
      <main>
        <BscHero />
        <BscOverview />
        <UniversitySection />

        <ReadMore />
        <BscCurriculum />
        <BscFeeSection />
        <BscCareers />
        <TestimonialsSection />
        <BscFAQ />
      </main>
      <Footer />
    </>
  );
}
