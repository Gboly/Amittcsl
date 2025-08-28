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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { fsaCourses } from "@/utils/data";
import Link from "next/link";

export default function FSA() {
  const [expanded, setExpanded] = useState(null);

  return (
    <main className="fsa-page">
      {/* Hero Section */}
      <section className="fsa-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Grow & Preserve Your Wealth – The Practical Way</h1>
          <p>
            Practical financial skills course designed to help you save, invest,
            and build a lasting financial legacy.
          </p>
          <div className="hero-buttons">
            {/* <Link href={"/services/fsa/courses/catalogue"}> */}
            <Button variant="contained" color="primary">
              Explore Courses
            </Button>
            {/* </Link> */}

            {/* <Button variant="outlined" color="primary">
              Download Curriculum
            </Button> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="fsa-about">
        <div className="about-text">
          <h2>What is the Financial Academy about?</h2>
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
            style={{ width: "100%", height: "auto", borderRadius: "1rem" }}
          />
        </div>
      </section>

      {/* Who Section */}
      <section className="fsa-who">
        <h2>Who is this Academy for?</h2>
        <div className="who-grid">
          <div className="who-card">
            <SavingsIcon />
            <span>Future Wealthy Retiree</span>
          </div>
          <div className="who-card">
            <AttachMoneyIcon />
            <span>Savvy Saver</span>
          </div>
          <div className="who-card">
            <ShowChartIcon />
            <span>Intentional Investor</span>
          </div>
          <div className="who-card">
            <EmojiEventsIcon />
            <span>Goal-Oriented</span>
          </div>
          <div className="who-card">
            <ChildCareIcon />
            <span>Investor for Kids</span>
          </div>
          <div className="who-card">
            <CalculateIcon />
            <span>Financial Planner</span>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="fsa-topics">
        <h2>Some Topics Covered in the Academy Curriculum</h2>
        <div className="topics-layout">
          <ul>
            <li>Understanding the power of compounding</li>
            <li>Creating your personal income statement</li>
            <li>Saving and building wealth on a small income</li>
            <li>Budgeting that works specifically for you</li>
            <li>Investing Locally and Globally</li>
            <li>Investing for your kids</li>
            <li>Trusts and Wills</li>
          </ul>
        </div>
      </section>

      <section className="fsa-courses">
        <h2>Explore Specific Courses Under the Academy</h2>
        <div className="fsa-courses-grid">
          {fsaCourses.map((course) => (
            <div className="fsa-course-card" key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.shortDesc}</p>

              {expanded === course.id && (
                <div className="fsa-course-full">
                  {course.fullDesc}
                  <Link href={course.applicationLink}>
                    <button className="fsa-apply-btn">Apply Now</button>
                  </Link>
                </div>
              )}

              <button
                className="fsa-readmore-btn"
                onClick={() =>
                  setExpanded(expanded === course.id ? null : course.id)
                }
              >
                {expanded === course.id ? "Show Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="fsa-benefits">
        <h2>What You’ll Gain</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <span role="img" aria-label="tools">
              🛠
            </span>
            <h3>Practical Tools</h3>
            <p>Get calculators, templates & investment guides.</p>
          </div>
          <div className="benefit-card">
            <span role="img" aria-label="knowledge">
              📚
            </span>
            <h3>Knowledge You Can Use</h3>
            <p>Learn skills to apply immediately.</p>
          </div>
          <div className="benefit-card">
            <span role="img" aria-label="confidence">
              💡
            </span>
            <h3>Confidence in Decisions</h3>
            <p>Make smart money moves.</p>
          </div>
          <div className="benefit-card">
            <span role="img" aria-label="protection">
              🔒
            </span>
            <h3>Financial Protection</h3>
            <p>Safeguard and transfer wealth wisely.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="fsa-testimonials">
        <h2>What Our Participants Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <AccountCircleIcon className="testimonial-icon" />
            <p>{"I doubled my savings rate after week two!"}</p>
          </div>
          <div className="testimonial-card">
            <AccountCircleIcon className="testimonial-icon" />
            <p>{"Finally, I feel confident making investment choices."}</p>
          </div>
          <div className="testimonial-card">
            <AccountCircleIcon className="testimonial-icon" />
            <p>{"The tools and templates made financial planning simple."}</p>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section className="fsa-enrollment">
        <h2>Enrollment Details</h2>
        <ul>
          <li>
            <strong>Program Duration:</strong> 3 Weeks
          </li>
          <li>
            <strong>Format:</strong> Live + Recorded Sessions
          </li>
          <li>
            <strong>Start Date:</strong> [Upcoming Cohort Date]
          </li>
          <li>{/* <strong>Price:</strong> [If applicable] */}</li>
        </ul>
        <Button variant="contained" color="primary">
          Join the Next Cohort
        </Button>
      </section>

      {/* Final CTA Section */}
      <section className="fsa-final-cta">
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2>
            Take Control of Your Financial Future – Join the Financial Stewards
            Academy Today!
          </h2>
          <div className="cta-buttons">
            <Button variant="contained" color="secondary">
              Enroll Now
            </Button>
            <Link href="/contact">
              <Button variant="outlined" color="secondary">
                Contact Us for More Info
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
