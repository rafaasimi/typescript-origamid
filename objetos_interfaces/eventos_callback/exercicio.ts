// Estado dos elementos

// menu inativo
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir menu" em button

// menu ativo
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar menu" em button

const buttonMenu = document.getElementById('btn-mobile');

function toggleMenu(event: PointerEvent) {
  const navElement = document.getElementById('nav');
  const button = event.currentTarget;

  if (button instanceof HTMLElement && navElement) {

    const active = navElement?.classList.contains('active');
    navElement.classList.toggle('active');

    if (active) {
      navElement.setAttribute('aria-label', 'Abrir menu');
      navElement.setAttribute('aria-expanded', 'false');
    } else {
      navElement.setAttribute('aria-label', 'Fechar menu');
      navElement.setAttribute('aria-expanded', 'true');
    }
  }
}

buttonMenu?.addEventListener('pointerdown', toggleMenu);
