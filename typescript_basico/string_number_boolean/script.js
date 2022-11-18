// Annotation
// const frase: string = 'Front End';
// const valor: number = 500;
// const condicao: boolean = valor > 100;
// Inference
var frase = 'Front End';
var valor = 500;
var condicao = valor > 100;
var caminhao = {
    marca: 'Volkswagen'
};
// Type Guard
console.log(typeof frase);
console.log(typeof valor);
console.log(typeof caminhao);
console.log(typeof null);
console.log(typeof document);
console.log(typeof undefined);
if (typeof frase === 'string') {
    console.log('Frase é string');
}
if (typeof valor === 'number') {
    console.log('Frase é number');
}
if (typeof condicao === 'boolean') {
    console.log('Frase é boolean');
}
// Funções construtoras
var frase1 = new String('Front End');
var frase2 = String('Front End');
var frase3 = 'Front End';
console.log(typeof String);
console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
