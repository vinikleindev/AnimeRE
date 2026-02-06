const grid = document.getElementById('favoritosGrid');
const favoritos = JSON.parse(localStorage.getItem('favoritos')) || {};

const ids = Object.keys(favoritos);

if (ids.length === 0) {
  grid.innerHTML = `<p style="color:white;">Você ainda não favoritou nada.</p>`;
} else {
  grid.innerHTML = ids.map(id => {
    const { title, img } = favoritos[id];
    return `
      <div class="item">
        <img src="${img}" alt="${title}">
        <p style="color:white; margin-top:8px;">${title}</p>
      </div>
    `;
  }).join('');
}