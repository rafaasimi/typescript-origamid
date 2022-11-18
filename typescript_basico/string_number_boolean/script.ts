// Annotation
// const frase: string = 'Front End';
// const valor: number = 500;
// const condicao: boolean = valor > 100;

// Inference
const frase = 'Front End';
const valor = 500;
const condicao = valor > 100;
const caminhao = {
    marca: 'Volkswagen',
}

// Type Guard
console.log(typeof frase)
console.log(typeof valor)
console.log(typeof caminhao)
console.log(typeof null)
console.log(typeof document)
console.log(typeof undefined)

if(typeof frase === 'string') {
    console.log('Frase é string')
}

if(typeof valor === 'number') {
    console.log('Frase é number')
}

if(typeof condicao === 'boolean') {
    console.log('Frase é boolean')
}

// Funções construtoras
const frase1 = new String('Front End')
const frase2 = String('Front End')
const frase3 = 'Front End'


console.log(typeof String)
console.log(typeof frase1)
console.log(typeof frase2)
console.log(typeof frase3)