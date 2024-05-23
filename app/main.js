let produtos = []
const endPointApi = 'https://carolfagundess.github.io/challenge-emporiumgames/produtos.json';
getBuscarProdutosApi()

//assincrona para esperar por uma promessa
async function getBuscarProdutosApi(){
    const res = await fetch(endPointApi);
    produtos = await res.json();
    console.table(produtos);
}