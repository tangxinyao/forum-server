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
const Router = require("koa-router");
exports.userRouter = new Router();
const models_1 = require("../models");
exports.userRouter.get('/:id', (ctx) => __awaiter(this, void 0, void 0, function* () {
    ctx.body = { id: ctx.params.id, name: 'tang' };
}));
exports.userRouter.post('/', (ctx) => __awaiter(this, void 0, void 0, function* () {
    try {
        ctx.response.body = yield models_1.User.create(ctx.request.body);
    }
    catch (err) {
        ctx.response.status = 404;
    }
}));
