document.querySelector(".remember-me-box span").addEventListener("click", mid);
document.querySelector(".btn-change-pass").addEventListener("click", right);
document.querySelector(".btn-signin").addEventListener("click", preventSubmit);

document
  .querySelector(".remember-me-box .left")
  .addEventListener("click", checkUncheck);

function checkUncheck() {
  document.querySelector(".check-box").classList.toggle("checked");
}

function mid(e) {
  e.preventDefault();

  document.querySelector(".slider").style.transform =
    "translateX(calc(-100% / 3))";
}

function right(e) {
  e.preventDefault();

  document.querySelector(".slider").style.transform =
    "translateX(calc(-200% / 3))";
}

function preventSubmit(e) {
  e.preventDefault();
}
