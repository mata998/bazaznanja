// document.querySelectorAll(".answer").forEach(answer =>{
//     answer.addEventListener("click", (e) => {

//     })
// })

// document.querySelector(".answer").classList.toggle("open");

document.querySelectorAll(".questions").forEach((question) => {
  question.addEventListener("click", openCloseQuestion);
});

function openCloseQuestion(e) {
  const answer = e.target.nextElementSibling;
  console.log(answer);

  answer.classList.toggle("open");
}
