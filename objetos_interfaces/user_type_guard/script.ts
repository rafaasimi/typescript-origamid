// User Type Guard - Array

async function fetchCursosUserGuard() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}

fetchCursosUserGuard();

function handleCursos(data: unknown) {
  if(data instanceof Array) {
    console.log('É uma instancia de Array')
  }
  if(Array.isArray(data)) {
    console.log('É array')
  }
}

function isString(value: unknown): value is string {
  return typeof value === 'string'
}

function handleData(data: unknown) {
  if(isString(data)) {
    data.toLowerCase()
  }
}

// User Type Guard - Objeto

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto(json);
}
fetchProduto();

interface ProdutoUserTypeGuard {
  nome: string;
  preco: number;
}

function isProduto(value: unknown): value is ProdutoUserTypeGuard {
  if(value && typeof value === 'object' && 'nome' in value && 'preco' in value) {
    return true;
  } else {
    return false;
  }
}

function handleProduto(data: unknown) {
  if(isProduto(data)) {
    if(typeof data.nome === 'string') {
      console.log(data.nome.toLowerCase())
    }
  }
}