let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha a operação desejada: [adição, subtração, multiplicação, divisão]");

let resultado;

switch (operacao.toLowerCase()) {
  case "adição":
    resultado = numero1 + numero2;
    break;
  case "subtração":
    resultado = numero1 - numero2;
    break;
  case "multiplicação":
    resultado = numero1 * numero2;
    break;
  case "divisão":
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
    } else {
      console.log("Não é possível dividir por zero.");
    }
    break;
  default:
    console.log("Operação não reconhecida.");
}

if (resultado !== undefined) {
  console.log("Resultado da " + operacao + ": " + resultado);
}
