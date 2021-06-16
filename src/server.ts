import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import router from './server/routes';
import { connectDatabase } from './utils/database';
import { readCredentials, saveCredential } from './utils/credentials';

const { PORT = 3331 } = process.env;

console.log(process.env.MONGO_URL);

const app = express();

app.use(express.json());

app.use('/api', router);

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

// app.listen(PORT, () => {
//   console.log(`sagit listening at http://localhost:${PORT}`);
// });

if (process.env.MONGODB_URL === undefined) {
  throw new Error('Missing env MONGODB_URL');
}

app.get('/api/credentials', async (_request, response) => {
  const credentials = await readCredentials();
  response.json(credentials);
});

app.post('/api/credentials', async (request, response) => {
  await saveCredential(request.body);
  response.send('Credential saved in db');
});

connectDatabase(process.env.MONGODB_URL).then(() => {
  console.log('Database connected');
  app.listen(PORT, () => {
    console.log(`Sagit listening at http://localhost:${PORT}`);
  });
});
