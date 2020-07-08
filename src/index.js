function requireAll(r) {
  r.keys().forEach(r);
}

import html from "./index.pug";
import style from "./styles/main.scss";
import script from "./scripts/plugin.js";
requireAll(require.context("./images/", true, /\.(png|jpe?g|gif)$/));
requireAll(require.context("./fonts/", true, /\.(eot|ttf|woff2?|otf)$/));

console.log("App loaded");
