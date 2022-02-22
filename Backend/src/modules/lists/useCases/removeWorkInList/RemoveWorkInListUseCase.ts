import { prisma } from "../../../../database/prismaClient";

interface IRemoveWorkInList {
    id: string;
    idWork: string;
}


export class RemoveWorkInListUseCase {
    async execute({ id, idWork }: IRemoveWorkInList) {

        const listt = await prisma.lists.findUnique({
            where: {
                id: id,
            },
            select: {
                idWorks: true
            }
        });

        if (listt) {
            if (listt.idWorks) {
                var index = listt.idWorks.indexOf(idWork);
                if (index == 0) {
                    var str2 = listt.idWorks.slice(index + 2);
                    idWork = str2;
                } else {
                    var str1 = listt.idWorks.slice(0, index - 1);
                    var str2 = listt.idWorks.slice(index + 1);

                    idWork = str1 + str2;

                }

                const list = await prisma.lists.update({
                    where: { id: id },
                    data: {
                        idWorks: idWork,
                    },
                });

                return list;
            }


        }
        return listt;
    }
}