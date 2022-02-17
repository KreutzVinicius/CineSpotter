import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
    numRates: undefined;
    rate: undefined;
    id: string;
}




export class AvaliateWorkUseCase {
    async execute({ id, rate, numRates }: ICreateClient) {
        const client = await prisma.rate.update({
            where: {
                id: id,
            },
            data: {
                rate: rate,
                numRates: numRates,
            }
        })
        return client
    }
}
