
const navEl = document.querySelector('.nav');
const hamburgerEL = document.querySelector('.hamburger');

hamburgerEL.addEventListener('click', () => {
navEl.classList.toggle('nav--open');
hamburgerEL.classList.toggle('hamburger--open');

});

//slideshow
window.onload = function () {
  const timeSection = document.getElementById("time-section");
  const dropdown = document.getElementById("hours-dropdown");

  if (timeSection && dropdown) {
    timeSection.onclick = function (event) {
      event.stopPropagation();
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    };

    document.addEventListener("click", function () {
      dropdown.style.display = "none";
    });
  }
};
