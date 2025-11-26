//METODO S - SOLID
class ProdutoService {
    constructor(produtoRepository, estoqueService) {
      this.produtoRepository = produtoRepository;
      this.estoqueService = estoqueService;
    }
  
    adicionarProduto(produto) {
      if (!produto.nome || !produto.preco) {
        throw new Error("Nome e preço do produto são obrigatórios");
      }
  
      this.produtoRepository.salvar(produto);
      this.estoqueService.adicionarEstoque(produto);
    }
  }
  
  // Repositório de produtos
  class ProdutoRepository {
    salvar(produto) {
      console.log(`Produto ${produto.nome} adicionado ao banco de dados...`);
    }
  }
  
  // Serviço de controle de estoque
  class EstoqueService {
    adicionarEstoque(produto) {
      console.log(`Adicionando ${produto.quantidade} unidades de ${produto.nome} ao estoque...`);
    }
  }
  
  // Controlador de produtos
  class ProdutoController {
    constructor(produtoService) {
      this.produtoService = produtoService;
    }
  
    handleAddProdutoRequest(reqBody) {
      this.produtoService.adicionarProduto(reqBody);
      console.log("Produto adicionado com sucesso!");
    }
  }
  
  // Criando instâncias e utilizando os serviços
  const produtoRepo = new ProdutoRepository();
  const estoqueSvc = new EstoqueService();
  const produtoSvc = new ProdutoService(produtoRepo, estoqueSvc);
  const produtoController = new ProdutoController(produtoSvc);
  
  // Simulando uma requisição para adicionar um novo produto
  produtoController.handleAddProdutoRequest({
    nome: "Camiseta",
    preco: 49.90,
    quantidade: 100
  });
  