import { notFound } from "next/navigation";
import { Header } from "@/components/ui/header-3";
import { Footer } from "@/components/footer";
import DoctorateHero from "@/components/programs/doctorate/doctorate-hero";
import DoctorateOverview from "@/components/programs/doctorate/doctorate-overview";
import DoctorateSpecializations from "@/components/programs/doctorate/doctorate-specializations";
import DoctorateEligibilityFees from "@/components/programs/doctorate/doctorate-fees";
import DoctoratePhDvsDBA from "@/components/programs/doctorate/doctorate-phd-vs-dba";
import DoctorateFAQ from "@/components/programs/doctorate/doctorate-faq";
import NewCta from "@/components/new-cta";
import Eligibility from "@/components/programs/doctorate/doctorate-eligibility";

async function getDoctorateBySlug(slug: string) {
  const { doctorates } = await import("@/data/doctorates");
  return doctorates.find((item) => item.slug === slug) || null;
}

export default async function DoctorateCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await getDoctorateBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="bg-white">
        <DoctorateHero course={course} />

        <div id="program-overview">
          <DoctorateOverview course={course} />
          <DoctorateSpecializations />
        </div>

        {/* Pass the course object safely */}
        <DoctorateEligibilityFees course={course} />

        <div id="phd-vs-dba">
          <DoctoratePhDvsDBA />
        </div>
        <Eligibility />
        <div id="faqs">
          <DoctorateFAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}
