var buttonCallBack = document.querySelector('button');
function handleClick(event) {
    console.log(event.pageX);
}
buttonCallBack === null || buttonCallBack === void 0 ? void 0 : buttonCallBack.addEventListener('pointerdown', handleClick);
function handleScroll(event) {
    console.log(event);
}
window.addEventListener('scroll', handleScroll);
// Event com instaceof
function ativarMenu(event) {
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
var buttonExemploThis = document.querySelector('button');
// function handleClickThis(this: HTMLButtonElement, event: MouseEvent) {
//   console.log(this);
// }
// handleClickThis();
// buttonExemploThis?.addEventListener('click', handleClickThis);
function handleClickThis(event) {
    if (event.currentTarget instanceof HTMLElement) {
        console.log(event.currentTarget.innerText);
    }
}
buttonExemploThis === null || buttonExemploThis === void 0 ? void 0 : buttonExemploThis.addEventListener('click', handleClickThis);
