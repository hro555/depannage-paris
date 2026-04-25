"use client";

import { PHONE_HREF } from "@/lib/constants";

declare global {
  function gtag(...args: unknown[]): void;
}

export default function PhoneLink({
  children,
  className,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={PHONE_HREF}
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        if (typeof gtag !== "undefined") {
          gtag("event", "click_tel");
        }
      }}
    >
      {children}
    </a>
  );
}
