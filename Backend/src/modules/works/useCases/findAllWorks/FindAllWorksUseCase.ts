import { prisma } from "../../../../database/prismaClient";

export class FindAllWorksUseCase {
    async execute() {
        const works = await prisma.works.findMany()
        return works
    }
}
