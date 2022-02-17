import { prisma } from "../../../../database/prismaClient";


export class FindRateByIdUseCase {
    async execute(id: string) {
        const works = await prisma.rate.findUnique({
            where: {
                id: id,
            },
        });
        return works
    }
}