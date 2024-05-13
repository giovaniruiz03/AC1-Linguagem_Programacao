class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

var produtos = [
    new Produto("Camiseta", 50),
    new Produto("Calça", 80),
    new Produto("Tênis", 120),
    new Produto("Meia", 10),
    new Produto("Boné", 25)
];

var produtoCaro = produtos.find(produto => produto.preco > 100);

if (produtoCaro) {
    produtoCaro.nome = "Produto Caro";
}

console.log("Array de produtos após a alteração:", produtos);
