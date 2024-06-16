import express from 'express';
const app = express();

import usersRouter from './router.js';

app.use(express.json());

app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send('hello from express server');
});

export default app;
