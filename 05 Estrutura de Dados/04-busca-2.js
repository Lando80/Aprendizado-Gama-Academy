var valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];

function busca(numero){
    for (i = 0 ; i < 6 ; i++ ){
        if (numero == valores[i]){
            return i;
        }
    }
    return -1;
}

function buscaBin(numero){
    let inicio, meio, fim;
    let passos = 0;
    inicio = 0;
    fim = 9;
    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2);
        passos = passos +1;
        if (numero == valores[meio]){
            console.log("achei em " + passos + " passos");
            return meio;
        }else{
            if (numero > valores[meio]){
                inicio = meio + 1;
            }else{
                fim = meio -1;
            }
        }
    }
    console.log("não achei em " + passos + " passos!")
    return -1;
}

// usando a nossa ferramenta de busca

console.log(buscaBin(10));
console.log(buscaBin(60));
console.log(buscaBin(50));
