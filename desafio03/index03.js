//APLICANDO METODO CRIADOR - GRASP
class ItemPedido {
    constructor(nome, quantidade, preco) {
      this.nome = nome;
      this.quantidade = quantidade;
      this.preco = preco;
    }
  
    // Método para calcular o total de um item (quantidade * preço)
    calcularTotal() {
      return this.quantidade * this.preco;
    }
  }
  
  // Classe Pedido - Representa o pedido do cliente
  class Pedido {
    constructor(cliente) {
      this.cliente = cliente;
      this.itens = []; // Inicializa a lista de itens do pedido
    }
  
    // Método para adicionar um item ao pedido, criando o ItemPedido
    adicionarItem(nome, quantidade, preco) {
      // A classe Pedido é responsável pela criação do ItemPedido
      const item = new ItemPedido(nome, quantidade, preco);
      this.itens.push(item);
    }
  
    // Método para calcular o total do pedido
    calcularTotalPedido() {
      return this.itens.reduce((total, item) => total + item.calcularTotal(), 0);
    }
  }
  
  // Classe Cliente - Representa um cliente
  class Cliente {
    constructor(nome, endereco) {
      this.nome = nome;
      this.endereco = endereco;
    }
  
    // Métodos relacionados ao cliente podem ser adicionados aqui
    getNome() {
      return this.nome;
    }
  }
  
  // Criando instâncias e calculando o total de um pedido
  const cliente1 = new Cliente('Maria Oliveira', 'Avenida Central, 456');
  const pedido1 = new Pedido(cliente1);
  
  // Pedido cria os itens diretamente com o método 'adicionarItem'
  pedido1.adicionarItem('Camiseta', 2, 50);
  pedido1.adicionarItem('Calça', 1, 120);
  
  console.log(`Total do Pedido: R$ ${pedido1.calcularTotalPedido()}`);
  