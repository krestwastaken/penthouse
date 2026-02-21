import { useState } from "react";

import {  offices } from "./data";


const regions = ["All", "Americas", "Europe", "Middle East", "Asia Pacific"];

export default function Offices() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [selected, setSelected] = useState(offices[0]);

  const filtered =
    activeRegion === "All"
      ? offices
      : offices.filter((o) => o.region === activeRegion);

      const officeDetails = [
        { label: "Address", value: selected.address },
        { label: "Phone", value: selected.phone },
        { label: "Email", value: selected.email },
        { label: "Office Head", value: selected.head },
      ];

  return (
    <main className="offices page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="tag">Global Presence</span>
          <h1 className="page-hero__title">
            Our <em>Offices</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Region filter */}
          <div className="office-filters">
            {regions.map((r) => (
              <button
                key={r}
                className={`filter-pill ${activeRegion === r ? "filter-pill--active" : ""}`}
                onClick={() => setActiveRegion(r)}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Layout: list + detail */}
          <div className="offices-layout">
            <div className="offices-list">
              {filtered.map((o) => (
                <div
                  key={o.id}
                  className={`office-item ${selected?.id === o.id ? "office-item--active" : ""}`}
                  onClick={() => setSelected(o)}
                >
                  <div className="office-item__left">
                    <h3 className="office-item__city">{o.city}</h3>
                    <span className="office-item__country">{o.country}</span>
                  </div>
                  <div className="office-item__region">{o.region}</div>
                  <span className="office-item__arrow">→</span>
                </div>
              ))}
            </div>

            {/* Detail panel */}
            {selected && (
              <div className="office-detail">
                <div className="office-detail__map-placeholder" />
                <div className="office-detail__info">
                  <div className="office-detail__header">
                    <div>
                      <h2 className="office-detail__city">{selected.city}</h2>
                      <span className="office-detail__country">
                        {selected.country}
                      </span>
                    </div>
                    <span className="office-detail__region tag">
                      {selected.region}
                    </span>
                  </div>
                  <div className="office-detail__fields">
                    {officeDetails.map(({ label, value }) => (
                      <div key={label} className="office-detail__field">
                        <span className="office-detail__field-label">
                          {label}
                        </span>
                        <span className="office-detail__field-value">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a href={`mailto:${selected.email}`} className="btn-primary">
                    Contact This Office
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
