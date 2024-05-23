const elementoInserirProdutos = document.querySelector("#produtos_itens");

//inserir cada livro dentro da section produtos_estante
function exibirProdutos(listaProdutos) {
  listaProdutos.forEach((produto) => {
    //inserir dentro do html da section
    elementoInserirProdutos.innerHTML = `               
        <div class="card">
        <img class="item_imagem" src="${produto.imagem}" alt="capa do jogo ${produto.titulo}">
        <div class="card--infos">
            <p>${produto.titulo}</p>
            <div class="card--infos-preco">
                <p>R$${produto.preco},00</p>
                <img src="/assets/Vector.svg" alt="botao de excluir">
            </div>
        </div>
    </div>`;
  });
}
