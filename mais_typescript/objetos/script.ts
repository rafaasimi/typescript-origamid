interface Produto {
  nome: string;
  quantidade: number;
}

const produto1 = {
  nome: 'Notebook',
  quantidade: 10,
  cor: 'Azul'
}

const produto2 = {
  nome: 'Geladeira',
  quantidade: 10,
  freezer: true
}

const servico1 = {
  nome: 'Instalação'
}

function mostrarQuantidade(produto: Produto) {
  console.log(produto.quantidade + 20);
  
}

mostrarQuantidade(produto1)
mostrarQuantidade(produto2)
// mostrarQuantidade(servico1)

// Partial

function mostrarQuantidadePartial(produto: Partial<Produto>) {
  if(produto.quantidade) {
    console.log(produto.quantidade + 20);
  }
}

mostrarQuantidadePartial(produto1)
mostrarQuantidadePartial(produto2)
mostrarQuantidadePartial(servico1)

interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown
}

const artigo: Post = {
  titulo: 'Como aprender HTML',
  visualizacoes: 3000,
  tags: ['HTML', 'Font-end'],
  autor: 'Rafael'
}

if(typeof artigo.autor === 'string') {
  artigo.autor + 'end'
}

// Record

interface ObjetoLiteral {
  [key: string]: unknown
}

type ObjetoLiteral2 = Record<string, unknown>

function mostrarTitulo(obj: ObjetoLiteral2) {
  if('titulo' in obj) {
    console.log(obj.titulo)
  }
}

mostrarTitulo({titulo: 'Meu titulo'})
mostrarTitulo('Teste')
mostrarTitulo(200)


