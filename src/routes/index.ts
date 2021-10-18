import { Router } from "express";
import pontosTuristicosRouter from "./pontosTuristicos.routes";
import eventosRouter from "./eventos.routes";
import rotasTuristicasRouter from "./rotasTuristicas.routes";
import estabelecimentosRouter from "./estabelecimentos.routes";
import imagesRouter from "./images.routes";

const routes = Router();


routes.use('/pontosturisticos',pontosTuristicosRouter)
routes.use('/eventos',eventosRouter)
routes.use('/rotasturisticas',rotasTuristicasRouter)
routes.use('/estabelecimentos',estabelecimentosRouter)
routes.use('/images',imagesRouter)

export default routes;