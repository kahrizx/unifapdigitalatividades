let quantidadeValores = parseInt(prompt("Digite a quantidade de valores a serem inseridos:"));
let soma = 0;

for (let i = 0; i < quantidadeValores; i++) {
  let valor = parseFloat(prompt("Digite o valor " + (i + 1) + ":"));
  soma += valor;
}

let media = soma / quantidadeValores;

console.log("Soma dos valores: " + soma);
console.log("Média dos valores: " + media);
