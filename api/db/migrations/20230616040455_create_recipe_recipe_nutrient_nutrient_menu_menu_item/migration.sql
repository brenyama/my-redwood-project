-- CreateTable
CREATE TABLE "UserExample" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "servingSize" INTEGER NOT NULL,
    "servingUnit" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "RecipeNutrient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nutrientId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    CONSTRAINT "RecipeNutrient_nutrientId_fkey" FOREIGN KEY ("nutrientId") REFERENCES "Nutrient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RecipeNutrient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Nutrient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "baseUnit" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MenuItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recipeId" INTEGER NOT NULL,
    "menuId" INTEGER NOT NULL,
    "servingValue" INTEGER NOT NULL,
    CONSTRAINT "MenuItem_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MenuItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "UserExample_email_key" ON "UserExample"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_name_key" ON "Recipe"("name");

-- CreateIndex
CREATE UNIQUE INDEX "RecipeNutrient_nutrientId_key" ON "RecipeNutrient"("nutrientId");

-- CreateIndex
CREATE UNIQUE INDEX "MenuItem_recipeId_key" ON "MenuItem"("recipeId");
