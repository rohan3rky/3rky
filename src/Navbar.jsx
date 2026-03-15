import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.7;

      if (window.scrollY < heroHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="nav-inner">
        <nav className="nav-section">

          {/* SOCIAL ICONS LEFT */}
          <div className="social-icons">

            {/* Email */}
            <div
              className="icon-wrapper"
              onClick={() =>
                (window.location.href = "mailto:sammie.director@gmail.com")
              }
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="white"
                  d="M12 13L2 6.8V18H22V6.8L12 13ZM12 11L2 4H22L12 11Z"
                />
              </svg>
            </div>

            {/* Instagram */}
            <div
              className="icon-wrapper"
              onClick={() =>
                window.open("https://www.instagram.com/3r.k.y", "_blank")
              }
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="white"
                  d="M7 2C4.2 2 2 4.2 2 7V17C2 19.8 4.2 22 7 22H17C19.8 22 22 19.8 22 17V7C22 4.2 19.8 2 17 2H7ZM12 7C14.8 7 17 9.2 17 12C17 14.8 14.8 17 12 17C9.2 17 7 14.8 7 12C7 9.2 9.2 7 12 7ZM18 6.5C18 7.3 17.3 8 16.5 8C15.7 8 15 7.3 15 6.5C15 5.7 15.7 5 16.5 5C17.3 5 18 5.7 18 6.5Z"
                />
              </svg>
            </div>

            {/* YouTube */}
            <div
              className="icon-wrapper"
              onClick={() =>
                window.open("https://www.youtube.com/@rohanforever", "_blank")
              }
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="white"
                  d="M21.8 8.001a3 3 0 0 0-2.1-2.12C17.9 5.5 12 5.5 12 5.5s-5.9 0-7.7.38A3 3 0 0 0 2.2 8.001 31.6 31.6 0 0 0 2 12a31.6 31.6 0 0 0 .2 4c.26 1.01 1.11 1.86 2.1 2.12 1.8.38 7.7.38 7.7.38s5.9 0 7.7-.38a3 3 0 0 0 2.1-2.12A31.6 31.6 0 0 0 22 12a31.6 31.6 0 0 0-.2-4ZM10 15.5v-7l6 3.5-6 3.5Z"
                />
              </svg>
            </div>

          </div>
        </nav>
      </div>
    </header>
  );
}
