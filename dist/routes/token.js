"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const Router = require("koa-router");
const code_1 = require("../config/code");
const constant_1 = require("../config/constant");
const authorization_1 = require("../middlewares/authorization");
const register_1 = require("../middlewares/register");
exports.tokenRouter = new Router();
exports.tokenRouter.get('/', authorization_1.authorization(), register_1.register(), (ctx) => __awaiter(this, void 0, void 0, function* () {
    let token;
    if (ctx.state.cert.loginState === code_1.LoginState.SUCCESS) {
        const user = ctx.state.cert.user;
        token = jwt.sign({ openId: user.openId }, constant_1.SECRET_KEY, { expiresIn: 3600 });
    }
    ctx.body = token;
}));
