const buttonElement = document.querySelector('button');
const config = localStorage.getItem('congif')

if(buttonElement !== null) {
  buttonElement.click();
}

if(buttonElement) {
  buttonElement.click();
}

buttonElement?.click();

console.log(typeof null) // Bug - Não é objeto

let totalTeste
console.log(totalTeste)

function teste() {}

teste();

console.log(typeof totalTeste)

if(totalTeste) {
  console.log('Total foi definido')
} else {
  console.log('Total NÃO foi definido')
}

interface Produto {
  nome?: string;
}

const jogo: Produto = {
  nome: 'Ragnarok'
}

const livro: Produto = {}

console.log(jogo.nome?.toLowerCase())
console.log(livro.nome.toLocaleUpperCase())
