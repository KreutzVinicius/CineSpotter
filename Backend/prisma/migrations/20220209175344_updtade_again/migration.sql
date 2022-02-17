/*
  Warnings:

  - You are about to drop the column `clients_id` on the `lists` table. All the data in the column will be lost.
  - Added the required column `id_client` to the `lists` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "lists" DROP CONSTRAINT "lists_clients_id_fkey";

-- AlterTable
ALTER TABLE "lists" DROP COLUMN "clients_id",
ADD COLUMN     "id_client" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "lists" ADD CONSTRAINT "lists_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
