import * as Koa from 'koa';
import * as request from 'request';

import { LoginState } from '../config/code';
import { decryptData } from '../utils/crypto';
import { getSessionUrl } from '../utils/url';

function getUserInfo(code: string, encryptedData: string, iv: string) {
    return new Promise((resolve, reject) => {
        request(getSessionUrl(code), (error, response, body) => {
            const sessionInfo = JSON.parse(body);
            if (sessionInfo.errcode) {
                reject(sessionInfo.errmsg);
                return;
            }
            const result = decryptData(sessionInfo['session_key'], encryptedData, iv);
            resolve(result);
        });
    });
}

export function authorization(): Koa.Middleware {
    return async (ctx, next) => {
        const { code, encryptedData, iv } = ctx.query;
        try {
            const user = await getUserInfo(code, encryptedData, iv);
            ctx.state.cert = user ? { user, loginState: LoginState.SUCCESS } : { loginState: LoginState.FAIL_ON_DECRYPT };
        } catch (err) {
            ctx.state.cert = { loginState: LoginState.FAIL_ON_WX };
        }
        return next();
    };
}
