/*
  Warnings:

  - Added the required column `plantName` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_plantId_fkey";

-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN     "plantName" TEXT NOT NULL;
