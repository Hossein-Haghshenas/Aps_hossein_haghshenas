const inputkey = document.getElementById("inputkey");
const inputvalue = document.getElementById("inputvalue");

const addLocal = document.getElementById("a-local");
const addSession = document.getElementById("a-session");
const addCookie = document.getElementById("a-cookie");

const deleteLocal = document.getElementById("d-local");
const deleteSession = document.getElementById("d-session");
const deleteCookie = document.getElementById("d-cookie");

// local storage

addLocal.addEventListener("click", () => {
  localStorage.setItem(inputkey.value, inputvalue.value);
  console.log(localStorage.getItem("name"));
});
deleteLocal.addEventListener("click", () => {
  localStorage.removeItem(inputkey.value);
  console.log("item deleted");
});

// session storage

addSession.addEventListener("click", () => {
  sessionStorage.setItem(inputkey.value, inputvalue.value);
  console.log(sessionStorage.getItem("name"));
});
deleteSession.addEventListener("click", () => {
  sessionStorage.removeItem(inputkey.value);
  console.log("item deleted");
});

// cookie

addCookie.addEventListener("click", () => {
  document.cookie = "name=hassan";
});
deleteCookie.addEventListener("click", () => {
  document.cookie = inputkey.value;
  console.log("item deleted");
});
