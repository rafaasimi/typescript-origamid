// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

async function fetchVendas() {
  let response = await fetch('https://api.origamid.dev/json/vendas.json');
  let json = await response.json();

  console.log(json);
  somarVendas(json);
}

fetchVendas();

type Venda = [string, number, string, ProdutoDetalhes];

interface ProdutoDetalhes {
  marca: string;
  cor: string;
}

function somarVendas(vendas: Venda[]) {
  let body = document.body;
  let soma1 = 0;

  for(let i = 0; i < vendas.length; i++) {
    soma1 += vendas[i][1]
  }

  let soma2 = vendas.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual[1]
}, 0)

  body.innerHTML += `
    Total1: ${soma1}
    <br>
    Total2: ${soma2}
    `
//   vendas.forEach((item) => {
//     soma += item[1];
//     body.innerHTML = `
//             <p>${soma}</p>
//         `;
//   });
}

const arr = [3, 5, 10, 20, 30]
const somar = arr.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
}, 0)
console.log(somar)
