import type { ReactNode } from "react";

export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden">
      <div className="marquee-track gap-12 py-4">
        <div className="flex shrink-0 items-center gap-12 pr-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
