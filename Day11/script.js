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
siteHeader.style.justifyContent = "space-between";
siteHeader.style.backgroundColor = "#152846";
siteHeader.style.padding = "0 6rem";

// Create siteLogo with js

const siteLogo = document.createElement("h1");

siteLogo.textContent = "Practic site";
siteLogo.style.color = "white";

// Create burgerMenu with js

const siteburgerMenu = document.createElement("ul");

siteburgerMenu.style.backgroundColor = "#152846";
siteburgerMenu.style.margin = "0 6rem";
siteburgerMenu.style.padding = "0";
siteburgerMenu.style.width = "10rem";
siteburgerMenu.style.display = "none";
siteburgerMenu.style.position = "absolute";

for (let j = 1; j < 5; j++) {
  const siteburgerMenuItem = document.createElement("li");
  siteburgerMenu.append(siteburgerMenuItem);
}

let siteburgerMenuItem = siteburgerMenu.childNodes;

siteburgerMenuItem[0].textContent = "Home";
siteburgerMenuItem[1].textContent = "Products";
siteburgerMenuItem[2].textContent = "About Us";
siteburgerMenuItem[3].textContent = "Contact Us";

Array.from(siteburgerMenuItem).map((elem) => {
  elem.style.padding = "2rem";
  elem.style.color = "white";
  elem.style.listStyle = "none";
  elem.style.cursor = "pointer";

  elem.addEventListener("mouseover", function (e) {
    elem.style.backgroundColor = "#999999";
  });

  elem.addEventListener("mouseout", function (e) {
    elem.style.backgroundColor = "#152846";
  });
});

// Create burgerMenu button with js

const siteburgerMenuBtn = document.createElement("i");

siteburgerMenuBtn.className = "fa fa-list fa-2x";
siteburgerMenuBtn.style.color = "white";
siteburgerMenuBtn.style.margin = "auto 0";
siteburgerMenuBtn.style.cursor = "pointer";

siteburgerMenuBtn.addEventListener("click", () => {
  if (siteburgerMenu.style.display === "none") {
    siteburgerMenu.style.display = "block";
  } else {
    siteburgerMenu.style.display = "none";
  }
});

// append item to header

siteHeader.append(siteburgerMenuBtn, siteLogo);

// Create Carusel with js

const siteCarusel = document.createElement("img");
siteCarusel.style.width = "100%";
siteCarusel.style.height = "80%";
let slide = 0;
siteCarusel.src = `https://picsum.photos/1350/40${[slide]}`;

setInterval(() => {
  slide += 1;
  siteCarusel.src = `https://picsum.photos/1350/40${[slide]}`;
}, 6000);

document.body.append(siteHeader, siteburgerMenu, siteCarusel);
