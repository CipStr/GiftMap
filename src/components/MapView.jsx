import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";

const heartIcon = new L.DivIcon({
  className: "heartMarker",
  html: `<div class="heartPin">❤</div>`,
  iconSize: [34, 34],
  iconAnchor: [17, 30],
});

export default function MapView({ places, selectedId, onSelect }) {
  const centerItaly = [41.8719, 12.5674];

  const route = useMemo(() => places.map((p) => p.coords), [places]);

  return (
    <div className="mapWrap">
      <MapContainer
        center={centerItaly}
        zoom={5.4}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {route.length >= 2 && (
          <Polyline positions={route} pathOptions={{ className: "loveRoute" }} />
        )}

        {places.map((p) => (
          <Marker
            key={p.id}
            position={p.coords}
            icon={heartIcon}
            eventHandlers={{ click: () => onSelect(p.id) }}
          />
        ))}
      </MapContainer>

      <div className="mapHint">
        <span className="pill">Clicca un cuore 💘</span>
        {selectedId ? <span className="pill soft">Selezionato</span> : null}
      </div>
    </div>
  );
}
