import { prisma } from "../../../../database/prismaClient";


export class FindListByIdUseCase {
    async execute(id: string) {
        const works = await prisma.lists.findUnique({
            where: {
                id: id,
            },
            select: {
                idWorks: true
            }
        });
        return works
    }
}