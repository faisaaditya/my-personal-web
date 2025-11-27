// src/scripts/generateProjects.js
import fs from "fs";
import path from "path";

const projectsDir = path.resolve("public/projects");
const outputFile = path.resolve("src/data/projects.json");

// baca semua file dalam public/projects
const files = fs.readdirSync(projectsDir);

// kelompokkan berdasarkan prefix
function groupByPrefix(files) {
  const map = {};

  files.forEach((file) => {
    // contoh: lca01.jpg → prefix = "lca"
    const prefix = file.match(/^[a-zA-Z]+/);

    if (!prefix) return;

    const key = prefix[0];

    if (!map[key]) map[key] = [];
    map[key].push(`/projects/${file}`);
  });

  // sort agar urut
  Object.keys(map).forEach((key) => {
    map[key].sort();
  });

  return map;
}

const grouped = groupByPrefix(files);

// buat JSON pretty
fs.writeFileSync(outputFile, JSON.stringify(grouped, null, 2));

console.log("✔ Project JSON generated at src/data/projects.json");
