import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { AuthenticateClientController } from "./modules/account/useCase/authenticateClient/AuthenticateClientConstroller";

import { FindAllWorksController } from "./modules/works/useCases/FindAllWorks/FindAllWorksController";
import { FindWorkByIdController } from "./modules/works/useCases/FindWorkById/FindWorkByIdController";

import { FindAllListsController } from "./modules/clients/useCases/findAllClientLists/FindAllClientListsController";

import { FindListByIdController } from "./modules/lists/useCases/FindListById/FindListByIdController";

import { FindRateByIdController } from "./modules/rates/useCases/FindRateById/FindRateByIdController";
import { AvaliateWorkController } from "./modules/rates/useCases/AvaliateWork/AvaliateWorkController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

const findAllWorksController = new FindAllWorksController();
const findWorkByIdController = new FindWorkByIdController();

const findAllListsController = new FindAllListsController();

const findListByIdController = new FindListByIdController();

const findRateByIdController = new FindRateByIdController();
const avaliateWorkController = new AvaliateWorkController();

routes.post("/client/", createClientController.handle);
routes.get("/client/lists", ensureAuthenticateClient, findAllListsController.handle);
routes.post("/authenticate/", authenticateClientController.handle);


routes.get("/works/", findAllWorksController.handle); //
routes.post("/works/id", findWorkByIdController.handle); //
//to do works/genre

routes.post("/works/rate", findRateByIdController.handle);
routes.post("/works/avaliaterate", avaliateWorkController.handle);


routes.get("/lists/id", findListByIdController.handle);


export { routes };