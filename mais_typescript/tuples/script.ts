// Tuples
const produto1 = ['Notebook', 2500];
const produto2: [string, number] = ['Notebook', 3000]

if (typeof produto1[0] === 'string') {
  console.log(produto1[0].toLowerCase());
}

produto2[0].toLowerCase();
produto2[1].toFixed();

const [nome, preco] = produto2;
nome.toLowerCase();
preco.toFixed();

// as const

function getText(selector: string) {
    const el = document.querySelector<HTMLElement>(selector);
    if(el) {
        return [el, el.innerText] as const
    } else {
        return null;
    }
}

const button = getText('button');
console.log(button);

if(button) {
    button[0].classList
}
