// color section
document.body.classList.add(localStorage.getItem("bage-color") || "blue");

let el = document.querySelectorAll(".colors li");
var classesList = [];
for (var i = 0; i < el.length; i++) {
  classesList.push(el[i].getAttribute("data-color"));

  el[i].addEventListener(
    "click",
    function () {
      document.body.classList.remove(...classesList);
      document.body.classList.add(this.getAttribute("data-color"));
      localStorage.setItem("bage-color", this.getAttribute("data-color"));
    },
    false
  );
}
console.log(localStorage.getItem("bage-color"));
// color section
// ######################################################################################################
// button setion
let myBtn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 300) {
    myBtn.style.opacity = "10";
  } else {
    myBtn.style.opacity = "0";
  }
};

myBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// button setion
// ######################################################################################################
// Mood section
let Wrapper = document.getElementById("wrapper");
let Switch = document.getElementById("switch");
Wrapper.onclick = () => {
  Switch.classList.toggle("dark");
  document.body.classList.toggle("dark");
};
// Mood section
