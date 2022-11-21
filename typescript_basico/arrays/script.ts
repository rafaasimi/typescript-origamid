const numerosArray = [10,20,30,40,50, 3]
const valoresArray = [10, 'Taxas', 30, 'Produto', 50, 3]


// function maiorQue10(data: number[]) {
//   return data.filter(n => n > 10)
// }

function maiorQue10(data: Array<number>) {
  return data.filter(n => n > 10)
}

// function filtrarValores(data: (string | number)[]) {
//   return data.filter(item => typeof item === 'number')
// }

function filtrarValores(data: Array<string | number>) {
  return data.filter(item => typeof item === 'number')
}

console.log(maiorQue10(numerosArray))
console.log(filtrarValores(valoresArray))

const dados = [
  ['Senhor dos anéis', 80],
  ['A guerra dos tronos', 120]
];