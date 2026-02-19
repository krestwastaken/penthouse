import { useState } from "react";

import { properties,types, statuses } from "./data";

export default function Properties() {
  const [activeType, setActiveType] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");

  const filtered = properties.filter((p) => {
    const typeMatch = activeType === "All" || p.type === activeType;
    const statusMatch = activeStatus === "All" || p.status === activeStatus;
    return typeMatch && statusMatch;
  });

  return (
    <main className="properties page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="tag">Portfolio</span>
          <h1 className="page-hero__title">
            Our <em>Properties</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="prop-filters">
            <div className="filter-group">
              <span className="filter-label">Type</span>
              <div className="filter-pills">
                {types.map((t) => (
                  <button
                    key={t}
                    className={`filter-pill ${activeType === t ? "filter-pill--active" : ""}`}
                    onClick={() => setActiveType(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <span className="filter-label">Status</span>
              <div className="filter-pills">
                {statuses.map((s) => (
                  <button
                    key={s}
                    className={`filter-pill ${activeStatus === s ? "filter-pill--active" : ""}`}
                    onClick={() => setActiveStatus(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <span className="prop-count">{filtered.length} Properties</span>
          </div>

          {/* Grid */}
          <div className="prop-grid">
            {filtered.map((p) => (
              <div key={p.id} className="prop-card">
                <div className="prop-card__img">
                  <div className="prop-card__img-inner" />
                  {p.tag && <span className="prop-card__badge">{p.tag}</span>}
                  <span className="prop-card__status">{p.status}</span>
                </div>
                <div className="prop-card__body">
                  <div className="prop-card__type">{p.type}</div>
                  <h3 className="prop-card__name">{p.name}</h3>
                  <p className="prop-card__location">📍 {p.location}</p>
                  <div className="prop-card__specs">
                    <span>{p.beds} Bed</span>
                    <span className="dot" />
                    <span>{p.baths} Bath</span>
                    <span className="dot" />
                    <span>{p.sqft} sqft</span>
                  </div>
                  <div className="prop-card__footer">
                    <span className="prop-card__price">{p.price}</span>
                    <button className="btn-primary prop-card__cta">
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="empty-state">
              <p>No properties match your current filters.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
