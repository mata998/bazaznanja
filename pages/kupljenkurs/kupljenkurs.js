document.querySelectorAll(".section-title").forEach((section) => {
  section.addEventListener("click", openCloseSection);
});

function openCloseSection(e) {
  const videos = e.target.nextElementSibling;

  videos.classList.toggle("hidden");
}
