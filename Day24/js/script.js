const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", function () {
  this.classList.add("hold");
  setTimeout(() => {
    this.classList.add("invisible");
  }, 0.1);
});

fill.addEventListener("dragend", function () {
  this.className = "fill";
});

empties.forEach((e) => {
  e.addEventListener("dragover", dragOver);
  e.addEventListener("dragenter", dragEnter);
  e.addEventListener("dragleave", dragLeave);
  e.addEventListener("drop", drop);
});

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}
function dragLeave() {
  this.className = "empty";
}
function drop() {
  this.className = "empty";
  this.append(fill);
}
