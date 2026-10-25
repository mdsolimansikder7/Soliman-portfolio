"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  GraduationCap,
  ArrowRight,
  Sparkles,
  BookOpen,
} from "lucide-react";

const steps = [
  {
    category: "UNDERGRADUATE EDUCATION",
    date: "2025 – PRESENT · 5TH SEMESTER",
    title: "B.Sc. in Computer Science and Engineering",
    text: "Currently pursuing my undergraduate degree in Computer Science and Engineering at Sonargaon University. I am in my 5th semester, strengthening my programming, software development, and problem-solving skills.",
    Icon: CalendarDays,
  },
  {
    category: "HIGHER SECONDARY EDUCATION",
    date: "COMPLETED · 2023",
    title: "Higher Secondary Certificate (HSC)",
    text: "Completed my HSC in 2023 at Government Maulana Mohammad Ali College, building a strong academic foundation for my university studies.",
    Icon: BookOpen,
  },
  {
    category: "SECONDARY EDUCATION",
    date: "COMPLETED · 2021",
    title: "Secondary School Certificate (SSC)",
    text: "Completed my SSC in 2021 at Bindubasini Government Boys' High School, taking my first major step in my academic journey.",
    Icon: GraduationCap,
  },
];

export default function Journey() {
  return (
    <section
      className="section-wrap section-block"
      id="journey"
    >
      <div className="section-kicker">
        <span>03 / EDUCATION & JOURNEY</span>
        <i />
      </div>

      <div className="section-heading-row">
        <div>
          <p className="section-overline">
            MY ACADEMIC BACKGROUND
          </p>

          <h2>
            Learning today,
            <span> building tomorrow.</span>
          </h2>
        </div>

        <p className="heading-aside">
          My journey from secondary education to computer
          science is driven by curiosity, continuous learning,
          and a passion for building useful digital products.
        </p>
      </div>

      <div className="journey-layout">
        <div className="timeline">
          {steps.map((step, i) => {
            const Icon = step.Icon;

            return (
              <motion.article
                className="timeline-item"
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span
                  className={`timeline-dot ${
                    i === 0 ? "timeline-dot-active" : ""
                  }`}
                />

                <div className="timeline-meta">
                  <span>{step.category}</span>
                  <span>{step.date}</span>
                </div>

                <div className="timeline-title-row">
                  <h3>{step.title}</h3>
                  <Icon size={19} />
                </div>

                <p>{step.text}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.aside
          className="journey-note"
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="note-spark">
            <Sparkles size={21} />
          </div>

          <span className="note-label">
            CURRENT FOCUS
          </span>

          <h3>
            Growing as a computer science student and developer.
          </h3>

          <p>
            Exploring modern web technologies, developing
            real-world projects, and strengthening my skills
            in full-stack development.
          </p>

          <div className="note-footer">
            <span>LEARN</span>
            <ArrowRight size={14} />
            <span>BUILD</span>
            <ArrowRight size={14} />
            <span>GROW</span>
          </div>

          <div className="note-decoration">↗</div>
        </motion.aside>
      </div>
    </section>
  );
}