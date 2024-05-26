import { acessarApi } from "./acessarApi.js";

const jogosTela = document.querySelector("[data-lista]");

function constroiCard(titulo, imagem, preco) {
  //criando um elemento e uma classe
  const jogo = document.createElement("div");
  jogo.classList.add("card");
  jogo.innerHTML = `                    
  <img class="item_imagem" src=${imagem} alt="capa do jogo ${titulo}">
  <div class="card--infos">
      <p>${titulo}</p>
      <div class="card--infos-preco">
          <p>R$ ${preco}</p>
          <img src="/assets/Vector.svg" alt="">
      </div>
  </div>`;

  return jogo;
}

async function getJogosApi() {
  const listaApi = await acessarApi.getListaProdutos();
  listaApi.forEach((element) =>
    jogosTela.appendChild(
      constroiCard(element.titulo, element.imagem, element.preco)
    )
  );
}

getJogosApi();
