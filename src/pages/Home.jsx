import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const featuredProperties = [
  {
    id: 1,
    name: "Sky Penthouse",
    location: "Manhattan, New York",
    price: "$12.4M",
    beds: 4,
    sqft: "5,200 sqft",
    tag: "Exclusive",
  },
  {
    id: 2,
    name: "Glass Villa",
    location: "Beverly Hills, CA",
    price: "$8.9M",
    beds: 5,
    sqft: "7,800 sqft",
    tag: "New Listing",
  },
  {
    id: 3,
    name: "The Terrace",
    location: "Miami Beach, FL",
    price: "$5.6M",
    beds: 3,
    sqft: "$3,400 sqft",
    tag: "Featured",
  },
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 10;
      el.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg-wrap">
          <div className="hero__bg" ref={heroRef} />
          <div className="hero__overlay" />
        </div>

        <div className="hero__content container">
          <div className="hero__eyebrow">
            <span className="gold-line" />
            <span className="tag">Luxury Real Estate</span>
          </div>
          <h1 className="hero__title">
            Where Sky
            <br />
            Meets <em>Luxury</em>
          </h1>
          <p className="hero__sub">
            Curating the world's most extraordinary residences
            <br className="hide-mobile" />
            for those who demand the exceptional.
          </p>
          <div className="hero__actions">
            <Link to="/properties" className="btn-primary">
              View Properties
            </Link>
            <Link to="/about" className="hero__link">
              Our Story <span>→</span>
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero__stats">
          {[
            { num: "300+", label: "Properties Sold" },
            { num: "$4.2B", label: "In Total Sales" },
            { num: "18", label: "Global Offices" },
            { num: "25+", label: "Years of Excellence" },
          ].map(({ num, label }) => (
            <div key={label} className="hero__stat">
              <span className="hero__stat-num">{num}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="section featured">
        <div className="container">
          <div className="section-head">
            <div className="section-head__left">
              <span className="tag">Portfolio</span>
              <h2 className="section-head__title">
                Featured
                <br />
                <em>Properties</em>
              </h2>
            </div>
            <Link to="/properties" className="btn-primary">
              View All
            </Link>
          </div>

          <div className="property-grid">
            {featuredProperties.map((p) => (
              <div key={p.id} className="property-card">
                <div className="property-card__img">
                  <div className="property-card__img-inner" />
                  <span className="property-card__tag">{p.tag}</span>
                </div>
                <div className="property-card__body">
                  <h3 className="property-card__name">{p.name}</h3>
                  <p className="property-card__location">{p.location}</p>
                  <div className="property-card__meta">
                    <span>{p.beds} Beds</span>
                    <span className="dot" />
                    <span>{p.sqft}</span>
                  </div>
                  <div className="property-card__footer">
                    <span className="property-card__price">{p.price}</span>
                    <Link to="/properties" className="property-card__cta">
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="quote-section">
        <div className="container">
          <blockquote className="quote">
            <span className="quote__mark">"</span>
            <p>
              We don't just sell properties — we place individuals into their
              truest expression of life.
            </p>
            <cite>— Penthouse Philosophy</cite>
          </blockquote>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-box__content">
              <span className="tag">Ready to Begin?</span>
              <h2 className="cta-box__title">
                Find Your
                <br />
                <em>Perfect Residence</em>
              </h2>
              <p className="cta-box__text">
                Our advisors are ready to guide you through a curated selection
                of the world's finest addresses.
              </p>
              <Link to="/contact" className="btn-primary">
                Schedule a Consultation
              </Link>
            </div>
            <div className="cta-box__visual" />
          </div>
        </div>
      </section>
    </main>
  );
}
