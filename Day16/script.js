// events

//click

const btn = document.getElementById("Clickbtn");

btn.onclick = () => {
  alert("events : click");
};

//Drag & Drop

const Drag = document.querySelector("#DD img");
const Drop = document.getElementById("DD");

Drag.ondrag = function drag() {
  alert("events : Drag");
};
Drop.ondrop = function drop() {
  alert("events : Drop");
};

//hover

const hover = document.getElementById("hover");

hover.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "green";
});
hover.addEventListener("mouseout", (e) => {
  e.target.style.backgroundColor = "red";
});

//scroll

function scroll() {
  alert("events : scroll");
}

document.body.onscroll = scroll;

// if you use scroll(), it execute right away on page load
// and it doesn't work anymore

//FormSubmit

const form = document.querySelector("form");

form.onsubmit = (e) => {
  e.preventDefault();
  alert("events : onsubmit");
};

//key press

document.body.onkeypress = () => {
  alert("events : onkeypress");
};

//focus/blur

const input = document.getElementById("fbevent");

input.onfocus = (e) => {
  e.target.value = "events : focus";
};
input.onblur = (e) => {
  e.target.value = "events : blur";
};

//mouse wheel

document.body.onwheel = () => {
  alert("events : mouse wheel");
};

//copy/paste

document.getElementById("cpevent").oncopy = () => {
  alert("events : copy");
};

document.getElementById("cpevent").onpaste = () => {
  alert("events : paste");
};

// Audio Start

document.getElementById("Audio").onplay = () => {
  alert("events : Audio Start");
};

// screen resize

const resize = document.getElementById("resize");

resize.style.backgroundColor = "red";
resize.innerText = "page is't resized yet";

document.body.onresize = () => {
  resize.innerText = `page resized height is ${window.innerHeight} and width is ${window.innerWidth}`;
};
