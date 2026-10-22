"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects, profile } from "@/lib/data";
import SocialIcon from "./SocialIcon";

export default function Projects() {
  const totalProjects = String(projects.length).padStart(2, "0");

  return (
    <section className="section-wrap section-block" id="projects">
      <div className="section-kicker">
        <span>04 / SELECTED WORK</span>
        <i />
      </div>

      <div className="section-heading-row">
        <div>
          <p className="section-overline">A FEW THINGS I&apos;VE BUILT</p>
          <h2>
            Made with <span>intention.</span>
          </h2>
        </div>

        <a
          className="text-link"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          All repositories <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.article
            className="project-card"
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              className="project-art-link"
              href={`/projects/${project.slug}`}
            >
              <div className="project-art">
                <Image
                  src={project.image}
                  alt={`${project.name} project cover`}
                  fill
                  sizes="(max-width: 750px) 90vw, (max-width: 1100px) 45vw, 33vw"
                  className="project-image"
                />

                <span className="project-art-index">
                  {String(i + 1).padStart(2, "0")} / {totalProjects}
                </span>

                <span className="project-art-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>

            <div className="project-card-body">
              <div className="project-meta">
                <span>{project.category}</span>
                <span className="project-featured">
                  <Sparkles size={12} /> {project.featured}
                </span>
              </div>

              <h3>
                <Link href={`/projects/${project.slug}`}>
                  {project.name}
                </Link>
              </h3>

              <p>{project.summary}</p>

              <div className="project-tags">
                {project.stack.slice(0, 4).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-card-footer">
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-details"
                >
                  View project details <ArrowUpRight size={16} />
                </Link>

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} repository`}
                  className="project-github"
                >
                  <SocialIcon type="github" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="projects-bottom">
        <span>MORE IDEAS ARE IN THE WORKS</span>
        <span className="bottom-spark">✳</span>

        <a href={profile.github} target="_blank" rel="noreferrer">
          Explore my GitHub <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
