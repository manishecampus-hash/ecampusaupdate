import { Footer } from "@/components/footer";
import BbaCareers from "@/components/programs/bba/bba-careers";
import BbaCurriculum from "@/components/programs/bba/bba-curriculum";
import BbaFeeSection from "@/components/programs/bba/bba-eligibility-fees";
import { BbaFAQ } from "@/components/programs/bba/bba-faq";
import BbaHero from "@/components/programs/bba/bba-hero";
import BbaOverview from "@/components/programs/bba/bba-overview";
import BbaReadMore from "@/components/programs/bba/read-more";
import { TestimonialsSection } from "@/components/programs/bba/testimonials-section";
import UniversitySection from "@/components/programs/bba/university-section";
import { Header } from "@/components/ui/header-3";

export default function BbaPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <BbaHero />
        <BbaOverview />
        <UniversitySection />
        <BbaReadMore />
        <BbaCurriculum />
        <BbaFeeSection />
        <BbaCareers />
        <TestimonialsSection />
        <BbaFAQ />
      </main>
      <Footer />
    </>
  );
}
