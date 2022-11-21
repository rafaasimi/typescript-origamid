var _a;
var buttonElement = document.querySelector('button');
var config = localStorage.getItem('congif');
if (buttonElement !== null) {
    buttonElement.click();
}
if (buttonElement) {
    buttonElement.click();
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.click();
console.log(typeof null); // Bug - Não é objeto
var totalTeste;
console.log(totalTeste);
function teste() { }
teste();
console.log(typeof totalTeste);
if (totalTeste) {
    console.log('Total foi definido');
}
else {
    console.log('Total NÃO foi definido');
}
var jogo = {
    nome: 'Ragnarok'
};
var livro = {};
console.log((_a = jogo.nome) === null || _a === void 0 ? void 0 : _a.toLowerCase());
console.log(livro.nome.toLocaleUpperCase());
