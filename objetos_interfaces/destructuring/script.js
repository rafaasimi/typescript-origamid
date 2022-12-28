var body = document.body;
function handleDataDestructuring(_a) {
    var nome = _a.nome, preco = _a.preco;
    nome.includes('book');
    preco === null || preco === void 0 ? void 0 : preco.toFixed();
}
handleDataDestructuring({
    nome: 'Notebook',
    preco: 5000
});
function handleClickDestructuring(_a) {
    var currentTarget = _a.currentTarget, pageX = _a.pageX;
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = "<h1>Mouse click em X: ".concat(pageX, "</h1>");
    }
    console.log(currentTarget);
    console.log(pageX);
}
document.documentElement.addEventListener('click', handleClickDestructuring);
// Rest Operator
function compararNumeros(tipo) {
    var numeros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numeros[_i - 1] = arguments[_i];
    }
    if (tipo === 'menor') {
        return Math.min.apply(Math, numeros);
    }
    if (tipo === 'maior') {
        return Math.max.apply(Math, numeros);
    }
}
console.log(compararNumeros('menor', 3, 4, 5, 6, 20, 10, 30, 1));
console.log(compararNumeros('maior', 3, 4, 5, 6, 20, 10, 30, 1));
