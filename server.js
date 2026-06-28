import express from 'express';
import { createRequestHandler } from '@remix-run/server-runtime';
import * as build from './build/index.js';

const app = express();

app.use(express.static('public'));

app.all('*', createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});