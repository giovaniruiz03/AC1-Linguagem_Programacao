function validaEmail(email) {

    var indiceArroba = email.indexOf('@');
    var indicePonto = email.indexOf('.', indiceArroba);

    return indiceArroba !== -1 && indicePonto !== -1 && indicePonto > indiceArroba;
}

console.log(validaEmail("giovani@ruiz.com")); 
console.log(validaEmail("giovaniruiz.com")); 
