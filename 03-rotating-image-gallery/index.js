const imageContainer = document.querySelector(".image-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let rotateDegree = 0;
let timer;

prevBtn.addEventListener("click", () => {
  clearTimeout(timer);
  rotateDegree += 45;
  updateGallery(rotateDegree);
});

nextBtn.addEventListener("click", () => {
  clearTimeout(timer);
  rotateDegree -= 45;
  updateGallery(rotateDegree);
});

function updateGallery(deg) {
  imageContainer.style.transform = `perspective(1000px) rotateY(${deg}deg)`;

  timer = setTimeout(() => {
    rotateDegree -= 45;
    updateGallery(rotateDegree);
  }, 3000);
}

updateGallery(rotateDegree);
