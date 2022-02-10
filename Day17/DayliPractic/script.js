/* this in events */

for (let i = 0; i < 50; i++) {
  const newBtn = document.createElement("button");
  newBtn.textContent = `btn ${i}`;
  newBtn.style.margin = "1rem";
  newBtn.style.padding = "1rem";
  document.body.append(newBtn);
}

const btns = document.querySelectorAll("button");

const getColor = () => {
  const rndColor = Math.floor(Math.random() * 999999);
  return `#${rndColor}`;
};

function setColor() {
  this.style.backgroundColor = getColor();
}

for (const btn of btns) {
  btn.addEventListener("mouseover", setColor);
}
