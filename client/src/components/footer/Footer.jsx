"use client";

import "./footer.css";
import Image from "next/image";
import Link from "next/link";
import LearnMoreOption from "./LearnMoreOption";
import SubscriptionForm from "./SubscriptionForm";

const learnMore = [
  { desc: "About Us", url: "/about" },
  { desc: "Our Services", url: "/services" },
  { desc: "Contact", url: "/contact" },
  { desc: "FAQ", url: "/faq" },
];

export default function Footer() {
  return (
    <footer className="shaded-section footer-wrap">
      <div className="footer container">
        {/* Brand */}
        <section className="brand-desc">
          <header>
            <Image
              src="/amitt-logo.png"
              alt="brand logo"
              width={80}
              height={80}
            />
            <h3>Amitt Training & Consulting Services Limited</h3>
          </header>
          <p>
            We provide training, consulting, and advisory services that empower
            individuals, startups, and organizations to grow. From financial
            literacy and customer service to startup funding and personal
            development, we deliver practical solutions for lasting impact.
          </p>
          <p className="rc-no">RC 87363936</p>
        </section>

        {/* Learn More */}
        <section className="learn-more">
          <header>Learn More</header>
          {learnMore.map((item, index) => (
            <LearnMoreOption key={index} item={item} />
          ))}
        </section>

        {/* Subscription */}
        <section className="stay-informed">
          <header>Stay Informed</header>
          <p>
            Be the first to know about funding programs, investor trends, and
            curated opportunities.
          </p>
          <SubscriptionForm />
        </section>
      </div>
    </footer>
  );
}
