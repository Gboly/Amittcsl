"use client";

import { motion } from "framer-motion";
import "./page.css";
import CTAButton from "@/components/cta/CTA";
import ServiceCard from "@/components/service-card/ServiceCard";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { services } from "@/utils/data";

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-video">
          <source
            src="https://res.cloudinary.com/dirwr8cde/video/upload/v1754005294/Amitt/amitt-gif_sknc1s.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <motion.div
          className="hero-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div>
            <span>Training</span>
            <span>Consulting</span>
            <span>Advisory</span>
          </div>
        </motion.div>
      </section>

      <motion.section
        className="empowerment-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Empowering growth through knowledge, capital and experience.</h2>
      </motion.section>

      <section className="pattern-section">
        <div className="pattern-bg" />
        <motion.div
          className="pattern-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>A Partner in Growth, From Mindset to Market</h2>
          <p>
            {`We are a multi-service training and consulting company providing
            capacity-building programs, financial education, startup funding
            facilitation, and tailored travel solutions. Whether you're an
            individual, a startup, or an established company, we offer the
            tools, strategies, and connections to help you move forward.`}
          </p>
          <CTAButton href="/services" label="Discover How We Can Help →" />
        </motion.div>
      </section>

      <section className="services-section">
        <div className="services-wrapper">
          <h2>Services We Provide</h2>
          <div className="services-grid">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-pattern-section">
        <div className="cta-pattern-bg" />
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Build Your Future?</h2>
          <ul className="cta-list">
            <li>
              <Link href="/contact">
                Contact us for consultation
                <ArrowForwardIcon fontSize="small" />
              </Link>
            </li>
            <li>
              <Link href="/services">
                Explore our diverse range of services
                <ArrowForwardIcon fontSize="small" />
              </Link>
            </li>
            <li>
              <Link href="/programs">
                Sign up for a program <ArrowForwardIcon fontSize="small" />
              </Link>
            </li>
          </ul>
        </motion.div>
      </section>
    </main>
  );
}
