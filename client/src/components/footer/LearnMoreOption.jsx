"use client";

import Link from "next/link";
import { useState } from "react";

export default function LearnMoreOption({ item: { desc, url } }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <Link href={url}>{desc}</Link>
    </div>
  );
}
