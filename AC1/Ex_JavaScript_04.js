var nome = "Giovani Ruiz";
var splitNome = nome.split(" "); //Separar
var primeiroNome = splitNome[0];
var ultimoNome = splitNome[splitNome.length - 1];
var enderecoEmail = primeiroNome.toLowerCase() + "." + ultimoNome.toLowerCase() + "@facens.br";

console.log("Endereço de e-mail:", enderecoEmail);
