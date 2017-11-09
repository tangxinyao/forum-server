import * as Koa from 'koa';
const app = new Koa();

// routes
import * as Router from 'koa-router';
const router = new Router();
app.use(router.routes()).use(router.allowedMethods());

import { userRouter } from './routes';
router.use('/user', userRouter.routes(), userRouter.allowedMethods());

// logger
import { logger } from './middlewares';
app.use(logger);

app.listen(3000);
