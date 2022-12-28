console.log(document.constructor);

class Produto {
  readonly tipo = 'produto';
  protected nome: string;
  private preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  getPreco() {
    return Produto.transformarPreco(this.preco);
  }

  static transformarPreco(preco: number) {
    return `R$ ${preco}`;
  }
}

const livro = new Produto('O Senhor dos Anéis', 300);

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

class Quadrado {
  readonly lados = 4;
  medida: number;
  constructor(medida: number) {
    this.medida = medida;
  }
  getPerimetro() {
    return this.medida * this.lados;
  }
  getArea() {
    return this.medida * this.medida;
  }
}

class Circulo {
  readonly PI = Math.PI;
  raio: number;
  constructor(raio: number) {
    this.raio = raio;
  }
  getPerimetro() {
    return Math.round(2 * this.PI * this.raio * 100) / 100;
  }
  getArea() {
    return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
  }
}

const q1 = new Quadrado(10);

if(q1 instanceof Quadrado) {

}

const formas = [2, 32, 12, 3, 4, 20, 37, 9].map(n => {
    if(n < 15) {
        return new Quadrado(n)
    } else {
        return new Circulo(n)
    }
})

formas.forEach(forma => {
    if(forma instanceof Quadrado) {
        console.log(forma.lados)
    }
    if(forma instanceof Circulo) {
        console.log(forma.raio)
    }
})
