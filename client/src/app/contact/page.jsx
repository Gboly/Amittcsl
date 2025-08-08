"use client";

import "./page.css";
import TextInput from "@/components/text-input/TextInput";
import { customMessageDetails } from "@/utils/data";

import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";

export default function Contact() {
  return (
    <main className="contact">
      {/* Intro Section */}
      <section className="intro">
        <img src="/contact.png" alt="Contact" />
        <div>
          <div>
            <header>Get In Touch</header>
            <p>
              Whether you're a talented professional or a company seeking the
              right fit, our team is ready to connect and guide you. Your
              journey begins with a simple message or call—let's embark on this
              transformative path together.
            </p>
            <aside>
              <div>
                <CallIcon />
                <a href="tel:+447519280650">+447519280650</a>
              </div>
              <div>
                <MailIcon />
                <a href="mailto:info@amittconsulting.co.uk">
                  info@amittcsl.com
                </a>
              </div>
            </aside>
          </div>
        </div>
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
