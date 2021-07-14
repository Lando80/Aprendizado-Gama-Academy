// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'Magrelinho';

// Array
const idades: number[] = [23, 28, 45, 32, 45];
const idades2: Array<number> = [23, 28, 45, 32, 45];

// Tuple

let jogadores: [string, string, string];
jogadores = ['Vitor', 'Fulano', 'Qualquer']

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoAPI: any[] = [123, 'Vitor', false];
const retornoAPI2: any = {
    //----
};

// Void 
function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Underfined 
const u: undefined = undefined;
const n: null = null;

// Obejct
function criar(obejcto: object){
    //...
};

// Never
function loopinfinito(): never {
    while (true){}
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha(){
    return erro('Algo falhou');
}

// Union Types
function exibirNota(nota: number | string){
    console.log(`A nota é ${nota}`);
}

exibirNota('10');

// Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}


//type Funcionarios = Array<Funcionario>
const funcionarios: Funcionario []= [{
    nome: 'Vitor',
    sobrenome:'Fulano',
    dataNascimento: new Date()
}, {
    nome: 'Fulano',
    sobrenome:'Farias',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionario: Funcionario[]){
    for(let funcionario of funcionarios) {
        console.log('Nome do funcionario: ', funcionario.nome)
    }
}

// Type Assetion
const minhaIdade: any = 23;
(minhaIdade as number).toString();

const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);
