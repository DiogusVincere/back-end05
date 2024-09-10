class Pessoa {
    constructor(nome, idade, profissao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.salario = salario;
    }

    exibetrabalho(nomeempresa, tempoTrabalho) {
        // Imprime o nome da empresa e o tempo de trabalho
        console.log(`Nome da empresa: ${nomeempresa}, Tempo de trabalho: ${tempoTrabalho} anos.`);
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, sou ${this.profissao} e meu salário é R$${this.salario}.`;
    }
}

// Testando a classe Pessoa
const pessoa = new Pessoa("João", 30, "Desenvolvedor", 5000);

// Exibe as informações do trabalho
pessoa.exibetrabalho("TechCorp", 5);

// Exibe a apresentação pessoal
console.log(pessoa.apresentar());