import express, { Request, Response } from "express";
import routes from "./routes/router";
//import { categoriasRouter } from "./router/categoria.routes";

const app = express();

app.use(express.json());
app.use(routes);

//app.use(categoriasRouter);

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));
