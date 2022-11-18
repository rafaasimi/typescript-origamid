var totalValor = 200;
totalValor = "4000";
function isNumber(value) {
    if (typeof value === "number") {
        return true;
    }
    else {
        return false;
    }
}
console.log(isNumber("200"));
//
var button = document.querySelector("button");
if (button) {
    button.click();
}
// Operador Opcional / Operator Chaining
button === null || button === void 0 ? void 0 : button.click();
// Exercicio 1
function toNumber(value) {
    if (typeof value === "number") {
        return value;
    }
    else if (typeof value === "string") {
        return Number(value);
    }
    else {
        throw new Error("Value deve ser um número ou uma string");
    }
}
console.log(toNumber(10));
console.log(toNumber("20"));
console.log(toNumber(true));
