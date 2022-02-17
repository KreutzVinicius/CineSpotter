/*
  Warnings:

  - You are about to drop the column `rate` on the `works` table. All the data in the column will be lost.
  - Added the required column `rateId` to the `works` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "works" DROP COLUMN "rate",
ADD COLUMN     "rateId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Rate" (
    "id" TEXT NOT NULL,
    "numRates" INTEGER NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Rate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "Rate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
