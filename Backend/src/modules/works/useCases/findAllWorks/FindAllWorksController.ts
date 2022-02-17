import { Request, Response } from "express";
import { FindAllWorksUseCase } from "./FindAllWorksUseCase";

export class FindAllWorksController {
    async handle(request: Request, response: Response) {
        const findAllWorksUseCase = new FindAllWorksUseCase();
        const result = await findAllWorksUseCase.execute();
        return response.json(result);
    }
}