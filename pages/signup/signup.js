document.querySelector(".next1").addEventListener("click", mid);
document.querySelector(".next2").addEventListener("click", right);
document.querySelector(".back1").addEventListener("click", backToLogIn);
document.querySelector(".back2").addEventListener("click", left);
document.querySelector(".back3").addEventListener("click", goToIndex);

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

function backToLogIn(e) {
  e.preventDefault();
  window.location = "/pages/login/login.html";
}

function preventSubmit(e) {
  e.preventDefault();
}

function goToIndex(e) {
  e.preventDefault();
  window.location.href = "/";
}

// Drop down menu logic

const dropDown = document.querySelector(".drop-down");
let options = document.querySelectorAll(".item");

options.forEach((option) => option.addEventListener("click", openClose));
options[0].style.display = "flex";
let opened = false;

function openClose(e) {
  if (!opened) {
    openDropDown();
    opened = !opened;
  } else {
    const chosen = e.target;
    dropDown.insertBefore(chosen, dropDown.firstChild);
    closeDropDown();
    opened = !opened;
  }
}

function openDropDown() {
  options.forEach((option) => (option.style.display = "flex"));
}

function closeDropDown() {
  options = document.querySelectorAll(".item");
  options.forEach((option, key) => {
    if (key != 0) {
      option.style.display = "none";
    }
  });
}
