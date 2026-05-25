import { Header } from "@/components/ui/header-3";
import { CarouselBanner } from "@/components/carousel-banner";
// import { GlowyWavesHero } from "@/components/glowy-waves-hero";
// import { LearningPathsBanner } from "@/components/learning-paths-banner";
// import { ProgramsSection } from "@/components/programs-section";
import { PopularCoursesSection } from "@/components/popular-courses-section";
import { StatsSection } from "@/components/stats-section";
// import { FeaturesSection } from "@/components/features-section";
import { GraduatesMarquee } from "@/components/graduates-marquee";
// import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { PressSection } from "@/components/press-section";
import AIProgramFinder from "@/components/AIProgramFinder";
import UniversitySection from "@/components/university-section";
import EcampusCta from "@/components/ui/cta";
import FAQ from "@/components/faq";
import OnlineCourseSection from "@/components/online-courses";

export default function Home() {
  return (
    <main className="min-h-screen  pt-20">
      <Header />
      <div className="">
        {" "}
        {/* carousel se upar gap */}
        <CarouselBanner />
      </div>
      {/* <GlowyWavesHero /> */}
      {/* <FeaturesSection /> */}
      <AIProgramFinder />
      {/* <LearningPathsBanner /> */}
      {/* <ProgramsSection /> */}
      <PopularCoursesSection />
      <StatsSection />
      <UniversitySection />
      <GraduatesMarquee />
      {/* <CtaSection /> */}
      <EcampusCta />
      <OnlineCourseSection />
      <PressSection />
      <FAQ />
      <Footer />
    </main>
  );
}
