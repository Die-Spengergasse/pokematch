/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Ability` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Move` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Type` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ability_name_key" ON "Ability"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Move_name_key" ON "Move"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");
