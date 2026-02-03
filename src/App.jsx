import React, { useMemo, useState } from "react";
import { siteConfig } from "./data/siteConfig.example";
import { places } from "./data/places.example";

import Hearts from "./components/Hearts";
import MapView from "./components/MapView";
import PlaceSheet from "./components/PlaceSheet";
import Cover from "./components/Cover";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function App() {
  const [coverOpen, setCoverOpen] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  const selectedPlace = useMemo(
    () => places.find((p) => p.id === selectedId) || null,
    [selectedId]
  );

  const slides = useMemo(() => {
    if (!selectedPlace?.photos?.length) return [];
    return selectedPlace.photos.map((p) => ({
      src: p.src,
      description: p.caption,
    }));
  }, [selectedPlace]);

  return (
    <div className="page">
      <Hearts count={20} />

      <Cover
        open={coverOpen}
        config={siteConfig.cover}
        onEnter={() => setCoverOpen(false)}
      />

      <header className="hero" aria-hidden={coverOpen}>
        <div className="heroInner">
          <p className="kicker">{siteConfig.coupleName}</p>
          <h1 className="title">{siteConfig.dedicationTitle}</h1>
          <p className="subtitle">{siteConfig.dedicationSubtitle}</p>
        </div>
      </header>

      <main className="main" aria-hidden={coverOpen}>
        <MapView
          places={places}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <PlaceSheet
          place={selectedPlace}
          onClose={() => setSelectedId(null)}
          onOpenGallery={() => setGalleryOpen(true)}
        />
      </main>

      <Lightbox
        open={isGalleryOpen}
        close={() => setGalleryOpen(false)}
        slides={slides}
        render={{
          slide: ({ slide }) => (
            <div className="lightboxSlide">
              <img
                className="lightboxImg"
                src={slide.src}
                alt={slide.description || "foto"}
              />
              {slide.description ? (
                <div className="lightboxCaption">{slide.description}</div>
              ) : null}
            </div>
          ),
        }}
      />

      <footer className="footer" aria-hidden={coverOpen}>
        {siteConfig.footerText}
      </footer>
    </div>
  );
}
