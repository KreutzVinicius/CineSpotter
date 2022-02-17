import { Request, Response } from "express";
import { FindRateByIdUseCase } from "./FindRateByIdUseCase";

export class FindRateByIdController {
    async handle(request: Request, response: Response) {
        const findRateByIdUseCase = new FindRateByIdUseCase();
        const { id } = request.body;
        const result = await findRateByIdUseCase.execute(id);
        return response.json(result);
    }
}