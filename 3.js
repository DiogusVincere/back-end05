class Automóvel {
    constructor(cor, modelo, combustivel, qntdRodas){
        this.cor = cor;
        this.modelo = modelo;
        this.combustivel = combustivel;
        this.qntdRodas = qntdRodas
        this.motorLigado = false;
        this.vidroAberto= false;
    }

    ligarMotor(){
        this.motorLigado = true;
        console.log(`O motor do ${this.modelo} está ligado`)
    }

    desligarMotor(){
        this.motorLigado = false
        console.log(`O motor do ${this.modelo} está desligado`)
    }

    abrir_vidro() { 
        this.vidro_aberto = true; 
        console.log(`O vidro do ${this.modelo} está aberto.`); 
    } 

    descer_vidro() { 
        this.vidro_aberto = false; 
        console.log(`O vidro do ${this.modelo} está fechado.`); 
    } 
} 

class Carro extends Automóvel {
    constructor(cor, modelo, combustivel, qntdRodas, qntdPortas) {
    super(cor, modelo, combustivel, qntdRodas);
    this.qntdPortas = qntdPortas;
    this.turbo = false;
}

abrir_porta(){
    console.log(`Abrindo porta do carro ${this.modelo}`)
}

temTurbo(){
    this.turbo = true;
    console.log(`O ${this.modelo} tem turbo`)
}

naotemturbo(){
    this.turbo = false;
    console.log(`O ${this.modelo} não tem turbo`)
}
}

class Moto extends Automovel { 
    constructor(cor, modelo, tipo_combustivel, quantidade_rodas, tipo) { 
        super(cor, modelo, tipo_combustivel, quantidade_rodas); 
        this.tipo = tipo;  // Tipo de moto (esportiva, cruiser, etc.) 
    } 
    empinar() { 
        console.log(`A moto ${this.modelo} está empinando.`); 
    } 
    cortarGiro() {
        console.log(`A moto ${this.modelo} está cortando de giro.`)
    }
}

class Caminhao extends Automovel { 
    constructor(cor, modelo, tipo_combustivel, quantidade_rodas, capacidade_carga) { 
         super(cor, modelo, tipo_combustivel, quantidade_rodas); 
         this.capacidade_carga = capacidade_carga;  // Capacidade de carga do caminhão 
     } 
     carregar() { 
         console.log(`Carregando o caminhão ${this.modelo} com capacidade de ${this.capacidade_carga} kg.`); 
     } 
}

// Testando a classe Carro 

const meuCarro = new Carro("vermelho", "Fusca", "Gasolina", 4, 4); 
console.log(`Carro: ${meuCarro.modelo}, Cor: ${meuCarro.cor}`); 
meuCarro.ligar_motor(); 
meuCarro.abrir_vidro(); 
meuCarro.abrir_porta(); 
meuCarro.descer_vidro(); 
meuCarro.desligar_motor(); 
meuCarro.temTurbo();

// Testando a classe Moto 
const minhaMoto = new Moto("azul", "Honda CB500", "Gasolina", 2, "esportiva"); 
console.log(`Moto: ${minhaMoto.modelo}, Cor: ${minhaMoto.cor}, Tipo: ${minhaMoto.tipo}`); 
minhaMoto.ligar_motor(); 
minhaMoto.empinar(); 
minhaMoto.descer_vidro(); 
minhaMoto.desligar_motor(); 

// Testando a classe Caminhao 
const meuCaminhao = new Caminhao("amarelo", "Volvo FH", "Diesel", 6, 15000); 
console.log(`Caminhão: ${meuCaminhao.modelo}, Cor: ${meuCaminhao.cor}, Capacidade de carga: ${meuCaminhao.capacidade_carga} kg`); 
meuCaminhao.ligar_motor(); 
meuCaminhao.carregar(); 
meuCaminhao.descer_vidro(); 
meuCaminhao.desligar_motor();