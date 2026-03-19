
function somarVetor(vetor) {
  return vetor.reduce((soma, num) => soma + num, 0);
}


let vetor = [];


function adicionarNumero() {
  const input = document.getElementById('numInput');
  const val = input.value.trim();

  if (val === '' || isNaN(Number(val))) {
    input.focus();
    return;
  }

  vetor.push(Number(val));
  input.value = '';
  input.focus();
  renderChips();
  esconderResultado();
}


function calcularSoma() {
  const err = document.getElementById('errorMsg');

  if (vetor.length === 0) {
    err.classList.add('show');
    return;
  }

  err.classList.remove('show');

  const soma = somarVetor(vetor);

  const box    = document.getElementById('resultBox');
  const valor  = document.getElementById('resultValue');
  const detail = document.getElementById('resultDetail');

  valor.textContent  = soma;
  detail.textContent = `${vetor.length} elemento(s): [${vetor.join(', ')}]`;

  
  box.classList.remove('show');
  void box.offsetWidth;
  box.classList.add('show');
}


function limpar() {
  vetor = [];
  renderChips();
  esconderResultado();
  document.getElementById('errorMsg').classList.remove('show');
  document.getElementById('numInput').focus();
}

function esconderResultado() {
  document.getElementById('resultBox').classList.remove('show');
}


function renderChips() {
  const container = document.getElementById('chips');
  const hint      = document.getElementById('emptyHint');
  container.innerHTML = '';

  if (vetor.length === 0) {
    hint.style.display = '';
    container.appendChild(hint);
    return;
  }

  vetor.forEach((n, i) => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.innerHTML = `${n} <span class="chip-remove" onclick="remover(${i})">×</span>`;
    container.appendChild(chip);
  });
}


function remover(i) {
  vetor.splice(i, 1);
  renderChips();
  esconderResultado();
}


document.getElementById('numInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') adicionarNumero();
});