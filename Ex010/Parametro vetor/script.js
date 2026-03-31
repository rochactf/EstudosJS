function somarVetor(vetor) {
    var soma = 0;

    for (var i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i];
    }

    return soma;
}

function calcular() {
    var entrada = document.getElementById("numeros").value;

    var partes = entrada.split(",");

    var vetor = [];
    for (var i = 0; i < partes.length; i++) {
        var num = Number(partes[i].trim());
        if (!isNaN(num)) {
            vetor.push(num);
        }
    }

    var resultado = somarVetor(vetor);

    document.getElementById("resultado").innerText = "Soma: " + resultado;
}