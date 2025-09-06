"use client";

import "./page.css";
import Image from "next/image";

// MUI Icons
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
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import MuseumIcon from "@mui/icons-material/Museum";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

export default function TravelPage() {
  return (
    <main className="travel-page">
      {/* Hero Section */}
      <section className="travel-hero">
        <div className="hero-bg">
          <Image
            src="/travel-hero.jpg"
            alt="AMITT Travels & Tours — West Africa"
            fill
            priority
            className="hero-img"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1>AMITT Travels & Tours</h1>
          <h2>Your Gateway to West Africa’s Finest Experiences</h2>
          <p>
            West Africa Holiday Packages — Curated group travel experiences
            across West Africa blending culture, adventure, leisure, and
            entertainment.
          </p>
          <div className="hero-buttons">
            <Link href="\services\travel\apply">
              <button className="btn-primary">Book Your Group Package</button>
            </Link>
            {/* <button className="btn-secondary">View Upcoming Trips</button> */}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="travel-who">
        <h2>Company Overview</h2>
        <div className="who-grid">
          <div className="who-card">
            <PublicIcon />
            <h3>Curated West Africa Getaways</h3>
            <p>
              We design all-inclusive, group-friendly holidays that merge
              immersion and comfort—perfect for unforgettable getaways.
            </p>
          </div>
          <div className="who-card">
            <HikingIcon />
            <h3>Culture • Adventure • Leisure</h3>
            <p>
              From art galleries and heritage sites to beaches, nightlife, and
              private events.
            </p>
          </div>
          <div className="who-card">
            <BusinessCenterIcon />
            <h3>Seamless Logistics</h3>
            <p>
              Flights, private transfers, lodging, guided tours, and on-ground
              support handled end-to-end.
            </p>
          </div>
        </div>
      </section>

      {/* What’s Included */}
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
                <FlightTakeoffIcon /> Flights & Local Transportation
              </li>
              <li>
                <DirectionsCarIcon /> Private Airport & City Transfers
              </li>
              <li>
                <HotelIcon /> Accommodation (Private Chef option available)
              </li>
              <li>
                <RestaurantIcon /> Dining Experiences (Breakfast & Dinner plans)
              </li>
              <li>
                <NightlifeIcon /> Entertainment & Lifestyle (concerts,
                nightlife, exclusive events)
              </li>
              <li>
                <EventIcon /> Guided Tours & Sightseeing
              </li>
              <li>
                <GroupsIcon /> Professional On-Ground Support
              </li>
              <li>
                <CameraAltIcon /> Photo-worthy Moments (assisted content)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Private Tours / Attractions */}
      <section className="travel-itinerary">
        <div>
          <div className="itinerary-left">
            <h3>Featured Private Tours & Key Attractions</h3>
            <ul className="itinerary-list">
              <li>
                <MuseumIcon /> Nike Art Gallery (Nigeria)
              </li>
              <li>
                <AttractionsIcon /> Lekki Conservation Centre (Nigeria)
              </li>
              <li>
                <AttractionsIcon /> Olumo Rock • Olusegun Obasanjo Library
                (Nigeria)
              </li>
              <li>
                <BeachAccessIcon /> Private Beaches (Nigeria &amp; Ghana)
              </li>
              <li>
                <LocationOnIcon /> Labadi Beach • Jamestown Lighthouse (Ghana)
              </li>
              <li>
                <CheckCircleIcon /> …and other hidden gems
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="itinerary-right">
            <Image
              src="/travel-group.jpg"
              alt="Travel group"
              width={400}
              height={400}
              className="included-img"
            />
            <div className="why-travel">
              <h3>Why Choose Us?</h3>
              <div className="why-grid">
                <div>
                  <CheckCircleIcon /> Curated cultural immersion with comfort
                </div>
                <div>
                  <CheckCircleIcon /> Exclusive access to attractions & private
                  events
                </div>
                <div>
                  <CheckCircleIcon /> Tailored group options (fine dining, chef)
                </div>
                <div>
                  <CheckCircleIcon /> Reliable logistics & pro on-ground support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample 7-Day Itinerary */}
      <section className="travel-itinerary">
        <div>
          <div className="itinerary-left">
            <h3>Sample Itinerary (7 Days)</h3>
            <ul className="itinerary-list">
              <li>
                <span>Day 1</span> Arrival — Airport pick-up, hotel check-in,
                welcome dinner
              </li>
              <li>
                <span>Day 2</span> Cultural City Tour — Museums, art stops,
                local cuisine
              </li>
              <li>
                <span>Day 3</span> Adventure — Beaches, hiking, or safari
              </li>
              <li>
                <span>Day 4</span> Markets & Shopping — Evening entertainment
              </li>
              <li>
                <span>Day 5</span> Full-Day Excursion — Waterfalls / national
                park / nearby town
              </li>
              <li>
                <span>Day 6</span> Leisure & Add-ons — Spa, boat cruise,
                photoshoot, private chef dinner
              </li>
              <li>
                <span>Day 7</span> Farewell breakfast — Airport drop-off
              </li>
            </ul>
          </div>

          {/* Booking Terms */}
          <div className="itinerary-right">
            <div className="why-travel">
              <h3>Booking Terms</h3>
              <div className="why-grid">
                <div>
                  <CheckCircleIcon /> Minimum group size: <strong>10</strong>{" "}
                  travellers
                </div>
                <div>
                  <CheckCircleIcon /> Minimum stay: <strong>7 nights</strong>
                </div>
                <div>
                  <CheckCircleIcon /> Book at least <strong>2 months</strong>{" "}
                  before departure
                </div>
                <div>
                  <CheckCircleIcon /> Short-notice bookings welcome (additional
                  fees apply)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="travel-who">
        <h2>Target Audience</h2>
        <div className="who-grid">
          <div className="who-card">
            <GroupsIcon />
            <h3>Families, Friends & Social Groups</h3>
            <p>Cultural exploration with comfort and convenience.</p>
          </div>
          <div className="who-card">
            <BusinessCenterIcon />
            <h3>Corporate Teams</h3>
            <p>Memorable bonding retreats with seamless planning.</p>
          </div>
          <div className="who-card">
            <PublicIcon />
            <h3>International Tourists</h3>
            <p>Vibrant culture, history, and natural beauty of West Africa.</p>
          </div>
        </div>
      </section>

      {/* Testimonials (kept) */}
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

      {/* Contact CTA */}
      <section className="travel-included">
        <div className="info-banner" style={{ textAlign: "center" }}>
          <h2>Ready to Explore West Africa?</h2>
          <p>
            Contact <strong>AMITT Travels &amp; Tours</strong> to book your
            group package today.
          </p>
          <p>
            Email:{" "}
            <a href="mailto:travelsandtours@amitttcsl.com">
              travelsandtours@amitttcsl.com
            </a>{" "}
            • Phone: <a href="tel:+2349046126671">+234-9046126671</a>
          </p>
          <div className="hero-buttons" style={{ justifyContent: "center" }}>
            <Link href="\services\travel\apply">
              <button className="btn-primary">Book Your Trip</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
