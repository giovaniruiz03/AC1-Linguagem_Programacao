var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

var divisiveisPor3 = numeros.filter(numero => numero % 3 === 0);

var quadrados = divisiveisPor3.map(numero => numero ** 2);

console.log("Números divisíveis por 3:", divisiveisPor3);
console.log("Quadrados dos números divisíveis por 3:", quadrados);
