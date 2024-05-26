import { acessarApi } from "./acessarApi.js";

const formulario = document.querySelector("[data-formulario]");
const botaoLimpar = document.querySelector("[data-limpar]");
const botaoEnviar = document.querySelector("[data-enviar]");

async function adicionarJogo(evento) {
  evento.preventDefault();
  const titulo = document.querySelector("[data-titulo]").value;
  const imagem = document.querySelector("[data-imagem]").value;
  const preco = document.querySelector("[data-preco]").value;

  try {
    await acessarApi.criaProduto(titulo, imagem, preco);

    window.location.href = "../envio-concluido.html";
  } catch (e) {
    alert(e);
  }
}

formulario.addEventListener("submit", (evento) => adicionarJogo(evento));

//limpar campos do formulario
botaoLimpar.addEventListener("click", (evento) => limparCampos(evento));

function limparCampos(evento) {
  evento.preventDefault();
  document.querySelector("[data-titulo]").value = "";
  document.querySelector("[data-imagem]").value = "";
  document.querySelector("[data-preco]").value = "";
}
