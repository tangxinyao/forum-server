import * as Router from 'koa-router';
import * as request from 'request';

import { getSessionUrl } from '../utils/url';

export const sessionRouter = new Router();

sessionRouter.get('/', async (ctx) => {
    console.log(ctx.query.code);
    request(getSessionUrl(ctx.query.code), (err, res, body) => {
        if (err) {
            console.log(err);
            return;
        }
        const sessionInfo = JSON.parse(body);
        if (sessionInfo.errcode) {
            console.log(sessionInfo.errmsg);
            return;
        }
        console.log(sessionInfo.openid);
    });
    ctx.body = 'ok';
});
