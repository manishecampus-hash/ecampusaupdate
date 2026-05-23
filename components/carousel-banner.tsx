"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import HeroStatsSection from "./ui/hero-cta-section";

const slides = [
  {
    id: 1,
    desktop: "/newbnr1.svg",
    mobile: "/mobile11.jpeg",
  },
  {
    id: 2,
    desktop: "/second.svg",
    mobile: "/mobile1.png",
  },
  {
    id: 3,
    desktop: "/third.svg",
    mobile: "/mobile2.png",
  },
  {
    id: 4,
    desktop: "/fourthimg.svg",
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
  }, [isAutoPlay]);

  return (
    <>
      <style>{`
        /* =========================
           FULL WIDTH HERO BANNER
        ========================== */

        .cb-wrap {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          aspect-ratio: 16 / 9;
          border-radius: 0;
        }

        /* TABLET & DESKTOP */
        @media (min-width: 768px) {
          .cb-wrap {
            aspect-ratio: 16 / 4;
            border-radius: 0;
            border-bottom: 2px solid #e5e7eb;
          }
        }

        /* ULTRA WIDE SCREEN */
        @media (min-width: 1600px) {
          .cb-wrap {
            aspect-ratio: 21 / 5;
          }
        }

        .cb-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.7s ease-in-out;
        }

        .cb-slide.active {
          opacity: 1;
          z-index: 1;
        }

        /* MOBILE / DESKTOP IMAGE TOGGLE */
        .img-mobile {
          display: block;
        }

        .img-desktop {
          display: none;
        }

        @media (min-width: 768px) {
          .img-mobile {
            display: none;
          }

          .img-desktop {
            display: block;
          }
        }

        /* IMAGE STYLE */
        .banner-img {
          object-fit: cover;
        }

        /* ARROWS */
        .cb-arrow {
          display: none;
        }

        @media (min-width: 768px) {
          .cb-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 20;
            width: 42px;
            height: 42px;
            border-radius: 9999px;
            border: none;
            background: rgba(0, 0, 0, 0.45);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.25s ease;
          }

          .cb-arrow:hover {
            background: rgba(0, 0, 0, 0.65);
          }
        }

        .cb-arrow.left {
          left: 20px;
        }

        .cb-arrow.right {
          right: 20px;
        }

        /* DOTS */
        .cb-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          padding: 14px 0;
        }

        .cb-dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          background: #d1d5db;
          transition: all 0.3s ease;
          padding: 0;
        }

        .cb-dot.active {
          width: 24px;
          background: #2563eb;
        }
      `}</style>

      {/* FULL WIDTH CONTAINER */}
      <div className="w-full overflow-hidden">
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
              {/* MOBILE IMAGE */}
              <div className="img-mobile relative w-full h-full">
                <Image
                  src={s.mobile}
                  alt={`Mobile Banner ${s.id}`}
                  fill
                  priority={i === 0}
                  className="banner-img"
                />
              </div>

              {/* DESKTOP IMAGE */}
              <div className="img-desktop relative w-full h-full">
                <Image
                  src={s.desktop}
                  alt={`Desktop Banner ${s.id}`}
                  fill
                  priority={i === 0}
                  className="banner-img"
                />
              </div>
            </div>
          ))}

          {/* LEFT ARROW */}
          <button className="cb-arrow left" onClick={prevSlide}>
            <ChevronLeft size={20} />
          </button>

          {/* RIGHT ARROW */}
          <button className="cb-arrow right" onClick={nextSlide}>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* DOTS */}
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
