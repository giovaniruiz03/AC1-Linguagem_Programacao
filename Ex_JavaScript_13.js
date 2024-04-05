class usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const usuarios = [
    new usuario("Giovani", 26),
    new usuario("Tainá", 16),
    new usuario("Milton", 47),
    new usuario("Regiane", 46)
];

var usuario25_30 = usuarios.find(usuario => usuario.idade >= 25 && usuario.idade <= 30);

console.log("Primeiro usuário com idade entre 25 e 30 anos:", usuario25_30);
