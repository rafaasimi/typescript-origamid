type ProdutoIntersection = {
  preco: number;
}

type CarroIntersection = {
  rodas: number;
  portas: number;
}

function handleProdutoCarro(dados: CarroIntersection & ProdutoIntersection) {
  dados.rodas;
  dados.portas;
  dados.preco;
}

handleProdutoCarro({rodas: 4, portas: 5, preco: 65000})

type TipoCarro = {
  rodas: number;
  portas: number;
}

type TipoCarroComPreco = TipoCarro & {
  preco: number;
}

interface InterfaceCarro {
  rodas: number;
  portas: number;
}

interface InterfaceCarro {
  preco: number;
}

function handleInterfaceCarro(carro: InterfaceCarro) {
  carro.portas;
  carro.rodas;
  carro.preco;
}

interface Window {
  userId: number;
}

window.userId = 200;