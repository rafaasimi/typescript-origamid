import _ from 'lodash';
import ClipboardJS from 'clipboard';

const button = new ClipboardJS('button')

function handleCopy(event: ClipboardJS.Event) {
  event.clearSelection();
}

button.on('success', handleCopy);

console.log(_.difference([1,2,3,4,5], [1,2,5,6,7]))

interface Produto {
  nome: string;
}

const livro: Produto = {
  nome: 'O Senhor dos Anéis',
};
