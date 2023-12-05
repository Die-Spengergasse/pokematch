/*
  Warnings:

  - You are about to alter the column `baseExp` on the `Pokemon` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - You are about to alter the column `height` on the `Pokemon` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - You are about to alter the column `weight` on the `Pokemon` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pokemon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "height" INTEGER DEFAULT 0,
    "weight" INTEGER DEFAULT 0,
    "baseExp" INTEGER DEFAULT 0
);
INSERT INTO "new_Pokemon" ("baseExp", "height", "id", "name", "weight") SELECT "baseExp", "height", "id", "name", "weight" FROM "Pokemon";
DROP TABLE "Pokemon";
ALTER TABLE "new_Pokemon" RENAME TO "Pokemon";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
