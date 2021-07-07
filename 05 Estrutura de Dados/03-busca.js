var valores = [5, 8, 10, 22, 45, 38];

function busca(numero){
    for (1 = 0 ; i < 6 ; i++ ){
        if (numero == valores[i]){
            return i;
        }
    }
    return -1;
}

// usando a nossa ferramenta de busca

console.log(busca(10));
console.log(busca(50));