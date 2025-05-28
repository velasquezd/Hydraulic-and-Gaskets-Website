
//Hamburger//
const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => { 
    navEl.classList.toggle('nav--open');
    hamburgerEl.classList.toggle('hamburger--open');
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
