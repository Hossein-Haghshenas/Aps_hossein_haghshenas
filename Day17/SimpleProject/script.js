const btn = document.getElementById("btn");

const rgb = () => {
  const r = parseInt(Math.random() * 256);
  const g = parseInt(Math.random() * 256);
  const b = parseInt(Math.random() * 256);
  return `${r},${g},${b}`;
};

btn.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = `rgb(${rgb()})`;
  console.log(rgb);
});
