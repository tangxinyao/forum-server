// db
import { connectDB } from './utils/db';
connectDB('mongodb://localhost/forum', { useMongoClient: true });

import * as Koa from 'koa';
const app = new Koa();

// logger
import { logger } from './middlewares';
app.use(logger());

import * as bodyParser from 'koa-bodyparser';
app.use(bodyParser({
    formLimit: '1024kb'
}));

// routes
import * as Router from 'koa-router';
const router = new Router();
app.use(router.routes()).use(router.allowedMethods());

import { userRouter } from './routes';
router.use('/users', userRouter.routes(), userRouter.allowedMethods());

app.listen(3000);
