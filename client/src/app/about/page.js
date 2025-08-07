"use client";

import { principles } from "@/utils/data";
import "./page.css";

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="first-about-section">
        <div className="about-hero-banner">
          <h1>Our Story</h1>
        </div>
        <div className="about-hero-text">
          <p>
            It all started with a simple observation: many individuals,
            especially young professionals and aspiring entrepreneurs, had the
            passion and drive to succeed but lacked access to the right
            knowledge, tools, or networks to move forward. Whether it was poor
            financial decisions, underdeveloped customer service teams, or
            brilliant startup ideas stuck without funding, the gap between
            potential and progress was painfully clear.
          </p>

          <p>We saw an opportunity to bridge that gap.</p>

          <p>
            Amitt Training and Consulting Services Limited was founded to be
            more than just a training or consulting firm, we set out to become a
            partner in growth. From helping young adults navigate independence
            through life-skill courses, to supporting companies in building
            stronger teams, and guiding startup founders through the
            complexities of venture capital. Our work is rooted in real needs,
            real people, and real change.
          </p>

          <p>
            {`Every service we offer is a direct response to a challenge we've seen
          and helped solve. And every solution we build is designed to empower
          people not just for today, but for the long haul.`}
          </p>
        </div>
      </section>

      <section className="principles-section">
        <div className="principles-header">
          <h1>Our Guiding Principles</h1>
        </div>
        <div className="principles-flex">
          {principles.map((item, index) => (
            <div className="principle-card" key={index}>
              <div className="card-inner">
                {/* Front */}
                <div className="card-face card-front">
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="card-content">
                    <span className="card-title">{item.title}</span>
                  </div>
                </div>

                {/* Back */}
                <div className="card-face card-back">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
