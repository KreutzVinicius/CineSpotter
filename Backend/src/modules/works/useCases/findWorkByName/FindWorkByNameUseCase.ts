import { prisma } from "../../../../database/prismaClient";


export class FindWorkByNameUseCase {
    async execute(name: string) {
        const works = await prisma.works.findMany({
            where: {
                name: name,
            },
        });
        return works
    }
}