import * as Koa from 'koa';

import { LoginState } from '../config/code';
import { IUser, User } from '../models/user';

export function register(): Koa.Middleware {
    return async (ctx, next) => {
        if (ctx.state.cert.loginState === LoginState.SUCCESS) {
            const user = ctx.state.cert.user;
            const regisetedUsers = await User.find({ openId: user.openId });
            if (regisetedUsers.length === 0) {
                const { avatarUrl, city, gender, nickName, openId, province } = user;
                User.create({ avatarUrl, city, gender, nickName, openId, province });
            }
            return next();
        }
    };
}
