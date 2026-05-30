import { certifications } from "@/data/certifications";
import { notFound } from "next/navigation";

export default function CertificationPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = certifications.find((item) => item.slug === params.slug);

  if (!course) {
    return <div>Course not found</div>;
    // ya notFound();
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.duration}</p>
      <p>{course.description}</p>
    </div>
  );
}
