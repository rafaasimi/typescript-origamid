// Tuples
var produto1 = ['Notebook', 2500];
var produto2 = ['Notebook', 3000];
if (typeof produto1[0] === 'string') {
    console.log(produto1[0].toLowerCase());
}
produto2[0].toLowerCase();
produto2[1].toFixed();
var nome = produto2[0], preco = produto2[1];
nome.toLowerCase();
preco.toFixed();
// as const
function getText(selector) {
    var el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
var button = getText('button');
console.log(button);
if (button) {
    button[0].classList;
}
