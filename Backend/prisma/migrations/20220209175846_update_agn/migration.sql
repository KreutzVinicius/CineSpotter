/*
  Warnings:

  - You are about to drop the column `id_client` on the `lists` table. All the data in the column will be lost.
  - Added the required column `idClient` to the `lists` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "lists" DROP CONSTRAINT "lists_id_client_fkey";

-- AlterTable
ALTER TABLE "lists" DROP COLUMN "id_client",
ADD COLUMN     "idClient" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "lists" ADD CONSTRAINT "lists_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
