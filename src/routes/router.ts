import { Router } from "express";
import comprasRoutes from "./compras.routes";
import clientesRoutes from "./clientes.routes";

const routes = Router();
routes.use("/compras", comprasRoutes);
routes.use("/clientes", clientesRoutes);
export default routes;
