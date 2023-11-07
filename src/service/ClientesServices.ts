import ICliente from "../model/ICliente";
import Api from "../api";

export default class ClienteService {
  public async findAllClientes(): Promise<ICliente[]> {
    const response = await Api.get("/07acae80-d898-4136-a803-4adc1a3131eb");

    return response.data;
  }
}
