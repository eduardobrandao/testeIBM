import ICliente from "../model/ICliente";
import Api from "../api";
import IRecomendacaoCliente from "../model/IRecomendacaoCliente";

export default class ClienteService {
  public async findAllClientes(): Promise<ICliente[]> {
    const response = await Api.get("/e55a624b-0588-4e7a-a869-e4ed921e35ea");

    return response.data;
  }

  public async findByClientes(): Promise<ICliente[]> {
    const response = await Api.get("/e55a624b-0588-4e7a-a869-e4ed921e35ea");
    const clientes = response.data as ICliente[];

    const gruposDeClientes = clientes.reduce((grupos, cliente) => {
      if (!grupos[cliente.cpf]) {
        grupos[cliente.cpf] = {
          cliente,
          totalCompras: 0,
        };
      }

      cliente.compras_vinho.forEach((compra) => {
        grupos[cliente.cpf].totalCompras += compra.quantidade;
      });

      return grupos;
    }, {} as Record<string, { cliente: ICliente; totalCompras: number }>);

    const gruposOrdenados = Object.values(gruposDeClientes).sort(
      (a, b) => b.totalCompras - a.totalCompras
    );

    const top3ClientesFieis = gruposOrdenados
      .slice(0, 3)
      .map((grupo) => grupo.cliente);

    return top3ClientesFieis;
  }

  public async recomendacaoClientes(): Promise<IRecomendacaoCliente[]> {
    const recomendacoes: IRecomendacaoCliente[] = [];

    try {
      const response = await Api.get("/e55a624b-0588-4e7a-a869-e4ed921e35ea");
      const clientes: ICliente[] = response.data;

      for (const cliente of clientes) {
        let maxQuantity = 0;
        let wineName = "";
        for (const compra of cliente.compras_vinho) {
          if (compra.quantidade > maxQuantity) {
            maxQuantity = compra.quantidade;
            wineName = compra.tipo;
          }
        }

        if (wineName) {
          const recomendacao: IRecomendacaoCliente = {
            mensagem: `Olá caro cliente ${cliente.nome} baseado em suas ultimas compras, recomendamos um vinho ${wineName} `,
          };
          recomendacoes.push(recomendacao);
        }
      }

      return recomendacoes;
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
      return recomendacoes;
    }
  }
}
