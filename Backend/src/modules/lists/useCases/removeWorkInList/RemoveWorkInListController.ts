import { Request, Response } from "express";
import { RemoveWorkInListUseCase } from "./RemoveWorkInListUseCase";

export class RemoveWorkInListController {
    async handle(request: Request, response: Response) {
        const removeWorkInListUseCase = new RemoveWorkInListUseCase();

        const { id, idWork } = request.body;

        const result = await removeWorkInListUseCase.execute({
            id,
            idWork,
        })
        return response.json(result)
    }
}