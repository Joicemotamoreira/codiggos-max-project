function menuToggle() {
  let newMenu = document.querySelector(".newMenuWrapper");
  newMenu.classList.add("active");
}

function closeNewMenu() {
  let newMenu = document.querySelector(".newMenuWrapper");
  newMenu.classList.remove("active");
}
