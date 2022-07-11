import { PrismaClient } from "@prisma/client";
import { users } from "./dataset";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log(`created ${users.length} users`);

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
