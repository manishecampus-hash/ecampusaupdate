import { notFound } from "next/navigation";
import { Header } from "@/components/ui/header-3";
import { Footer } from "@/components/footer";
import OfflineHero from "@/components/programs/offline-certification/offline-hero";
import OfflineOverview from "@/components/programs/offline-certification/offline-overview";
import OfflineSpecializations from "@/components/programs/offline-certification/offline-specializations";
import OfflineEligibilityFees from "@/components/programs/offline-certification/offline-eligibility-fees";
import OfflineComparison from "@/components/programs/offline-certification/offline-comparison";
import OfflineFAQ from "@/components/programs/offline-certification/offline-faq";

async function getOfflineCourseBySlug(slug: string) {
  // ---- TEMPORARY: Remove when backend is ready ----
  const { offlineCertifications } =
    await import("@/data/offline-certification");
  const course = offlineCertifications.find((item) => item.slug === slug);
  return course ?? null;
  // --------------------------------------------------

  // ---- PRODUCTION: Uncomment when backend is ready ----
  // try {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_API_URL}/api/offline-certifications/${slug}`,
  //     { next: { revalidate: 3600 } }
  //   );
  //   if (!res.ok) return null;
  //   return res.json();
  // } catch {
  //   return null;
  // }
  // -----------------------------------------------------
}

export default async function OfflineCourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch course — null safe
  const course = await getOfflineCourseBySlug(slug);

  // 404 if not found
  if (!course) notFound();

  // course is guaranteed non-null below this line
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* 1. Hero */}
        <OfflineHero course={course} />

        {/* 2. Course Overview */}
        <div id="program-overview">
          <OfflineOverview course={course} />
          <OfflineSpecializations />
        </div>

        {/* 3. Eligibility & Fees */}
        <div id="eligibility-fees">
          <OfflineEligibilityFees course={course} />
        </div>

        {/* 4. Online vs Offline Comparison */}
        <div id="comparison">
          <OfflineComparison />
        </div>

        {/* 5. FAQs */}
        <div id="faqs">
          <OfflineFAQ />
        </div>
      </main>

      <Footer />
    </>
  );
}
