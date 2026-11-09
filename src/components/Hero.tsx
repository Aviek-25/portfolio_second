
"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Copy } from "lucide-react";

export default function Hero() {
  const copyEmail = async () => {
    await navigator.clipboard.writeText("YOUR_EMAIL@gmail.com");
    alert("Email copied!");
  };

  return (
    <section className="hero container" id="home">

      <div className="hero-meta">
        <div>
          <span className="status-dot" />
          OPEN TO AI ENGINEERING INTERNSHIPS
        </div>
        <span>INDIA · 2026</span>
      </div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        AVIEK
        <br />
        PRATAP SINGH<span className="accent-dot">.</span>
      </motion.h1>

      <div className="hero-content">

        <div className="hero-description">
          <p className="hero-role">
            Computer Science student
            <br />
            <span>who builds things that work.</span>
          </p>

          <p className="hero-intro">
            Turning ideas, code and curiosity into useful digital
            experiences. Currently exploring frontend engineering,
            Python and the world of AI & machine learning.
          </p>

          <p className="hero-small">
            i build. i experiment. i debug.
            <br />
            occasionally, everything works on the first try.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              explore my work <ArrowUpRight size={16} />
            </a>

            <button className="secondary-button" onClick={copyEmail}>
              <Copy size={14} /> copy email
            </button>
          </div>

          <div className="hero-social-note">
            or find me on{" "}
            <a href="https://github.com/Aviek-25" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="visual-top">
            <span>FIG. 001 — AVIEK</span>
            <span>PROFILE / 2026</span>
          </div>

          <div className="profile-placeholder">
            <span className="profile-initials">A.</span>
            <span className="profile-caption">
              YOUR PHOTO GOES HERE
            </span>
          </div>

          <div className="visual-annotation annotation-one">
            ✳ frontend enthusiast
          </div>

          <div className="visual-annotation annotation-two">
            currently learning AI / ML
          </div>

          <div className="visual-bottom">
            <span>DESIGNED WITH CURIOSITY</span>
            <span>01 / 01</span>
          </div>
        </motion.div>

      </div>

      <a href="#about" className="scroll-cue">
        <ArrowDown size={15} />
        SCROLL TO EXPLORE
      </a>

    </section>
  );
}
