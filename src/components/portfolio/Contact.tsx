
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  AtSign,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";
import { profile } from "@/lib/data";
import SocialIcon from "./SocialIcon";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (sending) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setSending(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Message could not be sent.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! Thank you for reaching out.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  }

  function goToContactForm() {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    document.getElementById("name")?.focus({
      preventScroll: true,
    });
  }

  // Open Gmail in the browser instead of invoking a mail application.
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}`;

  return (
    <>
      <section className="contact-band">
        <div className="contact-band-inner">
          <div>
            <span className="section-overline">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let&apos;s make something
              <br />
              <span>meaningful.</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={goToContactForm}
            className="contact-band-button"
          >
            Start a conversation <ArrowUpRight size={18} />
          </button>

          <div className="contact-band-orb" />
        </div>
      </section>

      <section className="section-wrap section-block" id="contact">
        <div className="section-kicker">
          <span>05 / SAY HELLO</span>
          <i />
        </div>

        <div className="contact-grid">
          <div className="contact-intro">
            <p className="section-overline">
              OPEN TO GOOD CONVERSATIONS
            </p>

            <h2>
              Have a good one
              <br />
              in <span>mind?</span>
            </h2>

            <p>
              Whether it&apos;s a collaboration, an opportunity,
              or just a conversation about the web — my inbox is open.
            </p>

            <div className="contact-methods">
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <span className="contact-method-icon">
                  <AtSign size={18} />
                </span>

                <span>
                  <small>EMAIL ME AT</small>
                  <strong>{profile.email}</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>

              {profile.phone && (
                <a
                  href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <span className="contact-method-icon">
                    <MapPin size={18} />
                  </span>

                  <span>
                    <small>PHONE / WHATSAPP</small>
                    <strong>{profile.phone}</strong>
                  </span>

                  <ArrowUpRight size={17} />
                </a>
              )}

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <span className="contact-method-icon">
                  <SocialIcon type="linkedin" />
                </span>

                <span>
                  <small>CONNECT ON</small>
                  <strong>LinkedIn</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <span className="contact-method-icon">
                  <SocialIcon type="github" />
                </span>

                <span>
                  <small>EXPLORE MY WORK</small>
                  <strong>GitHub</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <motion.form
            id="contact-form"
            className="contact-form"
            onSubmit={submit}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-heading">
              <span>01 — YOUR DETAILS</span>
              <span className="form-required">* REQUIRED</span>
            </div>

            <label htmlFor="name">
              Your name <span>*</span>
            </label>

            <input
              id="name"
              name="name"
              placeholder="Jane Smith"
              autoComplete="name"
              maxLength={100}
              required
            />

            <label htmlFor="email">
              Email address <span>*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@company.com"
              autoComplete="email"
              maxLength={254}
              required
            />

            <label htmlFor="message">
              What&apos;s on your mind? <span>*</span>
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell me a little about your idea..."
              rows={4}
              maxLength={5000}
              required
            />

            <button
              className="button-primary form-submit"
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending message..." : "Send message"}
              <Send size={16} />
            </button>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className={
                  status.type === "success"
                    ? "mt-4 text-sm text-green-400"
                    : "mt-4 text-sm text-red-400"
                }
              >
                {status.type === "success" && (
                  <CheckCircle2 size={16} className="mr-2 inline" />
                )}
                {status.message}
              </p>
            )}

            <p className="form-footnote">
              <Mail size={13} />
              Your message will be sent directly to my inbox.
            </p>
          </motion.form>
        </div>
      </section>
    </>
  );
}
