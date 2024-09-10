// Define a classe base Produtos
class Produtos {
    // Construtor da classe Produtos, inicializa os atributos do produto
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        this.nome = nome;                   // Nome do produto (tipo: string)
        this.quantidade = quantidade;       // Quantidade disponível do produto (tipo: number)
        this.preco = preco;                 // Preço do produto (tipo: number)
        this.tipoComunicacao = tipoComunicacao; // Tipo de comunicação do produto (tipo: string)
        this.consumoEnergia = consumoEnergia; // Consumo de energia elétrica do produto (tipo: number)
        this.ligado = false;                // Estado do produto (ligado ou desligado), inicializado como falso (desligado)
    }

    // Método para ligar o produto
    ligar() {
        if (!this.ligado) {                // Verifica se o produto está desligado
            this.ligado = true;           // Define o estado do produto como ligado
            console.log(`${this.nome} está ligada.`); // Exibe uma mensagem indicando que o produto está ligado
        } else {
            console.log(`${this.nome} já está ligada.`); // Mensagem indicando que o produto já está ligado
        }
    }

    // Método para desligar o produto
    desligar() {
        if (this.ligado) {                // Verifica se o produto está ligado
            this.ligado = false;          // Define o estado do produto como desligado
            console.log(`${this.nome} está desligada.`); // Exibe uma mensagem indicando que o produto está desligado
        } else {
            console.log(`${this.nome} já está desligada.`); // Mensagem indicando que o produto já está desligado
        }
    }
}

// Define a classe Fritadeira que herda de Produtos
class Fritadeira extends Produtos {
    // Construtor da classe Fritadeira
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia); // Chama o construtor da classe base Produtos
    }

    // Método para ajustar a temperatura da fritadeira
    ajustarTemperatura(temperatura) {
        if (this.ligado) {                // Verifica se a fritadeira está ligada
            console.log(`Temperatura da ${this.nome} ajustada para ${temperatura}°C.`); // Exibe a temperatura ajustada
        } else {
            console.log(`${this.nome} deve estar ligada para ajustar a temperatura.`); // Mensagem indicando que a fritadeira deve estar ligada
        }
    }
}

// Define a classe Televisao que herda de Produtos
class Televisao extends Produtos {
    // Construtor da classe Televisao
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia); // Chama o construtor da classe base Produtos
    }

    // Método para ajustar a temperatura da televisão (para fins ilustrativos, vamos assumir que isso significa ajustar o brilho)
    ajustarTemperatura(brilho) {
        if (this.ligado) {                // Verifica se a televisão está ligada
            console.log(`Brilho da ${this.nome} ajustado para ${brilho}.`); // Exibe o brilho ajustado
        } else {
            console.log(`${this.nome} deve estar ligada para ajustar o brilho.`); // Mensagem indicando que a televisão deve estar ligada
        }
    }
}

// Define a classe ArCondicionado que herda de Produtos
class ArCondicionado extends Produtos {
    // Construtor da classe ArCondicionado
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia); // Chama o construtor da classe base Produtos
    }

    // Método para ajustar a temperatura do ar-condicionado
    ajustarTemperatura(temperatura) {
        if (this.ligado) {                // Verifica se o ar-condicionado está ligado
            console.log(`Temperatura do ${this.nome} ajustada para ${temperatura}°C.`); // Exibe a temperatura ajustada
        } else {
            console.log(`${this.nome} deve estar ligado para ajustar a temperatura.`); // Mensagem indicando que o ar-condicionado deve estar ligado
        }
    }
}

// Exemplo de uso das classes
const minhaFritadeira = new Fritadeira("Fritadeira Turbo", 10, 200, "Wi-Fi", 1500); // Cria uma instância da classe Fritadeira
minhaFritadeira.ligar();          // Liga a fritadeira
minhaFritadeira.ajustarTemperatura(180); // Ajusta a temperatura da fritadeira para 180°C

const minhaTelevisao = new Televisao("Televisão UltraHD", 5, 1500, "HDMI", 200); // Cria uma instância da classe Televisao
minhaTelevisao.ligar();          // Liga a televisão
minhaTelevisao.ajustarTemperatura(70); // Ajusta o brilho da televisão para 70

const meuArCondicionado = new ArCondicionado("Ar Condicionado Frio", 3, 3000, "Controle Remoto", 2000); // Cria uma instância da classe ArCondicionado
meuArCondicionado.ligar();       // Liga o ar-condicionado
meuArCondicionado.ajustarTemperatura(22); // Ajusta a temperatura do ar-condicionado para 22°C
