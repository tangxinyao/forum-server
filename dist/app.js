"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// db
const db_1 = require("./utils/db");
db_1.connectDB('mongodb://localhost/forum', { useMongoClient: true });
const Koa = require("koa");
const app = new Koa();
// logger
const middlewares_1 = require("./middlewares");
app.use(middlewares_1.logger());
const bodyParser = require("koa-bodyparser");
app.use(bodyParser({
    formLimit: '1024kb'
}));
// routes
const Router = require("koa-router");
const routes_1 = require("./routes");
const routes_2 = require("./routes");
const router = new Router();
router.use('/users', routes_2.userRouter.routes(), routes_2.userRouter.allowedMethods());
router.use('/sessions', routes_1.sessionRouter.routes(), routes_1.sessionRouter.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
