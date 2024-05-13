class usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const usuarios = [
    new usuario("Giovani", 20),
    new usuario("Tainá", 16),
    new usuario("Milton", 47),
    new usuario("Regiane", 46)
];

var usuariosMaioresDeIdade = usuarios.filter(usuario => usuario.idade > 18);

console.log("Usuários com idade superior a 18 anos:", usuariosMaioresDeIdade);
