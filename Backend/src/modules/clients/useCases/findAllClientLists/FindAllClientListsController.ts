import { Request, Response } from "express";
import { FindAllListsUseCase } from "./FindAllClientListsUseCase";

export class FindAllListsController {
    async handle(request: Request, response: Response) {
        const findAllListsUseCase = new FindAllListsUseCase();
        const { idClient } = request.body;
        const result = await findAllListsUseCase.execute(idClient)
        return response.json(result)
    }
}