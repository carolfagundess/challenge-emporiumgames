let produtos = []
const endPointApi = 'https://carolfagundess.github.io/api_emporium/produtos.json';
getBuscarProdutosApi()

//assincrona para esperar por uma promessa
async function getBuscarProdutosApi(){
    const res = await fetch(endPointApi);
    produtos = await res.json();
    console.log(produtos);
}