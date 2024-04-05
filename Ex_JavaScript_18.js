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

var precosAumentados = produtos.map(produto => ({
    nome: produto.nome,
    precoOriginal: produto.preco,
    precoAumentado: (produto.preco * 1.1).toFixed(2)
}));

console.log("Produtos com preços originais e aumentados em 10%:");
precosAumentados.forEach(produto => {
    console.log(`Produto: ${produto.nome}, Preço Original: ${produto.precoOriginal}, Preço Aumentado: ${produto.precoAumentado}`);
});
