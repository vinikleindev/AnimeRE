document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const animeShow = document.getElementById("animeshow");
  const searchBox = document.querySelector(".search");

  // Se a página não tiver barra de pesquisa, não faz nada
  if (!searchInput || !animeShow || !searchBox) return;

  function filtrar() {
    const termo = searchInput.value.toLowerCase().trim();
    animeShow.innerHTML = "";
    animeShow.style.display = "none";

    if (!termo) return;

    const db = window.animes;
    if (!db) {
      console.error("window.animes não existe. Verifique se data.js está carregando antes do filter.js.");
      return;
    }

    let encontrou = false;

    for (const [id, data] of Object.entries(db)) {
      const title = (data.title || "").toLowerCase();
      if (!title.includes(termo)) continue;

      encontrou = true;

      const link = document.createElement("a");
      link.className = "anime-content";
      link.href = `reviews.html?id=${encodeURIComponent(id)}`;
      link.innerHTML = `
        <img src="${data.image}" alt="${data.title}">
        <p>${data.title}</p>
      `;

      animeShow.appendChild(link);
    }

    if (encontrou) animeShow.style.display = "flex";
  }

  searchInput.addEventListener("input", filtrar);

  // Fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target)) animeShow.style.display = "none";
  });
});
