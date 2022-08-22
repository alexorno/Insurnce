"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const burger = document.querySelector('.inner-nav-burger')
  const burgerBars = document.querySelectorAll('.inner-nav-burger div');
  const tabletMenu = document.querySelector('.tablet-menu');

  burger.addEventListener("click", () => {
    burgerBars.forEach(div => {
      div.classList.toggle("open");
    });
    burger.classList.toggle("open")
    tabletMenu.classList.toggle('open')
    body.classList.toggle('noscroll')
  });


});