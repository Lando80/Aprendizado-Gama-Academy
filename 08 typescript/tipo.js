"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
// String
var nome = 'Magrelinho';
// Array
var idades = [23, 28, 45, 32, 45];
var idades2 = [23, 28, 45, 32, 45];
// Tuple
var jogadores;
jogadores = ['Vitor', 'Fulano', 'Qualquer'];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
var retornoAPI = [123, 'Vitor', false];
var retornoAPI2 = {
//----
};
// Void 
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Underfined 
var u = undefined;
var n = null;
// Obejct
function criar(obejcto) {
    //...
}
;
// Never
function loopinfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
//type Funcionarios = Array<Funcionario>
var funcionarios = [{
        nome: 'Vitor',
        sobrenome: 'Fulano',
        dataNascimento: new Date()
    }, {
        nome: 'Fulano',
        sobrenome: 'Farias',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionario) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario_1 = funcionarios_1[_i];
        console.log('Nome do funcionario: ', funcionario_1.nome);
    }
}
// Type Assetion
var minhaIdade = 23;
minhaIdade.toString();
var input = document.getElementById("numero1");
console.log(input.value);
