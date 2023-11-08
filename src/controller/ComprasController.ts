import { Request, Response } from "express";
import ComprasService from "../service/ComprasService";

export default class ComprasController {
  public async listaCompras(request: Request, response: Response) {
    const service = new ComprasService();

    const compras = await service.findAllCompras();

    return response.status(200).json(compras);
  }

  public async listaComprasOrdenacao(request: Request, response: Response) {
    const service = new ComprasService();

    const compras = await service.findAllComprasOrdenarPorValor();

    return response.status(200).json(compras);
  }

  public async vizualizarCompras(request: Request, response: Response) {
    const { ano } = request.params;
    const service = new ComprasService();

    const compras = await service.findByAnoCompras(parseInt(ano));

    return response.status(200).json(compras);
  }
}
