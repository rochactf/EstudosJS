function tabuada(){
    var num = document.getElementById('txtn');
    var tab = document.getElementById('seltab');
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!');
    }else {
         var n = Number(num.value);
         tab.innerHTML = ''; // limpar o conteúdo anterior
         for (c = 1; c <= 10; c++) {
            var item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`; // valor do option (nao faz sentido no JS, mas em outras linguagens sim)
            tab.appendChild(item); 
         }
    }
}