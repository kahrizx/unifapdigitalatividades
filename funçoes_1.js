function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return 'Par';
  } else {
    return 'Ímpar';
  }
}

let resultado = verificarParOuImpar(7);
console.log(resultado);
