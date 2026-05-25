"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Offer {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  tag?: string;
  href: string;
}

interface OfferCardProps {
  offer: Offer;
  index: number;
}

const OfferCard = ({ offer, index }: OfferCardProps) => {
  const rank = index + 1;

  return (
    <Link
      href={offer.href || "#"}
      className="relative flex h-[180px] w-[140px] flex-shrink-0 snap-start flex-col select-none sm:h-[250px] sm:w-[165px] lg:h-[260px] lg:w-[195px] isolate"
    >
      <span
        className="absolute bottom-[-2px] sm:bottom-[4px] left-[8px] sm:left-[6px] lg:left-[10px] z-10 font-sans font-black leading-none select-none text-[65px] sm:text-[85px] lg:text-[100px] text-black"
        style={{
          WebkitTextStroke: "2px #ffffff",
          WebkitTextFillColor: "#111111",
          letterSpacing: "-0.06em",
        }}
      >
        {rank}
      </span>

      <div className="relative ml-[20px] sm:ml-[26px] h-full w-full shadow-2xl">
        <div className="absolute inset-0 overflow-hidden rounded-md bg-[#181818]">
          {offer.imageSrc ? (
            <img
              src={offer.imageSrc}
              alt={offer.imageAlt || "Offer Poster"}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full bg-neutral-800" />
          )}
        </div>

        {offer.tag && (
          <div className="absolute left-2 top-2 z-20 rounded bg-[#e50914] px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-white shadow-md">
            {offer.tag}
          </div>
        )}
      </div>
    </Link>
  );
};

export const OfferCarousel = ({
  offers = [],
  className,
}: {
  offers: Offer[];
  className?: string;
}) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const current = scrollContainerRef.current;
    const firstCard = current.querySelector("a");
    if (!firstCard) return;

    const cardWidth = firstCard.clientWidth;
    const gap = 16;

    const scrollAmount = (cardWidth + gap) * 2;

    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (!offers || offers.length === 0) {
    return null;
  }

  return (
    // ✅ overflow-hidden added — arrow bahar nahi jayega
    <div
      className={cn(
        "group/carousel relative w-full overflow-hidden",
        className,
      )}
    >
      {/* Left Arrow */}
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute left-0 top-0 bottom-0 z-40 hidden w-10 items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover/carousel:opacity-100 md:flex"
      >
        <ChevronLeft className="h-8 w-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-transform hover:scale-125" />
      </button>

      {/* Scroller — pl-10 pr-10 so arrows overlap cards edge */}
      <div
        ref={scrollContainerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pt-4 pb-6 pl-10 pr-10 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {offers.map((offer, index) => (
          <OfferCard key={offer.id || index} offer={offer} index={index} />
        ))}
      </div>

      {/* ✅ Right Arrow — right-0, same as left arrow style */}
      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute right-0 top-0 bottom-0 z-40 hidden w-10 items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover/carousel:opacity-100 md:flex"
      >
        <ChevronRight className="h-8 w-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-transform hover:scale-125" />
      </button>
    </div>
  );
};
