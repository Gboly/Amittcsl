"use client";

import "./page.css";
import Image from "next/image";

// MUI Icons
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import HandshakeIcon from "@mui/icons-material/Handshake";
import InsightsIcon from "@mui/icons-material/Insights";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkIcon from "@mui/icons-material/Link";
import TimelineIcon from "@mui/icons-material/Timeline";
import ShieldIcon from "@mui/icons-material/Shield";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import VerifiedIcon from "@mui/icons-material/Verified";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function StartupFundingPage() {
  return (
    <main className="funding-page">
      {/* ===================== Section 1: Hero / Intro ===================== */}
      <section className="funding-hero">
        <div className="hero-bg">
          {/* Use the hero you shared for Section 1 */}
          <Image
            src="/funding-hero.jpg"
            alt="Turning Startup Dreams into Funded Realities"
            fill
            priority
            className="hero-img"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <h1>
            Turning Startup Dreams <br /> into Funded Realities
          </h1>
          <p>
            We connect ambitious founders with the right investors through
            precision targeting, compelling pitches, and trusted introductions.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Your Funding Journey</button>
            <button className="btn-secondary">Learn How We Work</button>
          </div>
          <div className="hero-icons">
            <TrendingUpIcon />
            <RocketLaunchIcon />
            <HandshakeIcon />
          </div>
        </div>
      </section>

      {/* ===================== Section 2: What We Do ===================== */}
      <section className="funding-what">
        <h2>What We Do</h2>
        <p className="what-intro">
          Our facilitation services connect founders with investors—streamlining
          the fundraising process and increasing the likelihood of securing
          funding.
        </p>

        <div className="what-grid">
          <div className="what-card">
            <PersonSearchIcon />
            <h3>Investor Targeting</h3>
            <p>
              We identify the investors most likely to be interested in your
              startup—no mass blasts.
            </p>
          </div>
          <div className="what-card">
            <DescriptionIcon />
            <h3>Pitch Preparation</h3>
            <p>
              We refine your narrative, deck, and metrics to capture investor
              attention.
            </p>
          </div>
          <div className="what-card">
            <HandshakeIcon />
            <h3>Introduction & Negotiation</h3>
            <p>
              We make warm introductions and guide negotiations with
              professionalism and discretion.
            </p>
          </div>
          <div className="what-card">
            <ShieldIcon />
            <h3>Confidential & Professional</h3>
            <p>
              Your materials and data are handled securely with strict
              confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== Section 3: Our Process ===================== */}
      <section className="funding-process">
        <h2>How We Make Funding Happen</h2>

        <div className="process-flow">
          <div className="step">
            <div className="step-badge">1</div>
            <h4>Discovery & Assessment</h4>
            <p>
              We align on your funding needs, traction, and unique strengths.
            </p>
          </div>

          <div className="arrow" aria-hidden>
            →
          </div>

          <div className="step">
            <div className="step-badge">2</div>
            <h4>Investor Targeting</h4>
            <p>
              We match you with the right VCs, angels, and strategic partners.
            </p>
          </div>

          <div className="arrow" aria-hidden>
            →
          </div>

          <div className="step">
            <div className="step-badge">3</div>
            <h4>Pitch Preparation</h4>
            <p>
              We sharpen your deck, business plan, and metrics for maximum
              impact.
            </p>
          </div>

          <div className="arrow" aria-hidden>
            →
          </div>

          <div className="step">
            <div className="step-badge">4</div>
            <h4>Introduction & Follow-Up</h4>
            <p>
              We facilitate warm intros and maintain engagement through close.
            </p>
          </div>
        </div>

        <div className="process-illustration">
          <Image
            src="/funding-process.jpg"
            alt="Funding process illustration"
            width={900}
            height={420}
          />
        </div>
      </section>

      {/* ===================== Section 4: Case Study ===================== */}
      <section className="funding-case">
        <div className="case-left">
          <h2>Case Study</h2>

          <div className="case-block">
            <h4>Problem</h4>
            <p>
              A PropTech startup needed <strong>£1.5M</strong> to expand.
            </p>
          </div>

          <div className="case-block">
            <h4>Solution</h4>
            <p>
              We facilitated targeted introductions to strategic investors and
              guided the process.
            </p>
          </div>

          <div className="case-block">
            <h4>Result</h4>
            <p>
              Secured commitments and expanded operations in under 12 weeks.
            </p>
          </div>

          <ul className="case-metrics">
            <li>
              <VerifiedIcon /> 8 qualified investor meetings
            </li>
            <li>
              <GroupWorkIcon /> 3 term sheets received
            </li>
            <li>
              <TimelineIcon /> 12‑week timeline to close
            </li>
          </ul>
        </div>

        <div className="case-right">
          <div className="kpi-card">
            <span className="kpi-label">Target Raise</span>
            <span className="kpi-value">£1.5M</span>
            <div className="kpi-track">
              <div className="kpi-fill" style={{ width: "92%" }} />
            </div>
            <span className="kpi-footnote">Committed: £1.38M</span>
          </div>

          <div className="case-art">
            <Image
              src="/funding-case.jpg"
              alt="Case study visual"
              width={520}
              height={340}
            />
          </div>
        </div>
      </section>

      {/* ===================== Section 5: Why Choose Us ===================== */}
      <section className="funding-why">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-card">
            <InsightsIcon />
            <h3>Targeted Matchmaking</h3>
            <p>We focus on investor–startup fit, not volume.</p>
          </div>
          <div className="why-card">
            <GroupWorkIcon />
            <h3>Trusted Network</h3>
            <p>Warm access to VCs, angels, and institutions.</p>
          </div>
          <div className="why-card">
            <TrendingUpIcon />
            <h3>Operator Mindset</h3>
            <p>We understand traction, metrics, and growth levers.</p>
          </div>
          <div className="why-card">
            <ShieldIcon />
            <h3>Discreet & Efficient</h3>
            <p>Confidential, streamlined, and strategic outreach.</p>
          </div>
        </div>
      </section>

      {/* ===================== Section 6: Call to Action ===================== */}
      <section className="funding-cta">
        <div className="cta-wrap">
          <h2>Ready to Get Funded?</h2>
          <p>
            Schedule a quick discovery call and let’s map your path to capital.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">
              <ContactMailIcon />
              &nbsp;Book a Consultation
            </button>
            <button className="btn-secondary">
              <LinkIcon />
              &nbsp;Investor Introductions
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
