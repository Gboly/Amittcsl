"use client";

import { useState } from "react";

export default function SubscriptionForm() {
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });

  const handleInput = (e) => {
    const { id, value } = e.target;
    setUserDetails({ ...userDetails, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Subscribed!"); // Just a placeholder for now
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        value={userDetails.name}
        onInput={handleInput}
      />
      <input
        type="email"
        id="email"
        placeholder="Your Email"
        value={userDetails.email}
        onInput={handleInput}
      />
      <button type="submit" disabled={!userDetails.name || !userDetails.email}>
        KEEP ME INFORMED
      </button>
    </form>
  );
}
