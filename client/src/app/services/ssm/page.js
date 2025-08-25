"use client";

import "./page.css";
import Image from "next/image";

// MUI Icons
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"; // dematerialization
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // dividends recovery
import TimelineIcon from "@mui/icons-material/Timeline"; // consolidation
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // CSCS account creation
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"; // docs & verification
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"; // processing
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"; // activation
import PeopleIcon from "@mui/icons-material/People"; // why choose us
import DataUsageIcon from "@mui/icons-material/DataUsage"; // why choose us
import VisibilityIcon from "@mui/icons-material/Visibility"; // why choose us
import PersonIcon from "@mui/icons-material/Person";
import WomanIcon from "@mui/icons-material/Woman";

export default function StockSharesPage() {
  return (
    <main className="stocks-page">
      {/* ===================== Section 1: Hero / Intro ===================== */}
      <section className="stocks-hero">
        <div className="hero-bg">
          <Image
            src="/stocks-hero.jpg"
            alt="Streamlined Stock & Shares Management"
            fill
            priority
            className="hero-img"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1>Take Control of Your Investments</h1>
          <p>
            Streamlined stock & shares management designed to simplify
            ownership, resolve legacy issues, and secure your future.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Book a Consultation</button>
            {/* <button className="btn-secondary">Talk to an Advisor</button> */}
          </div>
        </div>
      </section>

      <section className="stocks-what">
        <h2>What We Do</h2>
        <p className="what-intro">
          Our Stock & Shares Management service provides practical solutions for
          individuals and businesses to regularize and optimize their
          shareholdings. We resolve legacy challenges, streamline account
          access, and ensure compliance within capital market framework.
        </p>
        <div className="what-grid">
          <div className="what-card">
            <AccountBalanceIcon />
            <h3>Dematerialization</h3>
            <p>
              Convert physical share certificates into secure electronic
              holdings for safer custody, faster transactions, and seamless
              verification.
            </p>
          </div>
          <div className="what-card">
            <TrendingUpIcon />
            <h3>Recovery of Outstanding & Unclaimed Dividends</h3>
            <p>
              Trace, validate, and reclaim unpaid dividends across registrars.
              We consolidate records and set up e‑dividend mandates for future
              payouts.
            </p>
          </div>
          <div className="what-card">
            <TimelineIcon />
            <h3>Consolidation of Shares</h3>
            <p>
              Merge multiple shareholder accounts and names into a single,
              unified portfolio for better visibility, governance, and control.
            </p>
          </div>
          <div className="what-card">
            <CheckCircleIcon />
            <h3>Creation of CSCS Accounts</h3>
            <p>
              Open and activate your Central Securities Clearing System (CSCS)
              account to enable trading, settlements, and streamlined dividend
              access.
            </p>
          </div>
        </div>
      </section>

      <section className="stocks-how">
        <h2>How It Works</h2>
        <div className="how-grid">
          <div className="how-card">
            <PeopleIcon />
            <h3>1) Consultation</h3>
            <p>
              Discuss your goals and current documents (certificates, CSCS
              details, BVN, ID) with an advisor.
            </p>
          </div>
          <div className="how-card">
            <AssignmentTurnedInIcon />
            <h3>2) Documentation & Verification</h3>
            <p>
              We guide KYC, name alignment, bank mandates, and registrar forms
              to validate your holdings.
            </p>
          </div>
          <div className="how-card">
            <WorkOutlineIcon />
            <h3>3) Processing</h3>
            <p>
              We liaise with registrars, brokers, and CSCS to dematerialize,
              consolidate, and recover benefits.
            </p>
          </div>
          <div className="how-card">
            <VerifiedUserIcon />
            <h3>4) Activation & Updates</h3>
            <p>
              You receive confirmations: active CSCS profile, updated
              statements, and e‑dividend mandates.
            </p>
          </div>
        </div>
      </section>

      <section className="stocks-why">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-card">
            <PeopleIcon />
            <h3>Expert Advisors</h3>
            <p>
              A team experienced with Nigeria’s capital market processes,
              registrars, and CSCS workflows.
            </p>
          </div>
          <div className="why-card">
            <DataUsageIcon />
            <h3>Process‑Driven</h3>
            <p>
              Clear checklists and timelines for each sub‑service—no guesswork,
              no hidden steps.
            </p>
          </div>
          <div className="why-card">
            <VisibilityIcon />
            <h3>Transparent Fees</h3>
            <p>
              Upfront pricing and regular updates from initiation to closure.
            </p>
          </div>
        </div>
      </section>

      <section className="stocks-testimonials">
        <h2>Testimonials</h2>
        <div className="stocks-testimonial-grid">
          <div className="stocks-testimonial-card">
            <WomanIcon className="stocks-testimonial-icon female" />
            <p>
              “They dematerialized my late father’s certificates and recovered
              years of dividends. Professional from start to finish.”
            </p>
            <span className="stocks-testimonial-author">Amina</span>
          </div>
          <div className="stocks-testimonial-card">
            <PersonIcon className="stocks-testimonial-icon male" />
            <p>
              “Share consolidation and CSCS setup were smoother than I
              expected—excellent communication throughout.”
            </p>
            <span className="stocks-testimonial-author">David</span>
          </div>
          <div className="stocks-testimonial-card">
            <WomanIcon className="stocks-testimonial-icon female" />
            <p>
              “Got my unclaimed dividends traced and paid out. Highly
              recommended.”
            </p>
            <span className="stocks-testimonial-author">Tolu</span>
          </div>
        </div>
      </section>
    </main>
  );
}
