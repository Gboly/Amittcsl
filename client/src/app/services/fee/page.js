"use client";

import "./page.css";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HandshakeIcon from "@mui/icons-material/Handshake";
import StarIcon from "@mui/icons-material/Star";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SavingsIcon from "@mui/icons-material/Savings";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LanguageIcon from "@mui/icons-material/Language";
import EventIcon from "@mui/icons-material/Event";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Page() {
  return (
    <main className="fee-page">
      {/* (1) HERO */}
      <section className="fee-hero">
        <div className="hero-inner">
          <h1>Empower Your Team with Financial Confidence</h1>
          <p>
            An online course designed to reduce financial stress, boost
            productivity, and build lasting financial resilience.
          </p>
          <nav className="hero-actions" aria-label="Primary actions">
            <Button variant="contained" color="primary" className="btn-lg">
              Enroll Your Team
            </Button>
            {/* <Button variant="outlined" className="btn-lg btn-outline-light">
              Request a Demo
            </Button> */}
          </nav>
        </div>
      </section>

      {/* Why This Course Matters */}
      <section className="fee-why">
        <div className="why-text">
          <h2>Why This Course Matters</h2>
          <div className="stats">
            <div>
              <h3>67%</h3>
              <p>of employees say financial stress affects performance</p>
            </div>
            <div>
              <h3>2x</h3>
              <p>as likely to leave their jobs</p>
            </div>
          </div>
        </div>
        <div className="why-icon">
          <PieChartOutlineIcon sx={{ fontSize: 100, color: "#3B82F6" }} />
        </div>
      </section>

      {/* Benefits for Employers */}
      <section className="fee-benefits">
        <h2>Benefits for Employers</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <TrendingUpIcon />
            <h3>Boost Performance</h3>
            <p>Reduce distractions and improve focus</p>
          </div>
          <div className="benefit-card">
            <EmojiEventsIcon />
            <h3>Lower Turnover</h3>
            <p>Keep top talent longer</p>
          </div>
          <div className="benefit-card">
            <HandshakeIcon />
            <h3>Invest in Well-being</h3>
            <p>Show employees you care</p>
          </div>
          <div className="benefit-card">
            <StarIcon />
            <h3>Strengthen Your Brand</h3>
            <p>Be recognized as a people-first employer</p>
          </div>
        </div>
      </section>

      {/* Employee Learning Outcomes */}
      <section className="fee-outcomes">
        <h2>Employee Learning Outcomes</h2>
        <div className="outcomes-grid">
          <div>
            <AccountBalanceWalletIcon /> Build & Manage Budgets
          </div>
          <div>
            <AddCircleOutlineIcon /> Reduce Personal Debt
          </div>
          <div>
            <SavingsIcon /> Create an Emergency Fund
          </div>
          <div>
            <CreditScoreIcon /> Improve Credit Scores
          </div>
          <div>
            <TrackChangesIcon /> Set Growth Goals
          </div>
          <div>
            <AccessAlarmIcon /> Build Productivity Routines
          </div>
        </div>
      </section>

      {/* Course Delivery Format */}
      <section className="fee-delivery">
        <h2>Course Delivery Format</h2>
        <div className="delivery-grid">
          <div>
            <LanguageIcon /> 100% Online
          </div>
          <div>
            <EventIcon /> 4-Week Program
          </div>
          <div>
            <AssignmentIcon /> Tools & Templates
          </div>
        </div>
      </section>

      {/* (6) TESTIMONIALS & CASE STUDIES */}
      <section className="fee-testimonials">
        <h2>Testimonials & Case Studies</h2>
        <div className="testimonials-grid">
          {/* Employer testimonial */}
          <article className="testimonial-card">
            <header className="testimonial-head">
              <AccountCircleIcon sx={{ fontSize: 36, color: "#1E3A8A" }} />
              <span className="role-badge">Employer</span>
            </header>
            <div className="quote-row">
              <FormatQuoteIcon className="quote-icon" />
              <blockquote>
                “Within a month, absenteeism dropped and team focus improved.
                This course paid for itself in productivity.”
              </blockquote>
            </div>
          </article>

          {/* Employee testimonial */}
          <article className="testimonial-card">
            <header className="testimonial-head">
              <AccountCircleIcon sx={{ fontSize: 36, color: "#1E3A8A" }} />
              <span className="role-badge">Employee</span>
            </header>
            <div className="quote-row">
              <FormatQuoteIcon className="quote-icon" />
              <blockquote>
                “I built my first real budget and finally started an emergency
                fund. I feel in control.”
              </blockquote>
            </div>
            <div className="star-row" aria-label="5 out of 5 stars">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </article>
        </div>
      </section>

      {/* (7) FINAL CTA FOR HR */}
      <section className="fee-cta-final">
        <div className="cta-inner">
          <h2>
            Transform your team’s financial health and boost workplace
            productivity.
          </h2>
          <nav className="cta-actions" aria-label="Final calls to action">
            <Button variant="contained" color="secondary" className="btn-lg">
              Schedule a Consultation
            </Button>
            <Button variant="outlined" className="btn-lg btn-outline-light">
              Request Pricing
            </Button>
          </nav>
        </div>
      </section>
    </main>
  );
}
