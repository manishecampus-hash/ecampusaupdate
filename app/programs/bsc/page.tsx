import { Footer } from "@/components/footer";
import BscHero from "@/components/programs/bsc/bsc-hero";
import BscOverview from "@/components/programs/bsc/bsc-overview";
import ReadMore from "@/components/programs/bsc/read-more";
import BscCurriculum from "@/components/programs/bsc/bsc-curriculum";
import UniversitySection from "@/components/programs/bsc/university-section";
import { Header } from "@/components/ui/header-3";

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
      </main>
      <Footer />
    </>
  );
}
