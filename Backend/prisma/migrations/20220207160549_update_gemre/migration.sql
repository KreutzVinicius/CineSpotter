/*
  Warnings:

  - You are about to drop the column `genre` on the `works` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "works" DROP COLUMN "genre";

-- CreateTable
CREATE TABLE "Genre" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "worksId" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Genre" ADD CONSTRAINT "Genre_worksId_fkey" FOREIGN KEY ("worksId") REFERENCES "works"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
