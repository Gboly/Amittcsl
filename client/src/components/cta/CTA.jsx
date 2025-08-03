"use client";

import Link from "next/link";
import "./cta.css";

export default function CTAButton({
  href = "/services",
  label = "Discover How We Can Help →",
}) {
  return (
    <div className="cta-wrapper">
      <Link href={href} className="cta-button">
        {label}
      </Link>
    </div>
  );
}
