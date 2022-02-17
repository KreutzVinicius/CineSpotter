/*
  Warnings:

  - You are about to drop the column `clientsId` on the `lists` table. All the data in the column will be lost.
  - Added the required column `clients_id` to the `lists` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "lists" DROP CONSTRAINT "lists_clientsId_fkey";

-- DropForeignKey
ALTER TABLE "works" DROP CONSTRAINT "works_listsId_fkey";

-- AlterTable
ALTER TABLE "lists" DROP COLUMN "clientsId",
ADD COLUMN     "clients_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "works" ALTER COLUMN "listsId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_listsId_fkey" FOREIGN KEY ("listsId") REFERENCES "lists"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lists" ADD CONSTRAINT "lists_clients_id_fkey" FOREIGN KEY ("clients_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
