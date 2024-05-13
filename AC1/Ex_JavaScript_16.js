class Livro {
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
}

var livros = [
    new Livro("Harry Potter e a Pedra Filosofal", 309),
    new Livro("O Senhor dos Anéis: A Sociedade do Anel", 576),
    new Livro("O Pequeno Príncipe", 96),
    new Livro("Cem Anos de Solidão", 457),
];

var livrosMais300Pg = livros.filter(livro => livro.paginas > 300);

console.log("Livros com mais de 300 páginas:", livrosMais300Pg );
