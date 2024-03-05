let listaDeCompras = {
  produtos: {
    arroz: 10,
    feijao: 5,
    carne: 20,
    leite: 3,
    pao: 2
  }
};

let somaTotal = 0;

for (let produto in listaDeCompras.produtos) {
  somaTotal += listaDeCompras.produtos[produto];
}

console.log("A soma total dos valores é: " + somaTotal);
