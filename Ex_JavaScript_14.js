var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var numerosPares = numeros.filter(numero => numero % 2 === 0);

var numerosDobro = numerosPares.map(numero => numero * 2);

console.log("Números pares:", numerosPares);
console.log("Números pares dobrados:", numerosDobro);
