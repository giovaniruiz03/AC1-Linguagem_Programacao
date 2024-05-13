var numeros = "";

for (var i = 1; i < 11; i++) {
   
    numeros += i;

    
    if (i < 10) {
        numeros += " - ";
    }
}


console.log(numeros);
