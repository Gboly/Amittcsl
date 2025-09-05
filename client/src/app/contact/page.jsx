"use client";

import "./page.css";
import TextInput from "@/components/text-input/TextInput";
import { customMessageDetails } from "@/utils/data";

import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="contact">
      {/* Intro Section */}
      <section className="intro">
        <div className="intro-content">
          <header>Get In Touch</header>
          <p>
            Whether you're a talented professional or a company seeking the
            right fit, our team is ready to connect and guide you. Your journey
            begins with a simple message or call—let's embark on this
            transformative path together.
          </p>

          <aside className="contact-info">
            {/* Column 1 - Location */}
            <div className="contact-column">
              <LocationOnIcon style={{ color: "#e63946", fontSize: "2rem" }} />
              <p>
                UK: 1st Floor, North Westgate House, Harlow, Essex, England,
                CM20 1YS.
              </p>
              <p>Nigeria: Block 95 Omorinre Johnson Street, Lekki 1, Lagos.</p>
              <p>
                Nigeria: AACSL House, 5/7 Isheri Road, Berger, Lagos, Nigeria.
              </p>
            </div>

            {/* Column 2 - Phone */}
            <div className="contact-column">
              <CallIcon style={{ color: "#1d3557", fontSize: "2rem" }} />
              <p>+44 7887244035</p>
              <p>+44 7732687649</p>
              <p>+234 9046126671</p>
            </div>

            {/* Column 3 - Email */}
            <div className="contact-column">
              <MailIcon style={{ color: "#457b9d", fontSize: "2rem" }} />
              <p>info@amittcsl.com</p>
              <p>mlainsights@amittcsl.com</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="contact-images">
        <Image
          src="/contact-abstract-1.png"
          alt="Image 1"
          width={400}
          height={250}
        />
        <Image
          src="/contact-abstract-2.png"
          alt="Image 2"
          width={400}
          height={250}
        />
        <Image
          src="/contact-abstract-3.png"
          alt="Image 3"
          width={400}
          height={250}
        />
      </section>

      {/* Message Form Section */}
      <section className="message-form">
        <h2>Send Us A Message</h2>
        <form>
          {customMessageDetails.map(({ name, label }) => (
            <TextInput
              key={name}
              name={name}
              label={label}
              value={""}
              handleInput={() => {}}
            />
          ))}
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </main>
  );
}
