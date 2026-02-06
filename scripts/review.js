const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const item = animes[id];

if (!item) {
  document.body.innerHTML = "<h2>Review não encontrada</h2>";
} else {
  document.querySelector("h2").textContent = item.title;
  document.querySelector("#animeImg").src = item.image;
  document.querySelector(".review-text").textContent = item.review;
  document.querySelector(".score").textContent = item.score;

  const btn = document.querySelector(".assistir a");

  if (item.watch) {
    btn.href = item.watch;
    btn.textContent = `${item.local}`;
    btn.style.pointerEvents = "auto";
    btn.style.opacity = "1";
  } else {
    // se não tiver link cadastrado
    btn.href = "#";
    btn.textContent = "Sem link disponível";
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0.6";
  }
}
