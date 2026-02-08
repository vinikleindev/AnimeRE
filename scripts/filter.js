const searchInput = document.getElementById("searchInput");
const animeShow = document.getElementById("animeshow");
const items = document.querySelectorAll(".item");

function filtrar() {
  const termo = searchInput.value.toLowerCase().trim();
  animeShow.innerHTML = "";

  if (termo === "") {
    animeShow.style.display = "none";
    return;
  }

  let find = false;

  items.forEach((item) => {
    const titulo = (item.dataset.title || "").toLowerCase();

    if (titulo.includes(termo)) {
      find = true;

      const id = item.dataset.id;
      const img = item.dataset.img;
      const title = item.dataset.title;

      const link = document.createElement("a");
      link.classList.add("anime-content");
      link.href = `reviews.html?id=${encodeURIComponent(id)}`;

      link.innerHTML = `
        <img src="${img}" alt="${title}">
        <p>${title}</p>
      `;

      link.addEventListener("click", () => {
        animeShow.style.display = "none";
      });

      animeShow.appendChild(link);
    }
  });

  animeShow.style.display = find ? "flex" : "none";
}

searchInput.addEventListener("input", filtrar);

document.addEventListener("click", (e) => {
  if (!document.querySelector(".search").contains(e.target)) {
    animeShow.style.display = "none";
  }
});

