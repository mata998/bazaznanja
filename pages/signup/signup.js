document.querySelector(".next1").addEventListener("click", mid);
document.querySelector(".next2").addEventListener("click", right);
document.querySelector(".next3").addEventListener("click", preventSubmit);
document.querySelector(".back1").addEventListener("click", preventSubmit);
document.querySelector(".back2").addEventListener("click", left);
document.querySelector(".back3").addEventListener("click", mid);

function left(e) {
  e.preventDefault();

  document.querySelector(".slider").style.transform = "translateX(0)";
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
