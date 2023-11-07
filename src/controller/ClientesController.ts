import { Request, Response } from "express";
import ClientesService from "../service/ClientesServices";

export default class ClientesController {
  public async listaClientes(request: Request, response: Response) {
    const service = new ClientesService();

    const compras = await service.findAllClientes();

    return response.status(200).json(compras);
  }
}
