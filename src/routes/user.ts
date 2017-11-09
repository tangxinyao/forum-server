import * as Router from 'koa-router';
const router = new Router();

export const userRouter = new Router();
userRouter.get('/', async (ctx) => {
    ctx.body = { id: 1, name: 'tang' };
});
