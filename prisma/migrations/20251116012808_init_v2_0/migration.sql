/*
  Warnings:

  - You are about to drop the `ProductGalleryImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductSpecification` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sections` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specifications` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductGalleryImage" DROP CONSTRAINT "ProductGalleryImage_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSection" DROP CONSTRAINT "ProductSection_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSpecification" DROP CONSTRAINT "ProductSpecification_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "features" TEXT[],
ADD COLUMN     "galleryImages" TEXT[],
ADD COLUMN     "image" TEXT,
ADD COLUMN     "sections" JSONB NOT NULL,
ADD COLUMN     "shortDesc" TEXT,
ADD COLUMN     "specifications" JSONB NOT NULL;

-- DropTable
DROP TABLE "ProductGalleryImage";

-- DropTable
DROP TABLE "ProductSection";

-- DropTable
DROP TABLE "ProductSpecification";
