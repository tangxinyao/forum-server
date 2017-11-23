import * as Router from 'koa-router';
import * as request from 'request';

import { LoginState } from '../config/constant';
import { authorization } from '../middlewares/authorization';
import { register } from '../middlewares/register';
import { User } from '../models/user';

export const tokenRouter = new Router();

tokenRouter.get('/', authorization(), register(), async (ctx) => {
    if (ctx.state.cert.loginState === LoginState.SUCCESS) {
        const userInfo = ctx.state.cert.userInfo;
    }
    ctx.body = 'ok';
});
