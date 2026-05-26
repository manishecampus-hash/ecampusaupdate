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

const OfferCard = ({ offer, index }: { offer: Offer; index: number }) => {
  const rank = index + 1;
  return (
    <Link
      href={offer.href || "#"}
      className="relative flex h-[180px] w-[140px] flex-shrink-0 sm:h-[250px] sm:w-[165px] lg:h-[260px] lg:w-[195px]"
    >
      <span
        className="absolute bottom-0 left-2 z-10 text-[65px] sm:text-[85px] lg:text-[100px] font-black"
        style={{ WebkitTextStroke: "2px white", WebkitTextFillColor: "#111" }}
      >
        {rank}
      </span>
      <div className="ml-6 h-full w-full overflow-hidden rounded-md shadow-md">
        <img
          src={offer.imageSrc}
          alt={offer.imageAlt}
          className="h-full w-full object-cover"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const placeholder = target.nextElementSibling as HTMLElement | null;
            if (placeholder) placeholder.style.display = "flex";
          }}
        />
        <div
          className="hidden h-full w-full items-center justify-center bg-gray-100 text-gray-400 text-xs text-center p-2"
          aria-hidden="true"
        >
          <span>No Image</span>
        </div>
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
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = React.useState(false);
  const [showRight, setShowRight] = React.useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = scrollRef.current?.clientWidth ?? 400;
    el.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 500);
  };

  React.useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [offers]);

  // Updated to gray (bg-[#4a4a4a])
  const buttonClasses =
    "absolute top-1/2 z-40 -translate-y-1/2 hidden md:flex h-24 w-8 items-center justify-center bg-[#4a4a4a] text-white hover:bg-[#666] transition-colors";

  return (
    <div className={cn("relative w-full", className)}>
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className={cn(buttonClasses, "left-0 rounded-r-lg")}
          placeholder="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto mx-10 py-6 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {offers.map((offer, index) => (
          <OfferCard key={offer.id} offer={offer} index={index} />
        ))}
      </div>

      {showRight && (
        <button
          onClick={() => scroll("right")}
          className={cn(buttonClasses, "right-0 rounded-l-lg")}
          placeholder="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
