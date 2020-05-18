let burger = document.getElementsByClassName("burger")[0];
let menu = document.getElementsByClassName("nav-menu")[0];
burger.addEventListener("click", showMenu);

function showMenu() {
  burger.style.display = "none";
  menu.style.display = "flex";
  let cross = document.getElementsByClassName("x")[0];
  cross.style.display = "block";
  cross.addEventListener('click', openBurger);
}

function openBurger() {
  this.style.display = "none";
  burger.style.display = "block";
  menu.style.display="none";
}
