/*
  Warnings:

  - You are about to drop the column `create` on the `Midia` table. All the data in the column will be lost.
  - Added the required column `author` to the `Midia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Midia" DROP COLUMN "create",
ADD COLUMN     "author" TEXT NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;
