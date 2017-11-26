import * as jwt from 'jsonwebtoken';
import * as Router from 'koa-router';
import * as request from 'request';

import { LoginState } from '../config/code';
import { SECRET_KEY } from '../config/constant';
import { authorization } from '../middlewares/authorization';
import { register } from '../middlewares/register';
import { User } from '../models/user';

export const tokenRouter = new Router();

tokenRouter.get('/', authorization(), register(), async (ctx) => {
    let token;
    if (ctx.state.cert.loginState === LoginState.SUCCESS) {
        const user = ctx.state.cert.user;
        token = jwt.sign({ openId: user.openId }, SECRET_KEY, { expiresIn: 3600 });
    }
    ctx.body = token;
});
