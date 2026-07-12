const fs = require("fs");
const path = require("path");

const roots = ["app", "components", "lib"];
const allowedFiles = new Set([
  path.normalize("app/globals.css"),
]);

const patterns = [
  {
    name: "Hex color",
    regex: /#[0-9a-fA-F]{3,8}\b/g,
  },
  {
    name: "RGB/RGBA color",
    regex: /\brgba?\s*\([^)]*\)/g,
  },
  {
    name: "HSL/HSLA color",
    regex: /\bhsla?\s*\([^)]*\)/g,
  },
  {
    name: "Tailwind arbitrary color",
    regex: /\b(?:bg|text|border|fill|stroke|shadow)-\[(?:#|rgb|rgba|hsl|hsla)[^\]]+\]/g,
  },
];

const extensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".css",
]);

function walk(directory) {
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);

    if (
      entry.name === "node_modules" ||
      entry.name === ".next" ||
      entry.name === ".git"
    ) {
      return [];
    }

    if (entry.isDirectory()) {
      return walk(fullPath);
    }

    return extensions.has(path.extname(entry.name)) ? [fullPath] : [];
  });
}

const findings = [];

for (const root of roots) {
  for (const file of walk(root)) {
    const normalized = path.normalize(file);

    if (allowedFiles.has(normalized)) continue;

    const content = fs.readFileSync(file, "utf8");
    const lines = content.split(/\r?\n/);

    lines.forEach((line, index) => {
      patterns.forEach(({ name, regex }) => {
        const matches = line.match(regex);

        if (matches) {
          findings.push({
            file,
            line: index + 1,
            type: name,
            values: matches.join(", "),
          });
        }
      });
    });
  }
}

if (findings.length > 0) {
  console.error("\nHardcoded colors found:\n");

  findings.forEach((finding) => {
    console.error(
      `${finding.file}:${finding.line} — ${finding.type}: ${finding.values}`,
    );
  });

  console.error(
    "\nMove these values into app/globals.css tokens before continuing.\n",
  );

  process.exit(1);
}

console.log(
  "Color audit passed: no hardcoded component colors found.",
);
