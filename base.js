const grid = document.getElementById('wave-grid');
const squareSize = 30;

function generateWaveGrid() {
  grid.innerHTML = '';

  const gridWidth = grid.offsetWidth;
  const gridHeight = grid.offsetHeight;
  const cols = Math.ceil(gridWidth / squareSize);
  const rows = Math.ceil(gridHeight / squareSize);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const square = document.createElement('div');
      square.className = 'square';
      square.style.animationDelay = `${(c + r) * 0.03}s`;
      grid.appendChild(square);
    }
  }
}


const audio = document.getElementById('musicaFundo');
const botao = document.querySelector('button');

function tocarOuParar() {
  if (audio.paused) {
    audio.play();
    botao.textContent = '🎵';
  } else {
    audio.pause();
    botao.textContent = '❌';
  }
}
// Mudança de cor da navbar ao rolar a página
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



window.addEventListener('load', generateWaveGrid);
window.addEventListener('resize', generateWaveGrid);