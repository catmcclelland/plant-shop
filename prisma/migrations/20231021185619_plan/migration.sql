/*
  Warnings:

  - You are about to drop the column `plantName` on the `Purchase` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Purchase" DROP COLUMN "plantName";

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
