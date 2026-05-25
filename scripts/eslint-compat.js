// CRA 1.x's eslint-loader requires 'eslint/lib/formatters/stylish', a path that
// ESLint moved to 'eslint/lib/cli-engine/formatters/stylish' in ESLint 6+.
// This script creates a shim at the old path after npm install.
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../node_modules/eslint/lib/formatters");
const shim = path.join(dir, "stylish.js");

if (!fs.existsSync(shim)) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    shim,
    'module.exports = require("../cli-engine/formatters/stylish");\n'
  );
  console.log("eslint-compat: created stylish formatter shim for CRA 1.x");
}
