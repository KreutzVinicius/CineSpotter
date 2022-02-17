/*
  Warnings:

  - You are about to drop the `Rate` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cover` to the `works` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "works" DROP CONSTRAINT "works_rateId_fkey";

-- AlterTable
ALTER TABLE "works" ADD COLUMN     "cover" TEXT NOT NULL;

-- DropTable
DROP TABLE "Rate";

-- CreateTable
CREATE TABLE "rate" (
    "id" TEXT NOT NULL,
    "numRates" INTEGER NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "rate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "rate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
