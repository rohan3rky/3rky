// App.jsx (excerpt)
import React from "react";
import Navbar from "./Navbar";
import HeroVideo from "./HeroVideo";
import Projects from "./Projects";
import About from "./About";
import "./App.css";
import Footer from "./Footer";
import ProjectGrid from "./ProjectGrid";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroVideo />

        {/* Background area visible in gutters for Projects + About */}
        <div className="site-bg">
          <div className="site-panel">
            <Projects />
             <div>
<ProjectGrid/>
            </div>
            <About />
          </div>

        </div>

      </main>
                            <Footer />

    </div>
  );
}
