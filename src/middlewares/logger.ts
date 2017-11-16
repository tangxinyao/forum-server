import * as Koa from 'koa';
import * as log4js from 'log4js';

import { logConfig } from '../config/log';

log4js.configure(logConfig);

export const logger = (): Koa.Middleware => {
    return async (ctx, next) => {
        const startedTime = new Date();
        await next();
        const elaspedTIme = new Date().getDate() - startedTime.getDate();
        console.log(`${ctx.method} ${ctx.host} ${ctx.url} - ${elaspedTIme}ms`);
    };
};
