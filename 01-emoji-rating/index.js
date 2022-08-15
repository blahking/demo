const stars = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".fa-regular");
const colors = ["red", "blue", "gray", "green", "pink"];

updateRating(0);

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });

  emojis.forEach(emoji => {
    emoji.style.transform = `translateX(${-80 * index}px)`;
    emoji.style.color = colors[index];
  });
}
