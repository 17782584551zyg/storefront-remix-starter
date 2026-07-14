const fs=require("fs");
try {
const pkg = JSON.parse(fs.readFileSync("node_modules/remix-i18next/package.json", "utf8"));
delete pkg.browser;
pkg.module = "./build/index.js";
if (pkg.exports && pkg.exports["."]) {
pkg.exports["."].import = "./build/index.js";
}
fs.writeFileSync("node_modules/remix-i18next/package.json", JSON.stringify(pkg, null, 2));
console.log("Fixed remix-i18next package.json");
} catch (e) {
console.log("Error fixing remix-i18next:", e.message);
}