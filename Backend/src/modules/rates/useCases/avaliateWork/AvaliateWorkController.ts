import { Request, Response } from "express";
import { AvaliateWorkUseCase } from "./AvaliateWorkUseCase";

export class AvaliateWorkController {
    async handle(request: Request, response: Response) {
        const avaliateWorkUseCase = new AvaliateWorkUseCase();
        const { id, numRates, rate, avaliatedBy } = request.body;

        const result = await avaliateWorkUseCase.execute({
            id,
            numRates,
            rate,
            avaliatedBy,
        })
        return response.json(result)
    }
}