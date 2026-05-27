"use client";

import { Handshake } from "lucide-react";
import React from "react";

type GraduateTestimonialT = {
  initials: string;
  avatarColor: string;
  avatarSrc?: string;
  name: string;
  role: string;
  rating: number;
  testimonial: string;
};

const DEFAULT_GRADUATES: GraduateTestimonialT[] = [
  {
    initials: "SC",
    avatarColor: "#ef4444",
    avatarSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Sarah Chen",
    role: "MBA, Jul'25",
    rating: 5,
    testimonial: "Career transformation success story.",
  },
  {
    initials: "MJ",
    avatarColor: "#f97316",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Marcus Johnson",
    role: "B.Tech, Jun'25",
    rating: 5,
    testimonial: "Amazing mentorship and learning support.",
  },
  {
    initials: "PS",
    avatarColor: "#dc2626",
    avatarSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Priyanshu Mishra",
    role: "MBA, Jul'25",
    rating: 5,
    testimonial: "Excellent career services experience.",
  },
  {
    initials: "JW",
    avatarColor: "#64748b",
    avatarSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&h=160&q=80",
    name: "James Wilson",
    role: "MBA, May'25",
    rating: 4,
    testimonial: "Flexible and practical program.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div style={{ display: "flex", gap: 2, marginTop: 8 }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        style={{
          color: star <= rating ? "#facc15" : "rgba(148,163,184,0.35)",
          fontSize: 14,
        }}
      >
        ★
      </span>
    ))}
  </div>
);

const GraduateTile = ({
  graduate,
  tall = false,
}: {
  graduate: GraduateTestimonialT;
  tall?: boolean;
}) => (
  <div
    style={{
      height: tall ? 250 : 180,
      borderRadius: 10,
      overflow: "hidden",
      position: "relative",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 18px 50px rgba(0,0,0,0.32)",
    }}
  >
    <img
      src={graduate.avatarSrc}
      alt={graduate.name}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "top center",
      }}
    />

    <div
      style={{
        position: "absolute",
        inset: "auto 0 0",
        padding: 14,
        background: "linear-gradient(to top, rgba(5,7,13,0.9), rgba(5,7,13,0))",
        color: "#fff",
      }}
    >
      <p style={{ margin: 0, fontSize: 14, fontWeight: 800 }}>
        {graduate.name}
      </p>
      <p style={{ margin: "2px 0 0", fontSize: 12 }}>{graduate.role}</p>
      <StarRating rating={graduate.rating} />
    </div>
  </div>
);

const ImageColumn = ({
  items,
  reverse = false,
  offset = 0,
}: {
  items: GraduateTestimonialT[];
  reverse?: boolean;
  offset?: number;
}) => (
  <div style={{ overflow: "hidden", paddingTop: offset }}>
    <div
      className={reverse ? "graduate-loop-down" : "graduate-loop-up"}
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      {[...items, ...items].map((graduate, index) => (
        <GraduateTile
          key={`${graduate.name}-${index}`}
          graduate={graduate}
          tall={index % 3 === 1}
        />
      ))}
    </div>
  </div>
);

export function GraduatesMarquee({
  graduates = DEFAULT_GRADUATES,
}: {
  graduates?: GraduateTestimonialT[];
}) {
  const firstColumn = [graduates[0], graduates[1], graduates[2]];
  const secondColumn = [graduates[2], graduates[3], graduates[0]];
  const thirdColumn = [graduates[1], graduates[3], graduates[2]];

  return (
    <section
      style={{
        padding: "80px 16px",
        background: "#05070d",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes graduateLoopUp {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }

        @keyframes graduateLoopDown {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }

        .graduate-loop-up {
          animation: graduateLoopUp 22s linear infinite;
        }

        .graduate-loop-down {
          animation: graduateLoopDown 24s linear infinite;
        }
      `}</style>

      {/* Heading */}
      <div className="mx-auto mb-14 max-w-7xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase">
          <Handshake className="h-4 w-4 text-red-500" />
          Success Stories
        </span>

        <h2 className="mt-4 text-4xl font-extrabold text-white">
          What Our Graduates <span className="text-red-500">Say</span>
        </h2>
      </div>

      {/* Centered Images */}
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          position: "relative",
          height: 590,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
            height: "100%",
          }}
        >
          <ImageColumn items={firstColumn} />
          <ImageColumn items={secondColumn} reverse offset={42} />
          <ImageColumn items={thirdColumn} offset={18} />
        </div>
      </div>
    </section>
  );
}
