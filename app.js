let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome === "") {
        alert ("Por favor, insira um nome.");
        return;
}
if (amigos.includes(nome)) {
    alert ("Este nome ja foi adicionado!");
    return;
}
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

amigos.forEach((nome, index) => {
    const item = document.createElement("li"); 
    item.textContent = nome;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerAmigo(index);
    item.appendChild(botaoRemover);

    lista.appendChild(item);
  });
}

function removerAmigo(index) {
    amigos.splice(index, 1); 
    atualizarLista(); 
}

function sortearAmigo() {
    if (amigos.length === 0) {
    alert("A lista está vazia. Adicione nomes antes de sortear.");
    return;
}

   const indiceSorteado = Math.floor(Math.random() * amigos.length);
   const amigoSorteado = amigos[indiceSorteado];

   const resultado = document.getElementById("resultado");
   resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}