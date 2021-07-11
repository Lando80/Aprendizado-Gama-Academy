const livros = require('./database')
//console.log(livros)

// pegar o input
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro? S/N ')
//Se for sim, mostra as categorias disponiveis, pergunta qual ela escolhe
//Se escolher não, mostrar todos os livros em ordem crescente pela quantidade de páginas

if (entradaInicial.toLocaleUpperCase() == 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade', '/História Brasileira', '/Americas', '/Tecnologia', '/Estilo de vida', '/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria voce escolhe: ')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
    console.table(retorno)
}else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log('Essas são todos os livros disponiveis')
    console.table(livrosOrdenados)
}