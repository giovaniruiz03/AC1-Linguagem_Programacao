class Carro {
    constructor(nome, marca, ano) {
        this.nome = nome;
        this.marca = marca;
        this.ano = ano;
    }
}

var carros = [
    new Carro("Corolla", "Toyota", 2008),
    new Carro("Ecosport", "Ford", 2012),
    new Carro("Fielder", "Toyota", 2015),
    new Carro("Civic", "Honda", 2011)
];

var primeiroCarroToyota = carros.find(carro => carro.marca === "Toyota");

var carrosFabricadosApos2010 = carros.filter(carro => carro.ano > 2010);

console.log("Primeiro carro da marca Toyota:", primeiroCarroToyota);

console.log("Carros fabricados após 2010:", carrosFabricadosApos2010);
