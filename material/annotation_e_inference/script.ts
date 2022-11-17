// let produto: string = 'Livro'
// let preco: number = 200

// produto = 300

// let carro: {
//     marca: string;
//     portas: number
// } = {
//     marca: 'Audi',
//     portas: 5
// }


// carro.marcas = 4

let produto = 'Livro'
let preco = 200

// produto = 300

let carro = {
    marca: 'Audi',
    portas: 5
}


// carro.marca = 4



const barato: boolean | string = preco < 400 ? true : 'Produto caro'

function somar(a: number, b: number) {
    return a + b
}

console.log(somar(5,8))
// console.log(somar('5',8))

const nintendo = {
    nome: 'Nintendo',
    preco: '2000'
}

function transformarPreco(produto: {nome: string, preco: string}) {
    produto.preco = 'R$' + produto.preco
    return produto
}

const produtoNovo = transformarPreco(nintendo)
console.log(produtoNovo)