import { prisma } from "../../../../database/prismaClient";


export class FindWorkByIdUseCase {
    async execute(id: string) {
        const works = await prisma.works.findUnique({
            where: {
                id: id,
            },
        });
        return works
    }
}