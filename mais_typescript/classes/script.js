console.log(document.constructor);
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.tipo = 'produto';
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.getPreco = function () {
        return Produto.transformarPreco(this.preco);
    };
    Produto.transformarPreco = function (preco) {
        return "R$ ".concat(preco);
    };
    return Produto;
}());
var livro = new Produto('O Senhor dos Anéis', 300);
console.log(livro.tipo);
console.log(livro.preco);
// MODIFICADORES
// TS public - Padrão, pode acessar em qualquer lugar
// TS readonly - Somente leitura, não permite sobrescrever valor
// TS private - Não permite acessar propriedade fora da classe
// TS protected - Permite acessar propriedades dentro de subclasses (extends)
// JS static - Permite acessar somente dentro do construtor
console.log((livro.tipo = 'peixe'));
console.log(livro.getPreco());
// CLASS E INTERFACE
// A interface já é gerado automaticamente pelo TS quando criamos classes.
var Quadrado = /** @class */ (function () {
    function Quadrado(medida) {
        this.lados = 4;
        this.medida = medida;
    }
    Quadrado.prototype.getPerimetro = function () {
        return this.medida * this.lados;
    };
    Quadrado.prototype.getArea = function () {
        return this.medida * this.medida;
    };
    return Quadrado;
}());
var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.PI = Math.PI;
        this.raio = raio;
    }
    Circulo.prototype.getPerimetro = function () {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    };
    Circulo.prototype.getArea = function () {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    };
    return Circulo;
}());
var q1 = new Quadrado(10);
if (q1 instanceof Quadrado) {
}
var formas = [2, 32, 12, 3, 4, 20, 37, 9].map(function (n) {
    if (n < 15) {
        return new Quadrado(n);
    }
    else {
        return new Circulo(n);
    }
});
formas.forEach(function (forma) {
    if (forma instanceof Quadrado) {
        console.log(forma.lados);
    }
    if (forma instanceof Circulo) {
        console.log(forma.raio);
    }
});
