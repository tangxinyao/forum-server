import * as Router from 'koa-router';
export const userRouter = new Router();

import { User } from '../models';

userRouter.get('/:id', async (ctx) => {
    ctx.body = { id: ctx.params.id, name: 'tang' };
});

userRouter.post('/', async (ctx) => {
    try {
        ctx.response.body = await User.create(ctx.request.body);
    } catch (err) {
        ctx.response.status = 404;
    }
});
