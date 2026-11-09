
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, GraduationCap, BrainCircuit } from "lucide-react";

const details = [
  {
    number: "01",
    icon: GraduationCap,
    title: "EDUCATION",
    description: "B.Tech · Computer Science",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "CURRENT FOCUS",
    description: "AI Engineering · Machine Learning",
  },
  {
    number: "03",
    icon: Code2,
    title: "BUILDING WITH",
    description: "React · JavaScript · Python",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">

        <div className="about-heading">
          <p className="section-label">01 / A LITTLE ABOUT ME</p>
          <span className="about-index">INTRODUCTION — 2026</span>
        </div>

        <div className="about-grid">

          <motion.div
            className="about-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>
              Curious by nature.
              <br />
              <span>Developer by choice.</span>
            </h2>

            <div className="about-copy">
              <p>
                Hey, I'm Aviek — a Computer Science student pursuing
                my B.Tech, interested in building useful things
                through technology.
              </p>

              <p>
                I enjoy working on projects that go beyond tutorials.
                From interactive web applications to experimenting
                with AI-powered ideas, I like understanding how
                systems work and turning ideas into something real.
              </p>

              <p>
                Currently, I'm strengthening my foundations in
                Python, frontend engineering, AI and machine learning
                while working towards becoming an AI Engineer.
              </p>
            </div>

            <a href="#projects" className="about-link">
              A LOOK AT WHAT I BUILD
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            className="about-side"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="about-note">
              <span className="section-label">THE SHORT VERSION</span>
              <p>
                "I don't claim to know everything.
                I'm here to learn, build, break things,
                fix them, and get better with every project."
              </p>
              <span className="note-signature">— AVIEK</span>
            </div>

            <div className="about-details">
              {details.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="detail-item" key={item.number}>
                    <span className="detail-number">{item.number}</span>
                    <Icon size={19} strokeWidth={1.5} />
                    <div>
                      <span className="detail-title">{item.title}</span>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

        <div className="about-footer">
          <span>LESS TALK. MORE BUILDING.</span>
          <span>END OF INTRODUCTION ↘</span>
        </div>

      </div>
    </section>
  );
}
