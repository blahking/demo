const searchBar = document.querySelector(".search-bar-container");
const magnifierIcon = document.querySelector(".magnifier");

magnifierIcon.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});
