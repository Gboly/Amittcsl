"use client";

import "./page.css";
import Image from "next/image";

// MUI Icons
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineIcon from "@mui/icons-material/Timeline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleIcon from "@mui/icons-material/People";
import CommentIcon from "@mui/icons-material/Comment";
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
            alt="Control Your Investments"
            fill
            priority
            className="hero-img"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <h1>Take Control of Your Investments</h1>
          <p>Expert stock & shares management tailored to your goals.</p>
          <div className="hero-buttons">
            {/* <button className="btn-primary">Get Started</button> */}
            <button className="btn-primary">Book Consultation</button>
          </div>
        </div>
      </section>

      {/* ===================== Section 2: What We Do ===================== */}
      <section className="stocks-what">
        <h2>What We Do</h2>
        <p className="what-intro">
          Our Stock & Shares Management service is designed to guide individuals
          and businesses through efficient portfolio structuring, investment
          monitoring, and maximizing returns while mitigating risks.
        </p>

        <div className="what-grid">
          <div className="what-card">
            <AccountBalanceIcon />
            <h3>Diversified Portfolio Strategies</h3>
            <p>
              We help you create a balanced and diversified portfolio for
              optimized returns.
            </p>
          </div>
          <div className="what-card">
            <TrendingUpIcon />
            <h3>Real-Time Market Monitoring</h3>
            <p>
              Track your investments with real-time market updates and alerts.
            </p>
          </div>
          <div className="what-card">
            <TimelineIcon />
            <h3>Short & Long-Term Planning</h3>
            <p>
              We create personalized strategies to achieve both short-term and
              long-term goals.
            </p>
          </div>
          <div className="what-card">
            <CheckCircleIcon />
            <h3>Transparent Reporting</h3>
            <p>
              Receive clear, transparent reports on your investments and
              portfolio performance.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== Section 3: How It Works ===================== */}
      <section className="stocks-how">
        <h2>How It Works</h2>
        <div className="how-grid">
          <div className="how-card">
            <CommentIcon />
            <h3>Consultation</h3>
            <p>Speak with an expert advisor to discuss your financial goals.</p>
          </div>
          <div className="how-card">
            <DataUsageIcon />
            <h3>Portfolio Setup</h3>
            <p>
              We create a personalized investment plan tailored to your needs.
            </p>
          </div>
          <div className="how-card">
            <TrendingUpIcon />
            <h3>Active Management</h3>
            <p>
              Our team actively manages your investments for optimal
              performance.
            </p>
          </div>
          <div className="how-card">
            <TimelineIcon />
            <h3>Reports & Growth</h3>
            <p>
              Receive detailed reports on your portfolio and track your growth.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== Section 4: Why Choose Us ===================== */}
      <section className="stocks-why">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-card">
            <PeopleIcon />
            <h3>Expert Advisors</h3>
            <p>Our team consists of experienced investment professionals.</p>
          </div>
          <div className="why-card">
            <DataUsageIcon />
            <h3>Data-Driven Decisions</h3>
            <p>
              We use data and analysis to make informed investment decisions.
            </p>
          </div>
          <div className="why-card">
            <VisibilityIcon />
            <h3>Transparency</h3>
            <p>We maintain transparency in our processes and reporting.</p>
          </div>
        </div>
      </section>

      {/* ===================== Section 5: Client Success Stories =====================
      <section className="stocks-testimonials">
        <h2>Client Success Stories</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “The stock management service has significantly improved my
              investment returns.”
            </p>
            <span className="testimonial-author">Client 1</span>
          </div>
          <div className="testimonial-card">
            <p>
              “Professional and reliable. I trust their expertise and guidance.”
            </p>
            <span className="testimonial-author">Client 2</span>
          </div>
          <div className="testimonial-card">
            <p>
              “Their data-driven approach to stock management is impressive.”
            </p>
            <span className="testimonial-author">Client 3</span>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="stocks-testimonials">
        <h2>Testimonials</h2>
        <div className="stocks-testimonial-grid">
          <div className="stocks-testimonial-card">
            <WomanIcon className="stocks-testimonial-icon female" />
            <p>
              “The stock management service has significantly improved my
              investment returns.”
            </p>
            <span className="stocks-testimonial-author">Amina, UK</span>
          </div>
          <div className="stocks-testimonial-card">
            <PersonIcon className="stocks-testimonial-icon male" />
            <p>
              “Professional and reliable. I trust their expertise and guidance.”
            </p>
            <span className="stocks-testimonial-author">David, USA</span>
          </div>
          <div className="stocks-testimonial-card">
            <WomanIcon className="stocks-testimonial-icon female" />
            <p>
              “Their data-driven approach to stock management is impressive.”
            </p>
            <span className="stocks-testimonial-author">Tolu, Canada</span>
          </div>
        </div>
      </section>
    </main>
  );
}
