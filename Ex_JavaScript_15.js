class Animal {
    correr() {
        console.log("O animal está correndo.");
    }
}

class Cachorro extends Animal {
    emiteSom() {
        console.log("Au Au Au!");
    }
}

class Gato extends Animal {
    emiteSom() {
        console.log("Miau!");
    }
}

var cachorro = new Cachorro();
var gato = new Gato();

cachorro.emiteSom(); 
cachorro.correr(); 

gato.emiteSom(); 
gato.correr(); 
