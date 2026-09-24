-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'RESEARCHER', 'ADMIN');

-- CreateEnum
CREATE TYPE "UnitType" AS ENUM ('MASS', 'VOLUME', 'COUNT', 'MARKET_MEASURE');

-- CreateEnum
CREATE TYPE "SourceType" AS ENUM ('FIELD_SURVEY', 'GOVERNMENT_DATA', 'PARTNER_DATA', 'PUBLIC_REPORT', 'USER_SUBMISSION', 'OTHER');

-- CreateEnum
CREATE TYPE "PriceStatus" AS ENUM ('PENDING', 'VERIFIED', 'REJECTED');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "type" "UnitType" NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "commodity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "commodity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "market" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "market_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "source" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "SourceType" NOT NULL,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "priceObservation" (
    "id" SERIAL NOT NULL,
    "commodityId" INTEGER NOT NULL,
    "marketId" INTEGER NOT NULL,
    "unitId" INTEGER NOT NULL,
    "submittedBy" INTEGER NOT NULL,
    "sourceId" INTEGER,
    "price" DECIMAL(12,2) NOT NULL,
    "quantity" DECIMAL(12,3) NOT NULL,
    "status" "PriceStatus" NOT NULL DEFAULT 'PENDING',
    "observedAt" TIMESTAMP(3) NOT NULL,
    "verifiedBy" INTEGER,
    "verifiedAt" TIMESTAMP(3),
    "verificationNote" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "priceObservation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "category_slug_key" ON "category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "unit_symbol_key" ON "unit"("symbol");

-- CreateIndex
CREATE UNIQUE INDEX "commodity_slug_key" ON "commodity"("slug");

-- CreateIndex
CREATE INDEX "commodity_categoryId_idx" ON "commodity"("categoryId");

-- CreateIndex
CREATE INDEX "priceObservation_commodityId_marketId_observedAt_idx" ON "priceObservation"("commodityId", "marketId", "observedAt");

-- CreateIndex
CREATE INDEX "priceObservation_marketId_observedAt_idx" ON "priceObservation"("marketId", "observedAt");

-- CreateIndex
CREATE INDEX "priceObservation_commodityId_observedAt_idx" ON "priceObservation"("commodityId", "observedAt");

-- CreateIndex
CREATE INDEX "priceObservation_status_idx" ON "priceObservation"("status");

-- AddForeignKey
ALTER TABLE "commodity" ADD CONSTRAINT "commodity_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "priceObservation" ADD CONSTRAINT "priceObservation_commodityId_fkey" FOREIGN KEY ("commodityId") REFERENCES "commodity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "priceObservation" ADD CONSTRAINT "priceObservation_marketId_fkey" FOREIGN KEY ("marketId") REFERENCES "market"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "priceObservation" ADD CONSTRAINT "priceObservation_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "priceObservation" ADD CONSTRAINT "priceObservation_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "priceObservation" ADD CONSTRAINT "priceObservation_submittedBy_fkey" FOREIGN KEY ("submittedBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "priceObservation" ADD CONSTRAINT "priceObservation_verifiedBy_fkey" FOREIGN KEY ("verifiedBy") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
