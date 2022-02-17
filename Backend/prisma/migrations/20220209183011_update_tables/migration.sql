-- DropForeignKey
ALTER TABLE "lists" DROP CONSTRAINT "lists_idClient_fkey";

-- AlterTable
ALTER TABLE "lists" ALTER COLUMN "idClient" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "lists" ADD CONSTRAINT "lists_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
