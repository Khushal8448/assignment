/*
  Warnings:

  - You are about to drop the column `userId` on the `Product` table. All the data in the column will be lost.
  - Changed the type of `category` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('FoodBeverages', 'PersonalCare', 'Electronics', 'Healthcare', 'Household', 'ApparelFootwear');

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_userId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "userId",
ADD COLUMN     "brand" TEXT,
DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;
