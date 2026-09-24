/*
  Warnings:

  - A unique constraint covering the columns `[name,city,state]` on the table `market` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "market_name_city_state_key" ON "market"("name", "city", "state");
