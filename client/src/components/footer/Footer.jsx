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
            <h3>AMITT Training & Consulting Services Limited</h3>
          </header>
          <p>
            We provide training, consulting, advisory and services that empower
            individuals/group, SMEs, and organizations to grow. We provide and
            support a range of services from professional courses, financial
            literacy, financial advisory, supplies & procurement, Corporate
            gifts and travel & tours. We deliver practical solutions for lasting
            impact.
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
            Be the first to know about our programs, investor trends, and
            curated opportunities.
          </p>
          <SubscriptionForm />
        </section>
      </div>
    </footer>
  );
}
