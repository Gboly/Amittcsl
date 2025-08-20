"use client";

import React from "react";
import "./page.css";
import { Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupIcon from "@mui/icons-material/Group";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import LayersIcon from "@mui/icons-material/Layers";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Image from "next/image";

export default function ProfessionalCourses() {
  return (
    <div className="professionalCourses">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Professionals with Future-Ready Skills</h1>
          <p>
            AMITT delivers engaging, high-quality learning solutions designed to
            enhance critical thinking, innovation, and digital transformation
            readiness.
          </p>
          <div className="hero-buttons">
            <Button variant="contained" color="primary">
              Explore Courses
            </Button>
            <Button variant="outlined" color="primary">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Learning That Transforms */}
      <section className="learning">
        <div className="learning-container">
          <div className="learning-image">
            <Image
              src="/professional-learning.jpg"
              alt="Learning session"
              width={400}
              height={400}
            />
          </div>
          <div className="learning-text">
            <h2>LEARNING THAT TRANSFORMS</h2>
            <ul>
              <li>✔ Drives innovation & effectiveness</li>
              <li>✔ Built for complex environments</li>
              <li>✔ Scalable, high-quality delivery</li>
            </ul>
            <Button variant="contained" color="primary">
              Explore Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Courses We Offer */}
      <section className="courses">
        <h2>Courses We Offer</h2>
        <div className="courses-grid">
          <div className="course-card">
            <SchoolIcon className="icon" />
            <h3>Customer Service Training</h3>
            <p>Master client interaction & loyalty building</p>
          </div>
          <div className="course-card">
            <BusinessCenterIcon className="icon" />
            <h3>The Power of Professionalism</h3>
            <p>Elevate workplace excellence</p>
          </div>
          <div className="course-card">
            <GroupIcon className="icon" />
            <h3>Introduction to Team Leadership</h3>
            <p>Build essential leadership skills</p>
          </div>
          <div className="course-card">
            <ManageAccountsIcon className="icon" />
            <h3>Essential Management</h3>
            <p>Develop effective people & project management</p>
          </div>
          <div className="course-card">
            <PsychologyIcon className="icon" />
            <h3>Emotional Intelligence at Workplace</h3>
            <p>Foster growth culture in your teams</p>
          </div>
          <div className="course-card">
            <EmojiEventsIcon className="icon" />
            <h3>Ambition: The Root of All Achievement</h3>
            <p>Build motivation & career growth</p>
          </div>
        </div>
        <div className="center-btn">
          <Button variant="contained" color="primary">
            See Full Course Catalogue
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <EditNoteIcon className="icon" />
            <h3>Enroll</h3>
            <p>Sign up easily through our platform</p>
          </div>
          <div className="step">
            <MenuBookIcon className="icon" />
            <h3>Learn</h3>
            <p>Participate in engaging sessions (virtual & in-person)</p>
          </div>
          <div className="step">
            <TrendingUpIcon className="icon" />
            <h3>Apply & Grow</h3>
            <p>Implement knowledge in your workplace immediately</p>
          </div>
        </div>
      </section>

      {/* Why Choose AMITT */}
      <section className="why-choose">
        <h2>Why Choose AMITT</h2>
        <div className="reasons">
          <div className="reason-card">
            <VerifiedIcon className="icon" />
            <h3>Expert Trainers</h3>
            <p>Learn from seasoned professionals with years of experience</p>
          </div>
          <div className="reason-card">
            <LayersIcon className="icon" />
            <h3>Scalable Solutions</h3>
            <p>Customizable learning paths tailored to your needs</p>
          </div>
          <div className="reason-card">
            <RocketLaunchIcon className="icon" />
            <h3>Proven Impact</h3>
            <p>Track record of boosting productivity & innovation</p>
          </div>
        </div>
      </section>
    </div>
  );
}
