"use client";

import Link from "next/link";
import { DIcons } from "dicons";
import Image from "next/image";

const navigation = {
  categories: [
    {
      id: "programs",
      name: "Programs",
      sections: [
        {
          id: "online DBA Program",
          name: "Online DBA Program",
          items: [
            { name: "Birchwood University", href: "/degrees/bachelors" },
            { name: "EIMT", href: "/degrees/masters" },
            {
              name: "Swiss School of Business and Management",
              href: "/degrees/phd",
            },
            {
              name: "Ecole de Commerce International (ESGCI)",
              href: "/degrees/phd",
            },
            { name: "Rushford Business School", href: "/degrees/phd" },
            { name: "Edgewood", href: "/degrees/phd" },
            { name: "Golden Gate University", href: "/degrees/phd" },
          ],
        },
        {
          id: "Certificate Program",
          name: "Certificate Program",
          items: [
            {
              name: "IIM K - HR Management & Analytics",
              href: "/certifications",
            },
            {
              name: "IIM K-AI Professional Certificate Program",
              href: "/executive",
            },
          ],
        },
        {
          id: "Online UG Courses",
          name: "Online UG Courses",
          items: [
            { name: "Online BBA", href: "/micro-credentials" },
            { name: "Online BCA", href: "/mini-courses" },
            { name: "Online BSC", href: "/corporate-training" },
            { name: "Online BA", href: "/corporate-training" },
            { name: "Online BCOM", href: "/corporate-training" },
          ],
        },
        {
          id: "Online PG Courses",
          name: "Online PG Courses",
          items: [
            { name: "MBA", href: "/subjects/business" },
            { name: "MCA", href: "/subjects/technology" },
            { name: "MA", href: "/subjects/data-science" },
            { name: "MSC", href: "/subjects/data-science" },
            { name: "MCOM", href: "/subjects/data-science" },
          ],
        },
        {
          id: "Popular Courses",
          name: "Popular Courses",
          items: [
            { name: "IIM K HR Analytics", href: "/about" },
            { name: "1 Year MBA - O.P Jindal", href: "/blog" },
            { name: "Online DBA - Rushford", href: "/careers" },
            { name: "GGU Gen Ai", href: "/careers" },
            { name: "IIM K AI Professional", href: "/careers" },
          ],
        },
        {
          id: "support",
          name: "Support",
          items: [
            { name: "Help Center", href: "/help" },
            { name: "Contact", href: "/contact" },
            { name: "FAQ", href: "/faq" },
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
    <footer className="border-t border-dotted border-slate-800 mx-auto w-full bg-[#191e27]">
      {/* Brand & Intro */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-10 pb-0 md:items-start">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="eCampus"
            width={120}
            height={40}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </Link>

        <p className="max-w-3xl text-center text-sm leading-6 text-slate-300 md:text-left ">
          eCampus is a next-generation AI-enabled higher education platform
          designed to empower learners through UGC-recognized online and global
          hybrid degree programs offered by top universities across the world.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-dotted border-slate-800"></div>

        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.id}
              className="grid grid-cols-2 gap-6 leading-6 sm:grid-cols-3 md:flex md:flex-row md:justify-between"
            >
              {category.sections.map((section) => (
                <div key={section.id}>
                  <h4 className="mb-4 text-sm font-semibold text-white">
                    {section.name}
                  </h4>

                  <ul role="list" className="flex flex-col space-y-2">
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <Link
                          href={item.href}
                          className="text-sm text-white/70 transition-colors duration-200 hover:text-red-500"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="border-b border-dotted border-slate-800"></div>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-y-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            aria-label="Email"
            href="mailto:contact@elevate.com"
            className={Underline}
          >
            <DIcons.Mail strokeWidth={1.5} className="h-5 w-5" />
          </Link>

          <Link
            aria-label="Twitter"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={Underline}
          >
            <DIcons.X className="h-5 w-5" />
          </Link>

          <Link
            aria-label="Instagram"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={Underline}
          >
            <DIcons.Instagram className="h-5 w-5" />
          </Link>

          <Link
            aria-label="LinkedIn"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={Underline}
          >
            <DIcons.LinkedIn className="h-5 w-5" />
          </Link>

          <Link
            aria-label="Facebook"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={Underline}
          >
            <DIcons.Facebook className="h-5 w-5" />
          </Link>

          <Link
            aria-label="YouTube"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={Underline}
          >
            <DIcons.YouTube className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="bg-[#1b1e20] px-4 py-8">
        <div className="mx-auto flex flex-col items-center justify-between gap-4 text-center text-[12px] md:max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-slate-300">
            <Link
              href="/terms"
              className="transition-colors hover:text-red-500"
            >
              Terms & Condition
            </Link>

            <Link
              href="/privacy"
              className="transition-colors hover:text-red-500"
            >
              Privacy Policy
            </Link>

            <Link
              href="/cancellation-refund"
              className="transition-colors hover:text-red-500"
            >
              Cancellation & Refund
            </Link>

            <span>ISO 27001:2013</span>
            <span>ISO 9001:2015</span>
          </div>

          <p className="text-slate-400">©2026 | All rights reserved.</p>

          <p className="text-slate-400">
            Built with <span className="text-red-500">♥</span> in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
