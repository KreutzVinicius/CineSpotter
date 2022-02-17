-- DropForeignKey
ALTER TABLE "works" DROP CONSTRAINT "works_genreId_fkey";

-- CreateTable
CREATE TABLE "_GenreToWorks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToWorks_AB_unique" ON "_GenreToWorks"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToWorks_B_index" ON "_GenreToWorks"("B");

-- AddForeignKey
ALTER TABLE "_GenreToWorks" ADD FOREIGN KEY ("A") REFERENCES "genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToWorks" ADD FOREIGN KEY ("B") REFERENCES "works"("id") ON DELETE CASCADE ON UPDATE CASCADE;
