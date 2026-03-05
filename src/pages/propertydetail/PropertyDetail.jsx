import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { properties } from "../data";
import styles from "./PropertyDetail.module.css";

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => String(p.id) === String(id));

  if (!property) {
    return (
      <div className={styles.notFound}>
        <h2>Property Not Found</h2>
        <p>This listing may have been removed or the link is incorrect.</p>
        <Link to="/properties" className={styles.backLink}>
          ← Back to Properties
        </Link>
      </div>
    );
  }

  const {
    name,
    type,
    location,
    price,
    status,
    beds,
    baths,
    sqft,
    tag,
    image,
    images = [], // array of extra images if available
    description,
    features = [], // array of feature strings
  } = property;

  // WhatsApp message pre-filled with property name
  const whatsappMsg = encodeURIComponent(
    `Hello, I am interested in the property: ${name} (${location}) listed at ${price}. Please provide more information.`,
  );

  return (
    <main className={styles.page}>
      {/* ── BACK BAR ─────────────────────────── */}
      <div className={styles.backBar}>
        <div className={styles.backBarInner}>
          <Link to="/properties" className={styles.backBtn}>
            Back to Properties
          </Link>
          <div className={styles.breadcrumb}>
            <span>Properties</span>
            <span>›</span>
            <span>{name}</span>
          </div>
        </div>
      </div>

      {/* ── HERO STRIP ───────────────────────── */}
      <div className={styles.heroStrip}>
        <div className={styles.heroStripInner}>
          <div className={styles.heroMeta}>
            <span className={styles.propertyType}>{type}</span>
            <h1 className={styles.propertyName}>{name}</h1>
            <p className={styles.propertyLocation}>📍 {location}</p>
          </div>
          <div className={styles.heroPriceWrap}>
            <span className={styles.statusBadge}>{status}</span>
            <span className={styles.heroPrice}>{price}</span>
          </div>
        </div>

        {/* ── GALLERY ──────────────────────── */}
        <div className={styles.galleryGrid}>
          <div className={styles.galleryMain}>
            <img src={image} alt={name} />
          </div>
          <div className={styles.gallerySide}>
            {images[0] ? (
              <div className={styles.galleryThumb}>
                <img src={images[0]} alt={`${name} view 2`} />
              </div>
            ) : (
              <div className={styles.galleryThumb}>
                <img
                  src={image}
                  alt={name}
                  style={{ filter: "brightness(0.7)" }}
                />
              </div>
            )}
            {images[1] ? (
              <div className={styles.galleryThumb}>
                <img src={images[1]} alt={`${name} view 3`} />
                {images.length > 2 && (
                  <div className={styles.galleryThumbOverlay}>
                    +{images.length - 2} more photos
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.galleryThumb}>
                <img
                  src={image}
                  alt={name}
                  style={{ filter: "brightness(0.5)" }}
                />
                <div className={styles.galleryThumbOverlay}>View Gallery</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── MAIN LAYOUT ──────────────────────── */}
      <div className={styles.mainLayout}>
        {/* ── LEFT COLUMN ──────────────────── */}
        <div className={styles.leftCol}>
          {/* Specs */}
          <div className={styles.specsRow}>
            <div className={styles.specItem}>
              <span className={styles.specIcon}>🛏</span>
              <span className={styles.specValue}>{beds}</span>
              <span className={styles.specLabel}>Bedrooms</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specIcon}>🚿</span>
              <span className={styles.specValue}>{baths}</span>
              <span className={styles.specLabel}>Bathrooms</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specIcon}>📐</span>
              <span className={styles.specValue}>{sqft}</span>
              <span className={styles.specLabel}>Square Feet</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specIcon}>🏷</span>
              <span className={styles.specValue}>{type}</span>
              <span className={styles.specLabel}>Type</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specIcon}>📋</span>
              <span className={styles.specValue}>{status}</span>
              <span className={styles.specLabel}>Status</span>
            </div>
          </div>

          {/* Description */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>About This Property</h2>
            <p className={styles.blockText}>
              {description ||
                `${name} is a premium ${type?.toLowerCase()} located in ${location}. 
                This exceptional residence offers a rare opportunity to own a distinguished 
                property in one of the most sought-after addresses. Designed with meticulous 
                attention to detail, every element of this home reflects quality, comfort, 
                and enduring value. Contact us today to arrange a private viewing.`}
            </p>
          </div>

          {/* Features */}
          {features.length > 0 && (
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Features & Amenities</h2>
              <div className={styles.featuresGrid}>
                {features.map((f) => (
                  <div key={f} className={styles.featureItem}>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Default features if none provided */}
          {features.length === 0 && (
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Features & Amenities</h2>
              <div className={styles.featuresGrid}>
                {[
                  "Gated Estate",
                  "24/7 Security",
                  "Dedicated Parking",
                  "Backup Power",
                  "Fitted Kitchen",
                  "Quality Finishes",
                  "Paved Roads",
                  "Drainage System",
                ].map((f) => (
                  <div key={f} className={styles.featureItem}>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Location / Map */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Location</h2>
            <p className={styles.blockText}>{location}</p>
            <div className={styles.mapWrap}>
              <iframe
                title={`${name} location`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.4178696131294!2d7.541069874779419!3d8.933585291123954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e1100755d5b6d%3A0x9778b5ba07d25cec!2sKurudu%20phase%205!5e0!3m2!1sen!2sng!4v1772718056835!5m2!1sen!2sng"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — ENQUIRY ────────── */}
        <div className={styles.enquiryCard}>
          <div className={styles.enquiryCardHead}>
            <h3 className={styles.enquiryCardTitle}>
              Enquire About This Property
            </h3>
            <p className={styles.enquiryCardSub}>
              Our advisor will respond within 24 hours
            </p>
          </div>

          <div className={styles.enquiryDivider}>
            <span className={styles.enquiryDividerText}>chat us directly</span>
          </div>

          <a
            href={`https://wa.me/2348000000000?text=${whatsappMsg}`}
            target="_blank"
            rel="noreferrer"
            className={styles.whatsappBtn}
          >
            <span>💬</span> WhatsApp Us
          </a>
        </div>
      </div>
    </main>
  );
}
