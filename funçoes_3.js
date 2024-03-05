function filtrarStrings(array) {
  let resultado = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      resultado.push(array[i]);
    }
  }

  return resultado;
}

let frutas = ["maçã", "banana", "kiwi", "morango", "laranja"];
let resultadoFiltrado = filtrarStrings(frutas);
console.log(resultadoFiltrado);
