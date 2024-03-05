let listaDeNomes = {
  nomes: ['Ana', 'Carlos', 'Beatriz', 'Fernanda', 'Ricardo']
};

let maiorNome = '';

for (let nome of listaDeNomes.nomes) {
  if (nome.length > maiorNome.length) {
    maiorNome = nome;
  }
}

console.log("O maior nome na lista é: " + maiorNome);
