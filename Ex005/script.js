function verificar(){
   var data = new Date();
   var ano = data.getFullYear();
   var fano = window.document.getElementById('txtano');
   var res = window.document.getElementById('res');
   var img = window.document.createElement('img');
    img.setAttribute('id', 'foto');

   if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img'); 
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criançah.png');
            }else if (idade < 21){
                img.setAttribute('src', 'jovemh.png')//Jovem
            }else if (idade < 50) {
                img.setAttribute('src', 'adulto.png')// Adulto
            } else {
                img.setAttribute('src', 'idoso.png')// Idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criançam.png')// Criança
            }else if (idade < 21){
                img.setAttribute('src', 'jovemm.png')//Jovem
            }else if (idade < 50) {
                img.setAttribute('src', 'adulta.png')// Adulto
            } else {
                img.setAttribute('src', 'idosa.png')// Idoso
            }
        } else {
            genero = 'Indefinido';
        }
        
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);

        
    }

}