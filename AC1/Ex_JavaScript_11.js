class usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const usuarios = [
    new usuario("Giovani", 20),
    new usuario("Milton", 47),
    new usuario("Regiane", 46)
];

const nomesMaiusculo = usuarios.map(usuario => usuario.nome.toUpperCase());

console.log("Nomes dos usuários em letras maiúsculas:", nomesMaiusculo);
