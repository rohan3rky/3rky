import React from "react";
import "./HeroVideo.css";

export default function HeroVideo() {
  const heroBg = "/assets/1.jpeg"; // served from public/assets
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(8, 14, 34, 0.38) 0%, rgba(18, 10, 24, 0.2) 45%, rgba(5, 8, 18, 0.42) 100%), url(${heroBg})`,
      }}
    >
      <h1 className="hero-title">ROHAN KUMAR</h1>
      <p className="hero-subtitle">CONTENT CREATOR & STORYTELLER
      </p>
    </section>
  );
}
