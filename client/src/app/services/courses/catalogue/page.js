"use client";

import React, { useState } from "react";
import "./page.css";
import { Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupIcon from "@mui/icons-material/Group";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Customer Service Training",
    icon: <SchoolIcon className="icon" />,
    shortDesc: "Master client interaction & loyalty building.",
    fullDesc:
      "This course equips teams with advanced communication techniques, conflict resolution strategies, and client relationship management skills. Participants will learn to handle customer needs proactively, boost satisfaction, and build long-term loyalty.",
    value: "customer-service-training",
  },
  {
    id: 2,
    title: "The Power of Professionalism",
    icon: <BusinessCenterIcon className="icon" />,
    shortDesc: "Elevate workplace excellence.",
    fullDesc:
      "Learn how to embody professionalism across all aspects of work. This course covers workplace ethics, communication etiquette, personal branding, and effective collaboration to help participants establish credibility and enhance career progression.",
    value: "the-power-of-professionalism",
  },
  {
    id: 3,
    title: "Introduction to Team Leadership",
    icon: <GroupIcon className="icon" />,
    shortDesc: "Build essential leadership skills.",
    fullDesc:
      "A practical course designed for emerging leaders. Participants will explore leadership styles, motivation techniques, conflict management, and decision-making strategies to lead teams effectively in dynamic organizational environments.",
    value: "introduction-to-team-leadership",
  },
  {
    id: 4,
    title: "Essential Management",
    icon: <ManageAccountsIcon className="icon" />,
    shortDesc: "Develop effective people & project management.",
    fullDesc:
      "This course provides a strong foundation in organizational management. It covers project planning, resource allocation, delegation, and performance tracking to enable managers to drive efficiency and meet business goals.",
    value: "essential-management",
  },
  {
    id: 5,
    title: "Emotional Intelligence at Workplace",
    icon: <PsychologyIcon className="icon" />,
    shortDesc: "Foster growth culture in your teams.",
    fullDesc:
      "Participants will learn how to recognize, understand, and manage emotions — both their own and others’. The course focuses on empathy, communication, stress management, and team collaboration to create a positive work environment.",
    value: "emotional-intelligence-at-workplace",
  },
  {
    id: 6,
    title: "Ambition: The Root of All Achievement",
    icon: <EmojiEventsIcon className="icon" />,
    shortDesc: "Build motivation & career growth.",
    fullDesc:
      "This course empowers individuals to channel ambition into constructive career growth. Topics include goal-setting, resilience, continuous learning, and leveraging ambition to drive personal and organizational success.",
    value: "ambition-root-of-achievement",
  },
];

export default function CourseCatalogue() {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="professionalCourses">
      {/* Page Header */}
      <section className="hero">
        <div className="hero-content">
          <h1>Course Catalogue</h1>
          <p>
            Explore our comprehensive list of professional development courses
            designed for organizations and teams.
          </p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="courses">
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              {course.icon}
              <h3>{course.title}</h3>
              <p>
                {expanded === course.id ? course.fullDesc : course.shortDesc}
              </p>
              {expanded !== course.id && (
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => handleExpand(course.id)}
                  className="more"
                >
                  Read More ➝
                </Button>
              )}
              {expanded === course.id && (
                <Link href={`/services/courses/apply?course=${course.value}`}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: "1rem" }}
                    className="enroll"
                  >
                    Enroll
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
