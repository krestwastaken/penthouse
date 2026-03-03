import { useState } from "react";
import { properties, types, statuses } from "../data";
import Hero from "../../components/hero/Hero";
import styles from "./Properties.module.css";

export default function Properties() {
  const [activeType, setActiveType] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");

  const filtered = properties.filter((p) => {
    const typeMatch = activeType === "All" || p.type === activeType;
    const statusMatch = activeStatus === "All" || p.status === activeStatus;
    return typeMatch && statusMatch;
  });

  return (
    <main className={styles.properties}>
      {/* ── HERO ───────────────────────────────── */}
      <Hero
        tag="Portfolio"
        title={
          <>
            Our <em>Properties</em>
          </>
        }
        subtitle="Explore our curated selection of premium residential estates."
      />

      {/* ── LISTINGS ───────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          {/* Filters */}
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Type</span>
              <div className={styles.filterPills}>
                {types.map((t) => (
                  <button
                    key={t}
                    className={`${styles.filterPill} ${activeType === t ? styles.filterPillActive : ""}`}
                    onClick={() => setActiveType(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Status</span>
              <div className={styles.filterPills}>
                {statuses.map((s) => (
                  <button
                    key={s}
                    className={`${styles.filterPill} ${activeStatus === s ? styles.filterPillActive : ""}`}
                    onClick={() => setActiveStatus(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <span className={styles.propCount}>
              {filtered.length}{" "}
              {filtered.length === 1 ? "Property" : "Properties"}
            </span>
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {filtered.map((p) => (
              <div key={p.id} className={styles.card}>
                {/* Image */}
                <div className={styles.cardImg}>
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className={styles.cardImgInner}
                    />
                  ) : (
                    <div className={styles.cardImgInner} />
                  )}
                  {p.tag && <span className={styles.cardBadge}>{p.tag}</span>}
                  <span className={styles.cardStatus}>{p.status}</span>
                </div>

                {/* Body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardType}>{p.type}</div>
                  <h3 className={styles.cardName}>{p.name}</h3>
                  <p className={styles.cardLocation}>📍 {p.location}</p>
                  <div className={styles.cardSpecs}>
                    <span>{p.beds} Bed</span>
                    <span className={styles.dot} />
                    <span>{p.baths} Bath</span>
                    <span className={styles.dot} />
                    <span>{p.sqft} sqft</span>
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardPrice}>{p.price}</span>
                    <button className={styles.cardCta}>Enquire</button>
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className={styles.emptyState}>
                <p>No properties match your current filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
