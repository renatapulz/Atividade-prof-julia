// 1. Crie uma função que exiba uma mensagem simples no console.

function message() {
    console.log("Bom dia pessoal!! =D");
}

message();

// 2. Declare uma variável e atribua um número a ela, em seguida, exiba seu valor no console. Atribua o valor a variável usando o window.prompt();
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

// 3. Combine duas strings usando o operador de concatenação e exiba o resultado no console. Utilize o template string ou a concatenação simples.

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

// 6. Crie 3 objetos com propriedades representando informações pessoais (nome, idade, nacionalidade e profissão) e exiba essas informações com um console.log para cada objeto.

let infomacoesPessoaA = {};
let infomacoesPessoaB = {};
let infomacoesPessoaC = {};

infomacoesPessoaA.nome = window.prompt("Vamos fazer uma pesquisa de dados. Por favor digite seu nome: ");
infomacoesPessoaA.idade = window.prompt(infomacoesPessoaA.nome + ", quantos anos você tem? ");
infomacoesPessoaA.nacionalidade = window.prompt("Qual sua nacionalidade? ");
infomacoesPessoaA.profissao = window.prompt("Qual sua profissão?");

infomacoesPessoaB.nome = window.prompt("Vamos aos dados de uma segunda pessoa. Por favor digite outro nome: ");
infomacoesPessoaB.idade = window.prompt("Quantos anos " + infomacoesPessoaB.nome + " tem?");
infomacoesPessoaB.nacionalidade = window.prompt("Qual a nacionalidade dele(a)? ");
infomacoesPessoaB.profissao = window.prompt("E a profissão?");

infomacoesPessoaC.nome = window.prompt("Falta pouquinho.. última pessoa! Digite um nome: ");
infomacoesPessoaC.idade = window.prompt("Quantos anos " + infomacoesPessoaC.nome + " tem?");
infomacoesPessoaC.nacionalidade = window.prompt("Qual a nacionalidade dele(a)? ");
infomacoesPessoaC.profissao = window.prompt("E a profissão?");

console.log("Informações de " + infomacoesPessoaA.nome + ":");
console.log(infomacoesPessoaA);

console.log("Informações de " + infomacoesPessoaB.nome + ":");
console.log(infomacoesPessoaB);

console.log("Informações de " + infomacoesPessoaC.nome + ":");
console.log(infomacoesPessoaC);

// otimizando: 
let dados = [];
let quantPessoas = 3;
window.alert("Iremos fazer uma pesquisa, para isso precisaremos de dados de " + quantPessoas + " pessoas próximas a você!")
for (var i = 0; i < quantPessoas; i++) {
    let infomacoesPessoa = {};

    infomacoesPessoa.nome = window.prompt("Por favor digite um nome: ");
    infomacoesPessoa.idade = window.prompt("Quantos anos " + infomacoesPessoa.nome + " tem?");
    infomacoesPessoa.nacionalidade = window.prompt("Qual a nacionalidade dele(a)? ");
    infomacoesPessoa.profissao = window.prompt("E a profissão?");
    dados.push(infomacoesPessoa);
}
for (var i = 0; i < dados.length; i++) {
    console.log("Informações de " + dados[i].nome + ":");
    console.log(dados[i]);
}

// 7. Crie uma função que receba o valor de uma hora qualquer, e exibe no console uma mensagem de “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada.

function validacaoSaudacao() {
    var hora = parseInt(window.prompt("Digite uma hora qualquer: \nOBS.: Digitar um número entre 0 e 24"));
    if (hora >= 6 && hora <= 12) {
        console.log("Bom dia!!");
    } else if (hora > 12 && hora <= 18) {
        console.log("Boa tarde!!");
    } else if (hora > 18 && hora <= 24 || hora >= 0 && hora < 6) {
        console.log("Boa noite!!");
    } else {
        console.log("Valor inválido.");
    }
}
validacaoSaudacao();