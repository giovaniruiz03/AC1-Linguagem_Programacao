function verificaPalindromo(string) {

    string = string.toLowerCase().replace(/\s/g, '');

    var palavraInvertida = string.split('').reverse().join('');
    
    return string === palavraInvertida;
}

console.log(verificaPalindromo("Ovo")); 
console.log(verificaPalindromo("Cachorro")); 
