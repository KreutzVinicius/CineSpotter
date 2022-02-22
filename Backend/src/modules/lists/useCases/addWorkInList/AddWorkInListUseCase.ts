import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface IAddWorkInList {
    id: string;
    idWork: string;
}


export class AddWorkInListUseCase {
    async execute({ id, idWork }: IAddWorkInList) {

        const lists = await prisma.lists.findUnique({
            where: {
                id: id,
            },
            select: {
                idWorks: true
            }
        });

        if (lists) {
            if (lists.idWorks != null) {
                idWork = lists.idWorks + "," + idWork;
            }

            const list = await prisma.lists.update({
                where: { id: id, },
                data: {
                    idWorks: idWork,
                },
            });

            return list;
        }
    }
}