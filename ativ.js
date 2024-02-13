// 1. Crie uma função que exiba uma mensagem simples no console.

function message() {
    console.log("Bom dia pessoal!! =D");
}

message();

// 2. Declare uma variável e atribua um número a ela, em seguida, exiba seu valor no console.
// Atribua o valor a variável usando o window.prompt();
let numero;

do {
    numero = window.prompt("Por favor, digite um número aleatório:");
    if (isNaN(numero)) {
        window.alert("Por favor, insira somente números. Vamos tentar de novo.");
    } else {
        console.log("O número digitado foi: " + numero);
        //ou: console.log(`O número digitado foi: ${numero}`);
    }
} while (isNaN(numero));

// 3. Combine duas strings usando o operador de concatenação e exiba o resultado no console.
//Utilize o template string ou a concatenação simples.

let textoA = "Meu nome é Renata Pulz";
let textoB = "Estou fazendo a trilha FuturoDev.";
console.log(textoA + ". " + textoB); //ou: console.log(`${textoA}. ${textoB}`);

// 4. Crie uma função que receba dois números como parâmetros e retorne sua soma no console.log.

function soma(a, b) {
    let resultado;
    a = parseFloat(window.prompt("Olá. Para realizar a soma, digite o primeiro valor:"));
    b = parseFloat(window.prompt("Agora digite o segundo valor:"));
    if (isNaN(a) || isNaN(b)) {
        console.log("Os valores digitados não são válidos.")
    } else {
        resultado = a + b;
        console.log(`A soma de ${a} + ${b} é igual a ${resultado}.`);
    }
}
soma();

// 5. Utilize uma estrutura condicional (if,else) para verificar se um número é positivo, negativo ou zero. Exiba os valores no console.log().

do {
    valorDigitado = window.prompt("Por favor, digite um número aleatório pra que eu te ajude a definir se ele é positivo ou negativo: ");
    if (!isNaN(valorDigitado)) {
        valorDigitado = parseFloat(valorDigitado);
        if (valorDigitado > 0) {
            console.log("O valor digitado é positivo.")
        } else if (valorDigitado < 0) {
            console.log("O valor digitado é negativo.")
        } else {
            console.log("O valor digitado é zero.")
        }
    } else {
        window.alert("Ops! Ocorreu um erro. Por favor, digite um número válido.");
    }
    
} while (isNaN(valorDigitado));
