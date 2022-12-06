const buttonCallBack = document.querySelector('button');

function handleClick(event: PointerEvent) {
  console.log(event.pageX);
}

buttonCallBack?.addEventListener('pointerdown', handleClick);

function handleScroll(event: Event) {
  console.log(event);
}

window.addEventListener('scroll', handleScroll);

// Event com instanceof

function ativarMenu(event: Event) {
  if (event instanceof MouseEvent) {
    console.log(event.pageX);
  }

  if (event instanceof TouchEvent) {
    console.log(event.touches[0].pageX);
  }

  if (event instanceof KeyboardEvent) {
    if (event.key === 'Escape') {
      alert('Deseja sair da aplicação?');
      return;
    }
    console.log(event.key);
  }
}

document.documentElement, addEventListener('mousedown', ativarMenu);
document.documentElement, addEventListener('touchstart', ativarMenu);
window.addEventListener('keydown', ativarMenu);

// Utilizando this em callback

const buttonExemploThis = document.querySelector('button');

// function handleClickThis(this: HTMLButtonElement, event: MouseEvent) {
//   console.log(this);
// }

// handleClickThis();

// buttonExemploThis?.addEventListener('click', handleClickThis);

function handleClickThis(event: MouseEvent) {
  if (event.currentTarget instanceof HTMLElement) {
    console.log(event.currentTarget.innerText);
  }
}

buttonExemploThis?.addEventListener('click', handleClickThis);
