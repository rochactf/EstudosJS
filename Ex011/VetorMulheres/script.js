function mostrarMulheresMenor30(pessoas) {
    var resultadoDiv = document.getElementById("resultado");
    
    resultadoDiv.innerHTML = "";

    var mulheres = [];

    for (var i = 0; i < pessoas.length; i++) {
        if (pessoas[i].sexo.toLowerCase() === "feminino" && pessoas[i].idade < 30) {
            mulheres.push(pessoas[i]);
        }
    }

    for (var i = 0; i < mulheres.length - 1; i++) {
        for (var j = i + 1; j < mulheres.length; j++) {
            if (mulheres[i].nome > mulheres[j].nome) {
                var temp = mulheres[i];
                mulheres[i] = mulheres[j];
                mulheres[j] = temp;
            }
        }
    }

    for (var i = 0; i < mulheres.length; i++) {
        var p = document.createElement("p");
        p.textContent = mulheres[i].nome;
        resultadoDiv.appendChild(p);
    }
}

var pessoas = [
    { nome: "Leila Pereira", idade: 61, sexo: "Feminino" },
    { nome: "Vitor Roque", idade: 21, sexo: "Masculino" },
    { nome: "Abel Ferreira", idade: 47, sexo: "Masculino" },
    { nome: "Andreia Pereira", idade: 29, sexo: "Feminino" },
    { nome: "Joana Arias", idade: 28, sexo: "Feminino" }
];

mostrarMulheresMenor30(pessoas);