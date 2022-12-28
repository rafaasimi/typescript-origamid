function typeGuardWithUnknown(value: unknown) {

  value.toUpperCase();

  if (typeof value === 'string') {
    return value.toLowerCase();
  }
  if (typeof value === 'number') {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

typeGuardWithUnknown('Origamid');
typeGuardWithUnknown(200);
typeGuardWithUnknown(document.body);

