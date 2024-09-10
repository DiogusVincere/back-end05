  // Define a classe base Máquinas
  class Maquinas {
    // Construtor da classe, que inicializa os atributos da máquina
    constructor(nome, quantidadeEixos, rotacoesPorMinuto, consumoEnergia) {
        this.nome = nome;                    // Nome da máquina (tipo: string)
        this.quantidadeEixos = quantidadeEixos; // Quantidade de eixos da máquina (tipo: number)
        this.rotacoesPorMinuto = rotacoesPorMinuto; // Rotações por minuto (RPM) da máquina (tipo: number)
        this.consumoEnergia = consumoEnergia; // Consumo de energia elétrica (tipo: number)
        this.ligada = false;                // Estado da máquina (ligada ou desligada), inicializado como falsa (desligada)
    }

    // Método para ligar a máquina
    ligar() {
        if (!this.ligada) {                // Verifica se a máquina já está desligada
            this.ligada = true;           // Define o estado da máquina como ligada
            console.log(`${this.nome} está ligada.`); // Exibe uma mensagem indicando que a máquina está ligada
        } else {
            console.log(`${this.nome} já está ligada.`); // Mensagem indicando que a máquina já está ligada
        }
    }

    // Método para desligar a máquina
    desligar() {
        if (this.ligada) {                // Verifica se a máquina já está ligada
            this.ligada = false;          // Define o estado da máquina como desligada
            console.log(`${this.nome} está desligada.`); // Exibe uma mensagem indicando que a máquina está desligada
        } else {
            console.log(`${this.nome} já está desligada.`); // Mensagem indicando que a máquina já está desligada
        }
    }

    // Método para ajustar a velocidade de rotação da máquina
    ajustarVelocidade(rotacoes) {
        if (this.ligada) {                // Verifica se a máquina está ligada
            this.rotacoesPorMinuto = rotacoes; // Ajusta a velocidade de rotação para o valor fornecido
            console.log(`${this.nome} ajustada para ${this.rotacoesPorMinuto} RPM.`); // Exibe uma mensagem indicando a nova velocidade
        } else {
            console.log(`${this.nome} deve estar ligada para ajustar a velocidade.`); // Mensagem indicando que a máquina deve estar ligada para ajustar a velocidade
        }
    }
}

// Define a classe Furadeira, que herda da classe Máquinas
class Furadeira extends Maquinas {
    // Construtor da classe Furadeira
    constructor(nome, rotacoesPorMinuto, consumoEnergia) {
        super(nome, 0, rotacoesPorMinuto, consumoEnergia); // Chama o construtor da classe base (Máquinas) com valores específicos para a Furadeira
        // Note que a quantidade de eixos é definida como 0, pois não está sendo utilizada na Furadeira
    }

    // Métodos herdados da classe base, além dos definidos na própria classe Furadeira
}

// Exemplo de uso das classes
const minhaFuradeira = new Furadeira("Furadeira X", 1500, 500); // Cria uma instância da classe Furadeira com nome, rotações por minuto e consumo de energia

minhaFuradeira.ligar();          // Liga a furadeira
minhaFuradeira.ajustarVelocidade(2000); // Ajusta a velocidade da furadeira para 2000 RPM
minhaFuradeira.desligar();       // Desliga a furadeira