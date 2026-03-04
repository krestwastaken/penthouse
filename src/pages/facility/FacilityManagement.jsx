import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import styles from "./FacilityManagement.module.css";

import { services, whatWeManage, valuePoints } from "./facilityData";

export default function FacilityManagement() {
    const [popupOpen, setPopupOpen] =useState(false)
  const closePopup = () => setPopupOpen(false);

  return (
    <main className={styles.page}>
      {/* ── HERO ───────────────────────────────── */}
      <Hero
        tag="Facility Management"
        size="compact"
        title={
          <>
            Your Property,
            <br />
            <em>Professionally Managed</em>
          </>
        }
        subtitle="Full-service facility management so you can focus on growth."
      />

      {/* ── WHO IS IT FOR ───────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.whoSection}>
            <div className={styles.whoText}>
              <div className={styles.whoEyebrow}>
                <span className={styles.goldLine} />
                <span className={styles.tagLight}>Who Is It For</span>
              </div>
              <h2 className={styles.whoTitle}>
                Built for Landlords,
                <br />
                Owners &amp; <em>Investors</em>
              </h2>
              <p className={styles.whoBody}>
                Penthouse Properties offers full-service facility management for
                landlords, property owners, and investors. We handle every
                aspect of your property so you don't have to worry.
              </p>
              <p className={styles.whoBody}>Our services cover:</p>
              <div className={styles.servicesList}>
                {services.map((s) => (
                  <span key={s} className={styles.serviceItem}>
                    {s}
                  </span>
                ))}
              </div>
              <p className={styles.whoBody}>
                With Penthouse Properties, your property is professionally
                managed to maintain its value. We take care of the details so
                you can focus on growth and investment.
              </p>
              <button
                className={styles.btnPrimary}
                onClick={() => setPopupOpen(true)}
              >
                Get Started →
              </button>
            </div>

            <div className={styles.whoVisual}>
              <div className={styles.visualMain} />
              <div className={styles.visualAccent} />
              <div className={styles.floatBadge}>
                <span className={styles.floatBadgeNum}>100%</span>
                <span className={styles.floatBadgeLabel}>
                  Managed Properties
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE MANAGE ─────────────────────── */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.manageSectionHead}>
            <span className={styles.tag}>Our Services</span>
            <h2>
              What We <em>Manage</em>
            </h2>
            <p>
              Every aspect of your property handled end-to-end, with
              transparency and professionalism at every step.
            </p>
          </div>

          <div className={styles.manageGrid}>
            {whatWeManage.map(({ icon, title, text }) => (
              <div key={title} className={styles.manageCard}>
                <span className={styles.manageIcon}>{icon}</span>
                <h3 className={styles.manageTitle}>{title}</h3>
                <p className={styles.manageText}>{text}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "48px" }}>
            <button
              className={styles.btnOutline}
              onClick={() => setPopupOpen(true)}
            >
              Request a Management Plan →
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY IT PROTECTS VALUE ──────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.valueSection}>
            <div className={styles.valueText}>
              <div className={styles.valueEyebrow}>
                <span className={styles.goldLine} />
                <span className={styles.tagLight}>Why It Matters</span>
              </div>
              <h2 className={styles.valueTitle}>
                Why It Protects
                <br />
                <em>Property Value</em>
              </h2>
              <p className={styles.valueBody}>
                Proper management keeps your property in top condition, prevents
                costly damage, and ensures tenant compliance. Regular
                maintenance, reliable security, and efficient operations mean
                your estate or building remains desirable, functional, and
                profitable — preserving and even increasing its market value
                over time.
              </p>

              <div className={styles.valuePoints}>
                {valuePoints.map(({ icon, label }) => (
                  <div key={label} className={styles.valuePoint}>
                    <span className={styles.valuePointIcon}>{icon}</span>
                    <span className={styles.valuePointLabel}>{label}</span>
                  </div>
                ))}
              </div>

              <button
                className={styles.btnPrimary}
                onClick={() => setPopupOpen(true)}
                style={{ marginTop: "8px" }}
              >
                Protect Your Investment →
              </button>
            </div>

            <div className={styles.valueImg}>
              {/* swap for: <img src={yourImg} alt="Property management" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSULTATION POPUP ─────────────────── */}
      {popupOpen && (
        <div className={styles.overlay} onClick={closePopup}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <button className={styles.popupClose} onClick={closePopup}>
              ✕
            </button>

            <h2 className={styles.popupTitle}>Let's Talk on WhatsApp</h2>
            <p className={styles.popupSub}>
              Chat directly with one of our facility management advisors — we
              typically respond within minutes.
            </p>
            <a
              href="https://wa.me/2348000000000?text=Hello%2C%20I%20am%20interested%20in%20Facility%20Management%20services."
              target="_blank"
              rel="noreferrer"
              className={styles.btnWhatsapp}
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>💬</span> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
