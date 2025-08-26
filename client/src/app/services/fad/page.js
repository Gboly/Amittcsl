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
import Link from "next/link";

export default function FinancialAdvisoryPage() {
  return (
    <main className="funding-page">
      {/* ===================== Section 1: Hero / Intro ===================== */}
      <section className="funding-hero">
        <div className="hero-bg">
          <Image
            src="/funding-hero.jpg"
            alt="AMITT Consulting — Financial Advisory & Capital Solutions"
            fill
            priority
            className="hero-img"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <h1>
            Financial Advisory <br /> & Capital Solutions
          </h1>
          <p>
            At AMITT Consulting, we bring professional expertise in capital
            funding and financial advisory to help clients raise funds,
            structure investment opportunities, and optimise capital allocation
            for sustainable growth. We advise institutions, governments, and
            high‑net‑worth individuals on portfolio diversification, equity
            investments, and long‑term wealth creation strategies—at an
            international level. We also collaborate with reputable accounting
            firms to deliver comprehensive financial and accounting advisory
            services to governments and their agencies.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Book a Financial Advisory Call
            </button>
            {/* <button className="btn-secondary">Explore Our Approach</button> */}
          </div>
          <div className="hero-icons">
            <InsightsIcon />
            <TrendingUpIcon />
            <HandshakeIcon />
          </div>
        </div>
      </section>

      {/* ===================== Section 2: What We Do ===================== */}
      <section className="funding-what">
        <h2>What We Do</h2>
        <p className="what-intro">
          We deliver end‑to‑end advisory that blends capital raising, portfolio
          strategy, and institutional‑grade governance—tailored to your mandate
          and market context.
        </p>

        <div className="what-grid">
          <div className="what-card">
            <PersonSearchIcon />
            <h3>Capital Funding & Structuring</h3>
            <p>
              Origination and structuring of equity, quasi‑equity, and debt to
              align with your growth roadmap and risk profile.
            </p>
          </div>

          <div className="what-card">
            <InsightsIcon />
            <h3>Portfolio Diversification</h3>
            <p>
              Asset allocation models, risk budgeting, and rebalancing
              frameworks for resilient long‑term performance.
            </p>
          </div>

          <div className="what-card">
            <TrendingUpIcon />
            <h3>Equity & Alternatives</h3>
            <p>
              Deal screening, valuation perspectives, and investment
              governance—spanning public markets and private opportunities.
            </p>
          </div>

          <div className="what-card">
            <ShieldIcon />
            <h3>Accounting & Compliance (with Partners)</h3>
            <p>
              In collaboration with reputable accounting firms, we deliver
              comprehensive financial and accounting advisory to governments and
              agencies.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== Section 3: Our Process ===================== */}
      <section className="funding-process">
        <h2>Our Advisory Process</h2>

        <div className="process-flow">
          <div className="step">
            <div className="step-badge">1</div>
            <h4>Discovery & Diagnostic</h4>
            <p>
              Clarify objectives, constraints, current capital structure, and
              investment governance.
            </p>
          </div>

          <div className="arrow" aria-hidden>
            →
          </div>

          <div className="step">
            <div className="step-badge">2</div>
            <h4>Strategy Design</h4>
            <p>
              Define funding pathways, asset allocation, and risk parameters
              aligned to mandate and horizon.
            </p>
          </div>

          <div className="arrow" aria-hidden>
            →
          </div>

          <div className="step">
            <div className="step-badge">3</div>
            <h4>Implementation</h4>
            <p>
              Execute capital raises, deploy portfolios, and set reporting &
              controls with our partner network.
            </p>
          </div>

          <div className="arrow" aria-hidden>
            →
          </div>

          <div className="step">
            <div className="step-badge">4</div>
            <h4>Monitoring & Optimisation</h4>
            <p>
              Ongoing performance review, rebalancing, and optimisation as
              markets and priorities evolve.
            </p>
          </div>
        </div>

        <div className="process-illustration">
          <Image
            src="/funding-process.jpg"
            alt="AMITT Consulting advisory process"
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
            <h4>Brief</h4>
            <p>
              A government‑owned agency required a{" "}
              <strong>portfolio diversification</strong> program and{" "}
              <strong>capital allocation</strong> framework to reduce
              concentration risk while funding infrastructure projects.
            </p>
          </div>

          <div className="case-block">
            <h4>Approach</h4>
            <p>
              We designed a strategic asset allocation, coordinated a blended
              financing structure, and established performance and governance
              reporting. Accounting advisory was delivered with a reputable
              partner firm.
            </p>
          </div>

          <div className="case-block">
            <h4>Outcome</h4>
            <p>
              Lowered risk exposure, unlocked project funding capacity, and
              improved transparency for stakeholders.
            </p>
          </div>

          <ul className="case-metrics">
            <li>
              <VerifiedIcon /> New SAA adopted & approved
            </li>
            <li>
              <GroupWorkIcon /> Blended financing structure closed
            </li>
            <li>
              <TimelineIcon /> Quarterly performance reporting instituted
            </li>
          </ul>
        </div>

        <div className="case-right">
          <div className="kpi-card">
            <span className="kpi-label">Capital Deployed (Phase I)</span>
            <span className="kpi-value">£250M</span>
            <div className="kpi-track">
              <div className="kpi-fill" style={{ width: "80%" }} />
            </div>
            <span className="kpi-footnote">Target Programme: £310M</span>
          </div>

          <div className="case-art">
            <Image
              src="/funding-case.jpg"
              alt="Institutional portfolio advisory"
              width={520}
              height={340}
            />
          </div>
        </div>
      </section>

      {/* ===================== Section 5: Why Choose Us ===================== */}
      <section className="funding-why">
        <h2>Why AMITT Consulting</h2>
        <div className="why-grid">
          <div className="why-card">
            <InsightsIcon />
            <h3>Institutional‑Grade Expertise</h3>
            <p>
              Seasoned advisors across capital markets, portfolio strategy, and
              governance.
            </p>
          </div>
          <div className="why-card">
            <GroupWorkIcon />
            <h3>Global Reach</h3>
            <p>
              International coverage of investors, partner firms, and market
              intelligence.
            </p>
          </div>
          <div className="why-card">
            <TrendingUpIcon />
            <h3>Outcomes‑Driven</h3>
            <p>
              Clear KPIs, transparent reporting, and measurable long‑term value
              creation.
            </p>
          </div>
          <div className="why-card">
            <ShieldIcon />
            <h3>Trusted & Confidential</h3>
            <p>
              Discreet execution with robust controls and compliance standards.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== Section 6: Call to Action ===================== */}
      <section className="funding-cta">
        <div className="cta-wrap">
          <h2>Talk to Our Advisory Team</h2>
          <p>
            Whether you’re optimising capital allocation, raising funds, or
            building a diversified portfolio, we’ll tailor a path that fits your
            mandate.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">
              <ContactMailIcon />
              &nbsp;Book a Consultation
            </button>
            <Link href={"/services"}>
              <button className="btn-secondary">
                <LinkIcon />
                &nbsp;View Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
