import { Router } from "express";
import ComprasController from "../controller/ComprasController";

const comprasRoutes = Router();
const comprasController = new ComprasController();

comprasRoutes.get("/listar", comprasController.listaCompras);
comprasRoutes.get("/listar-ordenacao", comprasController.listaComprasOrdenacao);
comprasRoutes.get("/visualizar/:ano", comprasController.vizualizarCompras);
export default comprasRoutes;
