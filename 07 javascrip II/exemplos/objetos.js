const pessoa = {
    nome: 'Simara',
    idade: 32,
    cidade: 'São Paulo'
}

// Notaçã de ponto

console.log(pessoa.nome); // Simara

// notação de colchetes

console.log(pessoa['idade']) // 32

console.log('')
// Como desestruturar Objetos

const {nome, idade, cidade} = pessoa

console.log(nome)
console.log(idade)
console.log(cidade)
