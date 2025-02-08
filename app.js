function adicionarAmigo() {
    let nomeAmigo = pegarNomeDoAmigo();
    if (campoDeTextoVazio(nomeAmigo)) {
        alert("Por favor, insira um nome.");
    } else {
        adicionarAmigoALista(nomeAmigo);
        limparCampoDeTexto();
    }
}

function pegarNomeDoAmigo() {
    let caixaTexto = document.querySelector("#amigo");
    let nomeAmigo = caixaTexto.value;
    return nomeAmigo;
}

function campoDeTextoVazio(texto) {
    let tamanhoDoTexto = texto.trim().length;
    if (tamanhoDoTexto <= 0 || texto == null || texto == "") {
        return true;
    }
    return false;
}

function limparCampoDeTexto() {
    let campoDeTexto = document.querySelector("#amigo").value = "";
}

function adicionarAmigoALista(nomeDoAmigo) {
    adicionarNovoLi("#listaAmigos", nomeDoAmigo);
}

function adicionarNovoLi(idElementoPai, texto) {
    let elementoUl = document.querySelector(idElementoPai);
    let elementoLi = document.createElement("li");
    elementoLi.appendChild(document.createTextNode(texto));
    elementoUl.appendChild(elementoLi);
}

function sortearAmigo() {
    let listaAmigos = [];
    popularLista(listaAmigos);
    if (listaVazia(listaAmigos)) {
        alert("A lista de amigos está vazia, por favor inclua pelo menos um nome");
    } else {
        let indiceAleatorio = gerarIndiceAleatorio(listaAmigos);
        let amigoSorteado = listaAmigos[indiceAleatorio];
        let fraseAmigoSorteado = "O amigo secreto sorteado foi: "+amigoSorteado;
        adicionarNovoLi("#resultado", fraseAmigoSorteado);
        limparElementoUl();
    }
}

function popularLista(listaAmigos) {
    let elementoUl = document.querySelector("#listaAmigos");
    let listaUl = elementoUl.childNodes;
    listaUl.forEach(li => {
        listaAmigos.push(li.innerHTML);
    })
}

function gerarIndiceAleatorio(listaAmigos) {
    let valorIndiceMinimo = 0;
    let valorIndiceMaximo = listaAmigos.length - 1;
    return Math.floor(Math.random() * (valorIndiceMaximo - valorIndiceMinimo + 1) + valorIndiceMinimo);
}

function listaVazia(listaAmigos) {
    if (listaAmigos.length <= 0) {
        return true;
    }
    return false;
}

function limparElementoUl() {
    removerTodosElementosFilho("#listaAmigos");
}

function removerTodosElementosFilho(idElementoPai) {
    let elementoPai = document.querySelector(idElementoPai);
    elementoPai.innerHTML = "";
}