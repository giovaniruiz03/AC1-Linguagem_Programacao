function inverteString(string) {

    return string.split('').reverse().join('');

}

var palavraOriginal = "Papagaio";
var palavraInvertida = inverteString(palavraOriginal);
console.log("Palavra original:", palavraOriginal);
console.log("Palavra invertida:", palavraInvertida);
