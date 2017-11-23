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
const constant_1 = require("../config/constant");
const user_1 = require("../models/user");
function register() {
    return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
        if (ctx.state.cert.loginState === constant_1.LoginState.SUCCESS) {
            const userInfo = ctx.state.cert.userInfo;
            const users = yield user_1.User.find({ openid: userInfo.openid });
            if (users.length === 0) {
                const { avatarUrl, city, gender, nickName, openid, province } = userInfo;
                user_1.User.create({ avatarUrl, city, gender, nickName, openid, province });
            }
            return next();
        }
    });
}
exports.register = register;
