"use client";

import Image from "next/image";
import "./page.css";
import { services, servicesParagraphs } from "@/utils/data";
import Link from "next/link";

export default function Services() {
  return (
    <main className="services">
      <section
        className="services-header"
        style={{
          backgroundImage: `url(/services-bg.png)`,
        }}
      >
        <h2>Our Services</h2>
      </section>
      <section className="services-body-desc">
        {servicesParagraphs.map(({ text, image }, index) => (
          <div
            className={`service-block ${index % 2 === 1 ? "reverse" : ""}`}
            key={index}
          >
            <div className="service-text">
              <p>{text}</p>
            </div>
            <div className="service-image">
              <Image
                src={image}
                alt={`Abstract ${index + 1}`}
                width={1640}
                height={924}
              />
            </div>
          </div>
        ))}
      </section>
      <section className="services-grid">
        {services.map((service, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              {/* Front */}
              <div
                className="flip-card-front"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <h3>{service.title}</h3>
              </div>

              {/* Back */}
              <div className="flip-card-back">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link href={service.link} className="service-link">
                  <button>Discover More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
