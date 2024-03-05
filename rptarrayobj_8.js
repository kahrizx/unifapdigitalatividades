let numeros = [3, 8, 5, 12, 7, 10];
let pares = [];
let impares = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  } else {
    impares.push(numeros[i]);
  }
}

console.log("Números Pares: " + pares);
console.log("Números Ímpares: " + impares);
