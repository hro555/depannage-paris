"use client";

import PhoneLink from "@/components/PhoneLink";

export default function FloatingPhone() {
  return (
    <PhoneLink
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-dark text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 transition-colors animate-pulse-slow"
      ariaLabel="Appeler"
    >
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
        !
      </span>
    </PhoneLink>
  );
}
