var produto1 = {
    nome: 'Notebook',
    quantidade: 10,
    cor: 'Azul'
};
var produto2 = {
    nome: 'Geladeira',
    quantidade: 10,
    freezer: true
};
var servico1 = {
    nome: 'Instalação'
};
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 20);
}
mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
// mostrarQuantidade(servico1)
// Partial
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade) {
        console.log(produto.quantidade + 20);
    }
}
mostrarQuantidadePartial(produto1);
mostrarQuantidadePartial(produto2);
mostrarQuantidadePartial(servico1);
var artigo = {
    titulo: 'Como aprender HTML',
    visualizacoes: 3000,
    tags: ['HTML', 'Font-end'],
    autor: 'Rafael'
};
if (typeof artigo.autor === 'string') {
    artigo.autor + 'end';
}
function mostrarTitulo(obj) {
    if ('titulo' in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo({ titulo: 'Meu titulo' });
mostrarTitulo('Teste');
mostrarTitulo(200);
