let notas = [7.5, 8.0, 9.2];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

let media = soma / notas.length;

console.log("Média das notas: " + media);
