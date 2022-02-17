import { Request, Response } from "express";
import { FindListByIdUseCase } from "./FindListByIdUseCase";

export class FindListByIdController {
    async handle(request: Request, response: Response) {
        const findListByIdUseCase = new FindListByIdUseCase();
        const { id } = request.body;
        const result = await findListByIdUseCase.execute(id);
        return response.json(result);
    }
}