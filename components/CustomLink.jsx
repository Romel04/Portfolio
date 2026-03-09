"use client";

import Link from "next/link";
import { useCursor } from "./CursorProvider";

export default function CustomLink({ href, children, className, onClick, ...props }) {
  const { setIsHovering } = useCursor();

  return (
    <Link
      href={href}
      className={className}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      {children}
    </Link>
  );
}
