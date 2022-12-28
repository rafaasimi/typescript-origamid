// Type Assertion - "as"
// É necessario que seja uma instancia que herde de Element no caso de HTMLVideoElement
const videoplayer = document.querySelector('#video') as HTMLVideoElement;

console.log(videoplayer.volume);

// Type Assertion - "any"
interface IProduto {
  nome: string;
  preco: number;
}

// Exemplo 1 - Ideal
async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  return response.json() as Promise<IProduto>
}

// Exemplo 2
async function handleProduto() {
  const produto = (await fetchProduto()) as IProduto;
  console.log(produto.nome);
  
  // Exemplo 3 - Não recomendado
  (produto as IProduto).nome
}

handleProduto();

// ! non_null operator
const videoNonNull = document.querySelector('video')!

videoNonNull.volume

document.querySelector('a')!.href = 'https://rafaelsimionato.dev'

// Outras sintaxes

const video1 = document.querySelector('.player') as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector('.player');
const video3 = document.querySelector<HTMLVideoElement>('.player'); // Mais seguro
const video4 = document.querySelector('.player');

video1.volume;
video2.volume;
video3?.volume;
(video4 as HTMLVideoElement).volume;