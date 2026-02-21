import { Link } from "react-router-dom";

import { featuredProperties } from "../data";
import Hero from "../../components/hero/Hero";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      {/* HERO */}
      <Hero />

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
      <section className={styles.quoteSection}>
        <div className={styles.quoteInner}>
          <div className={styles.quotePerson}>
            <span className={styles.quotePersonName}>Alexander Voss</span>
            <span className={styles.quotePersonRole}>Founder, Penthouse</span>
          </div>
          <div className={styles.quoteContent}>
            <span className={styles.quoteMark}>"</span>
            <p>
              We don't just sell properties — we place individuals into their
              truest expression of life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaBoxContent}>
              <span className={styles.tag}>Ready to Begin?</span>
              <h2 className={styles.ctaBoxTitle}>
                Find Your
                <br />
                <em>Perfect Residence</em>
              </h2>
              <p className={styles.ctaBoxText}>
                Our advisors are ready to guide you through a curated selection
                of the world's finest addresses.
              </p>
              <Link to="/contact" className={styles.btnPrimary}>
                Schedule a Consultation
              </Link>
            </div>
            <div className={styles.ctaBoxVisual} />
          </div>
        </div>
      </section>
    </main>
  );
}
