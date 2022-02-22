import { Request, Response } from "express";
import { AddWorkInListUseCase } from "./AddWorkInListUseCase";

export class AddWorkInListController {
    async handle(request: Request, response: Response) {
        const addWorkInListUseCase = new AddWorkInListUseCase();
        const { id, idWork } = request.body;

        const result = await addWorkInListUseCase.execute({
            id,
            idWork,
        })
        return response.json(result)
    }
}