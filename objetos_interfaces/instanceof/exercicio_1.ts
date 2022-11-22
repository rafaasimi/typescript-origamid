// 1 - Selecione o link utilizando o metodo getElementbyId
// 2 - Substitua o html link (HTMLAnchorElement de http:// para https://

const link = document.getElementById('origamid')
console.dir(link)
if(link instanceof HTMLAnchorElement) {
    link.href = link.href.replace('http://', 'https://')
}