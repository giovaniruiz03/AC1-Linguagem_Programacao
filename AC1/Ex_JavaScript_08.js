function contaVogais(string) {
  
    var vogais = ['a', 'e', 'i', 'o', 'u'];

    string = string.toLowerCase();

    var contador = 0;

    for (var i = 0; i < string.length; i++) {

        if (vogais.includes(string[i])) {

            contador++;
        }
    }

    return contador;
    
}

var texto = "ADS - Análise e Desenvolvimento de Sistemas";
var numeroVogais = contaVogais(texto);
console.log("Número de vogais no texto:", numeroVogais);
