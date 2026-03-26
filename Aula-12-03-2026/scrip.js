//buscar o elemento HTML
let meuElemento = document.getElementById("paragrafo"); //id
console.log(meuElemento);
console.log(meuElemento.textContent); //puxando o conteúdo da tag

let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

//imprimir o conteúdo da tag
//console.log(paragrafo1.textContent);
for (let i=0; i<paragrafo1.length;i++){
    console.log(paragrafo1[i].textContent);
}

let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

//criar um elemento via javascript
let destino = document.getElementById("elemento"); //busca o elemento html
let p = document.createElement("p"); //criar o novo elemento html
p.textContent = "Paragrafo criado via javascript"; //insere o conteúdo no elemento criado
destino.append(p); //adiciona ao DOM

let lista = document.getElementById("lista");
let ul = document.createElement("ul");
let itens = ["Item 1", "Item 2", "Item 3"];
for (let i=0; i<itens.length;i++){
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);
}
lista.append(ul);

//função somar
function somar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    console.log(soma);
    let saida = `Resultado: <b>${soma}</b>`;
    document.getElementById("resultado").innerHTML = saida;
}