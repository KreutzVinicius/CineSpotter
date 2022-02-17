import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
    username: string;
    password: string;
}

export const createListsClient = async (idClient: string) => {
    const names = ["General", "Watching", "Completed", "On Hold", "Dropped", "Plan to watch"];
    let AllIds = ""
    for (let i = 0; i < names.length; i++) {
        const listClient = await prisma.lists.create({
            data: {
                listname: names[i],
                idClient,
            }
        });
        AllIds += listClient.id + "&"
    }
    AddListOnClient(AllIds, idClient);
}

export const AddListOnClient = async (listId: string, idClient: string) => {
    const client = await prisma.clients.update({
        where: {
            id: idClient,
        },
        data: {
            id_list: listId
        }
    })
}

export class CreateClientUseCase {
    async execute({ password, username }: ICreateClient) {

        const clientExist = await prisma.clients.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive",
                }
            }
        })
        if (clientExist) {
            throw new Error("Client already exist")
        }

        const hashPassword = await hash(password, 10);

        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword,
            },
        });

        createListsClient(client.id);
    }
}