const btnIncrement = document.getElementById('btnIncrement');
const btnDecrement = document.getElementById('btnDecrement');
const counterDisplay = document.getElementById('counterDisplay');
const textInput = document.getElementById('textInput');
const charCounter = document.getElementById('charCounter');
const itemType = document.getElementById('itemType');
const btnAddItem = document.getElementById('btnAddItem');
const btnReset = document.getElementById('btnReset');
const dynamicContent = document.getElementById('dynamicContent');

let contador = 0;
let listaAtual = null;

function atualizarDisplayContador() {
    counterDisplay.textContent = contador;
}

function contarCaracteresSemEspacos(texto) {
    let textoSemEspacos = texto.replace(/\s/g, '');
    return textoSemEspacos.length;
}

function atualizarContadorCaracteres() {
    let texto = textInput.value;
    let quantidade = contarCaracteresSemEspacos(texto);
    charCounter.textContent = "Caracteres (sem espaços): " + quantidade;
}

function adicionarParagrafo(mensagem) {
    if (mensagem.trim() === "") {
        return;
    }
    
    let paragrafo = document.createElement('p');
    paragrafo.textContent = mensagem;
    dynamicContent.appendChild(paragrafo);
}

function criarLista(tipo) {
    if (listaAtual !== null) {
        listaAtual.remove();
    }
    
    if (tipo === "ul") {
        listaAtual = document.createElement('ul');
    } else {
        listaAtual = document.createElement('ol');
    }
    
    dynamicContent.appendChild(listaAtual);
}

function adicionarItemLista() {
    if (listaAtual === null) {
        let tipoSelecionado = itemType.value;
        criarLista(tipoSelecionado);
    }
    
    let novoItem = document.createElement('li');
    let numeroItem = listaAtual.children.length + 1;
    novoItem.textContent = "Item " + numeroItem;
    listaAtual.appendChild(novoItem);
}

function resetarTudo() {

    contador = 0;
    atualizarDisplayContador();
    
    textInput.value = "";
    atualizarContadorCaracteres();
    
    dynamicContent.innerHTML = "";
    
    listaAtual = null;
}

btnIncrement.onclick = function() {
    contador = contador + 1;
    atualizarDisplayContador();
};

btnDecrement.onclick = function() {
    if (contador > 0) {
        contador = contador - 1;
        atualizarDisplayContador();
    } else {
        alert("O contador já está em zero!");
    }
};

textInput.onkeypress = function(event) {
    if (event.key === "Enter") {
        let mensagem = textInput.value;
        adicionarParagrafo(mensagem);
        textInput.value = "";
        atualizarContadorCaracteres();
    }
};

textInput.oninput = function() {
    atualizarContadorCaracteres();
};

btnAddItem.onclick = function() {
    adicionarItemLista();
};

btnReset.onclick = function() {
    resetarTudo();
};

atualizarContadorCaracteres();