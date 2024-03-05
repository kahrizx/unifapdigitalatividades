let tipoUsuario = prompt("Digite o tipo de usuário [Comum, Gerente, Diretor]:");

switch (tipoUsuario.toLowerCase()) {
  case "comum":
    console.log("Permissão de usuário comum concedida.");
    break;
  case "gerente":
    console.log("Permissão de gerente concedida.");
    break;
  case "diretor":
    console.log("Permissão de diretor concedida.");
    break;
  default:
    console.log("Tipo de usuário não reconhecido.");
}
