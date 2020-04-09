import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.use('/', (req: express.Request, res: express.Response) => {
  return res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

export default app;
