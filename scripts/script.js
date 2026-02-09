const carouselMain = document.querySelector(".carroussel-main");
const slides = document.querySelectorAll(".carroussel-content");
const dotsContainer = document.querySelector(".carousel-dots");

let currentIndex = 0;

slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  carouselMain.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

setInterval(() => {
  currentIndex++;
  if (currentIndex >= slides.length) currentIndex = 0;
  updateCarousel();
}, 4000);

//favoritos

const favoritos = document.querySelectorAll(".fav");
let salvos = JSON.parse(localStorage.getItem("favoritos")) || {};

favoritos.forEach((icon) => {
  const id = icon.dataset.id;

  if (salvos[id]) {
    icon.classList.add("fa-solid");
    icon.classList.remove("fa-regular");
  }
  icon.addEventListener("click", () => {
    const item = icon.closest(".item");
    const title = item.dataset.title;
    const img = item.dataset.img;
    if (icon.classList.contains("fa-regular")) {
      icon.classList.add("fa-solid");
      icon.classList.remove("fa-regular");
      salvos[id] = { title, img };
    } else {
      icon.classList.add("fa-regular");
      icon.classList.remove("fa-solid");
      delete salvos[id];
    }
    localStorage.setItem("favoritos", JSON.stringify(salvos));
  });
});
