function calculaIdade(idade) {
    if (idade >= 18) {
        return 'Maior de idade'
    }else {
        return 'Menor de idade'
    }
}
console.log(calculaIdade(19))

function calculaIdade2(idade){
    return idade >= 18 ? 'Maior de idade' : 'Menor de Idade'
}

console.log(calculaIdade2(13))
