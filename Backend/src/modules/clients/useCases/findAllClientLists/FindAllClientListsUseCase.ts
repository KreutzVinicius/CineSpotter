import { prisma } from "../../../../database/prismaClient";

export class FindAllListsUseCase {
    async execute(idClient: string) {
        const lists = await prisma.lists.findMany({
            where: {
                idClient: idClient,
            },
            select: {
                id: true,
                listname: true,
                idWorks: true,
                idClient: true
            }
        });
        return lists


    }
}