let saida = document.getElementById("saida");


function jogoAdivinhacao(){

    saida.textContent = "";

    let numeroSecreto = Math.floor(Math.random() * 20) + 1;
    let tentativa = 0;

    while(tentativa !== numeroSecreto){

        tentativa = Number(prompt("Adivinhe o número entre 1 e 20"));

        if(tentativa > numeroSecreto){
            saida.textContent += "O número secreto é MENOR\n";
        }
        else if(tentativa < numeroSecreto){
            saida.textContent += "O número secreto é MAIOR\n";
        }
        else{
            saida.textContent += "Parabéns! Você acertou: " + numeroSecreto;
        }
    }

}


function pedraPapelTesoura(){

    saida.textContent = "";

    let usuario = prompt("Escolha: pedra, papel ou tesoura");

    let numero = Math.floor(Math.random() * 3);

    let computador;

    if(numero === 0){
        computador = "pedra";
    }
    else if(numero === 1){
        computador = "papel";
    }
    else{
        computador = "tesoura";
    }

    saida.textContent += "Computador escolheu: " + computador + "\n";

    if(usuario === computador){
        saida.textContent += "Empate";
    }
    else if(
        (usuario === "pedra" && computador === "tesoura") ||
        (usuario === "papel" && computador === "pedra") ||
        (usuario === "tesoura" && computador === "papel")
    ){
        saida.textContent += "Você venceu";
    }
    else{
        saida.textContent += "Computador venceu";
    }

}


function tabuada(){

    saida.textContent = "";

    let numero = Number(prompt("Digite um número"));

    for(let i = 1; i <= 10; i++){
        saida.textContent += numero + " x " + i + " = " + (numero*i) + "\n";
    }

}


function triangulo(){

    saida.textContent = "";

    let linhas = Number(prompt("Digite o número de linhas"));

    let texto = "";

    for(let i = 1; i <= linhas; i++){
        texto += "*";
        saida.textContent += texto + "\n";
    }

}

function serie(){

    saida.textContent = "";

    let termos = Number(prompt("Digite a quantidade de termos"));

    let numero = "";
    let soma = 0;
    let expressao = "";

    for(let i = 1; i <= termos; i++){

        numero += "1";
        soma += Number(numero);

        if(i < termos){
            expressao += numero + " + ";
        }
        else{
            expressao += numero;
        }
    }

    saida.textContent += expressao + "\n";
    saida.textContent += "A soma é: " + soma;

}
