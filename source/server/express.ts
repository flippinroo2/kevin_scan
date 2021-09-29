import express from 'express';
import path from 'path';

const APP = express();
const PORT = process.env.PORT || 5000;
const currentDirectory = path.resolve();
APP.use(express.static(path.join(currentDirectory, 'build')));

APP.get('/', (req: any, res: any) => {
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

APP.listen(PORT, () => console.log(`Listening on port ${PORT}`));
