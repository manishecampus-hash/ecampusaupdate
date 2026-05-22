"use client";

import React from "react";

interface TestimonialCard {
  id: string;
  name: string;
  program: string;
  university: string;
  image: string;
  quote: string;
}

const testimonials: TestimonialCard[] = [
  {
    id: "1",
    name: "Priya Mehta",
    program: "Online BBA",
    university: "Amity University Online",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&auto=format&fit=crop&q=80",
    quote:
      "The Online BBA program helped me build a strong foundation in business management, leadership strategies, and marketing. Recorded lectures and flexible classes made it easy to study while preparing for management roles.",
  },
  {
    id: "2",
    name: "Rohan Agarwal",
    program: "Online BBA",
    university: "Manipal University Online",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&auto=format&fit=crop&q=80",
    quote:
      "I wanted a business administration degree that would let me continue working part-time. The online format gave me flexibility, and the curriculum was incredibly practical for operations, marketing, and strategic growth career paths.",
  },
  {
    id: "3",
    name: "Ananya Sharma",
    program: "Online BBA",
    university: "GLA University Online",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=700&auto=format&fit=crop&q=80",
    quote:
      "The best part was how simple the learning platform was. I could attend live strategy workshops, revise recorded corporate finance classes, and submit assignments without disrupting my business schedule.",
  },
  {
    id: "4",
    name: "Karan Malhotra",
    program: "Online BBA",
    university: "NMIMS Online",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&auto=format&fit=crop&q=80",
    quote:
      "The program helped me understand human resources, market analytics, and corporate governance in a structured way. Faculty mentorship and case studies made the online learning experience smooth and directly applicable to corporate life.",
  },
];

// Changed to a Named Export to eliminate default routing conflicts
export function TestimonialsSection() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5">
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
            BBA Student <span className="text-red-500">Testimonials</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Hear from learners who completed flexible online management programs
            from top universities.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_6px_18px_rgba(15,23,42,0.14)] transition-all duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_12px_28px_rgba(15,23,42,0.18)]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-44 w-full rounded-xl object-cover"
                loading="lazy"
              />

              <p className="mt-4 line-clamp-4 text-[13px] font-medium leading-6 text-slate-700">
                {testimonial.quote}
              </p>

              <button
                type="button"
                className="mt-3 text-[13px] font-extrabold text-slate-950 underline decoration-2 underline-offset-2 transition hover:text-red-500"
              >
                Read More
              </button>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <h3 className="text-sm font-extrabold text-slate-950">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-[12px] font-semibold text-slate-600">
                  {testimonial.program}{" "}
                  <span className="text-slate-900">•</span>{" "}
                  {testimonial.university}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
