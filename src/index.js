function requireAll(r) {
  r.keys().forEach(r);
}

import html from "./index.pug";
import style from "./styles/main.scss";
import script from "./scripts/plugin.js";
requireAll(require.context("./img/", true, /\.(png|jpe?g|gif|svg)$/));
requireAll(
  require.context("./fonts/", true, /\.(eot|ttf|woff2|woff|otf|svg)$/)
);

console.log("App loaded");