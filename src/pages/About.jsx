import React from "react";
import { Link } from "react-router-dom";

import { team, cards } from "./data";

export default function About() {
  return (
    <main className="about page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="tag">Our Story</span>
          <h1 className="page-hero__title">
            Defining Luxury,
            <br />
            <em>One Address at a Time</em>
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container about__mission">
          <div className="about__mission-text">
            <div className="about__mission-eyebrow">
              <span className="gold-line" />
              <span className="tag">Our Philosophy</span>
            </div>
            <h2 className="about__mission-title">
              We believe that a home
              <br />
              is the ultimate <em>statement</em>.
            </h2>
            <p>
              Founded in 1999, Penthouse Real Estate has spent over two decades
              curating the world's most extraordinary residential properties.
              What began as a boutique agency in New York has grown into a
              global presence with 18 offices across 4 continents.
            </p>
            <p>
              We serve a discerning clientele who understand that true luxury is
              not merely about price — it is about provenance, craftsmanship,
              position, and the story a property tells.
            </p>
            <Link to="/contact" className="btn-primary">
              Work With Us
            </Link>
          </div>
          <div className="about__mission-visual">
            <div className="about__visual-block about__visual-block--main" />
            <div className="about__visual-block about__visual-block--accent" />
            <div className="about__stat-badge">
              <span className="about__stat-num">25+</span>
              <span className="about__stat-label">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about__values-section">
        <div className="container">
          <div className="section-center-head">
            <span className="tag">Core Values</span>
            <h2>
              What Drives <em>Everything We Do</em>
            </h2>
          </div>
          <div className="values-grid">
            {cards.map(({ icon, title, text }) => (
              <div key={title} className="value-card">
                <span className="value-card__icon">{icon}</span>
                <h3 className="value-card__title">{title}</h3>
                <p className="value-card__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-center-head">
            <span className="tag">The Team</span>
            <h2>
              Leadership That <em>Inspires Trust</em>
            </h2>
          </div>
          <div className="team-grid">
            {team.map(({ name, role, years }) => (
              <div key={name} className="team-card">
                <div className="team-card__img" />
                <div className="team-card__info">
                  <h3 className="team-card__name">{name}</h3>
                  <p className="team-card__role">{role}</p>
                  <span className="team-card__years">{years}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
