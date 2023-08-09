-- CreateTable
CREATE TABLE `_FilmsToUsers` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FilmsToUsers_AB_unique`(`A`, `B`),
    INDEX `_FilmsToUsers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_FilmsToUsers` ADD CONSTRAINT `_FilmsToUsers_A_fkey` FOREIGN KEY (`A`) REFERENCES `Films`(`IdFilm`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilmsToUsers` ADD CONSTRAINT `_FilmsToUsers_B_fkey` FOREIGN KEY (`B`) REFERENCES `Users`(`IdUser`) ON DELETE CASCADE ON UPDATE CASCADE;
