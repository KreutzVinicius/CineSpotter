/*
  Warnings:

  - Made the column `idClient` on table `lists` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "lists" DROP CONSTRAINT "lists_idClient_fkey";

-- AlterTable
ALTER TABLE "lists" ALTER COLUMN "idClient" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "lists" ADD CONSTRAINT "lists_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
