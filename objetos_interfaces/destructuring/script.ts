const { body } = document;

interface ProdutoDestructuring {
  nome: string;
  preco?: number;
}

function handleDataDestructuring({ nome, preco }: ProdutoDestructuring) {
  nome.includes('book');
  preco?.toFixed();
}

handleDataDestructuring({
  nome: 'Notebook',
  preco: 5000,
});

function handleClickDestructuring({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null;
  pageX: number;
}) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h1>Mouse click em X: ${pageX}</h1>`;
  }
  console.log(currentTarget);
  console.log(pageX);
}

document.documentElement.addEventListener('click', handleClickDestructuring);

// Rest Operator

function compararNumeros(tipo: 'menor' | 'maior', ...numeros: number[]) {
  if (tipo === 'menor') {
    return Math.min(...numeros);
  }
  if (tipo === 'maior') {
    return Math.max(...numeros);
  }
}

console.log(compararNumeros('menor', 3, 4, 5, 6, 20, 10, 30, 1))
console.log(compararNumeros('maior', 3, 4, 5, 6, 20, 10, 30, 1))

