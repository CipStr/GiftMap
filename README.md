# GiftMap 💘

A romantic, mobile-first **static website template** to create a beautiful memory map with photo pins.

Perfect for:
- ❤️ Valentine’s Day
- 💍 Anniversaries
- 🎁 Surprise gifts
- 🌍 Travel memory projects

GiftMap lets you pin your special places on a map and attach photos and captions — all wrapped in an animated, romantic UI.

---

## ✨ Features

- 📍 Interactive map (OpenStreetMap + Leaflet)
- 💗 Custom heart-shaped map pins
- 📱 Fully mobile-first layout
- 🎬 Animated romantic cover screen
- 🖼️ Photo gallery (lightbox) per location
- 🧾 Simple data-driven structure
- 🔒 Privacy-friendly template system
- 🚀 Static build (deploy anywhere)

---

## 🛠 Tech Stack

- **React + Vite**
- **Leaflet + React-Leaflet**
- **Framer Motion**
- **yet-another-react-lightbox**
- Pure CSS (no UI framework)

---

# 🚀 Getting Started

## 1️⃣ Install dependencies

```bash
npm install
```

## 2️⃣ Initialize private data

This template keeps personal data out of Git by using *.private.js files.

Run the init script to create your private data files from the provided examples:

```bash
npm run init
```

This will create:
- `src/data/places.private.js`
- `src/data/siteConfig.private.js`
You can then edit these files to add your own places and site configuration.

## 3️⃣ Start development server

```bash
npm run dev
```
This will start the development server at `http://localhost:5173`.
Open this URL in your browser to see your GiftMap in action!

## 4️⃣ Add your photos
Add your photos to the `public/photos/` directory. Make sure the filenames match those referenced in `places.private.js`.

Recommended:
- Use compressed images (WebP or optimized JPG)

- Keep file size reasonable (ideally under 500kb per image)

- Use descriptive filenames

Example:
- public/photos/rome-1.jpg
- public/photos/rome-2.jpg


# 📝 Editing Content

## `src/data/siteConfig.private.js`

Customize:

- Couple name
- Cover title
- Romantic message
- Footer text

Example:

```js
export const siteConfig = {
  coupleName: "A & B",
  dedicationTitle: "Our Memory Map",
  dedicationSubtitle: "Every place holds a piece of our story.",
  footerText: "Made with love 💗",
};
```
## `src/data/places.private.js`
Add your special places with:
- Title
- Date
- Coordinates
- Subtitle
- Photos with captions
Example:
```js
export const places = [
    {
        title: "Rome",
        date: "2024-05-12",
        coords: [41.9028, 12.4964],
        subtitle: "Sunset together 🥹",
        photos: [
            { src: "/photos/capybara.jpg", caption: "You 💘" },
            { src: "/photos/example.jpg", caption: "Evening walk ✨" },
        ],
    },
]
```
# Remember: you need to change the import paths in `src/App.jsx` to point to your private data files.

## Privacy and dafety notes 

- `src/data/*.private.js` is ignored by Git (never committed).
- `public/photos/` is ignored by Git (never committed).

⚠ If you deploy publicly, the site is accessible via URL.

Consider:

- Using a non-obvious URL path
- Adding a `noindex` meta tag
- Limiting who you share the link with
- Hosting on a private deployment (if needed)

---

# 🏗 Build for Production

```bash
npm run build
```
This will create a production build in the `dist/` folder, ready for deployment.

## Deploying
You can deploy the contents of the `dist/` folder to any static hosting service (example: GitHub Pages, Netlify, Vercel, etc.).
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details
