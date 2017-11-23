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
const request = require("request");
const constant_1 = require("../config/constant");
const crypto_1 = require("../utils/crypto");
const url_1 = require("../utils/url");
function getUserInfo(code, encryptedData, iv) {
    return new Promise((resolve, reject) => {
        request(url_1.getSessionUrl(code), (error, response, body) => {
            const sessionInfo = JSON.parse(body);
            if (sessionInfo.errcode) {
                reject(sessionInfo.errmsg);
                return;
            }
            const result = crypto_1.decryptData(sessionInfo['session_key'], encryptedData, iv);
            resolve(result);
        });
    });
}
function authorization() {
    return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
        const { code, encryptedData, iv } = ctx.query;
        try {
            const userInfo = yield getUserInfo(code, encryptedData, iv);
            ctx.state.cert = userInfo ? { userInfo, loginState: constant_1.LoginState.SUCCESS } : { loginState: constant_1.LoginState.FAIL_ON_DECRYPT };
        }
        catch (err) {
            ctx.state.cert = { loginState: constant_1.LoginState.FAIL_ON_WX };
        }
        return next();
    });
}
exports.authorization = authorization;
