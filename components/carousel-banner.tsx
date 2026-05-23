"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import HeroStatsSection from "./ui/hero-cta-section";

const slides = [
  {
    id: 1,
    desktop: "banner/banner1.svg",
    mobile: "/mobile11.jpeg",
  },
  {
    id: 2,
    desktop: "banner/banner2.svg",
    mobile: "/mobile1.png",
  },
  {
    id: 3,
    desktop: "banner/banner3.svg",
    mobile: "/mobile2.png",
  },
  {
    id: 4,
    desktop: "banner/banner4.svg",
    mobile: "banner/mobile4.png",
  },
];

// Thresholds
const SWIPE_THRESHOLD = 50; // px horizontal needed to trigger slide change
const LOCK_AXIS_THRESHOLD = 10; // px to decide which axis we're scrolling

export function CarouselBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Touch tracking refs (no re-render needed)
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchDeltaX = useRef<number>(0);
  const touchDeltaY = useRef<number>(0);
  const isHorizontalSwipe = useRef<boolean | null>(null); // null = undecided

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  // ─── Autoplay ────────────────────────────────────────────────
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  // ─── Touch Handlers ──────────────────────────────────────────

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchDeltaX.current = 0;
    touchDeltaY.current = 0;
    isHorizontalSwipe.current = null; // reset axis lock
    setIsAutoPlay(false);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    touchDeltaX.current = dx;
    touchDeltaY.current = dy;

    // Axis lock: decide once per gesture which direction user intends
    if (isHorizontalSwipe.current === null) {
      if (
        Math.abs(dx) > LOCK_AXIS_THRESHOLD ||
        Math.abs(dy) > LOCK_AXIS_THRESHOLD
      ) {
        isHorizontalSwipe.current = Math.abs(dx) > Math.abs(dy);
      }
    }

    // Only prevent default (block page scroll) when clearly swiping horizontally
    if (isHorizontalSwipe.current === true) {
      e.preventDefault(); // stops the page from scrolling while swiping banner
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    // Only act if gesture was horizontal
    if (isHorizontalSwipe.current === true) {
      if (touchDeltaX.current < -SWIPE_THRESHOLD) {
        nextSlide();
      } else if (touchDeltaX.current > SWIPE_THRESHOLD) {
        prevSlide();
      }
    }
    // Reset
    isHorizontalSwipe.current = null;
  }, [nextSlide, prevSlide]);

  // ─── Attach passive:false listener for touchmove (React synthetic won't work) ─
  // React's onTouchMove is passive by default in newer React versions on some browsers,
  // so we use a ref + addEventListener to get the non-passive version.
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onTouchMove = (e: TouchEvent) => {
      const dx = e.touches[0].clientX - touchStartX.current;
      const dy = e.touches[0].clientY - touchStartY.current;
      touchDeltaX.current = dx;
      touchDeltaY.current = dy;

      if (isHorizontalSwipe.current === null) {
        if (
          Math.abs(dx) > LOCK_AXIS_THRESHOLD ||
          Math.abs(dy) > LOCK_AXIS_THRESHOLD
        ) {
          isHorizontalSwipe.current = Math.abs(dx) > Math.abs(dy);
        }
      }

      if (isHorizontalSwipe.current === true) {
        e.preventDefault(); // this works because listener is non-passive
      }
    };

    // { passive: false } is critical — allows preventDefault()
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, []);

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
          /* Prevent text selection during swipe */
          user-select: none;
          -webkit-user-select: none;
          touch-action: pan-y; /* allow vertical scroll by default; overridden via JS for horizontal */
          
        }

        /* TABLET & DESKTOP */
        @media (min-width: 768px) {
          .cb-wrap {
            aspect-ratio: 16 / 4;
            border-radius: 0;
            border-bottom: 2px solid #e5e7eb;
            touch-action: auto; /* desktop doesn't need special handling */
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
          /* Disable iOS long-press image save popup during swipe */
          -webkit-touch-callout: none;
          pointer-events: none;
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
          ref={wrapRef}
          className="cb-wrap"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          /* onTouchMove handled via addEventListener (passive:false) in useEffect */
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
                  draggable={false}
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
                  draggable={false}
                />
              </div>
            </div>
          ))}

          {/* LEFT ARROW */}
          <button
            className="cb-arrow left"
            onClick={() => {
              prevSlide();
              setIsAutoPlay(false);
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* RIGHT ARROW */}
          <button
            className="cb-arrow right"
            onClick={() => {
              nextSlide();
              setIsAutoPlay(false);
            }}
          >
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
