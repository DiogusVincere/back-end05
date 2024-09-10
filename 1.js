class Carro {
    constructor(marca, modelo, ano) {
        // Inicializa os atributos da classe
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.motorLigado = false;  // O motor começa desligado por padrão
    }

    ligarMotor() {
        // Liga o motor e atualiza o atributo motorLigado para true
        this.motorLigado = true;
        console.log(`O motor do ${this.marca} ${this.modelo} (${this.ano}) está ligado.`);
    }

    desligarMotor() {
        // Desliga o motor e atualiza o atributo motorLigado para false
        this.motorLigado = false;
        console.log(`O motor do ${this.marca} ${this.modelo} (${this.ano}) está desligado.`);
    }

    statusMotor() {
        // Retorna uma mensagem indicando se o motor está ligado ou desligado
        if (this.motorLigado) {
            return `O motor do ${this.marca} ${this.modelo} (${this.ano}) está ligado.`;
        } else {
            return `O motor do ${this.marca} ${this.modelo} (${this.ano}) está desligado.`;
        }
    }
}

// Testando a classe Carro
const carro = new Carro("Toyota", "Corolla", 2024);

console.log(carro.statusMotor());  // Deve mostrar que o motor está desligado

carro.ligarMotor();  // Liga o motor
console.log(carro.statusMotor());  // Deve mostrar que o motor está ligado

carro.desligarMotor();  // Desliga o motor
console.log(carro.statusMotor());  // Deve mostrar que o motor está desligado