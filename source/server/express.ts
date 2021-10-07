import { config } from 'dotenv';
import path from 'path';
import express from 'express';

config();

const USERNAME: string = process.env.USERNAME!;
const PASSWORD: string = process.env.PASSWORD!;
const ACCESS_STRING: string = `${USERNAME}:${PASSWORD}`;

const APP = express();
const PORT = process.env.PORT || 5000;
const currentDirectory = path.resolve();

APP.get('/', (req: any, res: any) => {
  const authorizationHeader = req.headers.authorization || '';

  var userInput: string = Buffer.from(
    (authorizationHeader || '').split(' ')[1] || '',
    'base64',
  ).toString();

  if (userInput !== ACCESS_STRING) {
    res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="nope"' });
    res.end('HTTP Error 401 Unauthorized: Access is denied');
    return;
  }

  const indexFile: string = path.join(currentDirectory, 'build', 'index.html');
  res.sendFile(indexFile);
});

APP.get('/api', (req: any, res: any) => {
  console.log('API PLACEHOLDER');
});

APP.post('/api', (req: any, res: any) => {
  const { body } = req;
  const { post } = body;
  console.log(`API PLACEHOLDER: ${post}`);
});

APP.use(express.static(path.join(currentDirectory, 'build')));

APP.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
