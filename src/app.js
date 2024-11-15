import express, { json, urlencoded } from 'express';
import usersRouter from './routes/users.routes.js';
import authenticationRouter from './routes/authentication.routes.js';
import cors from 'cors';

export const app = express();

app.use(urlencoded({ extended: "*" }))
app.use(cors())
app.use(json())
app.use('/v1/users', usersRouter);
app.use('/v1/authentication', authenticationRouter);