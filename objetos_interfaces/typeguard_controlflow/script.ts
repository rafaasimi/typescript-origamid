function typeGuard(value: any) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }
  if (typeof value === 'number') {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

typeGuard('Origamid');
typeGuard(200);
typeGuard(document.body);

const obj = {
  nome: 'Rafael',
};

if ('nome' in obj) {
  console.log('Sim');
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();

  handleProduto(json);
}

interface ProdutoGuard {
  nome: string;
  preco: number;
}

function handleProduto(data: ProdutoGuard) {
  console.log(data);
  if ('preco' in data) {
    document.body.innerHTML += `
    <p>Nome: ${data.nome}<p>
    <p>Preco: R$ ${data.preco + 100}<p>
  `;
  }
}

fetchProduto();
