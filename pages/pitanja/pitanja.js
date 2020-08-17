const checkbox = document.querySelector(".toggle-button");
const sajt = document.querySelector("#sajt");
const fax = document.querySelector("#fax");

sajt.style.color = "var(--white)";

checkbox.addEventListener("change", () => {
  changeColors();
});

function changeColors() {
  const temp = sajt.style.color;

  sajt.style.color = fax.style.color;
  fax.style.color = temp;
}
