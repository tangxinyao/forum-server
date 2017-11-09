import * as Koa from 'koa';

export const logger = (): Koa.Middleware => {
    return async (ctx, next) => {
        console.log(ctx.method, ctx.header.host + ctx.url);
        await next();
    };
};
