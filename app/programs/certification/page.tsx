import Link from "next/link";
import { certifications } from "@/data/certifications";

export default function CertificationPage() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "30px" }}>All Certifications</h1>

      <div style={{ display: "grid", gap: "20px" }}>
        {certifications.map((course) => (
          <article
            key={course.slug}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ marginTop: 0 }}>{course.title}</h2>
            <p style={{ color: "#666" }}>
              <strong>Duration:</strong> {course.duration}
            </p>

            <Link
              href={`/programs/certification/${course.slug}`}
              style={{
                display: "inline-block",
                marginTop: "10px",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              View Details
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
