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
const log4js = require("log4js");
const log_1 = require("../config/log");
log4js.configure(log_1.logConfig);
exports.logger = () => {
    return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
        const startedTime = new Date();
        yield next();
        const elaspedTIme = new Date().getDate() - startedTime.getDate();
        console.log(`${ctx.method} ${ctx.host} ${ctx.url} - ${elaspedTIme}ms`);
    });
};
