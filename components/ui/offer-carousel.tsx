"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Offer {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  tag: string;
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
      href={offer.href}
      className="relative flex h-[340px] w-[190px] flex-shrink-0 snap-start flex-col select-none sm:h-[400px] sm:w-[240px] lg:w-[calc((100%-48px-25px)/4)] isolate"
    >
      {/* Small, perfectly aligned background numbers */}
      <span
        className="absolute bottom-[-8px] left-[4px] -translate-y-3 z-10 font-sans font-black leading-none text-black select-none text-[90px] sm:text-[120px]"
        style={{
          WebkitTextStroke: "2.5px #fff",
          letterSpacing: "-0.06em",
          color: "black",
        }}
      >
        {rank}
      </span>

      {/* Poster Card Body - Balanced left margin for smaller numbers */}
      <div className="relative ml-[25px] h-full w-full shadow-xl">
        {/* Image Layer */}
        <div className="absolute inset-0 overflow-hidden rounded-md bg-[#181818]">
          <img
            src={offer.imageSrc}
            alt={offer.imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Tag Badge */}
        {offer.tag && (
          <div className="absolute left-3 top-3 z-20 rounded bg-[#e50914] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-md">
            {offer.tag}
          </div>
        )}
      </div>
    </Link>
  );
};

export const OfferCarousel = ({
  offers,
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

  return (
    <div className={cn("group/carousel relative w-full", className)}>
      {/* Left Chevron Arrow */}
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute left-0 top-0 bottom-0 z-40 hidden w-12 items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover/carousel:opacity-100 md:flex"
      >
        <ChevronLeft className="h-10 w-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-transform hover:scale-125" />
      </button>

      {/* Main Scroller Wrapper */}
      <div
        ref={scrollContainerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pt-4 pb-6 pl-4 pr-16 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {offers.map((offer, index) => (
          <OfferCard key={offer.id} offer={offer} index={index} />
        ))}
      </div>

      {/* Right Chevron Arrow */}
      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute right-0 top-0 bottom-0 z-40 hidden w-12 items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover/carousel:opacity-100 md:flex"
      >
        <ChevronRight className="h-10 w-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-transform hover:scale-125" />
      </button>
    </div>
  );
};
