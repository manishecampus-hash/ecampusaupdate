"use client";

import Link from "next/link";
import { DIcons } from "dicons";
import Image from "next/image";
import { Sparkles, ArrowRight, Phone, MessageCircle } from "lucide-react";

const navigation = {
  // ... (Keep your existing navigation object as is)
  categories: [
    {
      id: "programs",
      name: "Programs",
      sections: [
        {
          id: "dba",
          name: "Online DBA Program",
          items: [
            { name: "Birchwood University", href: "/degrees/bachelors" },
            { name: "EIMT", href: "/degrees/masters" },
            { name: "Swiss School of Business", href: "/degrees/phd" },
            { name: "ESGCI", href: "/degrees/phd" },
            { name: "Rushford Business School", href: "/degrees/phd" },
          ],
        },
        {
          id: "cert",
          name: "Certificate Program",
          items: [
            { name: "IIM K - HR Management", href: "/certifications" },
            { name: "IIM K-AI Professional", href: "/executive" },
          ],
        },
        {
          id: "ug",
          name: "Online UG Courses",
          items: [
            { name: "Online BBA", href: "/micro-credentials" },
            { name: "Online BCA", href: "/mini-courses" },
            { name: "Online BSC", href: "/corporate-training" },
          ],
        },
        {
          id: "pg",
          name: "Online PG Courses",
          items: [
            { name: "MBA", href: "/subjects/business" },
            { name: "MCA", href: "/subjects/technology" },
            { name: "MA", href: "/subjects/data-science" },
          ],
        },
        {
          id: "popular",
          name: "Popular Courses",
          items: [
            { name: "IIM K HR Analytics", href: "/about" },
            { name: "1 Year MBA - O.P Jindal", href: "/blog" },
          ],
        },
        {
          id: "support",
          name: "Support",
          items: [
            { name: "Help Center", href: "/help" },
            { name: "Contact", href: "/contact" },
          ],
        },
      ],
    },
  ],
};

const Underline =
  "hover:-translate-y-1 border border-dotted border-slate-700 rounded-xl p-2.5 transition-all duration-300 hover:border-red-500 hover:bg-red-500/10 hover:text-red-500 text-slate-400";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#191e27] mt-32">
      {/* CTA Section */}
      <div className="absolute left-4 right-4 -top-24 z-20 mx-auto max-w-5xl md:px-6">
        <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-white/10 bg-[#111827] p-6 text-center shadow-[0_25px_50px_rgba(0,0,0,0.3)] sm:p-10 md:flex-row md:text-left md:items-center md:justify-between">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff3b4f] to-[#cc1f31] text-white shadow-lg shadow-red-500/20">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
                Online Degree Programs are valid over{" "}
                <span className="text-red-500">the globe</span>
              </h2>
              <p className="mt-2 text-xs text-slate-400 sm:text-sm md:max-w-md">
                Experience best-in-class learning with an Online
                Degree—delivered by renowned faculty and industry experts.
              </p>
            </div>
          </div>
          <Link
            href="/apply"
            className="flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff3b4f] to-[#e02438] px-6 py-3 text-sm font-bold text-white transition-all hover:shadow-lg hover:shadow-red-500/20 active:scale-95 md:w-auto"
          >
            Find Your Program
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-10 pt-32">
        <div className="flex flex-col md:flex-row w-full justify-between items-start gap-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="eCampus"
              width={150}
              height={50}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </Link>

          {/* Contact Boxes */}
          <div className="flex flex-col sm:flex-row gap-4 mt-3">
            <div className="relative border border-slate-700 rounded-lg px-4 py-2 pt-3">
              <span className="absolute -top-2 left-3 bg-red-600 px-1.5 py-0 text-[9px] uppercase tracking-wider font-bold text-white rounded">
                Toll Free
              </span>
              <p className="text-white text-sm font-semibold tracking-tight">
                1800-121-6201
              </p>
            </div>
            <div className="relative border border-slate-700 rounded-lg px-4 py-2 pt-3">
              <span className="absolute -top-2 left-3 bg-green-600 px-1.5 py-0 text-[9px] uppercase tracking-wider font-bold text-white rounded">
                WhatsApp
              </span>
              <p className="text-white text-sm font-semibold tracking-tight">
                93559 07564
              </p>
            </div>
          </div>
        </div>

        <div className="w-full border-b border-dotted border-slate-800"></div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 w-full">
          {navigation.categories[0].sections.map((section) => (
            <div key={section.id}>
              <h4 className="mb-4 text-sm font-semibold text-white">
                {section.name}
              </h4>
              <ul className="flex flex-col space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 transition-colors hover:text-red-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full border-b border-dotted border-slate-800"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 py-8 px-6">
        {[
          DIcons.X,
          DIcons.Instagram,
          DIcons.LinkedIn,
          DIcons.Facebook,
          DIcons.YouTube,
        ].map((Icon, idx) => (
          <Link key={idx} href="#" className={Underline}>
            <Icon className="h-5 w-5" />
          </Link>
        ))}
      </div>

      <div className="bg-[#1b1e20] px-4 py-8">
        <div className="mx-auto flex flex-col items-center justify-between gap-4 text-center text-[12px] md:max-w-7xl md:flex-row">
          <div className="flex flex-wrap justify-center gap-4 text-slate-300">
            <Link href="/terms" className="hover:text-red-500">
              Terms & Condition
            </Link>
            <Link href="/privacy" className="hover:text-red-500">
              Privacy Policy
            </Link>
          </div>
          <p className="text-slate-400">©2026 | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
