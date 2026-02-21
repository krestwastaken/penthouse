import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { featuredProperties } from "../data";
import styles from "./Home.module.css";

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
    <main className={styles.home}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBgWrap}>
          <div className={styles.heroBg} ref={heroRef} />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>
            <span className={styles.goldLine} />
            <span className={styles.tag}>Luxury Real Estate</span>
          </div>
          <h1 className={styles.heroTitle}>
            Find A Home
            <br />
            That suits <em>You</em>
          </h1>
          <p className={styles.heroSub}>
            Curating the world's most extraordinary residences
            <br className={styles.hideMobile} />
            for those who demand the exceptional.
          </p>
          <div className={styles.heroActions}>
            <Link to="/properties" className={styles.btnPrimary}>
              View Properties
            </Link>
            <Link to="/about" className={styles.heroLink}>
              Our Story <span>→</span>
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className={styles.heroStats}>
          {[
            { num: "300+", label: "Properties Sold" },
            { num: "$4.2B", label: "In Total Sales" },
            { num: "18", label: "Global Offices" },
            { num: "25+", label: "Years of Excellence" },
          ].map(({ num, label }) => (
            <div key={label} className={styles.heroStat}>
              <span className={styles.heroStatNum}>{num}</span>
              <span className={styles.heroStatLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SEARCH BAR ─────────────────────────── */}
      {/* <div className={styles.searchBar}>
        <div className={styles.searchBarInner}>
          <p className={styles.searchLabel}>Search for available properties</p>

          <div className={styles.searchField}>
            <span className={styles.searchIcon}>📍</span>
            <select defaultValue="">
              <option value="" disabled>
                Location
              </option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Miami</option>
              <option>London</option>
              <option>Dubai</option>
            </select>
          </div>

          <div className={styles.searchField}>
            <span className={styles.searchIcon}>🏠</span>
            <select defaultValue="">
              <option value="" disabled>
                Property Type
              </option>
              <option>Penthouse</option>
              <option>Villa</option>
              <option>Residence</option>
            </select>
          </div>

          <div className={styles.searchField}>
            <span className={styles.searchIcon}>💰</span>
            <select defaultValue="">
              <option value="" disabled>
                Budget
              </option>
              <option>Under $1M</option>
              <option>$1M – $5M</option>
              <option>$5M – $15M</option>
              <option>$15M+</option>
            </select>
          </div>

          <button className={styles.searchBtn}>Search Now</button>
        </div>
      </div> */}

      {/* ── FEATURED PROPERTIES ────────────────── */}
            <section className={`${styles.section} ${styles.featured}`}>
              <div className={styles.container}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <span className={styles.tag}>Popular</span>
                    <h2 className={styles.sectionTitle}>Our Popular Homes</h2>
                  </div>
                  <Link to="/properties" className={styles.exploreLink}>
                    Explore All
                  </Link>
                </div>
      
                <div className={styles.propertyGrid}>
                  {featuredProperties.map((p) => (
                    <div key={p.id} className={styles.propertyCard}>
                      <div className={styles.propertyCardImg}>
                        <div className={styles.propertyCardImgInner} />
                        {p.tag && (
                          <span className={styles.propertyCardTagBadge}>{p.tag}</span>
                        )}
                      </div>
                      <div className={styles.propertyCardBody}>
                        <h3 className={styles.propertyCardName}>{p.name}</h3>
                        <p className={styles.propertyCardLocation}>{p.location}</p>
                        <div className={styles.propertyCardMeta}>
                          <span>{p.beds} Bed</span>
                          <span className={styles.dot} />
                          <span>{p.sqft}</span>
                          <span className={styles.dot} />
                          <span>1600 m</span>
                        </div>
                        <div className={styles.propertyCardFooter}>
                          <Link to="/properties" className={styles.propertyCardCta}>
                            Book Now
                          </Link>
                          <span className={styles.propertyCardPrice}>{p.price}</span>
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
