"use client";

import "./page.css";
import Image from "next/image";
import { Button } from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import CalculateIcon from "@mui/icons-material/Calculate";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function FSA() {
  return (
    <main className="fsa-page">
      {/* Hero Section */}
      <section className="fsa-hero">
        <div className="hero-content">
          <h1>Grow & Preserve Your Wealth – The Practical Way</h1>
          <p>
            Practical 8-week financial skills course designed to help you save,
            invest, and build a lasting financial legacy.
          </p>
          <div className="hero-buttons">
            <Button variant="contained" color="primary">
              Enroll Now
            </Button>
            <Button variant="outlined" color="primary">
              Download Curriculum
            </Button>
          </div>
        </div>
        <div className="hero-icon">
          <Image
            src="/hero-icon.png"
            alt="Growth Icon"
            width={120}
            height={120}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="fsa-about">
        <div className="about-text">
          <h2>What is Financial Stewards Academy about?</h2>
          <p>
            Imagine how far we would have come if our schools taught us about
            the actual making and growing money. That school is here now –
            Financial Stewards Academy!
          </p>
        </div>
        <div className="about-image">
          <Image
            src="/about-fsa.jpg"
            alt="About FSA"
            width={1640}
            height={925}
            style={{ width: "100%", height: "auto", borderRadius: "0.5rem" }}
          />
        </div>
      </section>

      {/* Who is this Academy for */}
      <section className="fsa-who">
        <h2>Who is this Academy for?</h2>
        <div className="who-grid">
          <div>
            <SavingsIcon />
            <span>Future Wealthy Retiree</span>
          </div>
          <div>
            <AttachMoneyIcon />
            <span>Savvy Saver</span>
          </div>
          <div>
            <ShowChartIcon />
            <span>Intentional Investor</span>
          </div>
          <div>
            <EmojiEventsIcon />
            <span>Goal-Oriented</span>
          </div>
          <div>
            <ChildCareIcon />
            <span>Investor for Kids</span>
          </div>
          <div>
            <CalculateIcon />
            <span>Financial Planner</span>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="fsa-topics">
        <h2>Some Topics Covered in the Academy Curriculum</h2>
        <div className="topics-layout">
          <ul>
            <li>Understanding the power of compounding</li>
            <li>Creating your personal income statement</li>
            <li>Saving and building wealth on a small income</li>
            <li>Budgeting that works specifically for you</li>
            <li>Investing in Fixed Income Vehicles</li>
            <li>Investing for your kids</li>
          </ul>
          <div className="topic-cards">
            <div className="topic-card">Annual Income Like to Wanonoz</div>
            <div className="topic-card">Direct & Saving Techniques</div>
            <div className="topic-card">Smart White Protection</div>
          </div>
        </div>
        <Button variant="contained" color="primary" className="full-btn">
          Download Full Curriculum
        </Button>
      </section>
    </main>
  );
}
