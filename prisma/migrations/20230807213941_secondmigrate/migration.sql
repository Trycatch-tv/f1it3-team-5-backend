/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Ratings` (
    `IdRating` INTEGER NOT NULL AUTO_INCREMENT,
    `RatingValue` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`IdRating`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Directors` (
    `IdDirector` INTEGER NOT NULL AUTO_INCREMENT,
    `DirectorName` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`IdDirector`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genres` (
    `IdGenre` INTEGER NOT NULL AUTO_INCREMENT,
    `GenreName` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`IdGenre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Films` (
    `IdFilm` INTEGER NOT NULL AUTO_INCREMENT,
    `FilmName` VARCHAR(255) NOT NULL,
    `IdDirector` INTEGER NOT NULL,
    `imagenUrl` VARCHAR(255) NOT NULL,
    `IdGenre` INTEGER NOT NULL,

    PRIMARY KEY (`IdFilm`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `IdUser` INTEGER NOT NULL AUTO_INCREMENT,
    `UserName` VARCHAR(255) NOT NULL,
    `UserPassword` VARCHAR(255) NOT NULL,
    `UserEmail` VARCHAR(255) NOT NULL,
    `UserRol` INTEGER NOT NULL,

    PRIMARY KEY (`IdUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Roles` (
    `IdRol` INTEGER NOT NULL AUTO_INCREMENT,
    `RolName` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`IdRol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Films` ADD CONSTRAINT `Films_IdDirector_fkey` FOREIGN KEY (`IdDirector`) REFERENCES `Directors`(`IdDirector`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Films` ADD CONSTRAINT `Films_IdGenre_fkey` FOREIGN KEY (`IdGenre`) REFERENCES `Genres`(`IdGenre`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_UserRol_fkey` FOREIGN KEY (`UserRol`) REFERENCES `Roles`(`IdRol`) ON DELETE RESTRICT ON UPDATE CASCADE;
