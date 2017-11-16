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
const router = new Router();
app.use(router.routes()).use(router.allowedMethods());
const routes_1 = require("./routes");
router.use('/users', routes_1.userRouter.routes(), routes_1.userRouter.allowedMethods());
app.listen(3000);
