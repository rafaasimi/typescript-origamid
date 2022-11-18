type NumberOrString = string | number

let total1: NumberOrString = 20;
total1 = '50'

type TypeProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
}

interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}

// function preencherDados(dados: {
//   nome: string;
//   preco: number;
//   teclado: boolean;
// }) {}








function preencherDados(dados: InterfaceProduto) {
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Incluí teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
    </div>
  `
}

preencherDados({
  nome: 'Computador',
  preco: 2800,
  teclado: true
})

preencherDados({
  nome: 'Notebook',
  preco: 2500,
  teclado: false
})

type Categorias = 'design' | 'codigo' | 'descod'

function pintarCategoria(categoria: Categorias) {
  console.log(categoria)
}

pintarCategoria("design")

interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}

// EXERCICIO 1
async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json')
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

// interface IProduto{
//   nome: string;
//   preco: number;
//   descricao: string;
//   garantia: string;
//   seguroAcidentes: boolean
//   empresaFabricante: {
//     fundacao: number;
//     nome: string;
//     pais: string;
//   };
//   empresaMontadora: {
//     fundacao: number;
//     nome: string;
//     pais: string;
//   }
// }

interface IProduto{
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: IEmpresa;
  empresaMontadora: IEmpresa;
}

interface IEmpresa {
  fundacao: number;
  nome: string;
  pais: string;
}

function showProduct(data: IProduto) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.preco}</p>
      <p>${data.descricao}</p>
      <p>Possuí garantia: ${data.garantia ? 'Sim' : 'Não'}</p>
    </div>
    <div>
      <h2>Dados Fabricante</h2>
      <p>${data.empresaFabricante.nome}</p>
    </div>
    <div>
      <h2>Dados Montadora</h2>
      <p>${data.empresaMontadora.nome}</p>
    </div>
  `
}