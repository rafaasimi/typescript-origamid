declare global {
  interface Usuario {
    nome: string;
    id: number;
  }
}

export const livro: Produto = {
  nome: 'O Senhor dos Anéis',
  preco: 200,
};
