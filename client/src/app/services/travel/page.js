"use client";

import "./page.css";
import Image from "next/image";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HikingIcon from "@mui/icons-material/Hiking";
import PublicIcon from "@mui/icons-material/Public";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AttractionsIcon from "@mui/icons-material/Attractions";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import EventIcon from "@mui/icons-material/Event";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PersonIcon from "@mui/icons-material/Person";
import WomanIcon from "@mui/icons-material/Woman";

export default function TravelPage() {
  return (
    <main className="travel-page">
      {/* Hero Section */}
      <section className="travel-hero">
        <div className="hero-bg">
          <Image
            src="/travel-hero.jpg"
            alt="Discover Africa"
            fill
            priority
            className="hero-img"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1>
            Discover Africa — <br />A Journey You’ll Never Forget
          </h1>
          <p>
            Tailored travel packages for young adults in the diaspora who want
            to reconnect, explore, and immerse themselves in Africa’s culture
            and adventure.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Book Your Adventure</button>
            <button className="btn-secondary">View Upcoming Trips</button>
          </div>
        </div>
      </section>

      {/* Who This Experience is For */}
      <section className="travel-who">
        <h2>Who This Experience is For</h2>
        <div className="who-grid">
          <div className="who-card">
            <BusinessCenterIcon />
            <h3>Young Professionals Abroad</h3>
            <p>
              Escape the routine and connect with Africa in a meaningful way
            </p>
          </div>
          <div className="who-card">
            <HikingIcon />
            <h3>Adventure & Culture Lovers</h3>
            <p>
              Experience the perfect mix of thrill, heritage, and relaxation
            </p>
          </div>
          <div className="who-card">
            <PublicIcon />
            <h3>Diaspora Seeking Connection</h3>
            <p>
              Strengthen your ties with the continent while enjoying
              unforgettable experiences
            </p>
          </div>
        </div>
      </section>

      <section className="travel-included">
        <div>
          <h2>What’s Included in Your Package</h2>
          <div className="included-grid">
            <Image
              src="/travel-package-person.jpg"
              alt="Travel"
              width={400}
              height={400}
              className="included-img"
            />
            <ul className="included-list">
              <li>
                <HotelIcon /> Accommodation
              </li>
              <li>
                <DirectionsCarIcon /> Transportation
              </li>
              <li>
                <RestaurantIcon /> Breakfast & Dinner
              </li>
              <li>
                <AttractionsIcon /> Entertainment
              </li>
              <li>
                <EventIcon /> Tours & Sightseeing
              </li>
              <li>
                <GroupsIcon /> Local Guide Support
              </li>
              <li>
                <CameraAltIcon /> Photography
              </li>
              <small>Flights (Participants book their own)</small>
            </ul>
          </div>
        </div>
      </section>

      {/* Sample Itinerary & Why Travel */}
      <section className="travel-itinerary">
        <div>
          <div className="itinerary-left">
            <h3>Sample Itinerary</h3>
            <ul className="itinerary-list">
              <li>
                <span>Day 1</span> Arrival — Airport pick up, hotel check-in,
                welcome dinner
              </li>
              <li>
                <span>Day 2</span> Cultural city tour — Museums, local cuisine
              </li>
              <li>
                <span>Day 3</span> Adventure activity — Beach, hiking, or safari
              </li>
              <li>
                <span>Day 4</span> Market & shopping day — Evening entertainment
              </li>
              <li>
                <span>Day 5</span> Farewell breakfast — Airport drop-off
              </li>
            </ul>
          </div>
          <div className="itinerary-right">
            <Image
              src="/travel-group.jpg"
              alt="Travel group"
              width={400}
              height={400}
              className="included-img"
            />
            <div className="why-travel">
              <h3>Why Travel With Us?</h3>
              <div className="why-grid">
                <div>
                  <CheckCircleIcon /> Stress Free Planning
                </div>
                <div>
                  <CheckCircleIcon /> Authentic Experiences
                </div>
                <div>
                  <CheckCircleIcon /> Safe & Secure
                </div>
                <div>
                  <Diversity3Icon /> Community Vibes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="travel-testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <WomanIcon className="testimonial-icon female" />
            <p>
              “From the moment I landed everything was seamless. I felt safe,
              welcomed and the experience was beyond anything I imagined.”
            </p>
            <span className="testimonial-author">Amina</span>
          </div>
          <div className="testimonial-card">
            <PersonIcon className="testimonial-icon male" />
            <p>
              “I met amazing people, explored incredible places, and finally got
              to connect with my heritage.”
            </p>
            <span className="testimonial-author">David</span>
          </div>
          <div className="testimonial-card">
            <WomanIcon className="testimonial-icon female" />
            <p>
              “It was the perfect mix of culture, fun, and relaxation. I can’t
              wait for my next trip.”
            </p>
            <span className="testimonial-author">Tolu</span>
          </div>
        </div>
      </section>
    </main>
  );
}
