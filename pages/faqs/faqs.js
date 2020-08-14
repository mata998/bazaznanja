// Opening and closing questions /////////////////

document.querySelectorAll(".question").forEach((question) => {
  question.addEventListener("click", openCloseQuestion);
});

function openCloseQuestion(e) {
  const question = e.target;
  const answer = e.target.nextElementSibling;

  console.log(answer);

  question.classList.toggle("question-open");
  question.classList.toggle("question-hover");
  answer.classList.toggle("answer-open");
}

// Changing question groups /////////////////

const icons = [...document.querySelectorAll(".icon-box")];
icons.forEach((icon) => icon.addEventListener("click", iconClick));

const questionGroups = [...document.querySelectorAll(".questions")];
questionGroups[0].style.display = "block";

let selectedIcon = document.querySelector(".selected");

function iconClick(e) {
  const clickedIcon = e.target;

  clickedIndex = icons.indexOf(clickedIcon);
  selectedIndex = icons.indexOf(selectedIcon);

  if (!clickedIcon.classList.contains("selected")) {
    selectedIcon.classList.remove("selected");
    clickedIcon.classList.add("selected");
    selectedIcon = clickedIcon;

    questionGroups[selectedIndex].style.display = "none";
    questionGroups[clickedIndex].style.display = "block";
  }
}
