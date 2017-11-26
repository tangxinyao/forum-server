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
const code_1 = require("../config/code");
const user_1 = require("../models/user");
function register() {
    return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
        if (ctx.state.cert.loginState === code_1.LoginState.SUCCESS) {
            const user = ctx.state.cert.user;
            const regisetedUsers = yield user_1.User.find({ openId: user.openId });
            if (regisetedUsers.length === 0) {
                const { avatarUrl, city, gender, nickName, openId, province } = user;
                user_1.User.create({ avatarUrl, city, gender, nickName, openId, province });
            }
            return next();
        }
    });
}
exports.register = register;
