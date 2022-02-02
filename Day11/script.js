/* how to create comment for html with js */
document.body.append(
  document.createComment("Hi this comment Created by js !!!")
);

/* create site element with js */

// Add fontawesomeCdn to Head with js

const fontawesomeCdn = document.createElement("link");

fontawesomeCdn.rel = "stylesheet";
fontawesomeCdn.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

document.head.append(fontawesomeCdn);

// Create Header with js

const siteHeader = document.createElement("header");

siteHeader.style.display = "flex";
siteHeader.style.justifyContent = "space-around";
siteHeader.style.backgroundColor = "#152846";

const siteLogo = document.createElement("h1");

siteLogo.textContent = "Practic site";
siteLogo.style.color = "white";

const siteHeaderMenu = document.createElement("i");

siteHeaderMenu.className = "fa fa-list fa-2x";
siteHeaderMenu.style.color = "white";
siteHeaderMenu.style.margin = "auto 0";

siteHeader.append(siteLogo, siteHeaderMenu);

// Create Header with js

const siteCarusel = document.createElement("img");
siteCarusel.style.width = "100%";
siteCarusel.style.height = "80%";
let slide = 0;
siteCarusel.src = `https://picsum.photos/1350/40${[slide]}`;

setInterval(() => {
  slide += 1;
  siteCarusel.src = `https://picsum.photos/1350/40${[slide]}`;
}, 6000);

document.body.append(siteHeader, siteCarusel);
