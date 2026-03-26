// variáveis:
var animal = "gato";
console.log(animal);

let nomeCompleto = 'Fulano da Silva'
console.log(nomeCompleto)

var valor0 = 2;
const valor1 = 10;
console.log("O valor é: " + valor1);
valor0 = 3; //permite reatribuição, pois é do tipo VAR ou LEt
// valor1 = 30; como é uma constante não permite reatribuição

//verificar o tipo da variável
console.log(typeof valor0);

// impressão
// console.log
// template literal
console.log(`Seja bem-vindo ${nomeCompleto}. Aproveite a estadia!`);

//algoritmo: entrada + processamento + saída;
// entrada de dados
var nome = window.prompt("Digite o seu nome: ");
// saída de dados
document.writeln(`Seja bem-vindo ${nome}. Aproveite a estadia!`);

//operadores aritméticos
// + - * / ** 

// operadores de comparação
// < > != == === !==
console.log(5 == '5'); //olha apenas para valores OU - LÓGICO
console.log(5 === '5'); //olha para tipo e valor E - LÓGICO 

//Criar um sistema que realize a soma de dois números
//O usuário deve informar quais são os números
// O resultado deve aparecer na tela
var n1 = parseFloat(window.prompt("Valor 1: "));
console.log(typeof n1);
var n2 = parseFloat(window.prompt("Valor 2: "));
var resultado = n1 + n2;
document.writeln(`Resultado: ${resultado}`);

// estrutura de controle (if-else)
    if (resultado >=18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }

// estrutura de repetição: for, while e do-while
    for (let i=0; i<10;i++){
        console.log("Iteração: " + i);
    }
    let i = 1;
    while(i<5){
        console.log("Iteração: " + i);
        i++;
    }

// escolha-caso
var diaSemana = 3;
switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-Feira");
        break;
    default:
        console.log("Escolha uma opção");
}