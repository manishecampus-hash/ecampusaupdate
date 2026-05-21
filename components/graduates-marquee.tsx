"use client";

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
    testimonial:
      "This degree completely transformed my career. The flexible schedule allowed me to work while studying, and the job support was instrumental in landing my dream role at Google. The Career Services team was exceptional from start to finish.",
  },
  {
    initials: "MJ",
    avatarColor: "#f97316",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Marcus Johnson",
    role: "B.Tech, Jun'25",
    rating: 5,
    testimonial:
      "As a career changer, I was nervous about upskilling. The program broke everything down perfectly, and mentorship from industry experts made all the difference. I secured a senior engineering role at Microsoft within 3 months of graduating.",
  },
  {
    initials: "PS",
    avatarColor: "#dc2626",
    avatarSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Priyanshu Mishra",
    role: "MBA, Jul'25",
    rating: 5,
    testimonial:
      "My name is Priyanshu Mishra. I am a first year student at Amity University. I am truly grateful to the Career Services team at Amity University for their constant support and guidance in helping me secure my internship as an HR Intern with Inorg.",
  },
  {
    initials: "JW",
    avatarColor: "#64748b",
    avatarSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&h=160&q=80",
    name: "James Wilson",
    role: "MBA, May'25",
    rating: 4,
    testimonial:
      "The MBA program balanced theory with practice beautifully. Studying while working was manageable because of the flexible schedule. My team has noticed a real difference in my leadership approach since graduating.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div style={{ display: "flex", gap: 2, marginTop: 8 }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        style={{
          color: star <= rating ? "#facc15" : "rgba(148, 163, 184, 0.35)",
          fontSize: 14,
          lineHeight: 1,
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
      background: "#111827",
      position: "relative",
      flexShrink: 0,
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: "0 18px 50px rgba(0, 0, 0, 0.32)",
    }}
  >
    {graduate.avatarSrc ? (
      <img
        src={graduate.avatarSrc}
        alt={graduate.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
          display: "block",
        }}
      />
    ) : (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: graduate.avatarColor,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          fontWeight: 800,
        }}
      >
        {graduate.initials}
      </div>
    )}

    <div
      style={{
        position: "absolute",
        inset: "auto 0 0",
        padding: 14,
        background:
          "linear-gradient(to top, rgba(5, 7, 13, 0.9), rgba(5, 7, 13, 0))",
        color: "#fff",
      }}
    >
      <p style={{ margin: 0, fontSize: 14, fontWeight: 800 }}>
        {graduate.name}
      </p>
      <p style={{ margin: "2px 0 0", fontSize: 12, opacity: 0.85 }}>
        {graduate.role}
      </p>
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
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {[...items, ...items, ...items].map((graduate, index) => (
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
  const firstColumn = [graduates[0], graduates[1], graduates[2]].filter(
    Boolean,
  );
  const secondColumn = [graduates[2], graduates[3], graduates[0]].filter(
    Boolean,
  );
  const thirdColumn = [graduates[1], graduates[3], graduates[2]].filter(
    Boolean,
  );

  return (
    <section
      style={{
        padding: "80px 16px",
        background:
          "radial-gradient(circle at top left, rgba(232, 25, 44, 0.18), transparent 34%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.12), transparent 36%), #05070d",
        color: "#f8fafc",
        overflow: "hidden",
      }}
    >
      <style>
        {`
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

          .graduate-loop-up:hover,
          .graduate-loop-down:hover {
            animation-play-state: paused;
          }

          @media (max-width: 900px) {
            .graduates-grid {
              grid-template-columns: 1fr !important;
            }

            .graduates-images {
              height: 520px !important;
            }
          }
        `}
      </style>

      <div
        className="graduates-grid"
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-block",
              background: "rgba(239, 68, 68, 0.1)",
              color: "#f87171",
              padding: "5px 16px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 700,
              marginBottom: 18,
              border: "1px solid rgba(248, 113, 113, 0.18)",
            }}
          >
            Success Stories
          </span>

          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 58px)",
              lineHeight: 1.08,
              fontWeight: 900,
              color: "#ffffff",
              margin: "0 0 18px",
              letterSpacing: 0,
            }}
          >
            What Our Graduates{" "}
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                color: "#ff3b4f",
              }}
            >
              Say
            </span>
          </h2>

          <p
            style={{
              fontSize: 17,
              color: "#cbd5e1",
              maxWidth: 560,
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            Join thousands of successful graduates who have transformed their
            careers and achieved their goals.
          </p>

          <div
            style={{
              marginTop: 34,
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              paddingTop: 26,
              display: "grid",
              gap: 18,
            }}
          >
            {graduates.map((graduate) => (
              <div key={graduate.name}>
                <p
                  style={{
                    margin: 0,
                    fontSize: 15,
                    color: "#ffffff",
                    fontWeight: 800,
                  }}
                >
                  {graduate.name}
                </p>
                <p
                  style={{
                    margin: "3px 0 0",
                    fontSize: 13,
                    color: "#94a3b8",
                  }}
                >
                  {graduate.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="graduates-images"
          style={{
            position: "relative",
            height: 590,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "0 0 auto",
              height: 90,
              zIndex: 2,
              background:
                "linear-gradient(to bottom, #05070d, rgba(5, 7, 13, 0))",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: "auto 0 0",
              height: 90,
              zIndex: 2,
              background: "linear-gradient(to top, #05070d, rgba(5, 7, 13, 0))",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 10,
              height: "100%",
            }}
          >
            <ImageColumn items={firstColumn} />
            <ImageColumn items={secondColumn} reverse offset={42} />
            <ImageColumn items={thirdColumn} offset={18} />
          </div>
        </div>
      </div>
    </section>
  );
}
