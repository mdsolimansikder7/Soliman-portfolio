
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Download,
  Mail,
  MapPin,
} from "lucide-react";
import { profile } from "@/lib/data";
import SocialIcon from "./SocialIcon";

export default function Hero() {
  const reduce = useReducedMotion();

  const resume = () => {
    if (profile.resumePath) {
      window.open(
        profile.resumePath,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      window.alert(
        "Resume coming soon. Please email me for a copy."
      );
    }
  };

  // Open Gmail in the browser instead of the default mail application.
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}`;

  return (
    <>
      <section className="hero section-wrap" id="home">
        <motion.div
          className="hero-copy"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="eyebrow status-pill">
            <span className="status-dot" />
            FULL STACK DEVELOPER
            <span className="pill-divider" />
            OPEN TO OPPORTUNITIES
          </div>

          <h1>
            I craft digital
            <span className="headline-line">
              experiences
              <span className="headline-period">.</span>
            </span>
          </h1>

          <p className="hero-description">
            Hey, I&apos;m <strong>{profile.name}</strong> — a
            full stack developer who turns ideas into clear,
            thoughtful, and engaging web experiences.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Explore my work <ArrowDownRight size={18} />
            </a>

            <button
              type="button"
              className="button-secondary"
              onClick={resume}
            >
              <Download size={16} />
              Resume
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="hero-socials">
            <span>FIND ME ON</span>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="Visit my GitHub"
            >
              <SocialIcon type="github" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="Connect on LinkedIn"
            >
              <SocialIcon type="linkedin" />
            </a>

            {/* Opens Gmail in a new browser tab */}
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email me via Gmail"
              title="Send me an email"
            >
              <Mail size={18} />
            </a>

            <i />

            <span className="hero-location">
              <MapPin size={13} />
              {profile.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="portrait-halo" />

          <div className="portrait-orbit orbit-a">
            <span />
          </div>

          <div className="portrait-orbit orbit-b">
            <span />
          </div>

          <div className="portrait-frame">
            <div className="portrait-topline">
              <span>PROFILE_01</span>
              <span className="live-indicator">
                ● AVAILABLE
              </span>
            </div>

            <div className="portrait-image-wrap">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 900px) 82vw, 430px"
                className="portrait-image"
              />
            </div>

            <div className="portrait-bottomline">
              <span>BUILDING WITH PURPOSE</span>
              <span>BD · 2026</span>
            </div>
          </div>

          <motion.div
            className="floating-card code-card"
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="floating-icon">
              <Braces size={18} />
            </span>

            <div>
              <strong>Clean code</strong>
              <small>Thoughtful by design</small>
            </div>
          </motion.div>

          <motion.div
            className="floating-card stack-card"
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="stack-pips">
              <i>R</i>
              <i>N</i>
              <i>Ts</i>
            </span>

            <div>
              <strong>Modern stack</strong>
              <small>React · Next · TypeScript</small>
            </div>
          </motion.div>

          <span className="visual-coordinate coord-top">
            DHAKA / BANGLADESH
          </span>

          <span className="visual-coordinate coord-bottom">
            FIG. 01 — THE BUILDER
          </span>
        </motion.div>

        <a href="#about" className="scroll-cue">
          <span className="scroll-line" />
          SCROLL TO EXPLORE
          <ArrowDown size={13} />
        </a>
      </section>

      <section className="signal-strip">
        <div className="signal-inner">
          <span className="signal-label">✳ CURRENT FOCUS</span>
          <span>Responsive interfaces</span>
          <b>✳</b>
          <span>Useful digital products</span>
          <b>✳</b>
          <span>Full-stack growth</span>
          <b>✳</b>
          <span>Continuous learning</span>
        </div>
      </section>
    </>
  );
}
