// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   ChevronDown,
//   ChevronRight,
//   Clock,
//   Menu,
//   Phone,
//   Users,
//   X,
// } from "lucide-react";
// import { categories, companyLinks, companyLinks2 } from "@/data/header-menu";

// function GrayIcon({
//   Icon,
//   size = 16,
//   active = false,
//   boxClass = "w-9 h-9 rounded-full",
//   iconBg = "bg-red-50",
//   iconBorder = "border-red-100",
//   iconColor = "text-red-500",
// }) {
//   return (
//     <span
//       className={`${boxClass} ${iconBg} ${iconBorder} flex items-center justify-center flex-shrink-0 border transition-all ${
//         active ? "shadow-sm ring-1 ring-current/10" : ""
//       }`}
//     >
//       <Icon
//         size={size}
//         className={iconColor}
//         fill="currentColor"
//         strokeWidth={1.8}
//       />
//     </span>
//   );
// }

// function CourseCard({ tag, name, duration, href = "#", image, onNavigate }) {
//   return (
//     <Link
//       href={href}
//       onClick={onNavigate}
//       className="flex items-center justify-between gap-4 border border-gray-200 rounded-2xl p-4 transition-all duration-150 hover:border-red-400 hover:bg-red-50"
//     >
//       <div className="min-w-0">
//         <p className="text-[10px] font-semibold uppercase tracking-widest mb-1 text-red-500">
//           {tag}
//         </p>

//         <p className="text-sm font-medium text-gray-800 leading-snug mb-2">
//           {name}
//         </p>

//         <span className="flex items-center gap-1 text-[11px] text-gray-500">
//           <Clock
//             size={11}
//             className="text-green-500"
//             fill="currentColor"
//             strokeWidth={1.8}
//           />
//           {duration}
//         </span>
//       </div>

//       {image && (
//         <div className="relative w-24 h-16 flex items-center justify-center flex-shrink-0">
//           <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-100 via-yellow-100 to-blue-100 blur-sm opacity-90" />
//           <div className="relative w-20 h-14 rounded-2xl bg-white/70 border border-white shadow-sm flex items-center justify-center">
//             <img
//               src={image}
//               alt={name}
//               className="max-w-[88%] max-h-[88%] object-contain drop-shadow-md saturate-150 contrast-110"
//             />
//           </div>
//         </div>
//       )}
//     </Link>
//   );
// }

// function ProgramDropdown({ open, onClose }) {
//   const [activeCat, setActiveCat] = useState(categories[0].id);
//   const active = categories.find((c) => c.id === activeCat) || categories[0];

//   if (!open) return null;

//   return (
//     <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[900px] max-w-[calc(100vw-32px)] bg-white rounded-3xl border border-gray-200 shadow-2xl z-50 overflow-hidden">
//       <div className="flex min-h-[360px]">
//         <aside className="w-60 border-r border-gray-100 py-2 flex-shrink-0 bg-gray-50/80">
//           {categories.map((cat) => {
//             const isActive = cat.id === activeCat;

//             return (
//               <button
//                 key={cat.id}
//                 onMouseEnter={() => setActiveCat(cat.id)}
//                 onClick={() => setActiveCat(cat.id)}
//                 className={`w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm transition-all duration-100 border-r-2 ${
//                   isActive
//                     ? "bg-red-50 border-red-500 text-red-600 font-semibold"
//                     : "border-transparent text-gray-600 hover:bg-white hover:text-gray-900"
//                 }`}
//               >
//                 <GrayIcon
//                   Icon={cat.Icon}
//                   size={15}
//                   active={isActive}
//                   boxClass="w-8 h-8 rounded-full"
//                   iconBg={cat.iconBg}
//                   iconBorder={cat.iconBorder}
//                   iconColor={cat.iconColor}
//                 />

//                 <span className="leading-tight flex-1 text-[14px]">
//                   {cat.label}
//                 </span>

//                 <ChevronRight
//                   size={13}
//                   className={isActive ? "text-red-500" : "text-red-300"}
//                 />
//               </button>
//             );
//           })}
//         </aside>

