"use client";

import {
  FileBadge,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  FileText,
  GraduationCap,
  Handshake,
  HelpCircle,
  Landmark,
  Layers3,
  RotateCcw,
  Shield,
  Trophy,
  Users,
} from "lucide-react";

export const categories = [
  {
    id: "iim",
    label: "IIM Certification Courses",
    Icon: FileBadge,
    iconBg: "bg-red-50",
    iconBorder: "border-red-100",
    iconColor: "text-red-500",
    courses: [
      {
        tag: "Certification",
        name: "IIM K – HR Management & Analytics",
        duration: "8 Months",
      },
      {
        tag: "Certification",
        name: "IIM K – AI Professional Certificate",
        duration: "6 Months",
      },
      {
        tag: "Certification",
        name: "IIM K – Digital Marketing & Strategy",
        duration: "5 Months",
      },
      {
        tag: "Certification",
        name: "IIM B – Finance for Non-Finance Managers",
        duration: "4 Months",
      },
    ],
  },
  {
    id: "dba",
    label: "Online Doctorate (DBA)",
    Icon: GraduationCap,
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-100",
    iconColor: "text-blue-500",
    courses: [
      {
        tag: "Doctorate",
        name: "Birchwood University",
        duration: "3 Years",
        image: "/doctorate/birchwood-logo.webp",
      },
      {
        tag: "Doctorate",
        name: "EIMT",
        duration: "3 Years",
        image: "/doctorate/eimt_logo.webp",
      },
      {
        tag: "Doctorate",
        name: "Swiss School of Business and Management",
        duration: "3 Years",
        image: "/doctorate/Logo 56x56_SSBM.svg",
      },
      {
        tag: "Doctorate",
        name: "Ecole de Commerce International (ESGCI)",
        duration: "3 Years",
        image: "/doctorate/ESGCI.svg",
      },
      {
        tag: "Doctorate",
        name: "Rushford Business School",
        duration: "3 Years",
        image: "/doctorate/Rushford.svg",
      },
      {
        tag: "Doctorate",
        name: "Edgewood",
        duration: "3 Years",
        image: "/doctorate/EdgewoodUnisvgFINAL.svg",
      },
    ],
  },
  {
    id: "ug",
    label: "Online UG Courses",
    Icon: BookOpenCheck,
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-100",
    iconColor: "text-emerald-500",
    courses: [
      {
        tag: "Undergraduate",
        name: "B.Com – Accounting & Finance",
        duration: "3 Years",
        href: "/programs/bcom",
        image: "/header-courses/accounting.png",
      },
      {
        tag: "Undergraduate",
        name: "BBA – Business Administration",
        duration: "3 Years",
        href: "/programs/bba",
        image: "/header-courses/businessman.png",
      },
      {
        tag: "Undergraduate",
        name: "B.Sc Computer Science",
        duration: "3 Years",
        href: "/programs/bsc-computer-science",
        image: "/header-courses/data-science.png",
      },
      {
        tag: "Undergraduate",
        name: "BA – Psychology & Sociology",
        duration: "3 Years",
        href: "/programs/ba-psychology-sociology",
        image: "/header-courses/intelligence.png",
      },
    ],
  },
  {
    id: "pg",
    label: "Online PG Courses",
    Icon: Layers3,
    iconBg: "bg-violet-50",
    iconBorder: "border-violet-100",
    iconColor: "text-violet-500",
    courses: [
      {
        tag: "Postgraduate",
        name: "MBA – General Management",
        duration: "2 Years",
        href: "/programs/mba",
      },
      {
        tag: "Postgraduate",
        name: "M.Com – Financial Management",
        duration: "2 Years",
        href: "/programs/mcom",
      },
      {
        tag: "Postgraduate",
        name: "MCA – Computer Applications",
        duration: "2 Years",
        href: "/programs/mca",
      },
      {
        tag: "Postgraduate",
        name: "MA – HR & Organisational Psychology",
        duration: "2 Years",
        href: "/programs/ma-hr-organisational-psychology",
      },
    ],
  },
  {
    id: "offline",
    label: "Offline Certification Courses",
    Icon: Building2,
    iconBg: "bg-orange-50",
    iconBorder: "border-orange-100",
    iconColor: "text-orange-500",
    courses: [
      {
        tag: "Certification",
        name: "Data Science & Machine Learning",
        duration: "6 Months",
      },
      {
        tag: "Certification",
        name: "Full Stack Web Development",
        duration: "4 Months",
      },
      {
        tag: "Certification",
        name: "UI/UX Design Bootcamp",
        duration: "3 Months",
      },
    ],
  },
  {
    id: "exec",
    label: "1 Year Executive Program",
    Icon: BriefcaseBusiness,
    iconBg: "bg-pink-50",
    iconBorder: "border-pink-100",
    iconColor: "text-pink-500",
    courses: [
      {
        tag: "Executive",
        name: "Executive MBA – Business Leadership",
        duration: "12 Months",
      },
      {
        tag: "Executive",
        name: "Executive PG – Product Management",
        duration: "11 Months",
      },
      {
        tag: "Executive",
        name: "Executive PG – Data Science & AI",
        duration: "12 Months",
      },
    ],
  },
  {
    id: "uni",
    label: "Universities",
    Icon: Landmark,
    iconBg: "bg-indigo-50",
    iconBorder: "border-indigo-100",
    iconColor: "text-indigo-500",
    courses: [
      {
        tag: "University",
        name: "Jain University – Online Programs",
        duration: "Multiple",
      },
      {
        tag: "University",
        name: "Amity University – Distance Learning",
        duration: "Multiple",
      },
      {
        tag: "University",
        name: "Manipal University – UG & PG Programs",
        duration: "Multiple",
      },
    ],
  },
];

export const companyLinks = [
  {
    title: "About Us",
    href: "#",
    description: "Learn more about our story and mission",
    Icon: Users,
    iconBg: "bg-sky-50",
    iconBorder: "border-sky-100",
    iconColor: "text-sky-500",
  },
  {
    title: "Success Stories",
    href: "#",
    description: "See how learners transformed their careers",
    Icon: Trophy,
    iconBg: "bg-amber-50",
    iconBorder: "border-amber-100",
    iconColor: "text-amber-500",
  },
  {
    title: "Partnerships",
    href: "#",
    description: "Collaborate with top universities and companies",
    Icon: Handshake,
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-100",
    iconColor: "text-emerald-500",
  },
];

export const companyLinks2 = [
  {
    title: "Terms of Service",
    href: "#",
    Icon: FileText,
    iconColor: "text-blue-500",
  },
  {
    title: "Privacy Policy",
    href: "#",
    Icon: Shield,
    iconColor: "text-emerald-500",
  },
  {
    title: "Refund Policy",
    href: "#",
    Icon: RotateCcw,
    iconColor: "text-orange-500",
  },
  {
    title: "Help Center",
    href: "#",
    Icon: HelpCircle,
    iconColor: "text-violet-500",
  },
];
