function mostraDobro(numero) {
    if (numero <= 0) {
        console.log("Número menor ou igual a zero");
    } else {
        var dobro = numero * 2;
        console.log("O dobro de", numero, "é:", dobro);
    }
}

mostraDobro(7); 
mostraDobro(0); 
mostraDobro(-3); 
