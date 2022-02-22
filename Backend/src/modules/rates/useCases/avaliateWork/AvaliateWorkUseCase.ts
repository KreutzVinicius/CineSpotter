import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
    numRates: undefined;
    rate: number;
    id: string;
    avaliatedBy: string
}




export class AvaliateWorkUseCase {
    async execute({ id, rate, numRates, avaliatedBy }: ICreateClient) {

        const rates = await prisma.rate.findUnique({
            where: {
                id: id,
            },
            select: {
                avaliatedBy: true,
                rate: true
            }
        });

        if (rates) {
            if (rates.avaliatedBy) {
                avaliatedBy = rates.avaliatedBy + "," + avaliatedBy;
                rate = rates.rate + rate;
            }



            const client = await prisma.rate.update({
                where: {
                    id: id,
                },
                data: {
                    rate: rate,
                    numRates: numRates,
                    avaliatedBy: avaliatedBy

                }
            })
            return client
        }
    }
}