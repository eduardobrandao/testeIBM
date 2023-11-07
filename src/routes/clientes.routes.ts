import { Router } from "express";
import ClientesController from "../controller/ClientesController";

const clientesRoutes = Router();
const clienteController = new ClientesController();

clientesRoutes.get("/listar", clienteController.listaClientes);

export default clientesRoutes;
