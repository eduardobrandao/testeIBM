import ICompra from "../model/ICompra";
import Api from "../api";

export default class ComprasService {
  public async findAllCompras(): Promise<ICompra[]> {
    const response = await Api.get("/fb94d1e0-f157-4133-94d7-37de04d5a8e6");

    return response.data;
  }
}
