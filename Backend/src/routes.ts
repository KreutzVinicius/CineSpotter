import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { AuthenticateClientController } from "./modules/account/useCase/authenticateClient/AuthenticateClientConstroller";

import { FindAllWorksController } from "./modules/works/useCases/findAllWorks/FindAllWorksController";
import { FindWorkByIdController } from "./modules/works/useCases/findWorkById/FindWorkByIdController";
import { AddWorkInListController } from "./modules/lists/useCases/addWorkInList/AddWorkInListController";
import { RemoveWorkInListController } from "./modules/lists/useCases/RemoveWorkInList/RemoveWorkInListController";

import { FindAllListsController } from "./modules/clients/useCases/findAllClientLists/FindAllClientListsController";

import { FindListByIdController } from "./modules/lists/useCases/findListById/FindListByIdController";

import { FindRateByIdController } from "./modules/rates/useCases/findRateById/FindRateByIdController";
import { AvaliateWorkController } from "./modules/rates/useCases/avaliateWork/AvaliateWorkController";




const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

const findAllWorksController = new FindAllWorksController();
const findWorkByIdController = new FindWorkByIdController();
const addWorkInListController = new AddWorkInListController();
const removeWorkInListController = new RemoveWorkInListController();

const findAllListsController = new FindAllListsController();

const findListByIdController = new FindListByIdController();

const findRateByIdController = new FindRateByIdController();
const avaliateWorkController = new AvaliateWorkController();


routes.post("/client/", createClientController.handle);

routes.post("/login/", authenticateClientController.handle);
routes.post("/client/lists", findAllListsController.handle);
routes.put("/client/lists/work", addWorkInListController.handle);
routes.put("/client/lists/removework", removeWorkInListController.handle)


routes.get("/works/", findAllWorksController.handle);
routes.post("/works/id", findWorkByIdController.handle);
//to do works/genre

routes.post("/works/rate", findRateByIdController.handle);
routes.put("/works/ratework", avaliateWorkController.handle);


routes.get("/lists/id", findListByIdController.handle);
//

export { routes };