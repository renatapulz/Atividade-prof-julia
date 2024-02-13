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