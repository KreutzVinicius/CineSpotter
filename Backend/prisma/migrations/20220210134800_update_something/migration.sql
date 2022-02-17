/*
  Warnings:

  - Added the required column `idWorks` to the `lists` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lists" ADD COLUMN     "idWorks" TEXT NOT NULL;
