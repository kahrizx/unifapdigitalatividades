function calcularSomaArray(array) {
  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }

  return soma;
}

let numeros = [2, 5, 8, 3];
let resultadoSoma = calcularSomaArray(numeros);
console.log(resultadoSoma);
