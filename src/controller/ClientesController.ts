import { Request, Response } from "express";
import ClientesService from "../service/ClientesServices";

export default class ClientesController {
  public async listaClientes(request: Request, response: Response) {
    const service = new ClientesService();

    const compras = await service.findAllClientes();

    return response.status(200).json(compras);
  }

  public async obterClientesFieis(request: Request, response: Response) {
    const service = new ClientesService();

    const compras = await service.findByClientes();

    return response.status(200).json(compras);
  }

  public async recomendacaoVinhoClientes(request: Request, response: Response) {
    const service = new ClientesService();

    const compras = await service.recomendacaoClientes();

    return response.status(200).json(compras);
  }
}
