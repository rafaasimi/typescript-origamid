// Estado dos elementos
// menu inativo
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir menu" em button
// menu ativo
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar menu" em button
var buttonMenu = document.getElementById('btn-mobile');
function toggleMenu(event) {
    var navElement = document.getElementById('nav');
    var button = event.currentTarget;
    if (button instanceof HTMLElement && navElement) {
        var active = navElement === null || navElement === void 0 ? void 0 : navElement.classList.contains('active');
        navElement.classList.toggle('active');
        if (active) {
            navElement.setAttribute('aria-label', 'Abrir menu');
            navElement.setAttribute('aria-expanded', 'false');
        }
        else {
            navElement.setAttribute('aria-label', 'Fechar menu');
            navElement.setAttribute('aria-expanded', 'true');
        }
    }
}
buttonMenu === null || buttonMenu === void 0 ? void 0 : buttonMenu.addEventListener('pointerdown', toggleMenu);
