"use client";
import { useEffect, useState } from "react";
import "./page.css";

export default function SupplyProcurementPage() {
  // Simple testimonial carousel
  const testimonials = [
    {
      quote:
        "They sourced exactly what we needed for our new branch — on time and within budget.",
      author: "Operations Director, Retail Group",
    },
    {
      quote: "A seamless process from request to delivery.",
      author: "Head of Admin, Financial Services",
    },
    {
      quote:
        "Transparent pricing, fast turnarounds, and reliable suppliers. Highly recommended.",
      author: "Procurement Lead, Manufacturing",
    },
  ];

  const [active, setActive] = useState(0);

  // Auto-advance the carousel every 6s
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  return (
    <main className="sp-page">
      {/* ======= Hero ======= */}
      <header className="sp-hero">
        <div className="sp-hero-content">
          <h1>Reliable Supply & Procurement Solutions for Organizations</h1>
          <p>
            We help organizations source, purchase, and deliver exactly what
            they need — efficiently, transparently, and cost-effectively.
          </p>
          <div className="cta-row">
            <a href="#cta" className="btn btn-primary">
              Request Procurement Support
            </a>
            {/* <a href="#about" className="btn btn-ghost">
              Learn More
            </a> */}
          </div>
        </div>
        <div className="sp-hero-fade" />
      </header>

      {/* ======= About ======= */}
      <section id="about" className="sp-about container">
        <div className="about-text">
          <h2>Simplifying Purchases, Maximizing Value</h2>
          <p>
            Our Supply & Procurement service ensures your organization gets the
            right products, at the right time, and at the best value. Whether
            it’s specialized equipment, office essentials, or bulk supplies, we
            handle sourcing, negotiation, purchase orders, and fulfillment — so
            your teams can focus on what matters most.
          </p>
          <ul className="about-bullets">
            <li>End-to-end procurement, from request to delivery</li>
            <li>Vetted supplier network and transparent process</li>
            <li>Cost optimization without compromising quality</li>
          </ul>
        </div>
        <div className="about-visual">
          {/* Simple illustrative stack (boxes + checklist) */}
          <div className="viz-card">
            <div className="viz-row">
              <SVGBox />
              <SVGBox />
              <SVGTruck />
            </div>
            <div className="viz-checklist">
              <SVGChecklist />
            </div>
          </div>
        </div>
      </section>

      {/* ======= What We Do (Core Services) ======= */}
      <section className="sp-services container">
        <h3 className="section-title">What We Do</h3>
        <div className="card-grid">
          <ServiceCard
            icon={<SVGSearch />}
            title="Sourcing & Vendor Selection"
            desc="We identify, verify, and shortlist the best suppliers for your exact requirements."
          />
          <ServiceCard
            icon={<SVGCalculator />}
            title="Negotiation & Cost Optimization"
            desc="We negotiate pricing and terms to ensure value, quality, and compliance."
          />
          <ServiceCard
            icon={<SVGChecklist />}
            title="Procurement Management"
            desc="We manage POs, documentation, and approvals from start to finish."
          />
          <ServiceCard
            icon={<SVGTruck />}
            title="Delivery & Fulfillment"
            desc="We coordinate logistics to ensure timely, intact delivery to your locations."
          />
        </div>
      </section>

      {/* ======= How It Works ======= */}
      <section className="sp-process">
        <div className="container">
          <h3 className="section-title">How It Works</h3>
          <div className="process-steps">
            <ProcessStep
              icon={<SVGRequest />}
              title="Request"
              desc="Share your requirements."
            />
            <Arrow />
            <ProcessStep
              icon={<SVGSearch />}
              title="Sourcing"
              desc="We identify the right suppliers."
            />
            <Arrow />
            <ProcessStep
              icon={<SVGHandshake />}
              title="Procurement"
              desc="Negotiate and purchase."
            />
            <Arrow />
            <ProcessStep
              icon={<SVGPallet />}
              title="Delivery"
              desc="Items delivered on time."
            />
          </div>
        </div>
      </section>

      {/* ======= Why Choose Us ======= */}
      <section className="sp-why container">
        <h3 className="section-title">Why Choose Us</h3>
        <div className="why-grid">
          <WhyCard
            icon={<SVGUsers />}
            title="Trusted Network"
            desc="Access to verified suppliers across categories and regions."
          />
          <WhyCard
            icon={<SVGClock />}
            title="Efficiency"
            desc="Fast turnarounds and proactive communication — even for urgent needs."
          />
          <WhyCard
            icon={<SVGDocument />}
            title="Transparency"
            desc="Clear, auditable processes with cost and status visibility."
          />
        </div>
      </section>

      {/* ======= Testimonials / Case Studies ======= */}
      <section
        className="sp-testimonials container"
        aria-label="Client testimonials"
      >
        <h3 className="section-title">Testimonials / Case Studies</h3>

        <div className="carousel">
          <button
            className="carousel-nav left"
            aria-label="Previous testimonial"
            onClick={prev}
          >
            ‹
          </button>

          {testimonials.map((t, i) => (
            <article
              key={i}
              className={`t-card ${i === active ? "active" : "inactive"}`}
              aria-hidden={i !== active}
            >
              <div className="quote-mark">“</div>
              <p className="quote">{t.quote}</p>
              <p className="author">— {t.author}</p>
            </article>
          ))}

          <button
            className="carousel-nav right"
            aria-label="Next testimonial"
            onClick={next}
          >
            ›
          </button>
        </div>

        <div
          className="dots"
          role="tablist"
          aria-label="Testimonials pagination"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === active ? "on" : ""}`}
              aria-label={`Show testimonial ${i + 1}`}
              //   aria-selected={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </section>

      {/* ======= CTA Banner ======= */}
      <section id="cta" className="sp-cta">
        <div className="cta-overlay" />
        <div className="cta-content container">
          <h3>Get Your Procurement Needs Sorted Today</h3>
          <div className="cta-row">
            <a href="#contact" className="btn btn-primary">
              Request Procurement Support
            </a>
            <a href="#contact" className="btn btn-outline">
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===== Reusable Components ===== */
function ServiceCard({ icon, title, desc }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function ProcessStep({ icon, title, desc }) {
  return (
    <div className="p-step">
      <div className="p-icon">{icon}</div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
}

function WhyCard({ icon, title, desc }) {
  return (
    <div className="why-card">
      <div className="icon">{icon}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

/* ===== Inline SVGs (no external icons needed) ===== */
function SVGSearch() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="16.5"
        y1="16.5"
        x2="22"
        y2="22"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function SVGCalculator() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <rect
        x="5"
        y="2"
        width="14"
        height="20"
        rx="2"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
      <rect x="7" y="5" width="10" height="3" fill="currentColor" />
      <circle cx="9" cy="11" r="1" fill="currentColor" />
      <circle cx="12" cy="11" r="1" fill="currentColor" />
      <circle cx="15" cy="11" r="1" fill="currentColor" />
      <circle cx="9" cy="14" r="1" fill="currentColor" />
      <circle cx="12" cy="14" r="1" fill="currentColor" />
      <circle cx="15" cy="14" r="1" fill="currentColor" />
      <rect x="9" y="16.5" width="6" height="1.5" fill="currentColor" />
    </svg>
  );
}
function SVGChecklist() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <rect
        x="4"
        y="3"
        width="16"
        height="18"
        rx="2"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
      <polyline
        points="8,8 10,10 16,6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="8"
        y1="13"
        x2="16"
        y2="13"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="8"
        y1="17"
        x2="16"
        y2="17"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function SVGTruck() {
  return (
    <svg viewBox="0 0 32 20" width="32" height="28" aria-hidden="true">
      <rect x="2" y="6" width="18" height="8" rx="1.5" fill="currentColor" />
      <rect x="20" y="8" width="7" height="6" rx="1" fill="currentColor" />
      <circle cx="9" cy="16" r="2" fill="#fff" />
      <circle cx="23" cy="16" r="2" fill="#fff" />
    </svg>
  );
}
function SVGRequest() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <rect
        x="4"
        y="3"
        width="16"
        height="18"
        rx="2"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
      <line
        x1="8"
        y1="8"
        x2="16"
        y2="8"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="8"
        y1="12"
        x2="16"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function SVGHandshake() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path
        d="M2 12l4-4 6 6 6-6 4 4-10 10z"
        fill="currentColor"
        opacity=".25"
      />
      <path d="M6 8l6 6" stroke="currentColor" strokeWidth="2" />
      <path d="M12 14l6-6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function SVGPallet() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <rect
        x="3"
        y="4"
        width="18"
        height="10"
        rx="1.5"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
      <rect x="4" y="15" width="5" height="3" fill="currentColor" />
      <rect x="10" y="15" width="5" height="3" fill="currentColor" />
      <rect x="16" y="15" width="4" height="3" fill="currentColor" />
    </svg>
  );
}
function SVGUsers() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <circle
        cx="8"
        cy="8"
        r="3"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
      <circle
        cx="16"
        cy="9"
        r="2.5"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
      <path
        d="M3 18c0-3 3-5 5-5s5 2 5 5"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
      <path
        d="M14 18c0-2 2-3.5 4-3.5S22 16 22 18"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
    </svg>
  );
}
function SVGClock() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="12"
        y1="12"
        x2="16"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function SVGDocument() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path
        d="M6 3h9l3 3v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
      <line
        x1="8"
        y1="10"
        x2="16"
        y2="10"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="8"
        y1="14"
        x2="16"
        y2="14"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function Arrow() {
  return <span className="arrow">→</span>;
}

/* Decorative visual for About */
function SVGBox() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="56"
      height="56"
      className="viz-box"
      aria-hidden="true"
    >
      <rect x="4" y="6" width="16" height="12" rx="2" fill="currentColor" />
    </svg>
  );
}
