export default function CertificationSubHeader() {
  return (
    <div className="sticky top-0 z-50 bg-white border-b shadow-sm px-6 py-4">
      {/* Sticky navigation */}
      <nav className="flex gap-6 text-sm font-medium overflow-x-auto">
        <a href="#program-overview">Overview</a>
        <a href="#key-highlights">Highlights</a>
        <a href="#subject-syllabus">Curriculum</a>
        <a href="#eligibility-duration">Eligibility</a>
        <a href="#career-scope">Career</a>
        <a href="#faqs">FAQs</a>
      </nav>
    </div>
  );
}
