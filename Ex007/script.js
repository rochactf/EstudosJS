
const pessoas = [
  { nome: 'Ana',      idade: 25, sexo: 'F' },
  { nome: 'Bruno',     idade: 22, sexo: 'M' },
  { nome: 'Carla',   idade: 31, sexo: 'F' },
  { nome: 'Diana', idade: 18, sexo: 'F' },
  { nome: 'Eduardo',  idade: 27, sexo: 'M' },
  { nome: 'Fernanda', idade: 29, sexo: 'F' },
  { nome: 'Gabriela', idade: 35, sexo: 'F' },
  { nome: 'Helena', idade: 24, sexo: 'F' },
  { nome: 'Igor',     idade: 20, sexo: 'M' },
  { nome: 'Juliana',  idade: 28, sexo: 'F' },
  { nome: 'Karen', idade: 30, sexo: 'F' },
  { nome: 'Lucas',  idade: 26, sexo: 'M' },
  { nome: 'Mariana', idade: 19, sexo: 'F' },
  { nome: 'Nicolas',   idade: 23, sexo: 'M' },
  { nome: 'Olívia',  idade: 27, sexo: 'F' },
];


function filtrarMulheresJovens(vetor, divId) {
  const resultado = vetor
    .filter(p => p.sexo === 'F' && p.idade < 30)
    .sort((a, b) => a.nome.localeCompare(b.nome));

  const div = document.getElementById(divId);
  div.innerHTML = '';

  document.getElementById('resultBadge').textContent =
    `${resultado.length} encontrada${resultado.length !== 1 ? 's' : ''}`;

  if (resultado.length === 0) {
    div.innerHTML = '<p class="empty-result">Nenhuma pessoa encontrada.</p>';
    return;
  }

  resultado.forEach((p, i) => {
    const item = document.createElement('div');
    item.className = 'result-item';
    item.style.animationDelay = `${i * 50}ms`;
    item.innerHTML = `
      <span class="result-index">${i + 1}</span>
      <span class="result-name">${p.nome}</span>
      <span class="result-info">${p.idade} anos</span>
    `;
    div.appendChild(item);
  });
}


function renderizarEntrada() {
  const list = document.getElementById('inputList');
  document.getElementById('totalBadge').textContent =
    `${pessoas.length} pessoa${pessoas.length !== 1 ? 's' : ''}`;

  pessoas.forEach((p, i) => {
    const row = document.createElement('div');
    row.className = 'person-row';
    row.style.animationDelay = `${i * 30}ms`;
    row.innerHTML = `
      <span class="person-name">${p.nome}</span>
      <span class="person-age">${p.idade}</span>
      <span class="person-sex ${p.sexo === 'F' ? 'sex-f' : 'sex-m'}">
        ${p.sexo === 'F' ? 'Feminino' : 'Masculino'}
      </span>
    `;
    list.appendChild(row);
  });
}


function executarFiltro() {
  const panel = document.getElementById('resultPanel');
  panel.style.display = 'block';
  filtrarMulheresJovens(pessoas, 'resultDiv');
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('resultPanel').style.display = 'none';
  renderizarEntrada();
});