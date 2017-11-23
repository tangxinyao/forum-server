import * as Koa from 'koa';

import { LoginState } from '../config/constant';
import { IUser, User } from '../models/user';

export function register(): Koa.Middleware {
    return async (ctx, next) => {
        if (ctx.state.cert.loginState === LoginState.SUCCESS) {
            const userInfo = ctx.state.cert.userInfo;
            const users = await User.find({ openid: userInfo.openid });
            if (users.length === 0) {
                const { avatarUrl, city, gender, nickName, openid, province } = userInfo;
                User.create({ avatarUrl, city, gender, nickName, openid, province });
            }
            return next();
        }
    };
}
