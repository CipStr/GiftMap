import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function PlaceSheet({ place, onClose, onOpenGallery }) {
  return (
    <AnimatePresence>
      {place && (
        <motion.section
          className="sheet"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          role="dialog"
          aria-label="Dettagli luogo"
        >
          <div className="sheetHandle" />
          <div className="sheetHeader">
            <div>
              <h2 className="sheetTitle">{place.title}</h2>
              <p className="sheetMeta">
                {formatDate(place.date)} • {place.subtitle}
              </p>
            </div>
            <button className="iconBtn" onClick={onClose} aria-label="Chiudi">
              ✕
            </button>
          </div>

          <div className="sheetPreview">
            <img
              src={place.photos?.[0]?.src}
              alt={place.photos?.[0]?.caption || `Foto ${place.title}`}
              loading="lazy"
            />
          </div>

          <div className="sheetActions">
            <button className="btnPrimary" onClick={onOpenGallery}>
              Apri la galleria 💞
            </button>
            <span className="hint">
              {place.photos?.length || 0} ricordi
            </span>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
