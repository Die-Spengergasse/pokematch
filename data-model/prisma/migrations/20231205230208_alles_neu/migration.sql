-- CreateTable
CREATE TABLE "Pokemon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "height" REAL DEFAULT 0,
    "weight" REAL DEFAULT 0,
    "baseExp" REAL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Ability" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Move" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PokemonToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PokemonToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Pokemon" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PokemonToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AbilityToPokemon" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AbilityToPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AbilityToPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_MoveToPokemon" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MoveToPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "Move" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MoveToPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToType_AB_unique" ON "_PokemonToType"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToType_B_index" ON "_PokemonToType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AbilityToPokemon_AB_unique" ON "_AbilityToPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_AbilityToPokemon_B_index" ON "_AbilityToPokemon"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MoveToPokemon_AB_unique" ON "_MoveToPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_MoveToPokemon_B_index" ON "_MoveToPokemon"("B");
