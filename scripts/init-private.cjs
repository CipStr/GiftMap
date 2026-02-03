const fs = require("fs");
const path = require("path");

const pairs = [
  ["src/data/siteConfig.example.js", "src/data/siteConfig.private.js"],
  ["src/data/places.example.js", "src/data/places.private.js"],
];

for (const [from, to] of pairs) {
  const src = path.resolve(from);
  const dst = path.resolve(to);
  if (!fs.existsSync(dst)) {
    fs.copyFileSync(src, dst);
    console.log(`Created ${to} from example`);
  } else {
    console.log(`Exists: ${to}`);
  }
}
