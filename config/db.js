//PrismaClient connection to the db
const { PrismaClient } =  require("@prisma/client");
const prisma = new PrismaClient();
module.exports = prisma;