//         <div className="flex-1 p-5">
//           <div className="grid grid-cols-2 gap-3">
//             {active.courses.map((c, i) => (
//               <CourseCard key={i} {...c} onNavigate={onClose} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function CompanyDropdown({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[640px] max-w-[calc(100vw-32px)] bg-white rounded-3xl border border-gray-200 shadow-2xl z-50 overflow-hidden">
//       <div className="p-3">
//         <div className="grid grid-cols-2 gap-3">
//           <div className="space-y-1 border border-gray-100 rounded-2xl p-2 bg-gray-50/60">
//             {companyLinks.map((item) => (
//               <Link
//                 key={item.title}
//                 href={item.href}
//                 onClick={onClose}
//                 className="flex items-center gap-3 p-2 rounded-2xl hover:bg-white transition-colors"
//               >
//                 <div
//                   className={`w-10 h-10 ${
//                     item.iconBg || "bg-red-100"
//                   } ${item.iconBorder || "border-red-200"} border shadow-sm rounded-full flex items-center justify-center flex-shrink-0`}
//                 >
//                   <item.Icon
//                     size={17}
//                     className={item.iconColor || "text-red-500"}
//                     fill="currentColor"
//                     strokeWidth={1.8}
//                   />
//                 </div>

//                 <div>
//                   <p className="text-sm font-medium text-gray-900">
//                     {item.title}
//                   </p>
//                   <p className="text-xs text-gray-500">{item.description}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div className="space-y-0.5 p-2">
//             {companyLinks2.map((item) => (
//               <Link
//                 key={item.title}
//                 href={item.href}
//                 onClick={onClose}
//                 className="flex items-center gap-2 px-2 py-2 rounded-2xl hover:bg-gray-100 transition-colors"
//               >
//                 <item.Icon
//                   size={14}
//                   className={`${item.iconColor || "text-red-500"} flex-shrink-0`}
//                   fill="currentColor"
//                   strokeWidth={1.8}
//                 />
//                 <span className="text-sm font-medium text-gray-700">
//                   {item.title}
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function MobileMenu({ open, onClose, floating }) {
//   const [expanded, setExpanded] = useState(null);
//   const [companyExpanded, setCompanyExpanded] = useState(false);

//   if (!open) return null;

//   return (
//     <div
//       className={`fixed left-4 right-4 bg-white/95 backdrop-blur-lg z-[60] overflow-y-auto max-h-[80vh] rounded-3xl shadow-2xl border border-gray-200 pb-4 md:hidden ${
//         floating ? "top-[84px]" : "top-[96px]"
//       }`}
//     >
//       <div className="px-4 pt-4 space-y-1">
//         <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 px-2 mb-3">
//           Programs
//         </p>

//         {categories.map(
//           ({ id, label, Icon, iconBg, iconBorder, iconColor, courses }) => {
//             const isOpen = expanded === id;

//             return (
//               <div key={id}>
//                 <button
//                   onClick={() => setExpanded(isOpen ? null : id)}
//                   className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-full text-sm transition-colors ${
//                     isOpen ? "bg-red-50" : "hover:bg-gray-50"
//                   }`}
//                 >
//                   <GrayIcon
//                     Icon={Icon}
//                     size={15}
//                     active={isOpen}
//                     boxClass="w-9 h-9 rounded-full"
//                     iconBg={iconBg}
//                     iconBorder={iconBorder}
//                     iconColor={iconColor}
//                   />

//                   <span
//                     className={`font-medium flex-1 text-left ${
//                       isOpen ? "text-red-600" : "text-gray-800"
//                     }`}
//                   >
//                     {label}
//                   </span>

//                   <ChevronDown
//                     size={15}
//                     className={`flex-shrink-0 transition-transform duration-200 ${
//                       isOpen ? "rotate-180 text-red-400" : "text-red-300"
//                     }`}
//                   />
//                 </button>

//                 {isOpen && (
//                   <div className="ml-12 mt-1.5 space-y-2 pb-2">
//                     {courses.map((c, i) => (
//                       <Link
//                         key={i}
//                         href={c.href || "#"}
//                         onClick={onClose}
//                         className="block px-3 py-2.5 rounded-2xl border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all"
//                       >
//                         <p className="text-[10px] font-semibold uppercase tracking-widest mb-0.5 text-red-500">
//                           {c.tag}
//                         </p>

//                         <p className="text-sm font-medium text-gray-800 leading-snug">
//                           {c.name}
//                         </p>

//                         <span className="flex items-center gap-1 text-[11px] text-gray-500 mt-1">
//                           <Clock
//                             size={10}
//                             className="text-green-500"
//                             fill="currentColor"
//                             strokeWidth={1.8}
//                           />
//                           {c.duration}
//                         </span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             );
//           },
//         )}

//         <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 px-2 pt-4 mb-2">
//           Company
//         </p>

//         <button
//           onClick={() => setCompanyExpanded((v) => !v)}
//           className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-full text-sm transition-colors ${
//             companyExpanded ? "bg-red-50" : "hover:bg-gray-50"
//           }`}
//         >
//           <GrayIcon
//             Icon={Users}
//             size={15}
//             active={companyExpanded}
//             boxClass="w-9 h-9 rounded-full"
//             iconBg="bg-sky-50"
//             iconBorder="border-sky-100"
//             iconColor="text-sky-500"
//           />

//           <span className="font-medium flex-1 text-left text-gray-800">
//             Company
//           </span>

//           <ChevronDown
//             size={15}
//             className={`text-red-300 transition-transform duration-200 ${
//               companyExpanded ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         {companyExpanded && (
//           <div className="ml-12 mt-1.5 space-y-1 pb-2">
//             {[...companyLinks, ...companyLinks2].map((item) => (
//               <Link
//                 key={item.title}
//                 href={item.href}
//                 onClick={onClose}
//                 className="flex items-center gap-2 px-3 py-2 rounded-2xl hover:bg-gray-50 transition-colors"
//               >
//                 <item.Icon
//                   size={14}
//                   className={`${item.iconColor || "text-red-500"} flex-shrink-0`}
//                   fill="currentColor"
//                   strokeWidth={1.8}
//                 />
//                 <span className="text-sm text-gray-700">{item.title}</span>
//               </Link>
//             ))}
//           </div>
//         )}

//         <div className="pt-4 border-t border-gray-100 space-y-1">
//           <Link
//             href="/blog"
//             onClick={onClose}
//             className="block px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors font-medium"
//           >
//             Blog
//           </Link>
//         </div>

//         <div className="pt-3 space-y-2">
//           <a
//             href="tel:18001216201"
//             className="flex items-center justify-center gap-2 w-full border border-red-400 text-red-500 text-sm font-medium py-2.5 rounded-full hover:bg-red-50 transition-colors"
//           >
//             <Phone size={14} fill="currentColor" />
//             1800-121-6201
//           </a>

//           <button className="w-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-3 rounded-full transition-colors">
//             Enroll Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function NavContent({
//   activeMenu,
//   toggle,
//   closeAll,
//   mobileOpen,
//   setMobileOpen,
//   setActiveMenu,
//   floating,
// }) {
//   return (
//     <>
//       <Link
//         href="/"
//         onClick={closeAll}
//         className="flex items-center gap-2 hover:opacity-80 select-none flex-shrink-0"
//       >
//         <img src="/logo.png" alt="eCampus" className="h-8 w-auto" />
//       </Link>

//       <div className="hidden md:flex items-center gap-1">
//         <button
//           onClick={(e) => toggle("program", e)}
//           className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//             activeMenu === "program"
//               ? "bg-red-50 text-red-600"
//               : floating
//                 ? "text-gray-700 hover:bg-gray-100"
//                 : "text-gray-700 hover:bg-white/70"
//           }`}
//         >
//           Programs
//           <ChevronDown
//             size={14}
//             className={`transition-transform duration-200 ${
//               activeMenu === "program" ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         <button
//           onClick={(e) => toggle("company", e)}
//           className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//             activeMenu === "company"
//               ? "bg-red-50 text-red-600"
//               : floating
//                 ? "text-gray-700 hover:bg-gray-100"
//                 : "text-gray-700 hover:bg-white/70"
//           }`}
//         >
//           Company
//           <ChevronDown
//             size={14}
//             className={`transition-transform duration-200 ${
//               activeMenu === "company" ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         <Link
//           href="/blog"
//           onClick={closeAll}
//           className={`px-4 py-2 rounded-full text-sm transition-colors font-medium ${
//             floating
//               ? "text-gray-700 hover:bg-gray-100"
//               : "text-gray-700 hover:bg-white/70"
//           }`}
//         >
//           Blog
//         </Link>
//       </div>

//       <div className="hidden md:flex items-center gap-2">
//         <a
//           href="tel:18001216201"
//           className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-300 text-red-500 text-sm font-medium hover:bg-red-50 transition-colors"
//         >
//           <Phone size={14} fill="currentColor" />
//           1800-121-6201
//         </a>

//         <button className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-full transition-colors shadow-sm shadow-red-200">
//           Enroll Now
//         </button>
//       </div>

//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           setMobileOpen((m) => !m);
//           setActiveMenu(null);
//         }}
//         className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full border text-gray-700 transition-colors ${
//           floating
//             ? "border-gray-200 hover:bg-gray-100"
//             : "border-transparent hover:bg-white/70"
//         }`}
//         aria-label="Toggle menu"
//       >
//         {mobileOpen ? <X size={18} /> : <Menu size={18} />}
//       </button>
//     </>
//   );
// }

// export function Header() {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [floating, setFloating] = useState(false);
//   const normalHeaderRef = useRef(null);
//   const floatingHeaderRef = useRef(null);

//   const pathname = usePathname();

//   useEffect(() => {
//     setActiveMenu(null);
//     setMobileOpen(false);
//     document.body.style.overflow = "";
//   }, [pathname]);

//   useEffect(() => {
//     function handleClick(e) {
//       const activeRef = floating ? floatingHeaderRef : normalHeaderRef;

//       if (activeRef.current && !activeRef.current.contains(e.target)) {
//         setActiveMenu(null);
//       }
//     }

//     document.addEventListener("click", handleClick);
//     return () => document.removeEventListener("click", handleClick);
//   }, [floating]);

//   useEffect(() => {
//     function onScroll() {
//       setFloating(window.scrollY > 160);
//     }

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   const toggle = (menu, e) => {
//     e?.stopPropagation();
//     setActiveMenu((prev) => (prev === menu ? null : menu));
//     setMobileOpen(false);
//   };

//   const closeAll = () => {
//     setActiveMenu(null);
//     setMobileOpen(false);
//   };

//   const navProps = {
//     activeMenu,
//     toggle,
//     closeAll,
//     mobileOpen,
//     setMobileOpen,
//     setActiveMenu,
//   };

//   return (
//     <>
//       <style>{`
//         * {
//           cursor: default;
//         }

//         a,
//         button,
//         [role="button"] {
//           cursor: pointer;
//         }

//         input,
//         textarea {
//           cursor: text;
//         }
//       `}</style>

//       <div className="absolute left-0 right-0 top-0 z-40 px-4">
//         <header
//           ref={normalHeaderRef}
//           className="relative mx-auto max-w-7xl bg-transparent shadow-none"
//         >
//           <nav className="h-24 px-0 flex items-center justify-between">
//             <NavContent {...navProps} floating={false} />
//           </nav>

//           <div className="hidden md:block">
//             <ProgramDropdown
//               open={!floating && activeMenu === "program"}
//               onClose={closeAll}
//             />
//             <CompanyDropdown
//               open={!floating && activeMenu === "company"}
//               onClose={closeAll}
//             />
//           </div>
//         </header>
//       </div>

//       <div
//         ref={floatingHeaderRef}
//         className={`fixed left-0 right-0 top-4 z-50 px-4 transition-all duration-300 ease-out ${
//           floating
//             ? "translate-y-0 opacity-100 pointer-events-auto"
//             : "-translate-y-3 opacity-0 pointer-events-none"
//         }`}
//       >
//         <header className="relative mx-auto max-w-7xl rounded-full border border-gray-200 bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md">
//           <nav className="h-16 px-6 flex items-center justify-between">
//             <NavContent {...navProps} floating />
//           </nav>

//           <div className="hidden md:block">
//             <ProgramDropdown
//               open={floating && activeMenu === "program"}
//               onClose={closeAll}
//             />
//             <CompanyDropdown
//               open={floating && activeMenu === "company"}
//               onClose={closeAll}
//             />
//           </div>
//         </header>
//       </div>

//       <MobileMenu open={mobileOpen} onClose={closeAll} floating={floating} />
//     </>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  Clock,
  Menu,
  Phone,
  Users,
  X,
} from "lucide-react";
import { categories, companyLinks, companyLinks2 } from "@/data/header-menu";

function GrayIcon({
  Icon,
  size = 20,
  active = false,
  boxClass = "w-11 h-11 rounded-full",
}) {
  return (
    <span
      className={`${boxClass} bg-[#f3f4f6] border border-gray-200 flex items-center justify-center flex-shrink-0`}
    >
      <Icon size={size} className="text-black" strokeWidth={1.8} />
    </span>
  );
}

function CourseCard({ tag, name, duration, href = "#", image, onNavigate }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="flex items-center justify-between gap-5 border border-gray-100 rounded-2xl p-5 transition-all duration-150 hover:border-red-300 hover:bg-red-50"
    >
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-widest mb-1.5 text-red-500">
          {tag}
        </p>

        <p className="text-base font-medium text-gray-800 leading-snug mb-2.5">
          {name}
        </p>

        <span className="flex items-center gap-1.5 text-[13px] text-gray-500">
          <Clock size={13} className="text-green-500" strokeWidth={1.8} />
          {duration}
        </span>
      </div>

      {image && (
        <div className="relative w-28 h-20 flex items-center justify-center flex-shrink-0">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-100 via-yellow-100 to-blue-100 blur-sm opacity-90" />
          <div className="relative w-24 h-16 rounded-2xl bg-white/70 border border-white shadow-sm flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="max-w-[88%] max-h-[88%] object-contain drop-shadow-md saturate-150 contrast-110"
            />
          </div>
        </div>
      )}
    </Link>
  );
}

