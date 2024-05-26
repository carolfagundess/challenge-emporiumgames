const api = "https://json-server-emporium.vercel.app/produtos";

//assincrona para esperar por uma promessa
//REQUISAO GET
async function getListaProdutos() {
  const res = await fetch(api);
  const jogos = await res.json();
  console.log(jogos);

  return jogos;
}

//REQUISAO POST
async function criaProduto(titulo, imagem, preco) {
  const conexao = await fetch(api, {
    method: "POST",
    headers: {
      //que tipo de arquivo que esta sendo usado
      "Content-type": "application/json",
    },
    //Define o corpo da requisição como um objeto JavaScript convertido em uma string JSON
    body: JSON.stringify({
      titulo: titulo,
      imagem: imagem,
      preco: preco,
    }),
  });

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

export const acessarApi = { getListaProdutos, criaProduto };
