const toogle = document.querySelector("nav .toogle input");
const nav = document.querySelector("nav ul");

toogle.addEventListener("click", function () {
  console.log(toogle);
  nav.classList.toggle("slide");
});
