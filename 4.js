class Cliente {
    constructor(nome, profissao, saldoInicial) {
        this.nome = nome;
        this.profissao = profissao;
        this.saldo = saldoInicial;
    }
   
    pix(valor) {
        if (valor > 0) {
            this.saldo -= valor;
            console.log(`Pix de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
        } else {
            console.log('Valor inválido para Pix.');
        }
    }
   
    emprestimo(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Empréstimo de R$${valor.toFixed(2)} concedido. Novo saldo: R$${this.saldo.toFixed(2)}`);
        } else {
            console.log('Valor inválido para empréstimo.');
        }
    }
   
    saque(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
        } else {
            console.log('Valor inválido ou saldo insuficiente para saque.');
        }
    }
   
    extrato() {
        console.log(`Extrato: R$${this.saldo.toFixed(2)}`);
    }
  }
   
   
  const cliente = new Cliente('Augusto', 'Analista', 1000);
   
   
  cliente.pix(600);          
  cliente.emprestimo(200);  
  cliente.saque(100);        
  cliente.extrato();