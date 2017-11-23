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
import { tokenRouter } from './routes';
import { userRouter } from './routes';

const router = new Router();
router.use('/users', userRouter.routes(), userRouter.allowedMethods());
router.use('/token', tokenRouter.routes(), tokenRouter.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
