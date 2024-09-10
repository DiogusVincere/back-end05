// Define a classe Livros
class Livros {
    // Construtor da classe Livros, que inicializa os atributos do livro
    constructor(nome, quantidade, preco, autor, numeroEdicao) {
        this.nome = nome;                // Nome do livro (tipo: string)
        this.quantidade = quantidade;    // Quantidade de exemplares do livro disponíveis (tipo: number)
        this.preco = preco;              // Preço do livro (tipo: number)
        this.autor = autor;              // Nome do autor do livro (tipo: string)
        this.numeroEdicao = numeroEdicao; // Número da edição do livro (tipo: number)
    }

    // Método para emprestar o livro
    emprestar() {
        if (this.quantidade > 0) {      // Verifica se há exemplares disponíveis para emprestar
            this.quantidade--;          // Reduz a quantidade de exemplares disponíveis
            console.log(`O livro "${this.nome}" foi emprestado. Exemplares restantes: ${this.quantidade}.`); // Exibe uma mensagem informando o emprestimo
        } else {
            console.log(`Não há exemplares disponíveis do livro "${this.nome}" para emprestar.`); // Mensagem informando que não há exemplares disponíveis
        }
    }

    // Método para devolver o livro
    devolver() {
        this.quantidade++;              // Aumenta a quantidade de exemplares disponíveis
        console.log(`O livro "${this.nome}" foi devolvido. Exemplares disponíveis: ${this.quantidade}.`); // Exibe uma mensagem informando a devolução
    }
}

// Exemplo de uso da classe Livros
const livroExemplo = new Livros("Dom Quixote", 5, 30.00, "Miguel de Cervantes", 1); // Cria uma instância da classe Livros com valores fictícios

livroExemplo.emprestar(); // Empresta um exemplar do livro
livroExemplo.devolver();  // Devolve um exemplar do livro
