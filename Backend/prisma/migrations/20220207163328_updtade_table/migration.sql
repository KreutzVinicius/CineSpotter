/*
  Warnings:

  - You are about to drop the `Genre` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `genreId` to the `works` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Genre" DROP CONSTRAINT "Genre_worksId_fkey";

-- AlterTable
ALTER TABLE "works" ADD COLUMN     "genreId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Genre";

-- CreateTable
CREATE TABLE "genre" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genre_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
