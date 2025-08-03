"use client";

import Link from "next/link";
import "./service-card.css";

export default function ServiceCard({ title, image, link }) {
  return (
    <div className="service-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-content">
        <h3>{title}</h3>
        <Link href={link} className="read-more">
          Read more →
        </Link>
      </div>
    </div>
  );
}
