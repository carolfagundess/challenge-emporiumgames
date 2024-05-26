# Emporium Games

Bem-vindo ao repositório do projeto Emporium Games! Este é um site de e-commerce para a venda de jogos, desenvolvido com HTML, CSS e JavaScript. Aqui, você pode visualizar e cadastrar novos produtos, além de explorar uma lista de jogos disponíveis.

## Estrutura do Projeto

O projeto está estruturado da seguinte maneira:

- `index.html`: Página principal onde os produtos são listados.
- `cadastroProduto.html`: Página de cadastro de novos produtos.
- `envio-concluido.html`: Página de confirmação após o cadastro de um produto.
- `css/`: Diretório contendo os arquivos de estilo.
- `assets/`: Diretório contendo as imagens utilizadas no projeto.
- `app/`: Diretório contendo os scripts JavaScript utilizados no projeto.

## Funcionalidades

### Página Principal (`index.html`)

Na página principal, você encontrará a lista de produtos disponíveis. Cada produto é exibido com uma imagem, nome e preço. Você também pode navegar para a página de cadastro de novos produtos.

### Página de Cadastro (`cadastroProduto.html`)

Nesta página, você pode adicionar novos produtos ao catálogo. O formulário de cadastro requer o nome do produto, um link para a imagem do produto e o preço.

### Página de Confirmação (`envio-concluido.html`)

Após o envio do formulário de cadastro, você será redirecionado para esta página que confirma a conclusão do envio.

## Estrutura de Dados

Os produtos são representados no seguinte formato JSON:

```json
{
  "produtos": [
    {
      "id": 0,
      "titulo": "Valorant",
      "preco": 0,
      "imagem": "https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png"
    },
    {
      "id": 1,
      "titulo": "The Sims 4",
      "preco": 35.5,
      "imagem": "https://m.media-amazon.com/images/M/MV5BZWI3YWI0ZmQtYmU1ZS00YmM2LWI1MWEtYWQzMTVmZmY2MmJjXkEyXkFqcGdeQXVyNzQwMzAwNTI@._V1_.jpg"
    },
    {
      "id": 2,
      "titulo": "GTA V",
      "preco": 65.99,
      "imagem": "https://img.gta5-mods.com/q75/images/grand-theft-auto-v-boot-logo/b06535-gtav_logo.png"
    },
    {
      "id": 3,
      "titulo": "The Last Of Us",
      "preco": 250.5,
      "imagem": "https://seeklogo.com/images/T/the-last-of-us-logo-0E1DA5A854-seeklogo.com.png"
    },
    {
      "id": 4,
      "titulo": "The Last of Us Part II",
      "imagem": "https://i.pinimg.com/originals/7c/ab/9e/7cab9eceb8857c222c398d6ae30df686.png",
      "preco": 250
    },
    {
      "id": 5,
      "titulo": "Grand Theft Auto IV",
      "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmxw7NM0YngpKsEFkesiOQ9hDvz1QlcGV7GVXgIe_5A&s",
      "preco": 70
    }
  ]
}
## API

O projeto utiliza uma API para gerenciar a lista de produtos. As seguintes funções estão implementadas:

### Requisição GET

Obtém a lista de produtos:

```javascript
async function getListaProdutos() {
  const res = await fetch(api);
  const jogos = await res.json();
  console.log(jogos);
  return jogos;
}
