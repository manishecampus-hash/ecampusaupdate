"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { HeroStatsSection } from "./ui/hero-cta-section";

const slides = [
  {
    id: 1,
    desktop: "/banner11.png",
    mobile: "/mobile11.jpeg",
  },
  {
    id: 2,
    desktop: "/banner1.png",
    mobile: "/mobile1.png",
  },
  {
    id: 3,
    desktop: "/banner2.png",
    mobile: "/mobile2.png",
  },
  {
    id: 4,
    desktop: "/banner3.png",
    mobile: "/mobile3.png",
  },
];

export function CarouselBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, currentSlide]);

  return (
    <>
      <style>{`
        .cb-wrap {
          position: relative;
          width: 100%;
          /* MOBILE SIZE (Like College Vidhya) */
          aspect-ratio: 2 / 1;
          overflow: hidden;
         background: #ffffff;
          border-radius: 12px; /* Added slight rounding like the screenshot */
        }

        /* DESKTOP SIZE */
        @media (min-width: 768px) {
          .cb-wrap {
            aspect-ratio: 16 / 4;
            border-radius: 0px;
            border-radius: 5px;
          border-bottom: 2px solid #e5e7eb;
          }
        }

        .cb-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.7s ease;
        }
        .cb-slide.active {
          opacity: 1;
        }

        /* Responsive Image Toggle Classes */
        .img-mobile { display: block; }
        .img-desktop { display: none; }

        @media (min-width: 768px) {
          .img-mobile { display: none; }
          .img-desktop { display: block; }
        }

        .cb-arrow {
  display: none; /* Hide on mobile */
}

@media (min-width: 768px) {
  .cb-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.4);
    color: white;
    display: flex; /* Show on desktop */
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
        .cb-arrow.left  { left: 10px; }
        .cb-arrow.right { right: 10px; }

        .cb-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding: 15px 0;
        }
        .cb-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: #d1d5db;
          transition: all 0.3s ease;
          padding: 0;
        }
        .cb-dot.active {
          background: #2563eb; /* Blue color like College Vidhya dots */
          width: 20px; /* Optional: elongated active dot like modern UIs */
          border-radius: 4px;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-4">
        <div
          className="cb-wrap"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {slides.map((s, i) => (
            <div
              key={s.id}
              className={`cb-slide ${i === currentSlide ? "active" : ""}`}
            >
              {/* Mobile Image - Shown only on small screens */}
              <div className="img-mobile relative w-full h-full">
                <Image
                  src={s.mobile}
                  alt={`Mobile Banner ${s.id}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>

              {/* Desktop Image - Shown only on large screens */}
              <div className="img-desktop relative w-full h-full">
                <Image
                  src={s.desktop}
                  alt={`Desktop Banner ${s.id}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}

          <button className="cb-arrow left" onClick={prevSlide}>
            <ChevronLeft size={18} />
          </button>
          <button className="cb-arrow right" onClick={nextSlide}>
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="cb-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`cb-dot ${i === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
      <HeroStatsSection />
    </>
  );
}
