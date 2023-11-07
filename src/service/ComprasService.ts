import ICompra from "../model/ICompra";
import Api from "../api";

export default class ComprasService {
  public async findAllCompras(): Promise<ICompra[]> {
    const response = await Api.get("/fb94d1e0-f157-4133-94d7-37de04d5a8e6");

    return response.data;
  }

  public async findAllComprasOrdenarPorValor(): Promise<ICompra[]> {
    const response = await Api.get("/fb94d1e0-f157-4133-94d7-37de04d5a8e6");

    const compras: ICompra[] = response.data;
    compras.sort((a, b) => a.preco - b.preco);

    return compras;
  }

  public async findByAnoCompras(ano: number): Promise<ICompra | null> {
    const response = await Api.get("/fb94d1e0-f157-4133-94d7-37de04d5a8e6");
    let maiorCompra: ICompra | null = null;

    for (const compra of response.data) {
      if (compra.ano_compra === ano) {
        if (maiorCompra === null || compra.preco > maiorCompra.preco) {
          maiorCompra = compra;
        }
      }
    }

    return maiorCompra;
  }
}
