import Link from "next/link";
import { certifications } from "../../../data/certifications";

export default function CertificationListingPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">All Certifications</h1>

      <div className="grid grid-cols-2 gap-6">
        {certifications.map((course) => (
          <Link
            key={course.slug}
            href={`/programs/certification/${course.slug}`}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <p className="text-sm text-red-500 uppercase">{course.category}</p>

            <h2 className="text-xl font-semibold mt-2">{course.title}</h2>

            <p className="text-gray-500 mt-2">Duration: {course.duration}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
