var numerosArray = [10, 20, 30, 40, 50, 3];
var valoresArray = [10, 'Taxas', 30, 'Produto', 50, 3];
// function maiorQue10(data: number[]) {
//   return data.filter(n => n > 10)
// }
function maiorQue10(data) {
    return data.filter(function (n) { return n > 10; });
}
// function filtrarValores(data: (string | number)[]) {
//   return data.filter(item => typeof item === 'number')
// }
function filtrarValores(data) {
    return data.filter(function (item) { return typeof item === 'number'; });
}
console.log(maiorQue10(numerosArray));
console.log(filtrarValores(valoresArray));
var dados = [
    ['Senhor dos anéis', 80],
    ['A guerra dos tronos', 120]
];
