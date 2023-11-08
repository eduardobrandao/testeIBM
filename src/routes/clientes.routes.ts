import { Router } from "express";
import ClientesController from "../controller/ClientesController";

const clientesRoutes = Router();
const clienteController = new ClientesController();

clientesRoutes.get("/listar", clienteController.listaClientes);
clientesRoutes.get("/clientes-fieis", clienteController.obterClientesFieis);
clientesRoutes.get(
  "/recomendacao/cliente/tipo",
  clienteController.recomendacaoVinhoClientes
);

export default clientesRoutes;
