import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import router from './server/routes';
import { connectDatabase } from './utils/database';

const { PORT = 3001 } = process.env;

console.log(process.env.MONGO_URL);

const app = express();

app.use('/api', router);

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});

const start = async () => {
  if (process.env.MONGO_URL === undefined) {
    throw new Error('Missing env MONGO_URL');
  }
  await connectDatabase(process.env.MONGO_URL);
};

start();
