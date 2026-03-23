const ARCO_IRIS = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

const COLOR_MAP = {
  Red:    '#ef4444',
  Orange: '#f97316',
  Yellow: '#eab308',
  Green:  '#22c55e',
  Blue:   '#3b82f6',
  Purple: '#a855f7',
};

let vetor = [];

function getColor(name) {
  return COLOR_MAP[name] || '#888888';
}

function adicionarCor() {
  const input = document.getElementById('colorInput');
  const val = input.value.trim();
  if (!val) { input.focus(); return; }

  const cor = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
  if (vetor.includes(cor)) { input.select(); return; }

  vetor.push(cor);
  input.value = '';
  input.focus();
  esconderResultado();
  renderizarEntrada();
}

function removerCor(index) {
  vetor.splice(index, 1);
  esconderResultado();
  renderizarEntrada();
}

function limpar() {
  vetor = [];
  esconderResultado();
  renderizarEntrada();
  document.getElementById('colorInput').focus();
}

function completarArcoIris(vetor) {
  const resultado = [...vetor];
  ARCO_IRIS.forEach(cor => {
    if (!resultado.includes(cor)) resultado.push(cor);
  });
  return resultado;
}

function executar() {
  if (vetor.length === 0) return;

  const corrigido = completarArcoIris(vetor);
  const adicionadas = ARCO_IRIS.filter(cor => !vetor.includes(cor));

  const panel = document.getElementById('resultPanel');
  panel.style.display = 'block';

  document.getElementById('resultBadge').textContent = `${corrigido.length} cores`;

  document.getElementById('addedInfo').textContent = adicionadas.length === 0
    ? '✓ Nenhuma cor precisou ser adicionada.'
    : `+ Adicionadas: ${adicionadas.join(', ')}`;

  renderizarCores('resultColors', corrigido, adicionadas);
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderizarEntrada() {
  const container = document.getElementById('inputColors');
  container.innerHTML = '';
  document.getElementById('inputBadge').textContent = `${vetor.length} cores`;

  if (vetor.length === 0) {
    container.innerHTML = '<span class="empty-hint">nenhuma cor adicionada ainda…</span>';
    return;
  }

  vetor.forEach((cor, i) => {
    const chip = document.createElement('div');
    chip.className = 'color-chip';
    chip.style.animationDelay = `${i * 30}ms`;
    chip.innerHTML = `
      <span class="color-dot" style="background:${getColor(cor)}"></span>
      ${cor}
      <span class="chip-remove" onclick="removerCor(${i})">×</span>
    `;
    container.appendChild(chip);
  });
}

function renderizarCores(containerId, cores, destacadas = []) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  cores.forEach((cor, i) => {
    const chip = document.createElement('div');
    chip.className = 'color-chip' + (destacadas.includes(cor) ? ' added' : '');
    chip.style.animationDelay = `${i * 35}ms`;
    chip.innerHTML = `
      <span class="color-dot" style="background:${getColor(cor)}"></span>
      ${cor}
    `;
    container.appendChild(chip);
  });
}

function esconderResultado() {
  document.getElementById('resultPanel').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('colorInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') adicionarCor();
  });
});