import { Request, Response } from "express";
import { FindWorkByIdUseCase } from "./FindWorkByIdUseCase";

export class FindWorkByIdController {
    async handle(request: Request, response: Response) {
        const findWorkByIdUseCase = new FindWorkByIdUseCase();
        const { id } = request.body;
        const result = await findWorkByIdUseCase.execute(id);
        return response.json(result);
    }
}