const botao = document.getElementById("btnVerificar");

botao.addEventListener("click", corrigirCores);

function corrigirCores() {
  const arcoIris = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

  let entrada = document.getElementById("coresInput").value;

  let coresFormatadas = [];
  let coresSeparadas = entrada.split(",");
  for (let i = 0; i < coresSeparadas.length; i++) {
    let cor = coresSeparadas[i].trim();
    if (cor !== "") {
      let corFormatada = cor.charAt(0).toUpperCase() + cor.slice(1).toLowerCase();

      if (coresFormatadas.indexOf(corFormatada) === -1) {
        coresFormatadas.push(corFormatada);
      }
    }
  }

  let vetor = coresFormatadas;

  arcoIris.forEach(cor => {
    if (!vetor.includes(cor)) {
      vetor.push(cor);
    }
  });

  document.getElementById("resultado").innerText =
    "Vetor corrigido: [" + vetor.join(", ") + "]";
}