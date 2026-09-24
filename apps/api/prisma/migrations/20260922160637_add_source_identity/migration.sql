/*
  Warnings:

  - A unique constraint covering the columns `[name,type]` on the table `source` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "source_name_type_key" ON "source"("name", "type");