function ProgramDropdown({ open, onClose }) {
  const [activeCat, setActiveCat] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeCat) || categories[0];

  if (!open) return null;

  return (
    <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[1040px] max-w-[calc(100vw-32px)] bg-white rounded-3xl border border-gray-200 shadow-2xl z-50 overflow-hidden">
      <div className="flex max-h-[520px]">
        <aside className="w-72 border-r border-gray-100 py-3 flex-shrink-0 bg-gray-50/80 overflow-y-auto max-h-[520px] custom-scroll">
          {categories.map((cat) => {
            const isActive = cat.id === activeCat;

            return (
              <button
                key={cat.id}
                onMouseEnter={() => setActiveCat(cat.id)}
                onClick={() => setActiveCat(cat.id)}
                className={`w-full flex items-center gap-3.5 px-4 py-3 text-left transition-all duration-100 border-r-2 ${
                  isActive
                    ? "bg-red-50 border-red-500 text-red-600 font-semibold"
                    : "border-transparent text-black hover:bg-white hover:text-gray-900"
                }`}
              >
                <GrayIcon
                  Icon={cat.Icon}
                  size={18}
                  active={isActive}
                  boxClass="w-10 h-10 rounded-full"
                />

                <span className="leading-tight flex-1 text-[15px]">
                  {cat.label}
                </span>

                <ChevronRight
                  size={15}
                  className={isActive ? "text-red-500" : "text-black"}
                  strokeWidth={1.8}
                />
              </button>
            );
          })}
        </aside>

        <div className="flex-1 p-6 overflow-y-auto max-h-[520px] custom-scroll">
          <div className="grid grid-cols-2 gap-4">
            {active.courses.map((c, i) => (
              <CourseCard key={i} {...c} onNavigate={onClose} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyDropdown({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[720px] max-w-[calc(100vw-32px)] bg-white rounded-3xl border border-gray-200 shadow-2xl z-50 overflow-hidden">
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5 border border-gray-100 rounded-2xl p-3 bg-gray-50/60">
            {companyLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-white transition-colors"
              >
                <div className="w-12 h-12 bg-[#f3f4f6] border border-gray-200 shadow-sm rounded-full flex items-center justify-center flex-shrink-0">
                  <item.Icon
                    size={20}
                    className="text-black"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-[15px] font-medium text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-[13px] text-gray-500">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="space-y-1 p-2">
            {companyLinks2.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <item.Icon
                  size={17}
                  className="text-black flex-shrink-0"
                  strokeWidth={1.8}
                />
                <span className="text-[15px] font-medium text-gray-700">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ open, onClose, floating }) {
  const [expanded, setExpanded] = useState(null);
  const [companyExpanded, setCompanyExpanded] = useState(false);

  if (!open) return null;

  return (
    <div
      className={`fixed left-4 right-4 bg-white/95 backdrop-blur-lg z-[60] overflow-y-auto max-h-[80vh] rounded-3xl shadow-2xl border border-gray-200 pb-5 md:hidden ${
        floating ? "top-[84px]" : "top-[96px]"
      }`}
    >
      <div className="px-4 pt-4 space-y-1.5">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-gray-400 px-2 mb-3">
          Programs
        </p>

        {categories.map(({ id, label, Icon, courses }) => {
          const isOpen = expanded === id;

          return (
            <div key={id}>
              <button
                onClick={() => setExpanded(isOpen ? null : id)}
                className={`w-full flex items-center gap-3.5 px-3 py-3 rounded-full text-base transition-colors ${
                  isOpen ? "bg-red-50" : "hover:bg-gray-50"
                }`}
              >
                <GrayIcon
                  Icon={Icon}
                  size={18}
                  active={isOpen}
                  boxClass="w-11 h-11 rounded-full"
                />

                <span
                  className={`font-medium flex-1 text-left text-[15px] ${
                    isOpen ? "text-red-600" : "text-gray-800"
                  }`}
                >
                  {label}
                </span>

                <ChevronDown
                  size={17}
                  className={`flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-red-400" : "text-black"
                  }`}
                  strokeWidth={1.8}
                />
              </button>

              {isOpen && (
                <div className="ml-14 mt-2 space-y-2.5 pb-2">
                  {courses.map((c, i) => (
                    <Link
                      key={i}
                      href={c.href || "#"}
                      onClick={onClose}
                      className="block px-4 py-3 rounded-2xl border border-gray-100 hover:border-red-200 hover:bg-red-50 transition-all"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-widest mb-1 text-red-500">
                        {c.tag}
                      </p>

                      <p className="text-[15px] font-medium text-gray-800 leading-snug">
                        {c.name}
                      </p>

                      <span className="flex items-center gap-1.5 text-[12px] text-gray-500 mt-1.5">
                        <Clock
                          size={12}
                          className="text-green-500"
                          strokeWidth={1.8}
                        />
                        {c.duration}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <p className="text-[12px] font-semibold uppercase tracking-widest text-gray-400 px-2 pt-4 mb-2">
          Company
        </p>

        <button
          onClick={() => setCompanyExpanded((v) => !v)}
          className={`w-full flex items-center gap-3.5 px-3 py-3 rounded-full text-base transition-colors ${
            companyExpanded ? "bg-red-50" : "hover:bg-gray-50"
          }`}
        >
          <GrayIcon
            Icon={Users}
            size={18}
            active={companyExpanded}
            boxClass="w-11 h-11 rounded-full"
          />

          <span className="font-medium flex-1 text-left text-[15px] text-gray-800">
            Company
          </span>

          <ChevronDown
            size={17}
            className={`text-black transition-transform duration-200 ${
              companyExpanded ? "rotate-180" : ""
            }`}
            strokeWidth={1.8}
          />
        </button>

        {companyExpanded && (
          <div className="ml-14 mt-2 space-y-1.5 pb-2">
            {[...companyLinks, ...companyLinks2].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                <item.Icon
                  size={16}
                  className="text-black flex-shrink-0"
                  strokeWidth={1.8}
                />
                <span className="text-[15px] text-gray-700">{item.title}</span>
              </Link>
            ))}
          </div>
        )}

        <div className="pt-4 border-t border-gray-100 space-y-1">
          <Link
            href="/blog"
            onClick={onClose}
            className="block px-4 py-2.5 rounded-full text-[15px] text-gray-700 hover:bg-gray-100 transition-colors font-medium"
          >
            Blog
          </Link>
        </div>

        <div className="pt-3 space-y-2.5">
          <a
            href="tel:18001216201"
            className="flex items-center justify-center gap-2 w-full border border-red-400 text-red-500 text-[15px] font-medium py-3 rounded-full hover:bg-red-50 transition-colors"
          >
            <Phone size={16} strokeWidth={1.8} />
            1800-121-6201
          </a>

          <button className="w-full bg-red-500 hover:bg-red-600 text-white text-[15px] font-semibold py-3.5 rounded-full transition-colors">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function NavContent({
  activeMenu,
  toggle,
  closeAll,
  mobileOpen,
  setMobileOpen,
  setActiveMenu,
  floating,
}) {
  return (
    <>
      <style>{`
        * {
          cursor: default;
        }

        a,
        button,
        [role="button"] {
          cursor: pointer;
        }

        input,
        textarea {
          cursor: text;
        }

        .custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: #e5e7eb transparent;
        }

        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #e5e7eb;
          border-radius: 99px;
        }

        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #d1d5db;
        }
      `}</style>

      <Link
        href="/"
        onClick={closeAll}
        className="flex items-center gap-2 hover:opacity-80 select-none flex-shrink-0"
      >
        <img src="/logo.png" alt="eCampus" className="h-8 w-auto" />
      </Link>

      <div className="hidden md:flex items-center gap-1">
        <button
          onClick={(e) => toggle("program", e)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[15px] font-medium transition-colors ${
            activeMenu === "program"
              ? "bg-red-50 text-red-600"
              : floating
                ? "text-black hover:bg-gray-100"
                : "text-black hover:bg-white/70"
          }`}
        >
          Programs
          <ChevronDown
            size={16}
            strokeWidth={1.8}
            className={`transition-transform duration-200 ${
              activeMenu === "program" ? "rotate-180" : ""
            }`}
          />
        </button>

        <button
          onClick={(e) => toggle("company", e)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[15px] font-medium transition-colors ${
            activeMenu === "company"
              ? "bg-red-50 text-red-600"
              : floating
                ? "text-black hover:bg-gray-100"
                : "text-black hover:bg-white/70"
          }`}
        >
          Company
          <ChevronDown
            size={16}
            strokeWidth={1.8}
            className={`transition-transform duration-200 ${
              activeMenu === "company" ? "rotate-180" : ""
            }`}
          />
        </button>

        <Link
          href="/blog"
          onClick={closeAll}
          className={`px-5 py-2.5 rounded-full text-[15px] transition-colors font-medium ${
            floating
              ? "text-black hover:bg-gray-100"
              : "text-black hover:bg-white/70"
          }`}
        >
          Blog
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-3">
        <a
          href="tel:18001216201"
          className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-red-300 text-red-500 text-sm font-medium hover:bg-red-50 transition-colors"
        >
          <Phone size={14} strokeWidth={1.8} />
          1800-121-6201
        </a>

        <button className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white text-[15px] font-semibold rounded-full transition-colors shadow-sm shadow-red-200">
          Login
        </button>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setMobileOpen((m) => !m);
          setActiveMenu(null);
        }}
        className={`md:hidden w-11 h-11 flex items-center justify-center rounded-full border text-black transition-colors ${
          floating
            ? "border-gray-200 hover:bg-gray-100"
            : "border-transparent hover:bg-white/70"
        }`}
        aria-label="Toggle menu"
      >
        {mobileOpen ? (
          <X size={20} strokeWidth={1.8} />
        ) : (
          <Menu size={20} strokeWidth={1.8} />
        )}
      </button>
    </>
  );
}

export function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [floating, setFloating] = useState(false);
  const normalHeaderRef = useRef(null);
  const floatingHeaderRef = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  useEffect(() => {
    function handleClick(e) {
      const activeRef = floating ? floatingHeaderRef : normalHeaderRef;

      if (activeRef.current && !activeRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [floating]);

  useEffect(() => {
    function onScroll() {
      setFloating(window.scrollY > 160);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggle = (menu, e) => {
    e?.stopPropagation();
    setActiveMenu((prev) => (prev === menu ? null : menu));
    setMobileOpen(false);
  };

  const closeAll = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const navProps = {
    activeMenu,
    toggle,
    closeAll,
    mobileOpen,
    setMobileOpen,
    setActiveMenu,
  };

  return (
    <>
      <div className="absolute left-0 right-0 top-0 z-40 px-4">
        <header
          ref={normalHeaderRef}
          className="relative mx-auto max-w-7xl bg-transparent shadow-none"
        >
          <nav className="h-20 px-0 flex items-center justify-between">
            <NavContent {...navProps} floating={false} />
          </nav>

          <div className="hidden md:block">
            <ProgramDropdown
              open={!floating && activeMenu === "program"}
              onClose={closeAll}
            />
            <CompanyDropdown
              open={!floating && activeMenu === "company"}
              onClose={closeAll}
            />
          </div>
        </header>
      </div>

      <div
        ref={floatingHeaderRef}
        className={`fixed left-0 right-0 top-4 z-50 px-4 transition-all duration-300 ease-out ${
          floating
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <header className="relative mx-auto max-w-7xl rounded-full border border-gray-200 bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md">
          <nav className="h-14 px-7 flex items-center justify-between">
            <NavContent {...navProps} floating />
          </nav>

          <div className="hidden md:block">
            <ProgramDropdown
              open={floating && activeMenu === "program"}
              onClose={closeAll}
            />
            <CompanyDropdown
              open={floating && activeMenu === "company"}
              onClose={closeAll}
            />
          </div>
        </header>
      </div>

      <MobileMenu open={mobileOpen} onClose={closeAll} floating={floating} />
    </>
  );
}
