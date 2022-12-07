var _a, _b, _c;
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
console.log(somar(3, 4));
console.log(somar(3, 4, 6));
var subtrair = function (a, b) { return a - b; };
console.log(subtrair(4, 3));
// VOID
// Função que não possuí return, ou seja, retorna undefined
function pintarTela(cor) {
    document.body.style.background = cor;
}
// Função não possuí return
// Sempre retorna undefined
// Não é possivel realizar condições booleanas
// if (pintarTela('black')) {
//   console.log('Pintou a tela');
// } else {
//   console.log('Não pintou a tela');
// }
// console.log(pintarTela('black'));
var btn = document.querySelector('button');
btn === null || btn === void 0 ? void 0 : btn.click();
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
console.log(isString('teste'));
console.log(isString(200));
function calcular(forma) {
    forma.perimetro(3);
}
function normalizar(valor) {
    if (typeof valor === 'string') {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map(function (item) { return item.trim().toLowerCase(); });
    }
}
console.log(normalizar(' Produto ').toUpperCase());
console.log(normalizar([' Banana ', ' UVA', 'MaçA']).push('Limão'));
function $(seletor) {
    return document.querySelector(seletor);
}
(_a = $('a')) === null || _a === void 0 ? void 0 : _a.click();
(_b = $('video')) === null || _b === void 0 ? void 0 : _b.volume;
(_c = $('.item')) === null || _c === void 0 ? void 0 : _c.innerHTML;
