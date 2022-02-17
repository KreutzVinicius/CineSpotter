/*
  Warnings:

  - You are about to drop the column `usersId` on the `lists` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `clientsId` to the `lists` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "lists" DROP CONSTRAINT "lists_usersId_fkey";

-- AlterTable
ALTER TABLE "lists" DROP COLUMN "usersId",
ADD COLUMN     "clientsId" TEXT NOT NULL;

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "id_list" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_username_key" ON "clients"("username");

-- CreateIndex
CREATE UNIQUE INDEX "clients_id_list_key" ON "clients"("id_list");

-- AddForeignKey
ALTER TABLE "lists" ADD CONSTRAINT "lists_clientsId_fkey" FOREIGN KEY ("clientsId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
