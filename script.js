"use-strict";

// Variables

const movies = document.querySelectorAll(".movies-container");
const scrollLeftBtn = document.querySelectorAll(".scroll-btn-left");
const scrollRightBtn = document.querySelectorAll(".scroll-btn-right");

const dropDownBtn = document.querySelector("#dropdown-btn");
const dropDownMenu = document.querySelector(".dropdown-menu");
const hidden = document.querySelector(".hidden");

// Events
for (let i = 0; i < scrollRightBtn.length; i++) {
  scrollRightBtn[i].addEventListener("click", function () {
    movies[i].scrollLeft += 650;
  });
}

for (let i = 0; i < scrollLeftBtn.length; i++) {
  scrollLeftBtn[i].addEventListener("click", function () {
    movies[i].scrollLeft -= 650;
  });
}

dropDownBtn.addEventListener("click", function () {
  dropDownMenu.classList.toggle("hidden");
});
