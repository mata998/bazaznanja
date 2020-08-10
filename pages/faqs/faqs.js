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
