var sun = document.querySelector(".sun");
var plantType = document.querySelector(".plant-type");
var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var plantName = document.querySelector("h1");
var body = document.querySelector("body");

sun.addEventListener("mouseover", function () {
  sun.innerText = "low to bright indirect light";
});
plantType.addEventListener("mouseover", function () {
  plantType.innerText = "evergreen tropical vine";
});

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.add("move-right");
    plantName.innerText = "Monstera deliciosa, aka split-leaf philodendron!";
  } else {
    body.classList.add("light");
    ball.classList.remove("move-right");
    plantName.innerText = "Monstera deliciosa — big, bold & beautiful!";
  }
});
