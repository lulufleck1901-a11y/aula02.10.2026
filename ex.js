//1
function mostrarMensagem () {
    console.log("Bem-vindo ao estudo de funções em JavaScript!");
}
mostrarMensagem();


//2
function soma (a, b) {
    return a + b;
}
let resultado = soma (4, 6);
console.log("O resultado da soma é:", resultado);


//3
function imprimirNome (nome){
    console.log("O nome é:", nome);
}
let nome = "Luiza";
imprimirNome(nome);


//4
function quadrado (numero) {
    return numero * numero;
}
let numero = prompt("Digite um número para calcular o quadrado:");
let resultadoQuadrado = quadrado(numero);
console.log("O quadrado de", numero, "é:", resultadoQuadrado);

//5
function converterParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(converterParaCelsius(86));


//6
function concatenaPalavras(palavra1, palavra2) {
    return palavra1 + " " + palavra2;
}
console.log(concatenaPalavras("Olá", "Luiza"));


//7
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}
console.log(calcularMedia(8, 7, 9));


//8
function desconto(valor, percentual) {
    return valor - (valor * percentual / 100);
}
console.log(desconto(100, 20));


//9
function saudacaoPersonalizada(nome) {
    console.log("Olá, " + nome + "! Seja bem-vindo.");
}
saudacaoPersonalizada("Luiza");


//10
const multiplicar = function(numero1, numero2) {
    return numero1 * numero2;
};
console.log(multiplicar(5, 4));


//11
const dividir = function(numero1, numero2) {
    return numero1 / numero2;
};
console.log(dividir(10, 2));


//12
const dobro = (numero) => {
    return numero * 2;
};
console.log(dobro(6));


//13
const ehPar = (numero) => {
    return numero % 2 === 0;
};
console.log(ehPar(8));
console.log(ehPar(7));


//14
function calculadora(numero1, numero2) {

    function soma(x, y) {
        return x + y;
    }

    function subtrair(x, y) {
        return x - y;
    }

    console.log("Soma:", soma(numero1, numero2));
    console.log("Subtração:", subtrair(numero1, numero2));
}

calculadora(10, 5);


//15
function operacoesAvancadas(numero1, numero2) {

    function produto(x, y) {
        return x * y;
    }

    function potencia(x, y) {
        return x ** y;
    }

    return {
        produto: produto(numero1, numero2),
        potencia: potencia(numero1, numero2)
    };
}

console.log(operacoesAvancadas(5, 2));
