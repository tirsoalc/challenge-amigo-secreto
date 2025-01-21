let listaPessoas = [];

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
    listaPessoas.push(nomeDoAmigo);
    adicionarNovoLi("#listaAmigos", nomeDoAmigo);
}

function adicionarNovoLi(idElementoPai, texto) {
    let elementoUl = document.querySelector(idElementoPai);
    let elementoLi = document.createElement("li");
    elementoLi.appendChild(document.createTextNode(texto));
    elementoUl.appendChild(elementoLi);
}

function sortearAmigo() {
    if (listaVazia()) {
        alert("A lista de amigos está vazia, por favor inclua pelo menos um nome");
    } else {
        let indiceAleatorio = gerarIndiceAleatorio();
        let amigoSorteado = listaPessoas[indiceAleatorio];
        let fraseAmigoSorteado = "O amigo secreto sorteado foi: "+amigoSorteado;
        adicionarNovoLi("#resultado", fraseAmigoSorteado);
        limparListaAmigos();
    }
}

function gerarIndiceAleatorio() {
    let valorIndiceMinimo = 0;
    let valorIndiceMaximo = listaPessoas.length - 1;
    return Math.floor(Math.random() * (valorIndiceMaximo - valorIndiceMinimo + 1) + valorIndiceMinimo);
}

function listaVazia() {
    if (listaPessoas.length <= 0) {
        return true;
    }
    return false;
}

function limparListaAmigos() {
    listaPessoas = [];
    removerTodosElementosFilho("#listaAmigos");

}

function removerTodosElementosFilho(idElementoPai) {
    let elementoPai = document.querySelector(idElementoPai);
    elementoPai.innerHTML = "";
}