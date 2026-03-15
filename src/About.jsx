import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h1>I'm Rohan Kumar — a video editor and content strategist</h1>

        <p>
          I help creators, individuals, and businesses transform raw footage into
          polished, high-impact videos for digital platforms.
        </p>

        <p>
          From social media shorts to brand and promotional content, I focus on
          storytelling, pacing, and clarity to make each edit engaging and
          professional. My goal is to create videos that not only look great but
          perform well across platforms like Instagram and YouTube.
        </p>

        <p>
          If you want a reliable creative partner to bring structure and quality
          to your video content.
        </p>

        <div className="about-cta">
          <a
            href="mailto:rohankumar.3rky@gmail.com"
            className="cta-link"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}