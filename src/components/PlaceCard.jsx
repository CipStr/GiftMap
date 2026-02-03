import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("it-IT", { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return iso;
  }
}

export default function PlaceCard({ place, onClose, onOpenGallery }) {
  return (
    <AnimatePresence>
      {place && (
        <motion.aside
          className="placeCard"
          initial={{ y: 16, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 16, opacity: 0, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <div className="placeCardHeader">
            <div>
              <h2 className="placeTitle">{place.title}</h2>
              <p className="placeMeta">{formatDate(place.date)} • {place.subtitle}</p>
            </div>
            <button className="iconBtn" onClick={onClose} aria-label="Chiudi">✕</button>
          </div>

          <div className="placePreview">
            <img
              src={place.photos?.[0]?.src}
              alt={place.photos?.[0]?.caption || `Foto ${place.title}`}
              className="previewImg"
              loading="lazy"
            />
            <div className="previewGlow" />
          </div>

          <div className="placeActions">
            <button className="btnPrimary" onClick={onOpenGallery}>
              Apri la galleria 💞
            </button>
            <span className="placeCount">
              {place.photos?.length || 0} ricordi
            </span>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
