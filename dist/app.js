"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const app = new Koa();
// routes
const Router = require("koa-router");
const router = new Router();
app.use(router.routes()).use(router.allowedMethods());
const routes_1 = require("./routes");
router.use('/user', routes_1.userRouter.routes(), routes_1.userRouter.allowedMethods());
// logger
const middlewares_1 = require("./middlewares");
app.use(middlewares_1.logger);
app.listen(3000);
