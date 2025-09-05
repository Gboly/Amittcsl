// app/corporate-gifts/page.tsx
"use client";
import "./page.css";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BrushIcon from "@mui/icons-material/Brush";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LinkIcon from "@mui/icons-material/Link";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CakeIcon from "@mui/icons-material/Cake";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Image from "next/image";
import Link from "next/link";

export default function CorporateGiftsPage() {
  return (
    <div className="corporate-gifts">
      {/* Section 1: Hero */}
      <section className="hero">
        <div className="container center">
          <h1>Customized Corporate Gifts that Inspire & Delight</h1>
          <p>
            Show appreciation with premium gifts tailored for employees,
            colleagues, and partners — perfect for holidays, birthdays,
            anniversaries, and corporate milestones.
          </p>
          <div className="hero-buttons">
            {/* <button className="btn-primary">Explore Gift Packages</button> */}
            <Link href={"/services/gifts/apply"}>
              <button className="btn-primary">Request Custom Order</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: About */}
      <section className="about">
        <div className="container two-col">
          <div className="text">
            <h2>Celebrate Moments That Matter</h2>
            <p>
              We help organizations strengthen relationships and foster a
              culture of appreciation through thoughtful and tailored gifting
              solutions. Whether it’s Christmas, New Year, Sallah,
              Anniversaries, or Company milestones, our curated gifts leave a
              lasting impression.
            </p>
            <em>Professional. Personal. Memorable.</em>
          </div>
          <div className="image">
            <Image
              src="/corporate-gifts.jpg"
              alt="Corporate Gifts"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Section 3: What We Offer */}
      <section className="what-we-offer">
        <div className="container">
          <h2 className="center">What We Offer</h2>
          <div className="grid">
            <div className="card">
              <StarBorderIcon fontSize="large" />
              <h3>Festive Gifts</h3>
              <p>
                Celebrate holidays like Christmas & New Year with meaningful
                presents.
              </p>
            </div>
            <div className="card">
              <EmojiEventsIcon fontSize="large" />
              <h3>Milestone Gifts</h3>
              <p>
                Mark anniversaries, promotions, and achievements with custom
                packages.
              </p>
            </div>
            <div className="card">
              <CakeIcon fontSize="large" />
              <h3>Birthday Surprises</h3>
              <p>
                Make birthdays memorable with thoughtful, personalized gifts.
              </p>
            </div>
            <div className="card">
              <CardGiftcardIcon fontSize="large" />
              <h3>Corporate Hampers</h3>
              <p>
                Elegant hampers filled with premium items tailored to your
                brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="center">How It Works</h2>
          <div className="grid">
            <div className="card">
              <CalendarTodayIcon fontSize="large" />
              <h3>Select Occasion</h3>
              <p>
                Choose from festive, milestone, or corporate gift categories.
              </p>
            </div>
            <div className="card">
              <EditNoteIcon fontSize="large" />
              <h3>Customize Package</h3>
              <p>
                Personalize items with branding, themes, or recipient’s details.
              </p>
            </div>
            <div className="card">
              <LocalShippingIcon fontSize="large" />
              <h3>Deliver with Care</h3>
              <p>We ensure timely and professional delivery, hassle-free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="center">Why Choose Us</h2>
          <div className="grid">
            <div className="card">
              <BrushIcon fontSize="large" />
              <h3>Personalization</h3>
              <p>
                Every gift tailored to match the recipient or company culture.
              </p>
            </div>
            <div className="card">
              <EmojiEventsIcon fontSize="large" />
              <h3>Corporate Elegance</h3>
              <p>Premium-quality, professional items for all occasions.</p>
            </div>
            <div className="card">
              <LinkIcon fontSize="large" />
              <h3>End-to-End Service</h3>
              <p>We manage everything from design to delivery seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA Banner */}
      <section className="cta-banner">
        <div className="overlay">
          <div className="container center">
            <h2>Make Every Occasion Memorable with Corporate Gifts</h2>
            <p>
              Celebrate your people, strengthen connections, and inspire loyalty
              through thoughtful gifting.
            </p>
            <div className="cta-buttons">
              <Link href={"/services/gifts/apply"}>
                <button className="btn-primary">Request gift package</button>
              </Link>
              <Link href={"/contact"}>
                <button className="btn-secondary">Talk to Our Team</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
