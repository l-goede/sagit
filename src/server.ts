import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const { PORT = 3000 } = process.env;

const app = express();

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
app.get('*', (_req: express.Response, res: express.Request) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(PORT, () => {
  console.log(`photoplay app listening at http://localhost:${PORT}`);
});
