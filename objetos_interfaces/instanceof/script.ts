class Produto {
    nomeProduto: string;
    precoProduto: number;
    
    constructor(nome: string, preco: number) {
        this.nomeProduto = nome;
        this.precoProduto = preco;
    }

    // precoReal() {
    //     return `R$ ${this.precoProduto}`
    // }
}

const livro1 = new Produto('Percy Jackson', 250)

console.log(livro1.nomeProduto)
console.log(livro1.precoProduto)
// console.log(livro1.precoReal())

console.log(livro1 instanceof Produto)

class Livro extends Produto{
    autor: string

    constructor(nomeProduto: string, precoProduto: number, autor: string) {
        super(nomeProduto, precoProduto)
        this.autor = autor
    }
}

class Jogo extends Produto{
    jogadores: number

    constructor(nomeProduto: string, precoProduto: number, jogadores: number) {
        super(nomeProduto, precoProduto)
        this.jogadores = jogadores
    }
}

function buscarProduto(busca: string) {
    if(busca === 'O Hobbit') {
        return new Livro('O Hobbit', 200, 'J. R. R. Tolkien')
    }

    if(busca === 'Dark Souls') {
        return new Jogo('Dark Souls', 250, 1)
    }

    return null
}

const produtoExemplo = buscarProduto('O Hobbit')

if(produtoExemplo instanceof Livro) {
    console.log(produtoExemplo.autor)
    console.log(produtoExemplo.nomeProduto)
}

if(produtoExemplo instanceof Jogo) {
    console.log(produtoExemplo.jogadores)
}

if(produtoExemplo instanceof Produto) {
    console.log(produtoExemplo.nomeProduto)
}