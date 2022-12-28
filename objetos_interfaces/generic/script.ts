function retorno<variavel>(a: variavel): variavel {
  return a
}

// function retorno<string>(a: string): string {
//   return a
// }

// function retorno<number>(a: number): number {
//   return a
// }

// console.log(retorno<string>('The Game'))
console.log(retorno('The Game'))
console.log(retorno(200));
console.log(retorno(true));

// Generic

const listaNumeros = [1,2,3,4,5,6,7,8,9]
const listaFrutas: Array<string> = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão', 'Maçã']

function firstFive<T>(lista: T[]): T[] {
  return lista.slice(0,5);
}

console.log(firstFive(listaNumeros));
console.log(firstFive(listaFrutas));

function notNull<T>(arg: T) {
  if(arg !== null) {
    return arg
  } else {
    return null
  }
}

notNull('Rafael')?.toLowerCase();
notNull(200)?.toFixed();

function tipoDado<T>(a: T) {
  const resultado = {
    dado: a,
    tipo: typeof a
  };

  console.log(resultado)

  return resultado;
}

tipoDado('Teste');
tipoDado(200);

// Extends

function extractText<T extends HTMLElement>(elemento: T) {
  return {
    texto: elemento.innerText,
    elemento: elemento
  }
}

const linkSite = document.querySelector('a');

if(linkSite) {
  console.log(extractText(linkSite).elemento.href);
}

function $<T extends Element>(selector: string): T | null {
  return document.querySelector(selector)
}

const linkJquery = $<HTMLAnchorElement>('a')?.href

const novoLink = document.querySelector<HTMLAnchorElement>('.link')

novoLink?.href

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string,
  preco: number
}

async function handleData() {
  const notebook = await getData<Notebook>('https://api.origamid.dev/json/notebook.json');
  console.log(notebook.nome)
}

handleData()