let totalValor: string | number = 200;
totalValor = "4000";

function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}

console.log(isNumber("200"));

//
const button = document.querySelector("button");

if (button) {
  button.click();
}

// Operador Opcional / Operator Chaining
button?.click();

// Exercicio 1
function toNumber(value: number | string) {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return Number(value);
  } else {
    throw new Error("Value deve ser um número ou uma string");
  }
}

console.log(toNumber(10));
console.log(toNumber("20"));
console.log(toNumber(true));
