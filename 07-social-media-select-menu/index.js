const menuEl = document.querySelector(".menu");
const menuContent = document.querySelector(".menu span");
const socialList = document.querySelector(".social-list");
const arrowIcon = document.querySelector(".fa-angle-down");
const socialItems = document.querySelectorAll(".social-list li");

menuEl.addEventListener("click", () => {
  socialList.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});

socialItems.forEach(socialItem => {
  socialItem.addEventListener("click", () => {
    menuContent.innerHTML = socialItem.innerHTML;
    socialList.classList.add("hide");
    arrowIcon.classList.remove("rotate");
  });
});
