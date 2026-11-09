
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Activity,
  Shield,
  BrainCircuit,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "DevPulse",
    category: "DEVELOPER PRODUCTIVITY",
    description:
      "A developer-focused dashboard designed to bring productivity insights, coding activity and development progress into one place.",
    technologies: ["React", "JavaScript", "CSS", "API"],
    status: "BUILDING",
    icon: Activity,
    color: "#dce7df",
    textColor: "#426b53",
    github: "",
    demo: "",
  },
  {
    number: "02",
    name: "CyberPulse",
    category: "CYBERSECURITY",
    description:
      "A cybersecurity dashboard concept focused on presenting security insights, threat information and monitoring data through a clean interface.",
    technologies: ["React", "JavaScript", "CSS", "Security"],
    status: "PROJECT",
    icon: Shield,
    color: "#e5dce0",
    textColor: "#a35e78",
    github: "",
    demo: "",
  },
  {
    number: "03",
    name: "AI Resume & Career Intelligence",
    category: "ARTIFICIAL INTELLIGENCE",
    description:
      "An AI-powered career intelligence platform planned to analyze resumes, identify skill gaps and provide actionable career recommendations.",
    technologies: ["Python", "AI / ML", "NLP", "React"],
    status: "PLANNED",
    icon: BrainCircuit,
    color: "#e5e1d2",
    textColor: "#8c784a",
    github: "",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">

        <div className="projects-heading">
          <div>
            <p className="section-label">02 / SELECTED WORK</p>
            <h2>Ideas into <span>reality.</span></h2>
          </div>

          <p className="projects-count">
            A COLLECTION OF EXPERIMENTS
            <br />
            AND THINGS I'VE BUILT.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className="project-card"
                key={project.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="project-visual">
                  <div
                    className="project-art"
                    style={{
                      backgroundColor: project.color,
                      color: project.textColor,
                    }}
                  >
                    <span className="project-art-number">
                      / {project.number}
                    </span>

                    <Icon
                      className="project-art-icon"
                      strokeWidth={1}
                    />

                    <span className="project-art-name">
                      {project.name}
                    </span>

                    <span className="project-art-caption">
                      AVIEK / DIGITAL WORKS
                    </span>
                  </div>
                </div>

                <div className="project-information">
                  <div className="project-topline">
                    <span className="project-category">
                      {project.category}
                    </span>
                    <span className="project-status">
                      {project.status}
                    </span>
                  </div>

                  <h3>{project.name}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Code2 size={15} /> SOURCE CODE
                        <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      <span className="project-link-disabled">
                        <Code2 size={15} /> SOURCE CODE
                      </span>
                    )}

                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        LIVE PREVIEW <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="projects-footer">
          <span>MORE EXPERIMENTS COMING SOON.</span>
          <a
            href="https://github.com/Aviek-25"
            target="_blank"
            rel="noreferrer"
          >
            EXPLORE GITHUB <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
