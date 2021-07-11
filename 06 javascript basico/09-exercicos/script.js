// FizzBuzz
// Divisivel por 3 => 'Fizz
// Divisivel por 5 => 'Buzz'
// Divisivel por 3 e 5 => 'FizzBuzz'
// Se não for número => 'Não é um número'
// Ser não for divisivel nem por 3 e nem oor 5 => Entrada

let resultado = fizzbuzz(22);
console.log(resultado);

function fizzbuzz(entrada){
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'
    
    if (entrada % 3 === 0)
        return 'Fizz'
    
    if (entrada % 5 === 0)
        return 'Buzz'

    if (typeof entrada !== 'number')
        return 'Não é um número';
    
    return entrada;
}

//------------------------------------------------>

// Reverse a string

let newString = '';

function reverterString(str) {
    for(let i = str.length - 1; i >=0; i--){
        newString += str[i];
    //    console.log(newString);
    }
    console.log(newString);
}

let resultadoo = reverterString('Hello Gama Academy')

//------------------------------------------------>

//Converter Celsius to Fahrenheit

function converterFah(value){
    return value * 1.8 + 32
}

let result = converterFah(40)
console.log(`O valor em Fahrenheit é ${result}`)