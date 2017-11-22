import * as Router from 'koa-router';
import * as request from 'request';

import { getCryptedData } from '../services/session';

export const sessionRouter = new Router();

sessionRouter.get('/', async (ctx) => {
    const { code, encryptedData, iv } = ctx.query;
    const data = await getCryptedData(code, encryptedData, iv);
    console.log(data);
    ctx.body = 'ok';
});
