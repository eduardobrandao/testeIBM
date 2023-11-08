import ICliente from "../model/ICliente";
import Api from "../api";
import IRecomendacaoCliente from "../model/IRecomendacaoCliente";

export default class ClienteService {
  public async findAllClientes(): Promise<ICliente[]> {
    const response = await Api.get("/07acae80-d898-4136-a803-4adc1a3131eb");

    return response.data;
  }

  public async findByClientes(): Promise<ICliente[]> {
    const response = await Api.get("/07acae80-d898-4136-a803-4adc1a3131eb");
    const clientes = response.data as ICliente[];
    const gruposDeClientes = clientes.reduce((grupos, cliente) => {
      if (!grupos[cliente.cpf]) {
        grupos[cliente.cpf] = {
          cliente,
          totalCompras: 0,
        };
      }
      grupos[cliente.cpf].totalCompras += cliente.quantidadeComprada;
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
    try {
      const response = await Api.get("/07acae80-d898-4136-a803-4adc1a3131eb");
      const data = response.data.map((m) => ({
        mensagem: ` Olá caro cliente ${m.nome}, depois de analisamos seu histórico de pedidos recomendamos ${m.tipo_vinho_preferido}.`,
      })) as IRecomendacaoCliente[];
      return data;
    } catch (error) {
      throw new Error("Erro ao buscar recomendações de clientes.");
    }
  }
}
