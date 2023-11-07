import { Router } from "express";
import ComprasController from "../controller/ComprasController";

const comprasRoutes = Router();
const comprasController = new ComprasController();

comprasRoutes.get("/listar", comprasController.listaCompras);

export default comprasRoutes;
