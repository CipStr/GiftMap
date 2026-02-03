import React, { useMemo } from "react";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function Hearts({ count = 16 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: rand(0, 100),
      size: rand(10, 22),
      duration: rand(9, 18),
      delay: rand(0, 8),
      opacity: rand(0.22, 0.6),
      drift: rand(-18, 18),
    }));
  }, [count]);

  return (
    <div className="hearts" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
            "--drift": `${h.drift}px`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}
