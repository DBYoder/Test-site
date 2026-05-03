import { hashSync } from 'bcryptjs';

const password = process.argv[2];
if (!password) {
  console.error('Usage: npx tsx scripts/generate-hash.ts <password>');
  process.exit(1);
}

const hash = hashSync(password, 12);
console.log(`\nAdd this to your .env.local:\n\nADMIN_PASSWORD_HASH=${hash}\n`);
