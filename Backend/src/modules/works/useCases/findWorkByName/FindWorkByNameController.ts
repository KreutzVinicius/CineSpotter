import { Request, Response } from "express";
import { FindWorkByNameUseCase } from "./FindWorkByNameUseCase";

export class FindWorkByNameController {
    async handle(request: Request, response: Response) {
        const findWorkByNameUseCase = new FindWorkByNameUseCase();
        const { name } = request.body;
        const result = await findWorkByNameUseCase.execute(name);
        return response.json(result);
    }
}