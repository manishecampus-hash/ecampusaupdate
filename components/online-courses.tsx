"use client";

import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  Handshake,
} from "lucide-react";

const courseTabs = [
  { id: "free", label: "Free Courses" },
  { id: "all", label: "All Courses" },
  { id: "pg", label: "PG Courses" },
  { id: "ug", label: "UG Courses" },
  { id: "specializations", label: "Specializations" },
  { id: "certifications", label: "Certifications" },
];

const programsData = [
  {
    id: "free-ai-basics",
    tab: "free",
    ribbon: "100% FREE",
    title: "Introduction to AI & Prompt Engineering Masterclass",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=900&auto=format&fit=crop&q=80",
    duration: "4 hrs of learning",
    learners: "45.1k+ learners",
    slug: "#",
    isFree: true,
  },
  {
    id: "free-mgmt-foundations",
    tab: "free",
    ribbon: "FREE Course",
    title: "Foundations of Digital Marketing & Business Analytics",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
    duration: "6 hrs of learning",
    learners: "99.2k+ learners",
    slug: "#",
    isFree: true,
  },
  {
    id: "mba-healthcare",
    tab: "pg",
    ribbon: "Trending",
    title: "MBA in Hospital and Healthcare Management",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop&q=80",
    duration: "24 months",
    learners: "12.4k+ learners",
    slug: "#",
    isFree: false,
  },
  {
    id: "bca-fintech-ai",
    tab: "ug",
    ribbon: "Trending",
    title: "BCA with specialization in Financial Technology and AI",
    image:
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=900&auto=format&fit=crop&q=80",
    duration: "36 months",
    learners: "8.7k+ learners",
    slug: "#",
    isFree: false,
  },
  {
    id: "mca-fintech-ai",
    tab: "pg",
    ribbon: "Trending",
    title: "MCA with specialization in Financial Technology and AI",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=900&auto=format&fit=crop&q=80",
    duration: "24 months",
    learners: "6.3k+ learners",
    slug: "#",
    isFree: false,
  },
  {
    id: "mba-dual",
    tab: "pg",
    ribbon: "QS Ranked",
    title: "MBA with Dual Specialization",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&auto=format&fit=crop&q=80",
    duration: "24 months",
    learners: "21.5k+ learners",
    slug: "#",
    isFree: false,
  },
];

function useScrollState(ref) {
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, [ref]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref, update]);

  useEffect(() => {
    setTimeout(update, 80);
  });

  return { canLeft, canRight };
}

