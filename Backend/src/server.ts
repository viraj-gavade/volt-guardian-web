import dotenv from 'dotenv';
dotenv.config();

import { createApp } from './app.js';
import { connectMongo } from './config/mongo.js';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

async function main() {
  await connectMongo();
  const app = createApp();
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
