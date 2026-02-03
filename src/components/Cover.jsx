import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cover({ open, config, onEnter }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-label="Copertina"
        >
          <motion.div
            className="coverCard"
            initial={{ y: 18, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 18, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <p className="coverEyebrow">{config.eyebrow}</p>
            <h1 className="coverTitle">{config.title}</h1>
            <p className="coverMessage">{config.message}</p>

            <button
              className="btnPrimary coverBtn"
              onClick={() => {
                // micro-effetto “cute” su mobile
                if (navigator.vibrate) navigator.vibrate(20);
                onEnter();
              }}
            >
              {config.cta}
            </button>

            <p className="coverHint">{config.hint}</p>
          </motion.div>

          <div className="coverGlow" aria-hidden="true" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