const arrowStyle = (visible) => ({
  background: "transparent",
  border: "none",
  padding: 0,
  cursor: visible ? "pointer" : "default",
  color: "#ff3b4f",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: visible ? 1 : 0,
  pointerEvents: visible ? "auto" : "none",
  transition: "opacity 0.2s",
  flexShrink: 0,
  width: 36,
  height: 36,
});

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState("free");
  const carouselRef = useRef(null);
  const tabsRef = useRef(null);

  const filteredPrograms = useMemo(
    () =>
      programsData.filter((p) => activeTab === "all" || p.tab === activeTab),
    [activeTab],
  );

  const { canLeft: carLeft, canRight: carRight } = useScrollState(carouselRef);
  const { canLeft: tabLeft, canRight: tabRight } = useScrollState(tabsRef);

  const scrollCarousel = (dir) =>
    carouselRef.current?.scrollBy({ left: dir * 290, behavior: "smooth" });
  const scrollTabs = (dir) =>
    tabsRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });

  return (
    <section
      style={{
        padding: "80px 0",
        background:
          "radial-gradient(circle at top left, rgba(232,25,44,0.18), transparent 34%), radial-gradient(circle at bottom right, rgba(59,130,246,0.12), transparent 36%), #05070d",
        color: "#f8fafc",
        overflow: "hidden",
      }}
    >
      <style>{`
        .__ps::-webkit-scrollbar { display: none; }
        @media (min-width: 768px) { .__tabArrow { display: none !important; } }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#f8fafc",
              border: "1px solid rgba(226,232,240,0.6)",
              borderRadius: "9999px",
              padding: "4px 12px",
              fontSize: "11px",
              fontWeight: 700,
              color: "#0f172a",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "10px",
            }}
          >
            <Handshake size={14} color="#ef4444" />
            Courses
          </span>
          <h2
            style={{
              fontSize: "clamp(22px,4vw,36px)",
              fontWeight: 800,
              color: "#fff",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Get started with a free{" "}
            <span style={{ color: "#ff3b4f" }}>course</span>
          </h2>
        </div>

        {/* ── Tabs Row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            marginBottom: "28px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <button
            className="__tabArrow"
            onClick={() => scrollTabs(-1)}
            style={arrowStyle(tabLeft)}
          >
            <ChevronLeft size={16} />
          </button>

          <div
            ref={tabsRef}
            className="__ps"
            style={{
              flex: 1,
              display: "flex",
              gap: "28px",
              overflowX: "auto",
              scrollbarWidth: "none",
              padding: "0 2px",
            }}
          >
            {courseTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0 0 12px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: isActive ? "#ff3b4f" : "#94a3b8",
                    whiteSpace: "nowrap",
                    borderBottom: isActive
                      ? "2px solid #ff3b4f"
                      : "2px solid transparent",
                    marginBottom: "-1px",
                    transition: "color 0.2s",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <button
            className="__tabArrow"
            onClick={() => scrollTabs(1)}
            style={arrowStyle(tabRight)}
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* ── Carousel Row ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Left arrow */}
          <button
            onClick={() => scrollCarousel(-1)}
            style={arrowStyle(carLeft)}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Card track */}
          <div
            ref={carouselRef}
            className="__ps"
            style={{
              flex: 1,
              display: "flex",
              gap: "16px",
              overflowX: "auto",
              scrollbarWidth: "none",
              scrollSnapType: "x mandatory",
              padding: "4px 2px 12px",
            }}
          >
            {filteredPrograms.length === 0 ? (
              <div
                style={{
                  flex: "0 0 100%",
                  borderRadius: "12px",
                  border: "1px dashed rgba(255,255,255,0.1)",
                  padding: "48px",
                  textAlign: "center",
                  color: "#94a3b8",
                  fontSize: "14px",
                }}
              >
                No programs found.
              </div>
            ) : (
              filteredPrograms.map((program) => (
                <article
                  key={program.id}
                  style={{
                    flex: "0 0 270px",
                    scrollSnapAlign: "start",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    background: "#ffffff",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.25s, transform 0.25s",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    position: "relative",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(0,0,0,0.14)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      height: "170px",
                      overflow: "hidden",
                      background: "#f1f5f9",
                    }}
                  >
                    <img
                      src={program.image}
                      alt={program.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      loading="lazy"
                    />
                    {/* Ribbon */}
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "0",
                        background: "#ff3b4f",
                        padding: "3px 10px 3px 12px",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#fff",
                        borderRadius: "0 4px 4px 0",
                        letterSpacing: "0.04em",
                        boxShadow: "0 2px 6px rgba(255,59,79,0.3)",
                      }}
                    >
                      {program.ribbon}
                    </div>
                  </div>

                  {/* Body */}
                  <div
                    style={{
                      padding: "16px 16px 0",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Title */}
                    <p
                      style={{
                        margin: "0 0 14px",
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#0f172a",
                        lineHeight: "1.45",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minHeight: "65px",
                      }}
                    >
                      {program.title}
                    </p>

                    {/* Meta: learners + duration */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                        marginBottom: "16px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "13px",
                          color: "#475569",
                        }}
                      >
                        <Users size={14} color="#64748b" strokeWidth={1.8} />
                        <span>{program.learners}</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "13px",
                          color: "#475569",
                        }}
                      >
                        <Clock size={14} color="#64748b" strokeWidth={1.8} />
                        <span>{program.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div
                    style={{
                      padding: "0 16px 16px",
                      display: "flex",
                      gap: "10px",
                      borderTop: "1px solid #f1f5f9",
                      paddingTop: "14px",
                    }}
                  >
                    <a
                      href={program.slug}
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "6px",
                        border: "1.5px solid #cbd5e1",
                        background: "#fff",
                        padding: "9px 10px",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#0f172a",
                        textDecoration: "none",
                        transition: "border-color 0.2s, color 0.2s",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#94a3b8";
                        e.currentTarget.style.color = "#0f172a";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#cbd5e1";
                      }}
                    >
                      View Program
                    </a>
                    <a
                      href={program.slug}
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "6px",
                        background: "#ff3b4f",
                        border: "1.5px solid #ff3b4f",
                        padding: "9px 10px",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#fff",
                        textDecoration: "none",
                        transition: "background 0.2s",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#e02035")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "#ff3b4f")
                      }
                    >
                      {program.isFree ? "Enroll Now" : "Get Brochure"}
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scrollCarousel(1)}
            style={arrowStyle(carRight)}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
