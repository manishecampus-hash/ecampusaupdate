export type Offer = {
  id: number;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  brandLogoSrc: string;
  duration: string;
  fee: string;
  mode: "Online" | "Offline" | "Hybrid";
  icon: "bar-chart" | "graduation-cap" | "book-open" | "bot" | "cpu";
  href: string;
};

export const popularCourses: Offer[] = [
  {
    id: 1,
    imageSrc: "/courses/iim-kozhikode-.jpg",
    imageAlt: "Business analysis and data visualization",
    tag: "Popular",
    title: "IIM K HR Analytics",
    brandLogoSrc: "",
    duration: "6 Months",
    fee: "₹1,20,000",
    mode: "Online",
    icon: "bar-chart",
    href: "/programs/iim-k-hr-analytics",
  },
  {
    id: 2,
    imageSrc: "/courses/op.webp",
    imageAlt: "1 Year MBA - O.P Jindal",
    tag: "Trending",
    title: "1 Year MBA - O.P Jindal",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
    duration: "12 Months",
    fee: "₹1,80,000",
    mode: "Online",
    icon: "graduation-cap",
    href: "/programs/op-jindal-mba",
  },
  {
    id: 3,
    imageSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1970&q=80",
    imageAlt: "Online DBA - Rushford",
    tag: "Advanced",
    title: "Online DBA - Rushford",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&w=400&h=400&q=80",
    duration: "36 Months",
    fee: "₹4,50,000",
    mode: "Online",
    icon: "book-open",
    href: "/programs/rushford-dba",
  },
  {
    id: 4,
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "AI and machine learning",
    tag: "New",
    title: "GGU Gen Ai",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    duration: "8 Months",
    fee: "₹95,000",
    mode: "Online",
    icon: "bot",
    href: "/programs/ggu-gen-ai",
  },
  {
    id: 5,
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "AI and machine learning",
    tag: "New",
    title: "IIM K AI Professional",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    duration: "10 Months",
    fee: "₹1,50,000",
    mode: "Online",
    icon: "cpu",
    href: "/programs/iimk-ai",
  },
  {
    id: 6,
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "AI and machine learning",
    tag: "New",
    title: "IIM K AI Professional",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    duration: "10 Months",
    fee: "₹1,50,000",
    mode: "Online",
    icon: "cpu",
    href: "/programs/iimk-ai",
  },
  {
    id: 7,
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "AI and machine learning",
    tag: "New",
    title: "IIM K AI Professional",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    duration: "10 Months",
    fee: "₹1,50,000",
    mode: "Online",
    icon: "cpu",
    href: "/programs/iimk-ai",
  },
  {
    id: 8,
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "AI and machine learning",
    tag: "New",
    title: "IIM K AI Professional",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    duration: "10 Months",
    fee: "₹1,50,000",
    mode: "Online",
    icon: "cpu",
    href: "/programs/iimk-ai",
  },
  {
    id: 9,
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "AI and machine learning",
    tag: "New",
    title: "IIM K AI Professional",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    duration: "10 Months",
    fee: "₹1,50,000",
    mode: "Online",
    icon: "cpu",
    href: "/programs/iimk-ai",
  },
  {
    id: 10,
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "AI and machine learning",
    tag: "New",
    title: "IIM K AI Professional",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    duration: "10 Months",
    fee: "₹1,50,000",
    mode: "Online",
    icon: "cpu",
    href: "/programs/iimk-ai",
  },
];
