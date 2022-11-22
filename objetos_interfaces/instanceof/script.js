var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nomeProduto = nome;
        this.precoProduto = preco;
    }
    return Produto;
}());
var livro1 = new Produto('Percy Jackson', 250);
console.log(livro1.nomeProduto);
console.log(livro1.precoProduto);
// console.log(livro1.precoReal())
console.log(livro1 instanceof Produto);
var Livro = /** @class */ (function (_super) {
    __extends(Livro, _super);
    function Livro(nomeProduto, precoProduto, autor) {
        var _this = _super.call(this, nomeProduto, precoProduto) || this;
        _this.autor = autor;
        return _this;
    }
    return Livro;
}(Produto));
var Jogo = /** @class */ (function (_super) {
    __extends(Jogo, _super);
    function Jogo(nomeProduto, precoProduto, jogadores) {
        var _this = _super.call(this, nomeProduto, precoProduto) || this;
        _this.jogadores = jogadores;
        return _this;
    }
    return Jogo;
}(Produto));
function buscarProduto(busca) {
    if (busca === 'O Hobbit') {
        return new Livro('O Hobbit', 200, 'J. R. R. Tolkien');
    }
    if (busca === 'Dark Souls') {
        return new Jogo('Dark Souls', 250, 1);
    }
    return null;
}
var produtoExemplo = buscarProduto('O Hobbit');
if (produtoExemplo instanceof Livro) {
    console.log(produtoExemplo.autor);
    console.log(produtoExemplo.nomeProduto);
}
if (produtoExemplo instanceof Jogo) {
    console.log(produtoExemplo.jogadores);
}
if (produtoExemplo instanceof Produto) {
    console.log(produtoExemplo.nomeProduto);
}
