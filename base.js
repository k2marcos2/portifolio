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

window.addEventListener('load', generateWaveGrid);
window.addEventListener('resize', generateWaveGrid);