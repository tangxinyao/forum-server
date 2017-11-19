"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const APPID = 'wxd02f42e2970da19b';
const SECRET = 'e3a7f408b3628717d181766c0d4eb0b2';
function getSessionUrl(jsCode) {
    return `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${jsCode}&grant_type=authorization_code`;
}
exports.getSessionUrl = getSessionUrl;
