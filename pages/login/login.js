// Form sliding

document
  .querySelector(".remember-me-box span")
  .addEventListener("click", right);
document.querySelector(".btn-signin").addEventListener("click", preventSubmit);

function right(e) {
  e.preventDefault();

  document.querySelector(".slider").style.transform = "translateX(-50%)";
}

function preventSubmit(e) {
  e.preventDefault();
}

// Check box ////////

document
  .querySelector(".remember-me-box .left")
  .addEventListener("click", checkUncheck);

function checkUncheck() {
  document.querySelector(".check-box").classList.toggle("checked");
}
