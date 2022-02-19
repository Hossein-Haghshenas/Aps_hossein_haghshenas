const inputkey = document.getElementById("inputkey");
const inputvalue = document.getElementById("inputvalue");

const local = document.getElementById("local");
const session = document.getElementById("session");
const cookie = document.getElementById("cookie");

// local storage

local.addEventListener("click", () => {
  localStorage.setItem(inputkey.value, inputvalue.value);
  console.log(localStorage.getItem("name"));
});

session.addEventListener("click", () => {
  sessionStorage.setItem(inputkey.value, inputvalue.value);
  console.log(sessionStorage.getItem("name"));
});

cookie.addEventListener("click", () => {
  document.cookie = "name=hassan";
});
