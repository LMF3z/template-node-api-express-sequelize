import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
dotenv.config();

import ConnectToDb from 'config/database';
import router from 'routes';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));
app.use('/public', express.static(path.join(__dirname, '/assets')));

app.get('/', (_req, res) => {
  return res.json({
    message: 'Hello from server ;)',
  });
});

app.get('/api', (_req, res) => {
  return res.json({
    message: 'Hello from api server ;)',
  });
});

app.use('/api', router);

app.listen(PORT, async () => {
  await ConnectToDb();
  console.log(`API Listening on port ${PORT}`);
});
