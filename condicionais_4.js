let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

if (idade >= 16) {
  console.log("Você está apto(a) a votar neste ano.");
} else {
  console.log("Você não está apto(a) a votar neste ano.");
}
