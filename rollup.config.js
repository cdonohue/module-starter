import buble from "rollup-plugin-buble";
const pkg = require("./package.json");

export default {
  entry: "src/index.js",
  plugins: [
    buble(),
  ],
  targets: [
    {
      dest: pkg.main,
      format: "umd",
      moduleName: "module",
      sourceMap: true
    }
  ]
}