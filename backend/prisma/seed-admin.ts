import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const name = process.env.INITIAL_ADMIN_NAME;
  const email = process.env.INITIAL_ADMIN_EMAIL;
  const password = process.env.INITIAL_ADMIN_PASSWORD;

  if (!name || !email || !password) {
    throw new Error(
      'INITIAL_ADMIN_NAME, INITIAL_ADMIN_EMAIL and INITIAL_ADMIN_PASSWORD must be set in the environment to run this seed.',
    );
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log(`Admin bootstrap skipped: a user with email "${email}" already exists.`);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const admin = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
      role: Role.SUPER_ADMIN,
      isActive: true,
    },
  });

  console.log(`SUPER_ADMIN created: ${admin.email} (id: ${admin.id})`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
